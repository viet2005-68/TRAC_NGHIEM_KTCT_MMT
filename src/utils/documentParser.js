// Document parsing utilities for PDF and DOCX files

/**
 * Parse PDF file and extract text from all pages
 * Uses pdfjs-dist for browser-based PDF parsing
 */
export async function parsePDF(file, startPage = 1, endPage = null) {
    try {
        // Dynamically import pdfjs-dist
        const pdfjsLib = await import('pdfjs-dist');

        // Set worker source to local file in public folder
        // This avoids CDN issues and works offline
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

        const arrayBuffer = await file.arrayBuffer();

        // Load PDF document
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
        const pdf = await loadingTask.promise;

        const totalPages = pdf.numPages;
        const actualEndPage = endPage && endPage <= totalPages ? endPage : totalPages;
        const actualStartPage = Math.max(1, Math.min(startPage, totalPages));

        console.log(`📄 PDF has ${totalPages} pages. Extracting pages ${actualStartPage}-${actualEndPage}...`);

        let fullText = '';

        // Extract text from each page
        for (let pageNum = actualStartPage; pageNum <= actualEndPage; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const textContent = await page.getTextContent();

            // Combine text items
            const pageText = textContent.items
                .map(item => item.str)
                .join(' ');

            fullText += `\n\n--- Trang ${pageNum} ---\n${pageText}`;

            console.log(`✓ Extracted page ${pageNum}/${actualEndPage}`);
        }

        return {
            text: fullText.trim(),
            totalPages,
            extractedPages: actualEndPage - actualStartPage + 1,
            startPage: actualStartPage,
            endPage: actualEndPage
        };
    } catch (error) {
        console.error('Error parsing PDF:', error);
        throw new Error(`Không thể đọc PDF: ${error.message}`);
    }
}

/**
 * Parse DOCX file and extract text with formatting
 * Detect italic or bold text as potential answers
 */
export async function parseDOCX(file) {
    try {
        const arrayBuffer = await file.arrayBuffer();

        // mammoth.js works in browser - use dynamic import
        // Vite will handle the import correctly with optimizeDeps
        const mammoth = await import('mammoth');

        // Extract with styling information
        // mammoth exports convertToHtml directly
        const result = await mammoth.convertToHtml({ arrayBuffer });
        const html = result.value;

        // Parse HTML to detect italic and bold text
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Extract text with formatting markers
        const textWithMarkers = [];
        const walker = document.createTreeWalker(
            doc.body,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
            null,
            false
        );

        let node;
        while ((node = walker.nextNode())) {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                const parent = node.parentElement;

                // Check for italic
                const isItalic = parent && (
                    parent.tagName === 'EM' ||
                    parent.tagName === 'I' ||
                    parent.style.fontStyle === 'italic'
                );

                // Check for bold
                const isBold = parent && (
                    parent.tagName === 'STRONG' ||
                    parent.tagName === 'B' ||
                    parent.style.fontWeight === 'bold' ||
                    parseInt(parent.style.fontWeight) >= 600
                );

                textWithMarkers.push({
                    text: node.textContent.trim(),
                    isItalic: isItalic,
                    isBold: isBold,
                    isFormatted: isItalic || isBold
                });
            }
        }

        return {
            html,
            textWithMarkers,
            plainText: doc.body.textContent
        };
    } catch (error) {
        console.error('Error parsing DOCX:', error);
        throw error;
    }
}

/**
 * Detect if a DOCX already contains multiple choice questions
 * and extract them with italic OR bold text as answers
 */
