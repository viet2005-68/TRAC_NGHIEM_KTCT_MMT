# 📄 Ví dụ format file DOCX để trích xuất câu hỏi

## Format đúng (cho Extract Mode)

Để trích xuất câu hỏi tự động, file DOCX của bạn cần có format sau:

### ✨ Mới: Hỗ trợ cả chữ IN ĐẬM và IN NGHIÊNG!

Bạn có thể dùng **chữ in đậm (Bold)** HOẶC *chữ in nghiêng (Italic)* để đánh dấu đáp án đúng!

### Ví dụ 1: Đáp án B là đúng (dùng chữ IN ĐẬM)

```
Câu 1: Mô hình OSI có bao nhiêu tầng?
A. 5 tầng
B. 7 tầng  ← IN ĐẬM trong Word (Ctrl+B) hoặc nút Bold
C. 4 tầng
D. 10 tầng
```

### Ví dụ 1b: Đáp án B là đúng (dùng chữ IN NGHIÊNG)

```
Câu 1: Mô hình OSI có bao nhiêu tầng?
A. 5 tầng
B. 7 tầng  ← IN NGHIÊNG trong Word (Ctrl+I) hoặc nút Italic
C. 4 tầng
D. 10 tầng
```

### Ví dụ 2: Đáp án C là đúng

```
Câu 2: TCP là giao thức thuộc tầng nào trong mô hình TCP/IP?
A. Tầng ứng dụng
B. Tầng mạng
C. Tầng giao vận  ← IN NGHIÊNG trong Word
D. Tầng vật lý
```

## Cách tạo file Word đúng format

### Bước 1: Viết câu hỏi

```
Câu 1: [Nội dung câu hỏi của bạn]
A. [Đáp án A]
B. [Đáp án B]
C. [Đáp án C]
D. [Đáp án D]
```

### Bước 2: Đánh dấu đáp án đúng (chọn 1 trong 2 cách)

**Cách 1: Dùng chữ in đậm (Bold) - KHUYẾN NGHỊ**
1. **Bôi đen** toàn bộ dòng đáp án đúng (ví dụ: "B. 7 tầng")
2. Nhấn **Ctrl + B** (Windows) hoặc **Cmd + B** (Mac)
3. Hoặc click nút **Bold** (chữ B đậm) trên toolbar
4. Chữ sẽ hiển thị **như thế này**

**Cách 2: Dùng chữ in nghiêng (Italic)**
1. **Bôi đen** toàn bộ dòng đáp án đúng (ví dụ: "B. 7 tầng")
2. Nhấn **Ctrl + I** (Windows) hoặc **Cmd + I** (Mac)
3. Hoặc click nút **Italic** (chữ I nghiêng) trên toolbar
4. Chữ sẽ hiển thị *như thế này*

### Bước 3: Lưu file

- Lưu dạng **.docx** (Word 2007 trở lên)
- Không dùng .doc (Word 97-2003)

## ⚠️ Lưu ý quan trọng

### ✅ ĐÚNG:
- Mỗi câu hỏi có đúng 4 đáp án (A, B, C, D)
- CHỈ một đáp án được format (in đậm HOẶC in nghiêng)
- Format nhất quán trong toàn file (nên dùng 1 kiểu cho tất cả)
- Câu hỏi bắt đầu bằng "Câu X:" (X là số)

### ❌ SAI:
- Thiếu đáp án hoặc có nhiều hơn 4 đáp án
- Nhiều đáp án được format trong 1 câu
- Không có đáp án nào được format
- Dùng cả Bold VÀ Italic cho cùng 1 đáp án (chỉ cần 1)
- Format không đồng nhất (vừa Bold vừa Italic xen kẽ)

## 🎯 Template mẫu

Copy template sau vào Word và chỉnh sửa:

```
Câu 1: Địa chỉ IP thuộc lớp nào?
A. Lớp A
B. Lớp B  [IN NGHIÊNG]
C. Lớp C
D. Lớp D

Câu 2: Port nào được sử dụng cho HTTP?
A. 21
B. 22
C. 80  [IN NGHIÊNG]
D. 443

Câu 3: Protocol nào hoạt động ở tầng ứng dụng?
A. IP
B. TCP
C. HTTP  [IN NGHIÊNG]
D. Ethernet

Câu 4: Subnet mask của mạng Class C mặc định là gì?
A. 255.0.0.0
B. 255.255.0.0
C. 255.255.255.0  [IN NGHIÊNG]
D. 255.255.255.255
```

## 🔍 Kiểm tra trước khi upload

### Checklist:

- [ ] Tất cả câu hỏi bắt đầu bằng "Câu X:"
- [ ] Mỗi câu có đúng 4 đáp án A, B, C, D
- [ ] Chỉ 1 đáp án mỗi câu được in nghiêng
- [ ] File lưu dạng .docx
- [ ] Đã test với 2-3 câu trước khi làm hết

## 💡 Tips

1. **Test nhỏ trước**: Upload file với 3-5 câu để kiểm tra format
2. **Copy từ PDF**: Nếu có file PDF, copy text sang Word rồi format lại
3. **Dùng Find & Replace**: Nếu đáp án đúng có pattern (ví dụ: "Đáp án: B"), dùng Find & Replace để tự động in nghiêng
4. **Save as template**: Tạo 1 file template với format đúng để tái sử dụng

---

**Sau khi có file đúng format, upload vào app và chọn mode "Trích xuất câu hỏi"!** 🎓

