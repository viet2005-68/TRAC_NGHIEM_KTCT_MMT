# 🔐 Hướng dẫn cấu hình API Key qua .env

## Tại sao nên dùng .env?

✅ **Không cần nhập lại** API key mỗi lần sử dụng  
✅ **Bảo mật hơn** - API key không bị commit lên Git  
✅ **Tiện lợi** - Cấu hình một lần, dùng mãi mãi  
✅ **Professional** - Cách làm chuẩn trong các dự án thực tế

---

## 🚀 Cách cài đặt (3 bước)

### Bước 1: Lấy API Key

1. Truy cập: https://aistudio.google.com/apikey
2. Đăng nhập với Google account
3. Click **"Create API Key"** hoặc **"Get API Key"**
4. Copy API key (dạng: `AIzaSyXXXXXXXXXXXXXXXXXX`)

### Bước 2: Tạo file .env.local

**Cách 1: Copy từ file mẫu**

Trên Windows (PowerShell):
```powershell
copy env.example.txt .env.local
```

Trên Windows (Command Prompt):
```cmd
copy env.example.txt .env.local
```

Trên Mac/Linux:
```bash
cp env.example.txt .env.local
```

**Cách 2: Tạo file mới**

Tạo file `.env.local` trong thư mục gốc của project với nội dung:

```env
VITE_GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXX
```

### Bước 3: Thay API Key

Mở file `.env.local` và thay `your_api_key_here` bằng API key thật của bạn:

```env
# Trước
VITE_GEMINI_API_KEY=your_api_key_here

# Sau
VITE_GEMINI_API_KEY=AIzaSyB1a2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q
```

### Bước 4: Restart server

```bash
# Dừng server (Ctrl+C)
# Chạy lại
npm run dev
```

---

## ✅ Kiểm tra xem đã hoạt động chưa

Khi vào trang **"Tạo câu hỏi tự động với AI"**, bạn sẽ thấy:

**Nếu thành công:**
```
✅ API Key đã được cấu hình từ file .env.local
[Đổi key khác]
```

**Nếu chưa có:**
```
[Ô nhập API Key]
💡 Tip: Tạo file .env.local với VITE_GEMINI_API_KEY=your_key...
```

---

## 🔧 Troubleshooting

### Vấn đề 1: File .env.local không được đọc

**Nguyên nhân:** Server chưa được restart

**Giải pháp:**
```bash
# Ctrl+C để dừng server
npm run dev  # Chạy lại
```

### Vấn đề 2: Vẫn hiện "Nhập API Key"

**Check list:**
- [ ] File tên đúng là `.env.local` (có dấu chấm ở đầu)
- [ ] File ở đúng thư mục gốc project (cùng cấp với package.json)
- [ ] Biến tên đúng là `VITE_GEMINI_API_KEY` (viết hoa, có VITE_)
- [ ] Đã restart server
- [ ] API key không có dấu ngoặc kép

**Ví dụ đúng:**
```env
VITE_GEMINI_API_KEY=AIzaSyABC123
```

**Ví dụ SAI:**
```env
# ❌ SAI: Thiếu VITE_
GEMINI_API_KEY=AIzaSyABC123

# ❌ SAI: Có dấu ngoặc kép
VITE_GEMINI_API_KEY="AIzaSyABC123"

# ❌ SAI: Có dấu cách
VITE_GEMINI_API_KEY = AIzaSyABC123
```

### Vấn đề 3: API key không hợp lệ

**Nguyên nhân:** 
- Copy không đầy đủ
- API key đã bị revoke/xóa
- Restrictions không đúng

**Giải pháp:**
1. Vào AI Studio tạo API key mới
2. Đảm bảo copy đầy đủ (thường bắt đầu bằng `AIzaSy`)
3. Kiểm tra API key restrictions (nên để None/unrestricted cho development)

---

## 🔐 Bảo mật

### ✅ An toàn
- File `.env.local` đã được thêm vào `.gitignore`
- API key không bao giờ bị commit lên Git
- Chỉ chạy trên máy local

### ⚠️ LƯU Ý QUAN TRỌNG

**KHÔNG BAO GIỜ:**
- ❌ Commit file `.env.local` lên Git
- ❌ Share API key công khai
- ❌ Để API key trong code
- ❌ Screenshot/gửi API key cho người khác

**NÊN:**
- ✅ Dùng file `.env.local` cho local development
- ✅ Share file `env.example.txt` (không có key thật)
- ✅ Mỗi người dùng API key riêng
- ✅ Revoke key cũ nếu bị lộ

---

## 📚 Tham khảo

### Cấu trúc thư mục

```
Trac_nghiem_web/
├── .env.local          ← File bạn tạo (có API key thật)
├── env.example.txt     ← File mẫu (không có key thật)
├── .gitignore          ← Đã config ignore .env.local
├── package.json
├── src/
└── ...
```

### Biến môi trường trong Vite

Vite yêu cầu biến environment phải:
- Bắt đầu bằng `VITE_` để expose ra client
- Được đặt trong file `.env`, `.env.local`, `.env.[mode]`
- Truy cập qua `import.meta.env.VITE_*`

**Ví dụ:**
```javascript
// ✅ Đúng
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// ❌ Sai - không có VITE_
const apiKey = import.meta.env.GEMINI_API_KEY;

// ❌ Sai - dùng process.env (cho Node.js)
const apiKey = process.env.VITE_GEMINI_API_KEY;
```

---

## 🎯 FAQ

**Q: Có cần .env hay .env.local?**  
A: Dùng `.env.local` cho local development. File này tự động được ignore bởi Git.

**Q: Tôi có thể dùng file .env không?**  
A: Được, nhưng `.env.local` được ưu tiên hơn và override `.env`.

**Q: Có thể đổi API key sau không?**  
A: Có! Click nút "Đổi key khác" trong UI hoặc sửa file `.env.local` và restart server.

**Q: API key miễn phí có giới hạn gì?**  
A: 
- Free tier: 60 requests/phút
- Gemini 1.5 Flash: 1,500 requests/ngày (free)
- Đủ cho cá nhân sử dụng

**Q: Làm sao biết API key còn quota?**  
A: Vào https://aistudio.google.com/apikey để xem usage và limits.

---

**Chúc bạn setup thành công! 🎉**

