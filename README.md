# 📚 Hệ thống Trắc nghiệm Online

Ứng dụng web trắc nghiệm được xây dựng với React và Vite, cho phép người dùng luyện tập và kiểm tra kiến thức qua các bộ câu hỏi trắc nghiệm.

## ✨ Tính năng

### Tính năng cơ bản
- 📖 **Nhiều môn học**: Hỗ trợ nhiều bộ câu hỏi khác nhau (Kinh tế Chính trị, Nguyên lý Marketing, Mạng Máy Tính)
- 📑 **Phân chia theo chương**: Luyện tập từng chương để tập trung vào kiến thức cụ thể
- 🎯 **Kiểm tra tức thì**: Hiển thị đáp án đúng/sai ngay sau khi chọn
- 📊 **Thống kê chi tiết**: Xem kết quả, tỷ lệ đúng/sai, và xem lại đáp án
- 🎨 **Giao diện hiện đại**: Thiết kế đẹp mắt với gradient và animation
- 📱 **Responsive**: Hoạt động tốt trên mọi thiết bị
- 🌙 **Dark/Light mode**: Tự động thích ứng theo theme hệ thống

### 🤖 Tính năng AI Generator (MỚI!)
- ✨ **Tạo câu hỏi tự động**: Sử dụng Gemini AI để tạo câu hỏi từ PDF/DOCX
- 📝 **Trích xuất câu hỏi**: Phát hiện câu hỏi có sẵn trong file (chữ in nghiêng = đáp án)
- 🎛️ **Tùy chỉnh linh hoạt**: Chọn số lượng, độ khó, chủ đề
- 📄 **Hỗ trợ file lớn**: Auto-chunking cho tài liệu dài
- 💡 **Có giải thích**: AI tạo giải thích chi tiết cho từng câu

👉 **[Xem hướng dẫn chi tiết về AI Generator](GEMINI_SETUP.md)**

## 🚀 Cài đặt

### Yêu cầu

- Node.js (phiên bản 14 trở lên)
- npm hoặc yarn

### Các bước cài đặt

1. Clone repository hoặc tải mã nguồn về

2. Cài đặt dependencies:
```bash
npm install
```

3. **(Khuyến nghị)** Cấu hình Gemini API Key qua .env:
```bash
# Copy file mẫu
copy env.example.txt .env.local

# Sửa file .env.local và thay your_api_key_here bằng key thật
```
📖 **[Hướng dẫn chi tiết cấu hình .env →](ENV_SETUP.md)**

Lấy API key miễn phí tại: https://aistudio.google.com/apikey

4. Chạy ứng dụng ở môi trường development:
```bash
npm run dev
```

5. Mở trình duyệt và truy cập: `http://localhost:5173` (hoặc port khác nếu 5173 đã được sử dụng)

## 🏗️ Build cho Production

```bash
npm run build
```

Build output sẽ được tạo trong thư mục `dist/`

Để xem preview của build:
```bash
npm run preview
```

## 📂 Cấu trúc thư mục

```
trac-nghiem-web/
├── src/
│   ├── assets/           # File câu hỏi (.txt)
│   │   ├── ktct.txt     # Kinh tế Chính trị
│   │   ├── nlmkt.txt    # Nguyên lý Marketing
│   │   └── mmt.txt      # Mạng Máy Tính
│   ├── components/       # React components
│   │   ├── FileSelector.jsx
│   │   ├── Quiz.jsx
│   │   ├── Navigation.jsx
│   │   ├── Results.jsx
│   │   └── Review.jsx
│   ├── App.jsx          # Component chính
│   ├── App.css          # Styles chính
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Dependencies
```

## 📝 Định dạng file câu hỏi

Các file câu hỏi trong thư mục `src/assets/` phải tuân theo định dạng sau:

```
CHƯƠNG 1
Câu 1: Nội dung câu hỏi?
A. Đáp án A
B. Đáp án B
C. Đáp án C
D. Đáp án D
•	A. Đáp án A;

Câu 2: Câu hỏi tiếp theo?
A. Đáp án A
B. Đáp án B
C. Đáp án C
D. Đáp án D
•	B. Đáp án B;
```

**Lưu ý:**
- Mỗi chương bắt đầu bằng `CHƯƠNG X`
- Câu hỏi bắt đầu bằng `Câu X:`
- Các đáp án là A, B, C, D theo sau dấu chấm
- Đáp án đúng được đánh dấu bằng `•` và kết thúc bằng dấu `;`

## 🎮 Hướng dẫn sử dụng

1. **Chọn môn học**: Chọn bộ câu hỏi bạn muốn luyện tập
2. **Chọn chương**: Chọn chương cụ thể để bắt đầu làm bài
3. **Trả lời câu hỏi**: Click vào đáp án bạn cho là đúng
4. **Xem phản hồi**: Hệ thống sẽ hiển thị đúng/sai ngay lập tức
5. **Điều hướng**: Sử dụng nút "Câu trước" và "Câu tiếp" để di chuyển
6. **Nộp bài**: Click "Nộp bài" khi hoàn thành
7. **Xem kết quả**: Xem điểm số và thống kê chi tiết
8. **Xem lại**: Xem lại tất cả câu hỏi với đáp án đúng

## 🛠️ Công nghệ sử dụng

### Core Technologies
- **React 19**: UI framework
- **Vite 7**: Build tool và dev server
- **CSS3**: Styling với gradient và animation
- **ESLint**: Code linting

### AI & Document Processing
- **@google/generative-ai**: Gemini AI integration
- **mammoth**: DOCX parsing và formatting detection
- **pdf-parse**: PDF text extraction (planned)

## 📄 License

MIT License - Tự do sử dụng và chỉnh sửa theo nhu cầu.

## 👥 Đóng góp

Mọi đóng góp đều được hoan nghênh! Hãy tạo pull request hoặc mở issue để thảo luận về các thay đổi bạn muốn thực hiện.

## 📧 Liên hệ

Nếu có bất kỳ câu hỏi nào, vui lòng tạo issue trên repository.

---

**Chúc bạn học tập hiệu quả! 🎓**