export function extractQuestionsFromDOCX(textWithMarkers) {
    const questions = [];
    let currentQuestion = null;
    let currentOptions = [];
    let formattedAnswer = null; // Can be from italic or bold

    const text = textWithMarkers.map(t => t.text).join('\n');
    const lines = text.split('\n');

    lines.forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed) return;

        // Detect question pattern (Câu X: or Question X:)
        const questionMatch = trimmed.match(/^(?:Câu|Question)\s+\d+[:.]\s*(.+)$/i);
        if (questionMatch) {
            // Save previous question
            if (currentQuestion && currentOptions.length > 0) {
                questions.push({
                    text: currentQuestion,
                    options: currentOptions,
                    formattedAnswer: formattedAnswer
                });
            }

            currentQuestion = questionMatch[1].trim();
            currentOptions = [];
            formattedAnswer = null;
            return;
        }

        // Detect option pattern (A. B. C. D.)
        const optionMatch = trimmed.match(/^([A-D])[.)]\s*(.+)$/i);
        if (optionMatch) {
            const letter = optionMatch[1].toUpperCase();
            const optionText = optionMatch[2].trim();

            // Check if this option has formatting (italic OR bold)
            const markerIndex = textWithMarkers.findIndex(
                m => m.text.includes(optionText) && (m.isItalic || m.isBold || m.isFormatted)
            );

            if (markerIndex !== -1) {
                formattedAnswer = letter;
                console.log(`✓ Found formatted answer: ${letter}. ${optionText} (${textWithMarkers[markerIndex].isBold ? 'bold' : 'italic'})`);
            }

            currentOptions.push({
                letter: letter,
                text: optionText
            });
        }
    });

    // Save last question
    if (currentQuestion && currentOptions.length > 0) {
        questions.push({
            text: currentQuestion,
            options: currentOptions,
            formattedAnswer: formattedAnswer
        });
    }

    return questions;
}

/**
 * LEANN-inspired intelligent chunking with boundary detection
 * Respects natural text boundaries (paragraphs, sentences) for better context
 */
export function chunkText(text, chunkSize = 4000, overlap = 200) {
    const chunks = [];

    // First, split into paragraphs (natural boundaries)
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0);

    let currentChunk = '';
    let currentSize = 0;

    for (let i = 0; i < paragraphs.length; i++) {
        const paragraph = paragraphs[i].trim();
        const paragraphSize = paragraph.length;

        // If single paragraph is larger than chunk size, split by sentences
        if (paragraphSize > chunkSize) {
            // Save current chunk if exists
            if (currentChunk) {
                chunks.push(currentChunk.trim());
                currentChunk = '';
                currentSize = 0;
            }

            // Split large paragraph by sentences
            const sentences = splitIntoSentences(paragraph);
            let sentenceChunk = '';

            for (const sentence of sentences) {
                if ((sentenceChunk + sentence).length > chunkSize) {
                    if (sentenceChunk) {
                        chunks.push(sentenceChunk.trim());
                    }
                    // If single sentence is too long, force split
                    if (sentence.length > chunkSize) {
                        const forcedChunks = forceSplitText(sentence, chunkSize, overlap);
                        chunks.push(...forcedChunks);
                        sentenceChunk = '';
                    } else {
                        sentenceChunk = sentence;
                    }
                } else {
                    sentenceChunk += (sentenceChunk ? ' ' : '') + sentence;
                }
            }

            if (sentenceChunk) {
                currentChunk = sentenceChunk;
                currentSize = sentenceChunk.length;
            }
            continue;
        }

        // Check if adding this paragraph exceeds chunk size
        if (currentSize + paragraphSize + 2 > chunkSize) {
            // Save current chunk with overlap
            if (currentChunk) {
                chunks.push(currentChunk.trim());

                // Add overlap: take last sentences from current chunk
                const overlapText = getOverlapText(currentChunk, overlap);
                currentChunk = overlapText + '\n\n' + paragraph;
                currentSize = currentChunk.length;
            } else {
                currentChunk = paragraph;
                currentSize = paragraphSize;
            }
        } else {
            currentChunk += (currentChunk ? '\n\n' : '') + paragraph;
            currentSize += paragraphSize + 2;
        }
    }

    // Add final chunk
    if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
    }

    return chunks;
}

/**
 * Split text into sentences (supports Vietnamese and English)
 */
