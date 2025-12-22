# 🚀 Quick Start: AI Question Generator

## Bắt đầu trong 5 phút!

### Bước 1: Lấy API Key (2 phút)

1. Mở: https://makersuite.google.com/app/apikey
2. Đăng nhập Google
3. Click **"Create API Key"**
4. Copy key (dạng: `AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXX`)

### Bước 2: Chuẩn bị file (1 phút)

#### Option A: Tạo câu hỏi mới
- Chuẩn bị file DOCX chứa nội dung học liệu
- File PDF cũng OK (đang phát triển)
- Nội dung rõ ràng, có cấu trúc tốt

#### Option B: Trích xuất câu hỏi có sẵn
- File DOCX có câu hỏi trắc nghiệm
- Đáp án đúng in nghiêng (Ctrl+I)
- Format: "Câu X:", rồi A. B. C. D.

### Bước 3: Tạo câu hỏi (2 phút)

1. Mở app: http://localhost:5174/
2. Click **"Tạo câu hỏi tự động với AI"**
3. Nhập API key vào ô đầu tiên
4. Chọn chế độ:
   - **Tạo mới**: AI đọc nội dung và tạo câu hỏi
   - **Trích xuất**: Phát hiện câu hỏi có sẵn
5. Upload file
6. Điều chỉnh options (nếu tạo mới):
   - Số câu: 10
   - Độ khó: Trung bình
   - Chủ đề: (tùy chọn)
7. Click **"Tạo câu hỏi"** hoặc **"Trích xuất"**
8. Đợi xử lý (1-3 phút)
9. Bắt đầu làm bài!

## 📝 Ví dụ cụ thể

### Ví dụ 1: Từ giáo trình

**File**: `Chuong3_MangMayTinh.docx` (10 trang)

**Settings**:
```
API Key: AIzaSy... (đã copy)
Mode: Tạo câu hỏi mới
File: Chuong3_MangMayTinh.docx
Số câu: 15
Độ khó: Trung bình
Chủ đề: Mô hình OSI và TCP/IP
Giải thích: ✓ Có
```

**Click**: 🚀 Tạo câu hỏi

**Output**: 15 câu hỏi với giải thích sau ~2 phút

### Ví dụ 2: Từ đề thi có sẵn

**File**: `DeThi_KTCT.docx` (30 câu, đáp án in nghiêng)

**Settings**:
```
Mode: Trích xuất câu hỏi
File: DeThi_KTCT.docx
```

**Click**: 📥 Trích xuất

**Output**: 30 câu được detect sau ~5 giây

## ⚡ Tips nhanh

### Để có kết quả tốt:

1. **File tốt**:
   - Nội dung rõ ràng
   - Không quá nhiều hình ảnh
   - Văn bản có cấu trúc

2. **Số lượng hợp lý**:
   - File 5 trang → 5-10 câu
   - File 15 trang → 10-20 câu
   - File 30+ trang → 20-40 câu

3. **Chủ đề cụ thể**:
   - "TCP/IP" thay vì "Mạng"
   - "Thuật toán sắp xếp" thay vì "Lập trình"

### Nếu gặp lỗi:

- **"API key không hợp lệ"**: Tạo key mới
- **"Rate limit"**: Đợi 1 phút
- **"Không tìm thấy câu hỏi"**: Kiểm tra format file

## 🎯 What's Next?

Sau khi có câu hỏi:
1. ✅ Chọn chương
2. ✅ Làm bài trắc nghiệm
3. ✅ Xem kết quả
4. ✅ Review đáp án với giải thích

---

## 📚 Đọc thêm

- Chi tiết: [GEMINI_SETUP.md](GEMINI_SETUP.md)
- Format file: [example_docx_format.md](example_docx_format.md)
- Changelog: [CHANGELOG.md](CHANGELOG.md)

---

**Enjoy learning with AI! 🎓✨**

