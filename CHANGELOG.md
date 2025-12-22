# 📋 Changelog

## [Version 2.1.0] - 2024-12-22

### 🎉 Major Updates

#### 🔧 API Fixes
- **Fixed Gemini API initialization** - Now uses `gemini-1.5-flash` model (default on AI Studio)
- Added proper error handling and configuration
- Better API key validation

#### ✨ Enhanced DOCX Extraction
- **Bold text support** - Now detects BOTH italic AND bold text as correct answers
- More flexible document formatting options
- Improved formatting detection algorithm

#### 🧠 LEANN-Inspired Smart Chunking
- **Paragraph-aware chunking** - Respects natural text boundaries
- **Sentence-level splitting** - Maintains complete sentences
- **Intelligent overlap** - Overlaps at sentence boundaries, not mid-text
- **Section detection** - Detects headers and document structure
- **Smart question distribution** - Distributes questions proportionally by chunk size
- **Text complexity analysis** - Adjusts chunking strategy based on content type

#### 💰 Token Optimization
- Progressive rate limiting with intelligent delays
- Automatic retry with exponential backoff
- Better error recovery
- Reduced token waste through smart boundaries

### 📝 Documentation Updates
- Updated example_docx_format.md with bold text examples
- Enhanced GEMINI_SETUP.md with new model info
- Added LEANN chunking strategy documentation

---

## [Version 2.0.0] - 2024-12-22

### 🎉 Tính năng mới: AI Question Generator

#### ✨ Tính năng chính

1. **Tạo câu hỏi tự động với Gemini AI**
   - Upload file PDF/DOCX
   - AI đọc và phân tích nội dung
   - Tự động tạo câu hỏi trắc nghiệm 4 đáp án
   - Hỗ trợ tùy chỉnh số lượng, độ khó, chủ đề
   - Có thể bao gồm giải thích chi tiết

2. **Trích xuất câu hỏi từ file có sẵn**
   - Phát hiện tự động câu hỏi trong file DOCX
   - Nhận diện chữ in nghiêng làm đáp án đúng
   - Không cần API key
   - Xử lý nhanh chóng

#### 🛠️ Thư viện mới

- `@google/generative-ai` - Tích hợp Gemini AI
- `mammoth` - Parse DOCX với format detection
- `pdf-parse` - Chuẩn bị cho PDF support

#### 📝 Components mới

- `QuestionGenerator.jsx` - UI chính cho generator
- `documentParser.js` - Xử lý file PDF/DOCX
- `geminiService.js` - API integration với Gemini

#### 🎨 UI/UX Improvements

- Thêm divider "HOẶC" giữa chế độ file và AI
- Button AI Generator với gradient đẹp mắt
- Badge "Mới" với animation pulse
- Loading states với spinner
- Error handling với thông báo rõ ràng
- Progress indicator cho các bước xử lý

#### 📖 Documentation

- `GEMINI_SETUP.md` - Hướng dẫn chi tiết về AI Generator
- `example_docx_format.md` - Template và hướng dẫn format file
- Cập nhật README với tính năng mới

### 🔧 Technical Details

#### Auto-chunking

- Tự động chia văn bản dài thành các chunk nhỏ
- Overlap 200 ký tự để giữ ngữ cảnh
- Delay giữa các request để tránh rate limit

#### Format Detection

- Phát hiện italic text trong DOCX
- Parse HTML từ mammoth
- TreeWalker để traverse DOM
- Nhận diện format: `<em>`, `<i>`, hoặc `style="font-style: italic"`

#### Error Handling

- Validation API key
- Check file type và size
- Parse error recovery
- Rate limit handling
- User-friendly error messages

### 🎯 Use Cases

#### Use Case 1: Giảng viên tạo đề thi
```
1. Upload giáo trình chapter (DOCX)
2. Chọn "Tạo câu hỏi mới"
3. Thiết lập: 20 câu, độ khó trung bình
4. AI tạo 20 câu trong 2-3 phút
5. Review và sử dụng trong bài kiểm tra
```

#### Use Case 2: Sinh viên ôn tập
```
1. Upload slide bài giảng
2. Chọn "Tạo câu hỏi mới"
3. Thiết lập: 10 câu, chủ đề cụ thể
4. Làm bài trắc nghiệm ngay
5. Xem giải thích để hiểu sâu hơn
```

#### Use Case 3: Chuyển đổi đề cũ
```
1. Upload file đề thi Word cũ (có đáp án in nghiêng)
2. Chọn "Trích xuất câu hỏi"
3. Hệ thống tự động detect câu hỏi
4. Import vào app để làm bài
```

### 📊 Performance

- **DOCX parsing**: < 1 giây
- **AI generation**: 1-3 phút (tùy số lượng)
- **Extract mode**: < 5 giây
- **Chunking overhead**: +10-20% thời gian

### 🔒 Security & Privacy

- API key không lưu trữ server
- File xử lý local trong browser
- Chỉ text gửi lên Gemini API
- Không track user data

---

## [Version 1.0.0] - 2024-12-21

### ✨ Phiên bản đầu tiên

- Quiz system cơ bản
- File selector với 3 môn học
- Chapter navigation
- Question display với feedback
- Results screen với statistics
- Review mode
- Modern UI với gradient
- Dark/Light mode support
- Responsive design

---

## Roadmap

### Upcoming Features

- [ ] PDF parsing với page selection (đang phát triển)
- [ ] Export câu hỏi ra JSON/TXT
- [ ] Lưu lịch sử làm bài
- [ ] Practice mode (không giới hạn thời gian)
- [ ] Timed quiz mode (có đếm giờ)
- [ ] Multiplayer quiz (thi đấu với bạn bè)
- [ ] Question bank management
- [ ] Custom theme colors
- [ ] Print-friendly view

### Future Improvements

- [ ] Offline support (PWA)
- [ ] Mobile app (React Native)
- [ ] Backend API cho lưu trữ
- [ ] User authentication
- [ ] Cloud sync
- [ ] Advanced analytics
- [ ] AI-powered study recommendations

