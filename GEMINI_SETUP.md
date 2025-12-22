# 🤖 Hướng dẫn sử dụng tính năng AI Generator

## Giới thiệu

Tính năng AI Generator cho phép bạn tự động tạo câu hỏi trắc nghiệm từ tài liệu PDF/DOCX bằng Gemini AI của Google, hoặc trích xuất câu hỏi có sẵn từ file DOCX (với chữ in nghiêng là đáp án đúng).

## 🔑 Lấy Gemini API Key (MIỄN PHÍ)

1. Truy cập: https://makersuite.google.com/app/apikey
2. Đăng nhập bằng tài khoản Google
3. Click **"Create API Key"**
4. Copy API key và sử dụng trong ứng dụng

**Lưu ý:** 
- API key hoàn toàn miễn phí với giới hạn 60 requests/phút
- API key không được lưu trữ, chỉ dùng trong phiên làm việc

## 📋 Hai chế độ hoạt động

### 1. 🚀 Tạo câu hỏi mới (Generate Mode)

**Cách sử dụng:**
- Upload file PDF hoặc DOCX chứa nội dung học liệu
- AI sẽ đọc và phân tích nội dung
- Tự động tạo câu hỏi trắc nghiệm 4 đáp án
- Có thể tùy chỉnh số lượng, độ khó, chủ đề

**Tùy chọn:**
- **Số lượng câu hỏi**: 1-50 câu
- **Độ khó**: Dễ / Trung bình / Khó
- **Chủ đề**: Tập trung vào chủ đề cụ thể (tùy chọn)
- **Giải thích**: Bao gồm giải thích chi tiết cho đáp án

**Ví dụ sử dụng:**
```
1. Upload file "Chuong1_MMT.docx"
2. Chọn "Tạo câu hỏi mới"
3. Nhập API key
4. Số câu hỏi: 10
5. Độ khó: Trung bình
6. Chủ đề: "Mô hình OSI và TCP/IP"
7. Click "Tạo câu hỏi"
```

### 2. 📝 Trích xuất câu hỏi (Extract Mode)

**Dành cho file DOCX có sẵn câu hỏi trắc nghiệm**

**Cách thức:**
- Phát hiện tự động câu hỏi theo format: "Câu X: ..."
- Phát hiện đáp án A, B, C, D
- **Chữ in nghiêng được coi là đáp án đúng**
- Không cần API key

**Yêu cầu định dạng file DOCX:**

```
Câu 1: Mô hình OSI có mấy tầng?
A. 5 tầng
B. 7 tầng (in nghiêng = đáp án đúng)
C. 4 tầng
D. 10 tầng

Câu 2: TCP là giao thức thuộc tầng nào?
A. Tầng ứng dụng
B. Tầng mạng
C. Tầng giao vận (in nghiêng = đáp án đúng)
D. Tầng vật lý
```

**Lưu ý:**
- Đảm bảo chữ in nghiêng được format đúng trong Word
- Mỗi câu hỏi phải có đủ 4 đáp án A, B, C, D
- Chỉ một đáp án được in nghiêng

## 🎯 Tips sử dụng hiệu quả

### Cho Generate Mode:

1. **Chuẩn bị file tốt:**
   - Nội dung rõ ràng, có cấu trúc
   - Tránh quá nhiều hình ảnh, bảng biểu phức tạp
   - File DOCX cho kết quả tốt hơn PDF

2. **Tối ưu số lượng câu hỏi:**
   - File ngắn (< 10 trang): 5-10 câu
   - File trung bình (10-30 trang): 10-20 câu
   - File dài (> 30 trang): 20-40 câu

3. **Sử dụng chủ đề:**
   - Giúp AI tập trung vào nội dung cụ thể
   - VD: "TCP/IP", "Thuật toán", "Lịch sử Việt Nam"

4. **Chunking tự động:**
   - Với file lớn, hệ thống tự động chia nhỏ
   - Có delay giữa các request để tránh rate limit

### Cho Extract Mode:

1. **Format đúng trong Word:**
   - Chọn đáp án đúng → Ctrl+I (hoặc nút Italic)
   - Kiểm tra preview trước khi upload

2. **Kiểm tra lỗi:**
   - Đảm bảo mỗi câu có 4 đáp án
   - Chỉ một đáp án in nghiêng
   - Format nhất quán trong toàn file

## ⚙️ Cài đặt nâng cao

### Chunk Size (mặc định: 4000)

Kích thước mỗi phần văn bản được gửi cho AI:
- **Nhỏ hơn (2000-3000)**: Xử lý nhanh, nhiều request
- **Lớn hơn (5000-8000)**: Ít request, ngữ cảnh tốt hơn

### API Rate Limiting

Gemini free tier: **60 requests/phút**

Nếu gặp lỗi rate limit:
- Giảm số lượng câu hỏi
- Tăng chunk size
- Đợi 1 phút trước khi thử lại

## 🐛 Xử lý lỗi thường gặp

### "Không thể tải file câu hỏi"
- **Nguyên nhân**: API key sai hoặc hết hạn
- **Giải pháp**: Tạo API key mới

### "Không tìm thấy câu hỏi trong file"
- **Nguyên nhân**: Format không đúng hoặc không có chữ in nghiêng
- **Giải pháp**: Kiểm tra lại format, thử Generate mode thay vì Extract

### "Rate limit exceeded"
- **Nguyên nhân**: Quá 60 requests/phút
- **Giải pháp**: Đợi 1 phút, giảm số câu hỏi

### "File quá lớn"
- **Nguyên nhân**: File > 10MB
- **Giải pháp**: Chia nhỏ file hoặc trích xuất text vào file mới

## 💡 Ví dụ thực tế

### Ví dụ 1: Tạo câu hỏi từ giáo trình

```
Input: Giáo trình Mạng Máy Tính - Chương 3 (15 trang)

Settings:
- Mode: Generate
- Số câu: 15
- Độ khó: Trung bình
- Chủ đề: "Tầng mạng và định tuyến"
- Giải thích: Có

Output: 15 câu hỏi trắc nghiệm với giải thích chi tiết
Time: ~2-3 phút
```

### Ví dụ 2: Trích xuất từ đề thi có sẵn

```
Input: File đề thi.docx (50 câu, đáp án in nghiêng)

Settings:
- Mode: Extract

Output: 50 câu hỏi được detect tự động
Time: ~5 giây
```

## 📊 Định dạng output

Câu hỏi được tạo theo format chuẩn:

```
Câu 1: [Nội dung câu hỏi]
A. [Đáp án A]
B. [Đáp án B]
C. [Đáp án C]
D. [Đáp án D]
• C. [Đáp án đúng];
^[Giải thích chi tiết về tại sao C là đúng]`
```

## 🔒 Bảo mật & Quyền riêng tư

- ✅ API key không được lưu trữ
- ✅ File được xử lý local trong browser
- ✅ Chỉ text được gửi lên Gemini API
- ✅ Không lưu lịch sử câu hỏi trên server

## 📞 Hỗ trợ

Nếu gặp vấn đề:
1. Kiểm tra console (F12) để xem lỗi chi tiết
2. Thử với file nhỏ hơn trước
3. Kiểm tra API key còn hoạt động
4. Đọc lại hướng dẫn format file

---

**Chúc bạn tạo được nhiều câu hỏi chất lượng! 🎓✨**