function splitIntoSentences(text) {
    // Match sentence endings: . ! ? followed by space or end
    // Also handles Vietnamese sentence structure
    const sentencePattern = /[.!?]+[\s\n]+|[.!?]+$/g;
    const sentences = [];
    let lastIndex = 0;
    let match;

    while ((match = sentencePattern.exec(text)) !== null) {
        const sentence = text.slice(lastIndex, match.index + match[0].length).trim();
        if (sentence) {
            sentences.push(sentence);
        }
        lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    const remaining = text.slice(lastIndex).trim();
    if (remaining) {
        sentences.push(remaining);
    }

    return sentences.length > 0 ? sentences : [text];
}

/**
 * Get overlap text from the end of a chunk
 */
function getOverlapText(text, overlapSize) {
    if (text.length <= overlapSize) {
        return text;
    }

    // Try to get complete sentences for overlap
    const overlapPart = text.slice(-overlapSize);
    const sentences = splitIntoSentences(overlapPart);

    // Return last 1-2 complete sentences
    if (sentences.length > 1) {
        return sentences.slice(-2).join(' ');
    }

    return overlapPart;
}

/**
 * Force split text when natural boundaries don't work
 * Used as fallback for very long continuous text
 */
function forceSplitText(text, chunkSize, overlap) {
    const chunks = [];
    let start = 0;

    while (start < text.length) {
        const end = Math.min(start + chunkSize, text.length);
        const chunk = text.slice(start, end);
        chunks.push(chunk);
        start = end - overlap;

        if (end === text.length) break;
    }

    return chunks;
}

/**
 * Advanced chunking with semantic boundaries and metadata
 * LEANN-inspired: preserves document structure and context
 */
export function smartChunk(text, options = {}) {
    const {
        maxChunkSize = 4000,
        overlap = 200,
        preserveStructure = true
    } = options;

    if (!preserveStructure) {
        return chunkText(text, maxChunkSize, overlap);
    }

    const chunks = [];
    const sections = detectSections(text);

    for (const section of sections) {
        if (section.content.length <= maxChunkSize) {
            chunks.push({
                text: section.content,
                metadata: {
                    type: section.type,
                    title: section.title,
                    size: section.content.length
                }
            });
        } else {
            // Split large section while preserving context
            const subChunks = chunkText(section.content, maxChunkSize, overlap);
            subChunks.forEach((chunk, index) => {
                chunks.push({
                    text: chunk,
                    metadata: {
                        type: section.type,
                        title: section.title,
                        part: index + 1,
                        totalParts: subChunks.length,
                        size: chunk.length
                    }
                });
            });
        }
    }

    return chunks;
}

/**
 * Detect sections in document (headers, paragraphs, lists)
 */
function detectSections(text) {
    const sections = [];
    const lines = text.split('\n');
    let currentSection = { type: 'paragraph', title: '', content: '', startLine: 0 };

    lines.forEach((line, index) => {
        const trimmed = line.trim();

        // Detect headers (lines with special patterns)
        const headerMatch = trimmed.match(/^#{1,6}\s+(.+)$/) || // Markdown headers
            trimmed.match(/^([A-Z][^.!?]*):?\s*$/) || // Capital case headers
            trimmed.match(/^(CHƯƠNG|PHẦN|MỤC)\s+[IVX\d]+/i); // Vietnamese sections

        if (headerMatch) {
            // Save previous section
            if (currentSection.content.trim()) {
                sections.push({ ...currentSection });
            }

            // Start new section
            currentSection = {
                type: 'section',
                title: headerMatch[1] || trimmed,
                content: line + '\n',
                startLine: index
            };
        } else {
            currentSection.content += line + '\n';
        }
    });

    // Add final section
    if (currentSection.content.trim()) {
        sections.push(currentSection);
    }

    return sections.length > 0 ? sections : [{ type: 'document', title: '', content: text, startLine: 0 }];
}

