import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const source = join(rootDir, 'node_modules', 'pdfjs-dist', 'build', 'pdf.worker.min.mjs');
const dest = join(rootDir, 'public', 'pdf.worker.min.mjs');
const publicDir = join(rootDir, 'public');

try {
  // Ensure public directory exists
  if (!existsSync(publicDir)) {
    mkdirSync(publicDir, { recursive: true });
  }
  
  // Copy worker file
  if (existsSync(source)) {
    copyFileSync(source, dest);
    console.log('✅ PDF.js worker copied to public folder');
  } else {
    console.warn('⚠️  PDF.js worker source not found. Run npm install first.');
  }
} catch (error) {
  console.error('❌ Error copying PDF.js worker:', error.message);
  process.exit(1);
}

