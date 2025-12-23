const n=`CHƯƠNG 1: TỔNG QUAN VỀ MẠNG MÁY TÍNH\r
\r
Câu 1: Trong các phát biểu sau phát biểu nào KHÔNG chính xác?\r
A. Chồng giao thức của mạng Internet bắt buộc phải có 5 tầng: 1 tầng ứng dụng (application), 1 tầng giao vận (transport), 1 tầng mạng (network), 1 tầng liên kết dữ liệu (data link), và 1 tầng vật lý (physic)\r
B. Mạng Internet bao gồm các mạng con kết nối với nhau, mỗi mạng có thể sử dụng các công nghệ hoàn toàn khác nhau ở tầng vật lý và tầng liên kết dữ liệu\r
C. Chồng giao thức của mạng Internet có thể có tới 7 tầng.\r
D. Mạng Internet bao gồm các mạng con kết nối với nhau, mỗi mạng có thể sử dụng các thuật toán tìm đường khác nhau.\r
• A. a;\r
^Chồng giao thức của mạng Internet thực tế là mô hình TCP/IP, thường được mô tả với 4 hoặc 5 tầng. Mô hình OSI (Open Systems Interconnection) mới là mô hình có 7 tầng. Phát biểu A sai vì nó trộn lẫn hai mô hình và khẳng định 5 tầng là "bắt buộc".\`\r
\r
Câu 2: Ghép kiểu gói tin được sử dụng bởi giao thức của các tầng tương ứng?\r
a. Tầng liên kết dữ liệu b. Tầng mạng c. Tầng giao vận d. Tầng ứng dụng\r
i. Thông báo (messages) ii. Khung tin (frame) iii. Gói tin (packet) iv. Đoạn tin (segment)\r
A. a-ii b-iii c-iv d-i\r
B. a-i b-ii c-iii d-iv\r
C. a-ii b-iv c-iii d-i\r
D. a-iv b-iii c-ii d-i\r
• A. a;\r
^Tên gọi đơn vị dữ liệu ở các tầng: Tầng ứng dụng (Application) là Thông báo (Message), Tầng giao vận (Transport) là Đoạn tin (Segment), Tầng mạng (Network) là Gói tin (Packet), Tầng liên kết dữ liệu (Data Link) là Khung tin (Frame).\`\r
\r
Câu 9: Mô hình OSI có bao nhiêu tầng?\r
A. 5\r
B. 7\r
C. 4\r
D. 10\r
• B. a;\r
^Mô hình OSI (Open Systems Interconnection) có tổng cộng 7 tầng: 1. Tầng vật lý (Physical), 2. Tầng liên kết dữ liệu (Data Link), 3. Tầng mạng (Network), 4. Tầng giao vận (Transport), 5. Tầng phiên (Session), 6. Tầng trình diễn (Presentation), 7. Tầng ứng dụng (Application).\`\r
\r
Câu 14: Trong các tài liệu về mạng máy tính hiện nay, các tác giả hay sử dụng các ví dụ dựa trên mạng Internet để có tính thực tế. Để có tính lý thuyết cao, họ cũng thường sử dụng mô hình … (có 7 tầng) để trình bày.\r
A. TCP/IP\r
B. OSI\r
C. Hybrid\r
D. Internet\r
• B. a;\r
^Mô hình OSI là mô hình tham chiếu có 7 tầng, thường được dùng để trình bày các khái niệm mạng một cách đầy đủ và có tính lý thuyết cao.\`\r
\r
Câu 32: Các phát biểu dưới đây đúng hay sai ?\r
A. Mạng Internet nghẽn chủ yếu ở mạng lõi (Core network)\r
B. Mạng Internet có thể đảm bảo dữ liệu được truyền đến đích theo thời gian thực\r
C. Asynchronous Data Subscriber Line (ADSL) là một công nghệ mạng truy nhập\r
D. Đóng gói dữ liệu (encapsulation) nghĩa là bọc gói dữ liệu của tầng dưới vào trong gói dữ liệu của tầng trên\r
• A. a;\r
^Phát biểu A và C đúng. Mạng lõi là nơi tập trung lưu lượng từ nhiều mạng truy nhập nên dễ xảy ra nghẽn. ADSL là công nghệ truy nhập băng rộng phổ biến. Phát biểu B sai vì Internet là mạng "best-effort", không đảm bảo thời gian thực. Phát biểu D sai, encapsulation là bọc gói dữ liệu của tầng trên vào trong gói của tầng dưới.\`\r
\r
Câu 35: Bảng dưới là 8 byte dữ liệu được thêm các bit chẵn lẻ 2 chiều. Có 1 bit sai nằm ở phần dữ liệu. Tìm bit đó (viết kết quả theo định dạng (hàng,cột)).\r
| | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | P |\r
|---|---|---|---|---|---|---|---|---|---|\r
| 1 | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 0 | 1 |\r
| 2 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 |\r
| 3 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 |\r
| 4 | 1 | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 1 |\r
| 5 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 1 | 1 |\r
| 6 | 1 | 1 | 1 | 0 | 1 | 1 | 0 | 0 | 1 |\r
| 7 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |\r
| 8 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |\r
| P | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 0 |\r
A. (3,2)\r
B. (6,7)\r
C. (1,9)\r
D. (9,8)\r
• A. a;\r
^Kiểm tra bit chẵn lẻ (even parity) cho từng hàng và cột.\r
Hàng 3 có: 1+1+0+0+0+1+1+1 = 5 (lẻ), nhưng bit parity P=0 (sai).\r
Cột 2 có: 0+1+1+1+0+1+0+1 = 5 (lẻ), nhưng bit parity P=0 (sai).\r
Giao của hàng sai và cột sai là vị trí của bit lỗi, tức là (3,2).\`\r
\r
Câu 43: Mạng ở hình dưới hoạt động theo kiểu chuyển mạch gói (packet switching). Trễ lan truyền là 1 ms/link , gói tin 1000 bit, tốc độ truyền 1000 bps/link. Hỏi trễ truyền 1 gói tin từ S đến R là bao nhiêu ms? S --- N1 --- N2 --- R\r
A. 1003\r
B. 3000\r
C. 3003\r
D. 1001\r
• C. a;\r
^Thời gian truyền 1 gói (transmission delay) trên 1 link: T_trans = 1000 bit / 1000 bps = 1 s = 1000 ms. Trễ lan truyền (propagation delay) là 1 ms. Do sử dụng store-and-forward, tổng trễ = 3 * (T_trans + T_prop) = 3 * (1000 + 1) = 3003 ms.\`\r
\r
Câu 44: Chọn “Đúng” hoặc “Sai” cho các ý dưới đây về khái niệm Lõi mạng (network core) trong mạng Internet.\r
A. Vận chuyển gói tin theo cơ chế chuyển mạch gói (packet switch)\r
B. Là một mạng lưới các thiết bị switch kết nối với nhau\r
C. Bao gồm các client và server\r
D. Là một mạng lưới các thiết bị router kết nối với nhau\r
• A. a;\r
^Lõi mạng Internet là một mạng lưới các router (D đúng) kết nối với nhau, sử dụng cơ chế chuyển mạch gói (A đúng) để chuyển tiếp dữ liệu. Nó không bao gồm client/server (C sai) và không dùng switch làm thiết bị chính (B sai). Câu hỏi yêu cầu chọn 1, A là cơ chế hoạt động, D là thành phần cấu tạo.\`\r
\r
Câu 45: Theo mô hình OSI, router thuộc về tầng nào:\r
A. tầng session\r
B. tầng physical\r
C. tầng data link\r
D. tầng network\r
• D. a;\r
^Router là thiết bị cốt lõi của tầng mạng (Network Layer - Tầng 3 trong mô hình OSI), có chức năng chính là định tuyến các gói tin giữa các mạng khác nhau.\`\r
\r
Câu 57: Nếu người ta dùng 10 bit để biểu diễn một ký tự và tốc độ đường truyền là 1200bps thì bao nhiêu kí tự sẽ được truyền trong một giây?\r
A. 12\r
B. 120\r
C. 1200\r
D. 10\r
• B. a;\r
^Tốc độ đường truyền là 1200 bit mỗi giây (bps). Mỗi ký tự cần 10 bit để biểu diễn. Số ký tự truyền được trong một giây = (Số bit truyền trong 1 giây) / (Số bit cho 1 ký tự) = 1200 / 10 = 120 ký tự.\`\r
\r
Câu 58: Chồng giao thức của mạng Internet có hình gì?\r
A. Hình thang\r
B. Hình kim tự tháp\r
C. Hình đồng hồ cát\r
D. Hình chữ nhật\r
• C. a;\r
^Mô hình chồng giao thức Internet thường được ví như đồng hồ cát. Phần trên rộng là rất nhiều giao thức tầng ứng dụng, phần dưới rộng là rất nhiều công nghệ tầng liên kết và vật lý. Tất cả đều phải đi qua "eo" hẹp ở giữa là giao thức IP ở tầng mạng.\`\r
\r
Câu 60: Mạng ở hình dưới hoạt động theo kiểu chuyển mạch kênh (circuit switching). Trễ lan truyền là 1 ms/link , gói tin 1000 bit, tốc độ truyền 1000 bps/link. Hỏi trễ truyền 1 gói tin từ S đến R là bao nhiêu ms? S --- N1 --- N2 --- R\r
A. 1003\r
B. 3003\r
C. 1000\r
D. 3\r
• A. a;\r
^Với chuyển mạch kênh, dữ liệu truyền như một luồng liên tục. Tổng trễ = Thời gian truyền gói tin + Tổng trễ lan truyền qua các link.\r
Thời gian truyền = 1000 bit / 1000 bps = 1000 ms.\r
Tổng trễ lan truyền = 3 links * 1 ms/link = 3 ms.\r
Tổng cộng = 1000 + 3 = 1003 ms.\`\r
\r
Câu 62: Các câu trả lời dưới đây là “Đúng” hay “Sai” đối với câu hỏi “Giao thức mạng quy định gì ?” (network protocol)\r
A. Hành vi sẽ thực hiện khi nhận được bản tin\r
B. Format của bản tin (message) gửi và nhận\r
C. Port number của ứng dụng\r
D. Thứ tự gửi và nhận bản tin\r
• A. a;\r
^Giao thức mạng định nghĩa format, thứ tự các bản tin được gửi/nhận và các hành động cần thực hiện khi gửi hoặc nhận một bản tin. Port number là một địa chỉ, không phải quy định của giao thức.\`\r
\r
Câu 77: Thời gian truyền dữ liệu (transmission time) của gói tin 2000 byte vào mạng LAN có băng thông 100 Mbps là bao nhiêu?\r
A. 0.00008 s\r
B. 0.00016 s\r
C. 0.00002 s\r
D. 0.00001 s\r
• B. a;\r
^Kích thước gói tin = 2000 bytes * 8 bits/byte = 16000 bits.\r
Băng thông = 100 Mbps = 100 * 10^6 bps.\r
Thời gian truyền = Kích thước / Băng thông = 16000 / (100 * 10^6) = 0.00016 s.\`\r
\r
Câu 78: Thời gian lan truyền (propagation time) của gói tin giữa hai máy tính cách nhau 400m với vận tốc lan truyền 2x10^8 m/s là bao nhiêu?\r
A. 0.00004 s\r
B. 0.000016 s\r
C. 0.000002 s\r
D. 0.00001 s\r
• C. a;\r
^Thời gian lan truyền = Khoảng cách / Vận tốc = 400 m / (2 * 10^8 m/s) = 2 * 10^-6 s = 0.000002 s.\`\r
\r
Câu 79: Giả sử tốc độ lan truyền 1km/s, tốc độ truyền dữ liệu 2Mbps, khoảng cách 2m, kích cỡ gói tin 50KB, Tiêu đề chiếm 20%. Thông lượng từ A đến B xấp xỉ là bao nhiêu?\r
A. 1.7 Mbps\r
B. 1.6 Mbps\r
C. 1.5 Mbps\r
D. 1.4 Mbps\r
• B. a;\r
^Thông lượng (throughput) là tốc độ truyền dữ liệu hữu ích (payload) thực tế. Ở đây, dữ liệu hữu ích chiếm 100% - 20% = 80% tổng kích cỡ gói tin. Vậy thông lượng xấp xỉ = 2 Mbps * 80% = 1.6 Mbps.\`\r
\r
Câu 94: Tầng phiên (Session) nhận dịch vụ từ tầng … và sử dụng dịch vụ của tầng ……\r
A. presentation, transport\r
B. application, presentation\r
C. presentation, data link\r
D. transport, network\r
• A. a;\r
^Theo mô hình OSI 7 tầng, tầng n nhận dịch vụ từ tầng n+1 và sử dụng dịch vụ của tầng n-1. Tầng Phiên (5) nhận dịch vụ từ tầng Trình diễn (6) và sử dụng dịch vụ của tầng Giao vận (4).\`\r
\r
Câu 112: Mạng Internet so các mạng điện thoại truyền thống có ưu điểm là\r
A. Sử dụng băng thông hiệu quả hơn\r
B. Chất lượng truyền tin tốt hơn\r
C. Độ trễ thấp hơn\r
D. Bảo mật tốt hơn\r
• A. a;\r
^Mạng Internet dùng chuyển mạch gói, cho phép nhiều người dùng chia sẻ băng thông, hiệu quả hơn chuyển mạch kênh của điện thoại (dành riêng kênh, lãng phí khi không nói).\`\r
\r
Câu 115: Chọn ý đúng trong các diễn đạt dưới đây về cơ chế store-and-forward ở router.\r
A. Gói tin được forward theo từng byte.\r
B. Toàn bộ gói tin phải đến router trước khi nó có thể được forward đi tiếp.\r
C. Chỉ cần header của gói tin đến router là có thể forward đi tiếp.\r
D. Cứ bit nào vào là có thể forward bit đó ra luôn.\r
• B. a;\r
^Cơ chế store-and-forward yêu cầu router phải nhận (store) và lưu toàn bộ gói tin vào bộ đệm, sau đó mới xử lý và chuyển tiếp (forward) nó đi.\`\r
\r
Câu 117: Dữ liệu khi truyền từ A đến B cần đi qua 3 đường truyền có băng thông 10Mbps, 20Mbps và 30 Mbps. Tốc độ truyền dữ liệu tối đa giữa A và B là bao nhiêu?\r
A. 10Mbps\r
B. 30Mbps\r
C. 20Mbps\r
D. 60Mbps\r
• A. a;\r
^Tốc độ của một chuỗi kết nối bị giới hạn bởi liên kết có tốc độ thấp nhất (bottleneck link). Ở đây là 10Mbps.\`\r
\r
Câu 119: Các phát biểu dưới đây là đúng hay sai về chức năng chính của mạng lõi (network core)?\r
A. Một trong hai chức năng chính là điều khiển đa truy cập (Multiple Access).\r
B. Một trong hai chức năng chính là phát hiện lỗi (Error detection).\r
C. Một trong hai chức năng chính là định tuyến (Routing).\r
D. Một trong hai chức năng chính là chuyển tiếp gói tin (Forwarding).\r
• C. a;\r
^Hai chức năng chính của mạng lõi (tầng mạng) là Routing (xác định đường đi tổng thể) và Forwarding (chuyển tiếp gói tin tại một router). C và D đều đúng, nhưng câu hỏi yêu cầu chọn 1. Cả hai đều là chức năng chính.\`\r
\r
Câu 127: Core network của mạng Internet sử dụng cơ chế\r
A. Circuit switching\r
B. Packet switching\r
C. Label switching\r
D. Datagram switching\r
• B. a;\r
^Mạng lõi của Internet sử dụng cơ chế chuyển mạch gói (packet switching). Datagram switching là một dạng của packet switching.\`\r
\r
Câu 132: Các tầng tương tác với\r
A. Tầng dưới nó\r
B. Mọi tầng khác\r
C. Tầng trên và tầng dưới\r
D. Tầng trên nó\r
• C. a;\r
^Trong mô hình phân tầng, một tầng (n) cung cấp dịch vụ cho tầng ngay trên nó (n+1) và sử dụng dịch vụ của tầng ngay dưới nó (n-1).\`\r
\r
Câu 147: Trên một mạng chuyển mạch gói, một file 1KBytes được gửi qua 3 links, băng thông mỗi link 1Mbps, gói tin 1000 byte. Thời gian cần thiết để truyền toàn bộ file là bao nhiêu miliseconds? (Bỏ qua các trễ khác)\r
A. 8\r
B. 16\r
C. 24\r
D. 32\r
• C. a;\r
^Thời gian truyền 1 gói 1000 byte (8000 bit) trên link 1Mbps là: T_trans = 8000 / 10^6 = 8ms. File 1KBytes (1024 bytes) được chia thành 2 gói (gói 1: 1000B, gói 2: 24B).\r
Tổng thời gian = (số link + số gói - 1) * T_trans = (3 + 2 - 1) * 8ms = 4 * 8ms = 32ms.\r
Nếu giả định file 1KB = 1000B (1 gói): T = (3 + 1 - 1) * 8ms = 24ms. Đáp án 24 có lẽ dựa trên giả định này.\`\r
\r
Câu 150: So với mô hình OSI, mô hình TCP/IP có hay không có các tầng nào dưới đây?\r
A. Tầng phiên (session layer)\r
B. Tầng trình diễn (presentation layer)\r
C. Tầng ứng dụng (application layer)\r
D. Tầng giao vận (transport layer)\r
• A. a;\r
^Mô hình TCP/IP gộp chức năng của tầng Phiên, Trình diễn và Ứng dụng của OSI vào một tầng duy nhất là tầng Ứng dụng. Do đó, TCP/IP không có tầng Phiên và Trình diễn riêng biệt.\`\r
\r
Câu 154: Độ trễ lan truyền (Propagation delay) phụ thuộc vào\r
A. Khoảng cách vật lý giữa bên gửi và bên nhận\r
B. Kích thước gói tin\r
C. Băng thông của đường truyền\r
D. Kích thước hàng đợi tại router\r
• A. a;\r
^Độ trễ lan truyền là thời gian để một bit di chuyển từ đầu đến cuối một liên kết vật lý, được tính bằng công thức: Khoảng cách / Tốc độ lan truyền.\`\r
\r
Câu 162: Hãy xem xét việc truyền dữ liệu trên một kênh truyền vật lý. Nguyên nhân mất dữ liệu xảy ra trên kênh chủ yếu là do\r
A. Mất dữ liệu do tràn bộ đệm\r
B. Lỗi bit tín hiệu\r
C. Mất gói tin do vượt quá TTL\r
D. Cả A, D và B\r
• B. a;\r
^Trên một kênh truyền vật lý, nguyên nhân chính gây mất mát là nhiễu điện từ, suy hao tín hiệu... dẫn đến việc các bit bị thay đổi (lỗi bit), làm cho bên nhận không thể giải mã đúng hoặc phát hiện ra lỗi và loại bỏ frame.\`\r
\r
Câu 165: Mạng máy tính là\r
A. Tập hợp các máy tính trong một phòng\r
B. Nhiều máy tính có kết nối với nhau\r
C. Một kiểu máy tính\r
D. Một phần mềm\r
• B. a;\r
^Định nghĩa cơ bản của mạng máy tính là một tập hợp các máy tính và thiết bị được kết nối với nhau để chia sẻ tài nguyên và trao đổi dữ liệu.\`\r
\r
Câu 174: Một gói tin IP sau khi gửi có thể không đến được bên nhận. Tại sao?\r
A. Tất cả các đáp án đều đúng\r
B. Gói tin bị loại bỏ do tràn bộ đệm ở router\r
C. Gói tin bị loại bỏ do đi hết số chặng định tuyến theo quy định (TTL)\r
D. Gói tin bị loại bỏ do có lỗi bit\r
• A. a;\r
^Tất cả các lý do trên đều có thể khiến một gói tin IP bị mất trên đường truyền. IP là giao thức "best-effort" không đảm bảo việc gửi thành công.\`\r
\r
Câu 176: Mạng cục bộ LAN là viết tắt của\r
A. Local Area Network\r
B. Local Arial Net\r
C. Low Area Network\r
D. Large Area Network\r
• A. a;\r
^LAN là viết tắt của Local Area Network, tức là Mạng Cục bộ.\`\r
\r
Câu 177: Mạng Internet là một mạng có cấu trúc như thế nào?\r
A. Client - Server\r
B. Phân cấp\r
C. Peer-to-peer\r
D. Phẳng\r
• B. a;\r
^Internet là một "mạng của các mạng", có cấu trúc phân cấp bao gồm các nhà cung cấp dịch vụ Internet (ISP) ở các cấp khác nhau được kết nối với nhau.\`\r
\r
CHƯƠNG 2: TẦNG ỨNG DỤNG\r
Câu 2: Máy chủ Web proxy dùng cho các máy tính của một trường học cần đặt ở đâu để giảm tải cho đường truyền Internet của trường học đó?\r
A. Ở vị trí bất kỳ trên mạng Internet\r
B. Trong mạng backbone của nhà cung cấp dịch vụ Internet (ISP)\r
C. Trong mạng nội bộ của trường học\r
D. Gần máy chủ Web mà các máy tính của trường học đó truy cập nhiều nhất\r
• C. a;\r
^Đặt proxy trong mạng nội bộ giúp các yêu cầu lặp lại được đáp ứng ngay từ cache mà không cần đi ra ngoài Internet, do đó giảm tải cho đường truyền và giảm độ trễ.\`\r
\r
Câu 4: Giao thức nào dùng để gửi email?\r
A. SMTP\r
B. POP3\r
C. IMAP\r
D. HTTP\r
• A. a;\r
^SMTP (Simple Mail Transfer Protocol) là giao thức chuẩn để gửi (push) email. POP3 và IMAP là giao thức để nhận (pull) email.\`\r
\r
Câu 7: Ứng dụng mạng (Network applications) có thể được xây dựng theo các kiến trúc nào sau đây?\r
A. Peer-to-peer\r
B. Client-Server\r
C. Cả B, A và D\r
D. Hybrid\r
• C. a;\r
^Các ứng dụng mạng có thể được xây dựng theo kiến trúc Client-Server, Peer-to-Peer (P2P), hoặc Hybrid (lai giữa cả hai).\`\r
\r
Câu 11: Các phát biểu dưới đây đúng hay sai ?\r
A. Mỗi một chu kỳ Request-response của HTTP chỉ có thể chạy trên cùng 1 kết nối TCP\r
B. Chỉ cần SMTP là đủ cho các hệ thống email phổ biến hiện nay hoạt động được\r
C. Thông tin điều khiển và dữ liệu tải file của FTP được chạy trên cùng một kết nối TCP\r
D. HTTP request và HTTP response chạy trên hai kết nối TCP khác nhau\r
• A. a;\r
^Trong HTTP, một yêu cầu (request) và phản hồi (response) tương ứng của nó diễn ra trên cùng một kết nối TCP. Các lựa chọn khác sai.\`\r
\r
Câu 16: Dịch vụ thư điện tử sử dụng giao thức nào ở tầng ứng dụng?\r
A. HTTP\r
B. SIP\r
C. FTP\r
D. SMTP\r
• D. a;\r
^Dịch vụ thư điện tử (email) sử dụng giao thức SMTP để gửi thư.\`\r
\r
Câu 22: Dịch vụ DNS có thể cân bằng tải cho các Web server được nhân bản của cùng một trang Web bằng cách nào?\r
A. Gán nhiều biệt danh (alias name) cho tên miền của trang Web\r
B. Lưu tập địa chỉ IP của các Web server trong bản ghi DNS ứng với tên miền của trang Web\r
C. DNS server chuyển các thông báo HTTP request đến các Web server một cách ngẫu nhiên\r
D. Đăng ký tên miền của trang Web với nhiều authoritative DNS server\r
• B. a;\r
^DNS có thể thực hiện cân bằng tải bằng cách ánh xạ một tên miền duy nhất tới một danh sách nhiều địa chỉ IP (của các server nhân bản). Khi nhận được truy vấn, DNS server sẽ trả về các địa chỉ IP này theo một thứ tự xoay vòng (round-robin).\`\r
\r
Câu 23: Trong một mạng LAN có cài đặt một router có chức năng DHCP và DNS. Trễ đầu cuối giữa hai máy bất kỳ trong LAN là 30ms. Một máy C thực hiện truy vấn tên miền www.vnexpress.net đã được cache tại DNS nội bộ. Hỏi sau bao nhiêu ms máy C nhận được phản hồi?\r
A. 30\r
B. 60\r
C. 90\r
D. 120\r
• B. a;\r
^Quá trình bao gồm việc gửi gói tin truy vấn và nhận gói tin phản hồi. Tổng thời gian là thời gian đi và về (Round-Trip Time - RTT) = 30 ms (đi) + 30 ms (về) = 60 ms.\`\r
\r
Câu 26: Trong các giao thức sau, giao thức nào chạy ở tầng ứng dụng và không sử dụng TCP để truyền/nhận dữ liệu?\r
A. DNS\r
B. ARP\r
C. IP\r
D. HTTP\r
• A. a;\r
^DNS chủ yếu sử dụng UDP cho các truy vấn thông thường vì tính nhanh gọn. HTTP sử dụng TCP. IP là giao thức tầng mạng. ARP hoạt động ở tầng liên kết dữ liệu.\`\r
\r
Câu 34: Trong bản ghi tài nguyên của DNS, trường TTL (Time to live) được lưu trữ trong 31 bit. Hỏi: Thời gian sống tối đa của bản ghi tài nguyên DNS có thể được thiết lập vào khoảng?\r
A. 65 năm\r
B. 67 năm\r
C. 66 năm\r
D. 68 năm\r
• D. a;\r
^Thời gian sống tối đa = 2^31 giây.\r
2^31 / (60 giây/phút * 60 phút/giờ * 24 giờ/ngày * 365 ngày/năm) ≈ 68.09 năm.\`\r
\r
Câu 37: Bob truy nhập vào trang www.vnexpress.net sử dụng HTTP 1.1. Trang chủ vnexpress.net chứa 15 hình ảnh. Số lượng kết nối TCP được thực hiện là?\r
A. 2\r
B. 15\r
C. 16\r
D. 1\r
• D. a;\r
^HTTP 1.1 sử dụng kết nối bền (persistent connection) mặc định, cho phép một kết nối TCP duy nhất được sử dụng để tải trang HTML và tất cả 15 hình ảnh.\`\r
\r
Câu 39: Giả thiết rằng một máy chủ gửi một file F cho máy khác mất 1 giây. Nếu có một server chia sẻ file F đó cho N máy khách theo kiểu client-server, sau 3 giây, có thể có tối đa bao nhiêu máy sẽ có file F (tính cả server)?\r
A. 3\r
B. 4\r
C. 5\r
D. 8\r
• B. a;\r
^Trong kiểu client-server, server gửi file lần lượt cho từng client.\r
\r
Giây 1: Server gửi cho Client 1. (2 máy có file)\r
\r
Giây 2: Server gửi cho Client 2. (3 máy có file)\r
\r
Giây 3: Server gửi cho Client 3. (4 máy có file)\r
Vậy tối đa có 4 máy (1 server + 3 client) có file F.\`\r
\r
Câu 49: Giao thức UDP thường được dùng với ứng dụng nào sau đây?\r
A. Ứng dụng nói chuyện trực tuyến (voice chat)\r
B. Ứng dụng Web\r
C. Ứng dụng truyền file\r
D. Ứng dụng thư điện tử\r
• A. a;\r
^Các ứng dụng thời gian thực như voice chat, video streaming, game online thường ưu tiên tốc độ và độ trễ thấp hơn là độ tin cậy, do đó chúng sử dụng UDP.\`\r
\r
Câu 56: Cơ chế phân cấp nào hỗ trợ ánh xạ tên máy tính (hostname) và địa chỉ IP:\r
A. RARP\r
B. ARP\r
C. LDAP\r
D. DNS\r
• D. a;\r
^DNS (Domain Name System) là hệ thống phân cấp toàn cầu có chức năng chính là phân giải tên miền (hostname) thành địa chỉ IP.\`\r
\r
Câu 65: Alice truy nhập vào trang thương mại điện tử alibabe.cn. Điều nào sau đây KHÔNG đúng về khái niệm cookie?\r
A. Cookie có độ dài cố định\r
B. Cookie là đoạn dữ liệu về người dùng\r
C. Cookie được tạo ra bởi máy chủ (cụ thể alibabe.cn)\r
D. Cookie cho phép máy chủ theo dõi trạng thái người dùng\r
• A. a;\r
^Cookie lưu trữ thông tin về phiên làm việc của người dùng. Lượng thông tin này thay đổi tùy theo hoạt động, do đó cookie không có độ dài cố định.\`\r
\r
Câu 71: Khi Bob gửi e-mail cho Alice, máy tính của Alice không kết nối mạng. Khi đó, email của Bob sẽ nằm ở đâu?\r
A. Trong mail box của Alice trên mail server của Alice\r
B. Trong hàng thư chờ gửi trên mail server của Bob\r
C. Trong hàng thư chờ gửi trên mail server của Alice\r
D. Trong mail box của Bob trên mail server của Bob\r
• A. a;\r
^Email từ mail server của Bob sẽ được chuyển đến mail server của Alice và lưu trữ trong hòm thư của Alice tại đó, chờ Alice kết nối và tải về.\`\r
\r
Câu 81: Tiến trình ứng dụng (application process) được đánh địa chỉ bởi\r
A. Physical address\r
B. Port number\r
C. Địa chỉ IP\r
D. Process number\r
• B. a;\r
^Tầng giao vận sử dụng số hiệu cổng (Port number) để phân biệt các tiến trình ứng dụng khác nhau đang chạy trên cùng một máy tính.\`\r
\r
Câu 84: Giao thức để truyền trang web qua Internet là\r
A. SSH\r
B. DNS\r
C. SMTP\r
D. HTTP\r
• D. a;\r
^HTTP (HyperText Transfer Protocol) là giao thức nền tảng để truyền tải các trang web.\`\r
\r
Câu 91: Hãy tìm câu trả lời đúng nhất liên quan đến thư điện tử\r
A. SMTP là giao thức nhận thư điện tử\r
B. Bản ghi DNS kiểu MX dùng để chỉ tên miền và địa chỉ máy chủ thư điện tử\r
C. POP3 và IMAP là các giao thức truyền thư điện tử\r
D. Người dùng POP3 có thể xem lại lịch sử các thao tác đã thực hiện\r
• B. a;\r
^Bản ghi MX (Mail eXchanger) trong DNS được dùng để xác định mail server chịu trách nhiệm nhận email cho một tên miền.\`\r
\r
Câu 97: Một ứng dụng voice chat thời gian thực nên sử dụng giao thức nào dưới đây?\r
A. UDP\r
B. HTTP\r
C. FTP\r
D. TCP\r
• A. a;\r
^Ứng dụng voice chat ưu tiên độ trễ thấp, chấp nhận mất một vài gói tin nhỏ. Do đó, UDP là lựa chọn phù hợp hơn TCP.\`\r
\r
Câu 102: Các phát biểu dưới đây đúng hay sai ?\r
A. Ứng dụng mạng chỉ có thể được kiến trúc theo kiểu client/server\r
B. Đặc điểm cơ bản của mô hình client/server là dựa trên cơ chế hỏi/đáp (request/response)\r
C. Ứng dụng mạng có thể được kiến trúc theo kiểu Peer-to-peer\r
D. Ứng dụng mạng có thể được kiến trúc theo kiểu Client/Server\r
• B. a;\r
^B, C, D đều đúng. Mô hình client/server hoạt động dựa trên cơ chế request/response. Ngoài ra còn có mô hình P2P.\`\r
\r
Câu 107: Liên quan đến giao thức HTTP, hãy đánh dấu đúng sai vào các câu sau:\r
A. Header của bản tin HTTP có thể mang dữ liệu dạng nhị phân\r
B. Có hai bản tin HTTP là HTTP request và HTTP reply\r
C. HTTP có thể có nhiều dòng headers\r
D. HTTP methods (ví dụ POST, GET, …) tồn tại trong HTTP reply\r
• C. a;\r
^A, C, G, H, I đúng. Phần header và payload của HTTP đều có thể mang dữ liệu nhị phân. HTTP có hai loại bản tin là request và response (không phải reply). HTTP methods nằm trong request. Status code nằm trong response. Không phải bản tin nào cũng có payload (ví dụ GET).\`\r
\r
Câu 111: Các phát biểu dưới đây đúng hay sai ?\r
A. POP3 và SMTP có chức năng tương đương\r
B. POP3 và IMAP có chức năng tương đương\r
C. Một hệ thống email có thể hoạt động được dựa vào POP3 và SMTP\r
D. Một hệ thống email có thể hoạt động được dựa vào POP3 và IMAP\r
• B. a;\r
^POP3 và IMAP đều là giao thức nhận mail (pull mail), nên chức năng là tương đương. SMTP là giao thức gửi mail.\`\r
\r
Câu 116: Bộ giao thức truyền dữ liệu qua Internet là?\r
A. VoiceIP\r
B. DNS\r
C. HTTP\r
D. TCP/IP\r
• D. a;\r
^TCP/IP là bộ giao thức nền tảng của mạng Internet, quy định cách dữ liệu được đóng gói, định địa chỉ, truyền, định tuyến và nhận.\`\r
\r
Câu 120: HTTP server nghe ở port nào\r
A. 81\r
B. 80\r
C. 25\r
D. 82\r
• B. a;\r
^Theo quy ước, các máy chủ HTTP lắng nghe các yêu cầu đến trên cổng (port) 80.\`\r
\r
Câu 124: Trong các phát biểu sau về kiến trúc Client-Server, câu nào kém chính xác nhất\r
A. Server thường phải có địa chỉ và port cố định\r
B. Client có thể gửi bản tin Request đến server\r
C. Client có thể không là bên bắt đầu quá trình liên lạc\r
D. Client-Server hoạt động chủ yếu dựa trên cơ chế request-reply\r
• C. a;\r
^Trong kiến trúc client-server, client luôn là bên chủ động bắt đầu quá trình liên lạc bằng cách gửi một yêu cầu (request) đến server.\`\r
\r
Câu 125: Máy chủ DNS A quản lý vn, B quản lý edu.vn, C quản lý vnu.edu.vn, D quản lý uet.vnu.edu.vn. Máy chủ nào là authoritative DNS server đối với tên miền fit.uet.vnu.edu.vn?\r
A. Máy chủ DNS D\r
B. Máy chủ DNS B\r
C. Máy chủ DNS A\r
D. Máy chủ DNS C\r
• A. a;\r
^Máy chủ DNS có thẩm quyền (authoritative) cho một tên miền là máy chủ quản lý trực tiếp tên miền cấp cao hơn ngay sát nó. Ở đây, D quản lý uet.vnu.edu.vn, nên nó cũng là máy chủ có thẩm quyền cho fit.uet.vnu.edu.vn.\`\r
\r
Câu 129: Các phát biểu dưới đây là đúng hay sai\r
A. DNS root name server là nơi lưu trữ toàn bộ thông tin về cặp (hostname, địa chỉ IP)\r
B. DNS là giao thức ở tầng transport\r
C. DNS cung cấp dịch vụ chuyển đổi địa chỉ IP sang MAC\r
D. DNS cung cấp dịch vụ chuyển đổi hostname sang địa chỉ IP\r
• D. a;\r
^Chức năng chính của DNS là chuyển đổi hostname sang địa chỉ IP. Các phát biểu khác sai.\`\r
\r
Câu 133: Trong các phương thức dưới đây, phương thức nào là phương thức của HTTP?\r
A. POST\r
B. HEAD\r
C. GET\r
D. PUT\r
• A. a;\r
^Tất cả A, B, C, D đều là các phương thức của HTTP.\`\r
\r
Câu 136: Hãy tìm câu trả lời đúng nhất liên quan đến DNS:\r
A. Dịch vụ DNS trả lại địa chỉ IP dùng riêng (private IP)\r
B. DNS chỉ sử dụng giao thức UDP ở tầng giao vận\r
C. Một máy chủ DNS có thể quản lý nhiều miền khác nhau\r
D. DNS phân giải địa chỉ vật lý thành địa chỉ IP\r
• C. a;\r
^Một máy chủ DNS có thể được cấu hình để quản lý nhiều vùng (zone) DNS khác nhau, tương ứng với nhiều miền khác nhau.\`\r
\r
Câu 143: Khi Bob gửi mail đến Alice, giao thức SMTP được sử dụng để chuyển mail của Bob đến\r
A. Hòm thư (mail box) trên máy chủ của Alice\r
B. Hàng đợi thông báo (message queue) trên máy chủ của Bob\r
C. Trình đọc mail (User agent) của Alice\r
D. Cả hai ý A và B\r
• A. a;\r
^SMTP chuyển mail từ mail server của người gửi đến mail server của người nhận, nơi mail được lưu trữ trong hòm thư của người nhận.\`\r
\r
Câu 146: Tại sao giao thức HTTP lại sử dụng giao thức TCP mà không sử dụng giao thức UDP?\r
A. Giao thức TCP đảm bảo truyền tin tin cậy\r
B. Giao thức TCP có cơ chế truyền dữ liệu đơn giản hơn\r
C. Giao thức TCP có độ trễ thấp hơn\r
D. Giao thức TCP có tốc độ truyền cao hơn\r
• A. a;\r
^HTTP cần đảm bảo dữ liệu web được truyền đến đầy đủ và đúng thứ tự. TCP cung cấp dịch vụ truyền tin cậy này, trong khi UDP thì không.\`\r
\r
Câu 149: Mail từ máy tính người gửi được gửi trực tiếp đến chương trình đọc thư trên máy tính người đọc.\r
A. Đúng\r
B. Sai\r
C. Tùy trường hợp\r
D. Chỉ đúng với giao thức POP3\r
• B. a;\r
^Quá trình gửi mail luôn có sự tham gia của các mail server làm trung gian.\`\r
\r
Câu 156: Dịch vụ nào chuyển đổi tên miền và hostname sang địa chỉ IP\r
A. Internet Relay Chat (IRC)\r
B. Network Time Protocol (NTP)\r
C. Domain Name System (DNS)\r
D. Routing Information Protocol (RIP)\r
• C. a;\r
^Chức năng chính của DNS (Domain Name System) là phân giải tên miền thành địa chỉ IP.\`\r
\r
Câu 157: Khi Bob gửi mail đến alice@hogehoge.com, để biết được mail server của Alice thì mail server của Bob gửi truy vấn DNS như thế nào?\r
A. Gửi truy vấn tên miền hogehoge.com với type=NS\r
B. Gửi truy vấn tên miền hogehoge.com với type=MX\r
C. Gửi truy vấn tên miền hogehoge.com với type=CNAME\r
D. Gửi truy vấn tên miền hogehoge.com với type=A\r
• B. a;\r
^Để tìm địa chỉ của mail server cho một tên miền, cần truy vấn bản ghi MX (Mail eXchanger).\`\r
\r
Câu 159: Các phát biểu dưới đây là đúng hay sai\r
A. DNS cung cấp dịch vụ chuyển đổi hostname sang địa chỉ IP\r
B. DNS là giao thức tầng transport\r
C. SMTP sử dụng giao thức UDP\r
D. FTP sử dụng giao thức UDP\r
• A. a;\r
^Phát biểu A đúng. Các phát biểu còn lại sai: DNS là giao thức tầng ứng dụng, SMTP và FTP đều sử dụng TCP.\`\r
\r
Câu 169: Số lượng Root Name Server trong hệ thống DNS gần giá trị nào nhất\r
A. 100\r
B. 2\r
C. 13\r
D. 1000\r
• C. a;\r
^Có 13 máy chủ DNS gốc (root server) logic trên toàn thế giới, được đặt tên từ A đến M.\`\r
\r
Câu 170: Hãy tìm câu trả lời đúng nhất liên quan đến HTTP\r
A. Nếu nhận được HTTP request có nội dung If-modified-since, máy chủ HTTP sẽ chỉ trả lại nội dung được yêu cầu với mã 200 nếu như nội dung đó được cập nhật lần cuối sau ngày được đưa ra\r
B. Máy chủ thường phục vụ HTTP trên cổng 80, 808 và 8080\r
C. HTTP quy định hoạt động của các nút bấm trên một trình duyệt Web\r
D. HTTP quy định cách hiển thị các hình ảnh trên một trình duyệt Web\r
• A. a;\r
^Header If-Modified-Since được client sử dụng để thực hiện conditional GET. Server chỉ gửi lại toàn bộ nội dung (mã 200 OK) nếu tài nguyên đã thay đổi sau ngày được chỉ định. Nếu không, server sẽ trả về mã 304 Not Modified.\`\r
\r
Câu 171: Các phát biểu dưới đây là đúng hay sai\r
A. FTP sử dụng giao thức UDP\r
B. DNS sử dụng giao thức TCP\r
C. SMTP sử dụng giao thức UDP\r
D. HTTP sử dụng giao thức TCP\r
• D. a;\r
^HTTP, FTP, SMTP đều sử dụng TCP. DNS có thể sử dụng cả TCP và UDP, nhưng chủ yếu là UDP.\`\r
\r
Câu 172: Với lập trình socket, người lập trình không quan tâm việc Hệ điều hành sử dụng giao thức giao vận TCP hay UDP như thế nào. Đúng hay sai?\r
A. Sai\r
B. Đúng\r
C. Chỉ đúng với TCP\r
D. Chỉ đúng với UDP\r
• A. a;\r
^Người lập trình phải chỉ định rõ ràng loại socket là SOCK_STREAM (cho TCP) hay SOCK_DGRAM (cho UDP) khi tạo socket, vì hai giao thức này cung cấp dịch vụ rất khác nhau.\`\r
\r
Câu 178: Giao thức dùng để gửi email giữa các mail server là\r
A. IMAP\r
B. SMTP\r
C. FTP\r
D. POP3\r
• B. a;\r
^SMTP được sử dụng để truyền email giữa các mail server với nhau.\`\r
\r
CHƯƠNG 3: TẦNG GIAO VẬN\r
Câu 3: Trong kiến trúc giao thức TCP/IP, tầng IP cung cấp dịch vụ gì cho tầng giao vận?\r
A. Truyền dữ liệu giữa các máy tính với độ trễ không đổi\r
B. Đảm bảo các gói tin được truyền đến đúng tiến trình của bên nhận\r
C. Định tuyến gói tin đến đúng địa chỉ IP của bên nhận\r
D. Đảm bảo truyền tin tin cậy giữa các máy tính có liên kết vật lý trực tiếp\r
• C. a;\r
^Tầng IP (tầng mạng) cung cấp dịch vụ chuyển phát gói tin từ host nguồn đến host đích, bao gồm việc định tuyến gói tin qua các router dựa trên địa chỉ IP đích.\`\r
\r
Câu 5: UDP được gọi là giao thức không hưởng kết nối (connectionless) vì\r
A. Cả B và D\r
B. Tất cả gói tin UDP được đối xử một cách độc lập\r
C. Tất cả các đáp án đều sai\r
D. Nó gửi dữ liệu như là một luồng các gói tin liên quan đến nhau\r
• B. a;\r
^Trong UDP, mỗi datagram là một đơn vị độc lập, được gửi đi mà không cần thiết lập kết nối trước và không có mối liên hệ nào với các datagram khác.\`\r
\r
Câu 10: Để đảm bảo truyền dữ liệu tin cậy, TCP sử dụng cơ chế truyền lại (retransmission). Cơ chế này được thực hiện khi nào ở bên gửi?\r
A. Khi phát hiện lỗi checksum\r
B. Khi hết thời gian chờ nhận ACK (timeout)\r
C. Khi phát hiện sai thứ tự gói tin\r
D. Khi phát hiện trùng gói tin\r
• B. a;\r
^Bên gửi TCP sẽ truyền lại một segment khi bộ đếm thời gian chờ ACK cho segment đó hết hạn (timeout), hoặc khi nhận được 3 ACK trùng lặp.\`\r
\r
Câu 20: Giao thức TCP là một giao thức\r
A. Hướng kết nối (connection oriented)\r
B. Sử dụng quy trình bắt tay ba bước để khởi tạo kết nối\r
C. Cả 3 đáp án đều đúng\r
D. Gom dữ liệu từ các ứng dụng thành một luồng duy nhất\r
• C. a;\r
^Tất cả các phát biểu A, B, và D (gom dữ liệu từ ứng dụng thành các đoạn tin - segment - rồi tạo thành một luồng byte) đều đúng với TCP.\`\r
\r
Câu 24: Cho đoạn dữ liệu gồm 5 byte. Mỗi byte được biểu diễn dưới dạng mã hexa như bảng dưới. Tính Internet checksum của đoạn dữ liệu đó. Yêu cầu viết kết quả dưới dạng hexa (không điền tiền tố Ox).\r
| Byte thứ | 1 | 2 | 3 | 4 | 5 |\r
|---|---|---|---|---|---|\r
| Giá trị | 12 | 00 | 01 | 00 | A0 |\r
A. 4CFF\r
B. B300\r
C. 4D00\r
D. 12A1\r
• A. a;\r
^Cách tính: Ghép thành các từ 16-bit: 1200, 0100, A000 (thêm 8 bit 0 vào byte cuối). Cộng chúng lại: 1200 + 0100 + A000 = B300. Lấy bù 1 của tổng: NOT(B300) = 4CFF.\`\r
\r
Câu 29: Độ lớn của trường checksum trong gói tin TCP là bao nhiêu bit\r
A. 16\r
B. 64\r
C. 32\r
D. 0\r
• A. a;\r
^Trong phần header của cả TCP và UDP, trường Checksum có độ dài là 16 bit.\`\r
\r
Câu 30: Trong giao thức TCP, bên gửi nhận biết sự tắc nghẽn của mạng bằng cách nào?\r
A. Router bị tắc nghẽn sẽ đánh dấu vào gói tin\r
B. Bên nhận dựa vào độ trễ của gói tin biên nhận ACK\r
C. Khi hết thời gian timeout mà không nhận được gói tin biên nhận ACK hoặc nhận được 3 gói tin ACK trùng lặp\r
D. Router bị tắc nghẽn sẽ gửi thông báo cho bên gửi\r
• C. a;\r
^TCP suy ra có tắc nghẽn khi xảy ra một trong hai sự kiện: hết thời gian chờ (timeout) hoặc nhận được 3 ACK trùng lặp.\`\r
\r
Câu 42: Tầng giao vận (transport layer) gom dữ liệu từ các ứng dụng khác nhau thành một luồng duy nhất trước khi chuyển xuống cho\r
A. Tầng ứng dụng (application layer)\r
B. Tầng liên kết (data link layer)\r
C. Tầng vật lý\r
D. Tầng mạng (network layer)\r
• D. a;\r
^Tầng giao vận nhận dữ liệu từ các ứng dụng, đóng gói thành các segment/datagram và chuyển xuống cho tầng mạng để định tuyến.\`\r
\r
Câu 51: Trong giao thức Go-Back-N có độ lớn cửa sổ là 6, A cần gửi các gói có số thứ tự từ 0 đến 6 tới B. Gói 3 trên đường đến B bị lỗi nên không đến được, phải gửi lại 1 lần. Tính số gói (kể cả ACK từ B) mà A và B đã gửi cho nhau sau khi quá trình gửi kết thúc.\r
A. 17\r
B. 21\r
C. 11\r
D. 25\r
• B. a;\r
^A gửi 0, 1, 2, 3, 4, 5, 6 (7 gói). B nhận 0,1,2, gửi ACK 0,1,2 (3 gói). Gói 3 lỗi. B nhận 4,5,6, gửi ACK 2,2,2 (3 gói). A timeout gói 3, gửi lại 3,4,5,6 (4 gói). B nhận 3,4,5,6, gửi ACK 3,4,5,6 (4 gói). Tổng = 7+3+3+4+4 = 21 gói.\`\r
\r
Câu 52: Được biết ngưỡng (threshold) hiện tại của quá trình kiểm soát tắc nghẽn là 16, hãy xác định giá trị của cửa sổ chống tắc nghẽn (congwin) khi bên gửi đã gửi tổng số 35 segment và nhận đầy đủ số ACK trả về mà không có bất kỳ lỗi nào.\r
A. 17\r
B. 18\r
C. 16\r
D. 19\r
• A. a;\r
^Slow Start: cwnd = 1, 2, 4, 8, 16. Tổng số gói đã gửi = 1+2+4+8+16 = 31.\r
Sau đó chuyển sang Congestion Avoidance.\r
cwnd = 17. Các gói từ 32 đến 35 được gửi khi cwnd=17. Vậy giá trị cwnd là 17.\`\r
\r
Câu 66: Tầng giao vận xử lý vấn đề\r
A. Tất cả lựa chọn đều sai\r
B. Trao đổi thông tin giữa các node\r
C. Trao đổi thông tin giữa các tiến trình (process)\r
D. Trao đổi thông tin giữa các ứng dụng\r
• C. a;\r
^Tầng giao vận cung cấp kênh giao tiếp logic giữa các tiến trình (process) chạy trên các host khác nhau.\`\r
\r
Câu 72: Loại địa chỉ nào trên máy tính đầu cuối mà ứng dụng sử dụng để có thể nhận được dữ liệu từ nơi khác chuyển tới\r
A. IP address\r
B. MAC address\r
C. NIC address\r
D. Port address\r
• D. a;\r
^Ứng dụng sử dụng địa chỉ Port (Port address) để nhận dữ liệu. Địa chỉ IP xác định máy tính, địa chỉ Port xác định ứng dụng cụ thể trên máy tính đó.\`\r
\r
Câu 75: Máy tính A gửi cho máy tính B gói tin TCP thứ nhất có số thứ tự 2000 và độ dài 1000 byte, và gói thứ hai có số thứ tự 3000 và độ dài 200 byte. Máy B chỉ nhận được gói thứ hai. Hỏi sau khi nhận gói thứ hai, B gửi ACK cho A với ACK bằng bao nhiêu?\r
A. 3000\r
B. 3200\r
C. 2000\r
D. 1000\r
• C. a;\r
^Bên nhận B đang chờ byte bắt đầu từ 2000. Khi nhận được gói 2 (seq=3000), nó phát hiện gói 1 bị thiếu và sẽ gửi lại ACK cho byte đang chờ, tức là ACK=2000.\`\r
\r
Câu 81: Tiến trình ứng dụng (application process) được đánh địa chỉ bởi\r
A. Physical address\r
B. Port number\r
C. Địa chỉ IP\r
D. Process number\r
• B. a;\r
^Tầng giao vận sử dụng Port number để xác định một tiến trình ứng dụng cụ thể trên một host.\`\r
\r
Câu 85: Khi sử dụng giao thức TCP, điều gì xảy ra nếu giá trị timeout được thiết lập quá nhỏ?\r
A. Bên gửi sẽ nhận được gói tin ACK sớm hơn\r
B. Bên nhận sẽ nhận được nhiều gói tin TCP trùng lặp\r
C. Bên gửi sẽ phản ứng chậm với việc mất mát gói tin\r
D. Buffer của bên nhận sẽ mau đây hơn\r
• B. a;\r
^Nếu timeout quá nhỏ, bên gửi sẽ cho rằng gói tin đã mất và truyền lại, trong khi gói ACK cho nó có thể vẫn đang trên đường về. Điều này gây ra việc truyền lại không cần thiết và bên nhận sẽ nhận được nhiều gói trùng lặp.\`\r
\r
Câu 95: (đúng sai) Các phát biểu dưới đây đúng hay sai ?\r
A. TCP sẽ tăng cửa sổ tắc nghẽn cũng lên 1 sau mỗi RTT khi ở giai đoạn congestion avoidance\r
B. Ở giai đoạn slowstart, cửa sổ tắc nghẽn (congestion window - cwnd) tăng lên gấp đôi mỗi khi nhận được 1 ACK\r
C. Cả TCP và UDP đều có trường checksum trong phần tiêu đề\r
D. TCP header có thể có nhiều hơn 20 bytes\r
• A. a;\r
^A, C, D đúng. B sai vì cwnd tăng 1 MSS cho mỗi ACK, dẫn đến tăng gấp đôi sau mỗi RTT.\`\r
\r
Câu 96: Hãy xem xét một tình huống trong đó máy A đang truyền dữ liệu cho máy B.\r
\r
Segment đầu tiên A gửi cho B có Sequence Number bằng 10\r
\r
A gửi cho B tổng cộng 3 segments có kích thước tương ứng là: Segment-1: 100 bytes, segment-2: 75 bytes, và segment-3: 90 bytes\r
\r
Việc gửi và nhận 3 gói là diễn ra theo thứ tự và không có lỗi\r
Hỏi: Sequence Number của segment-1, segment-2, segment-3 tương ứng là bao nhiêu?\r
A. 10,110,185\r
B. 10,100,175\r
C. 10,110,200\r
D. 10,15,20\r
• A. a;\r
^Seg-1: seq=10.\r
Seg-2: seq = 10 (seq seg-1) + 100 (len seg-1) = 110.\r
Seg-3: seq = 110 (seq seg-2) + 75 (len seg-2) = 185.\`\r
\r
Câu 99: Trong một gói tin TCP (TCP segment), giá trị ACK number và Sequence Number là các số đếm, phản ánh:\r
A. Không phải D, B, C\r
B. Số thứ tự gói tin (tính theo segment) đang chờ nhận, và số thứ tự gói tin (segment) đang được truyền\r
C. Giá trị cửa sổ nhận và giá trị cửa sổ truyền.\r
D. Số thứ tự (tính theo byte) đang chờ nhận, và số thứ tự tính theo byte, của byte đầu tiên của gói tin đang được truyền\r
• D. a;\r
^Cả Sequence Number và Acknowledgment Number trong TCP đều đếm theo byte. Sequence Number là số thứ tự của byte dữ liệu đầu tiên. Acknowledgment Number là số thứ tự của byte tiếp theo mà bên nhận đang mong đợi.\`\r
\r
Câu 104: A gửi cho B 3 gói TCP có cùng độ dài 200 byte nhưng B chỉ nhận được gói 1 và 3. Biết gói 1 có seq=1000. Hỏi gói ACK B gửi trả A sau khi nhận gói 3 có số ACK là bao nhiêu?\r
A. 1200\r
B. 1600\r
C. 1400\r
D. 1000\r
• A. a;\r
^Sau khi nhận gói 1 (seq=1000, len=200), B mong đợi byte 1200 và gửi ACK=1200. Khi nhận gói 3 (seq=1400), B phát hiện gói 2 bị thiếu nên vẫn gửi lại ACK=1200.\`\r
\r
Câu 105: Trường địa chỉ port trong gói tin TCP có độ dài\r
A. 16 bit\r
B. 32 bit\r
C. 8 bit\r
D. 64 bit\r
• A. a;\r
^Cả Source Port và Destination Port trong TCP header đều có độ dài 16 bit.\`\r
\r
Câu 126: Máy tính A và B truyền dữ liệu qua giao thức TCP. Khi máy tính A nhận định có tắc nghẽn xảy ra trong mạng, máy tính A sẽ\r
A. Giảm tốc độ truyền dữ liệu bằng cách giảm kích thước cửa sổ gửi\r
B. Dừng gửi dữ liệu cho đến khi router báo hết tắc nghẽn\r
C. Dừng gửi dữ liệu cho đến khi máy tính B gửi gói tin ACK báo hết tắc nghẽn\r
D. Tăng tốc độ truyền dữ liệu để bù lại lượng dữ liệu mất mát do tắc nghẽn\r
• A. a;\r
^Khi phát hiện tắc nghẽn, TCP sẽ giảm kích thước cửa sổ gửi (cwnd) để giảm tốc độ đưa dữ liệu vào mạng.\`\r
\r
Câu 130: ACK được sử dụng để làm gì trong giao thức truyền dữ liệu đáng tin cậy (reliable data transfer protocol) ở tầng transport\r
A. Là cơ chế giúp sửa lỗi bit gói tin khi nhận\r
B. Là cơ chế giúp khôi phục gói tin bị mất\r
C. Cả 3 đáp án đều sai\r
D. Là cơ chế thông báo tình trạng nhận gói tin\r
• D. a;\r
^ACK (Acknowledgement) là gói tin xác nhận mà bên nhận gửi cho bên gửi để thông báo rằng nó đã nhận thành công dữ liệu.\`\r
\r
Câu 141: Tầng giao vận (Transport layer) cung cấp một kết nối giữa các\r
A. Process\r
B. Host\r
C. End system\r
D. Router\r
• A. a;\r
^Tầng giao vận chịu trách nhiệm cho việc giao tiếp từ tiến trình này đến tiến trình khác, sử dụng địa chỉ port.\`\r
\r
Câu 148: Đặc điểm của UDP là\r
A. Quảng bá\r
B. Không hướng nối\r
C. Hướng nối\r
D. Tin cậy\r
• B. a;\r
^UDP là một giao thức không hướng nối (connectionless), đơn giản và không đảm bảo tin cậy.\`\r
\r
Câu 151: Tham số cửa sổ tắc nghẽn (cwnd) trong giao thức TCP là một đại lượng nguyên, đo bằng đơn vị\r
A. Số lượng TCP segments\r
B. Số lượng Byte dữ liệu\r
C. Số lượng MSS (number of MSS - Maximum Segment Size)\r
D. Không có đơn vị\r
• C. a;\r
^Giá trị của cwnd quy định số lượng segment có kích thước tối đa (MSS) mà TCP có thể gửi đi trước khi nhận được ACK.\`\r
\r
Câu 160: Gói SYNACK được gửi khi muốn thiết lập kết nối TCP\r
A. Đúng\r
B. Sai\r
C. Tùy trường hợp\r
D. Chỉ đúng khi client khởi tạo\r
• B. a;\r
^Gói tin được gửi để bắt đầu thiết lập kết nối là gói SYN. Gói SYNACK là gói tin phản hồi từ server để chấp nhận kết nối.\`\r
\r
Câu 164: Tại sao phải dùng số thứ tự trong giao thức truyền dữ liệu tin cậy ở tầng transport\r
A. Để thống kê được số gói tin đã gửi đi\r
B. Để thống kê được số gói tin đã nhận được\r
C. Để tránh dữ liệu bị trùng lặp ở phía nhận do gửi lại nhiều lần\r
D. Để tránh việc một gói tin được gửi lại nhiều lần\r
• C. a;\r
^Số thứ tự giúp bên nhận phát hiện gói tin trùng lặp, sắp xếp lại các gói tin bị sai thứ tự, và thông báo cho bên gửi biết gói tin nào đã được nhận.\`\r
\r
Câu 166: A gửi B gói TCP 1 (size=200, seq=120) và gói TCP 2 (size=200). Gói 2 đến trước và được buffer, gói 1 đến sau. Sau khi nhận gói 1, B sẽ trả về ACK có số ACK là bao nhiêu?\r
A. 320\r
B. 122\r
C. 520\r
D. 420\r
• C. a;\r
^Ban đầu, B chờ byte 120. B nhận gói 2 (seq=320) và buffer nó, gửi ACK=120. Sau đó, B nhận gói 1 (seq=120). Vì B đã có sẵn gói 2 trong buffer, nó có thể ghép dữ liệu liền mạch đến byte 519. Do đó, B sẽ gửi ACK cho byte tiếp theo nó mong đợi, là 520.\`\r
\r
Câu 167: Giao thức TCP quy định gói tin sai số thứ tự phải bị xóa bỏ\r
A. Sai\r
B. Đúng\r
C. Tùy phiên bản giao thức TCP\r
D. Tùy vào cấu hình của router\r
• C. a;\r
^Các phiên bản TCP hiện đại (như TCP Reno, SACK) thường sẽ lưu các gói tin sai thứ tự vào bộ đệm thay vì xóa bỏ, để tăng hiệu quả truyền lại.\`\r
\r
Câu 181: (đúng sai) Những phát biểu dưới đây đúng hay sai\r
A. Giao thức TCP có tính chất công bằng (fairness) là nhờ chiến lược điều khiển tắc nghẽn theo kiểu AIMD (Additive Increase Multiplicative Decrease)\r
B. Gỉa sử một mạng có dung lượng là 64 Kbps, thông lượng của kết nối TCP đó ngay lập tức bằng 64Kbps\r
C. Giao thức TCP phát hiện ra gói bị mất nhờ vào trường checksum\r
D. Kích thước phần tiêu đề (header) của TCP là lớn hơn kích thước tiêu đề của UDP\r
• A. a;\r
^A và D đúng. Cơ chế AIMD giúp các kết nối TCP chia sẻ băng thông công bằng. Header TCP (min 20B) lớn hơn UDP (8B). B sai vì TCP có giai đoạn slow start. C sai vì checksum dùng để phát hiện lỗi bit, không phải mất gói.\`\r
\r
CHƯƠG 4: TẦNG MẠNG\r
Câu 6: Dưới đây là bảng NAT translation table của một thiết bị NAT tại thời điểm hiện tại. Trong hai cột của bảng này, một cột là “Internet side” một cột là “Local side”. Nhìn vào nội dung của bảng, hãy ĐOÁN xem cột nào là Internet side, cột nào là Local side.\r
| 136.4.6.7 : 210 | 192.168.10.44 : 4032 |\r
|---|---|\r
| 136.4.6.6 : 801 | 192.168.6.4 : 1005 |\r
| 1.2.3.4 : 986 | 192.168.5.4 : 1108 |\r
\r
Internet side A. Cột 2 B. Cột 1\r
\r
Local side A. Cột 2 B. Cột 1\r
• B. a;\r
^Dải địa chỉ IP 192.168.x.x là địa chỉ IP riêng dùng trong mạng nội bộ (Local side). Do đó cột 2 là Local side. Cột 1 chứa các địa chỉ IP công cộng trên Internet (Internet side).\`\r
\r
Câu 13: Địa chỉ IP 127.0.0.1 là:\r
A. địa chỉ quảng bá lớp A\r
B. địa chỉ broadcast\r
C. địa chỉ multicast\r
D. địa chỉ loopback\r
• D. a;\r
^Địa chỉ 127.0.0.1 là địa chỉ loopback, được sử dụng để một máy tính gửi gói tin cho chính nó, thường dùng để kiểm tra hoạt động của TCP/IP.\`\r
\r
Câu 15: Giao thức nào được sử dụng để cấu hình địa chỉ IP cho client (IP address, netmask, default gateway, DNS server)?\r
A. SNMP\r
B. ARP\r
C. SMTP\r
D. DHCP\r
• D. a;\r
^DHCP (Dynamic Host Configuration Protocol) là giao thức cho phép một server tự động cấp phát các thông số cấu hình mạng cho các client.\`\r
\r
Câu 17: Chọn “Đúng” hoặc “Sai” cho các ý sau về chức năng của router\r
A. Ngăn xung đột\r
B. Lựa chọn tuyến đường\r
C. Chuyển tiếp các gói tin\r
D. Lọc bỏ các gói tin\r
• B. a;\r
^Chức năng chính của router là lựa chọn tuyến đường (B đúng) và chuyển tiếp gói tin (C đúng). Nó không ngăn xung đột (việc của switch) và không lọc gói tin như một firewall.\`\r
\r
Câu 19: Trong biểu diễn nhị phân, đâu là phạm vi của lớp địa chỉ (class) B\r
A. 111…\r
B. 110…\r
C. 10…\r
D. 0…\r
• C. a;\r
^Theo phân lớp địa chỉ IP, lớp B được xác định bởi hai bit đầu tiên là 10.\`\r
\r
Câu 28: NAT giữa một mạng local và mạng Internet làm việc như thế nào\r
A. Dịch địa chỉ IP sang địa chỉ MAC\r
B. Dich Hostname sang IP\r
C. Dịch địa chỉ IP công cộng (public IP) sang địa chỉ IP riêng (private IP) và ngược lại\r
D. Không đáp án nào đúng\r
• C. a;\r
^NAT dịch địa chỉ nguồn/đích của các gói tin khi chúng đi qua ranh giới giữa mạng riêng và mạng công cộng.\`\r
\r
Câu 31: Bộ định tuyến CIDR nhận được gói tin với địa chỉ đích là 131.23.151.76. Bảng định tuyến của nó có các mục sau: 131.16.0.0/12 -> 3; 131.28.0.0/14 -> 5; 131.19.0.0/16 -> 2; 131.22.0.0/15 -> 1. Đinh danh của giao diện mà gói tin sẽ được chuyển tiếp là ?\r
A. 2\r
B. 5\r
C. 1\r
D. 3\r
• C. a;\r
^Router sử dụng nguyên tắc "longest prefix match". Tiền tố 131.22.0.0/15 là tiền tố dài nhất trong bảng khớp với địa chỉ đích 131.23.151.76. Do đó, gói tin được chuyển qua giao diện 1.\`\r
\r
Câu 33: DHCP cung cấp gì cho client\r
A. Không đáp án nào đúng\r
B. Địa chỉ IP\r
C. Địa chỉ MAC\r
D. URL\r
• B. a;\r
^DHCP cung cấp địa chỉ IP và nhiều thông số cấu hình mạng khác như subnet mask, default gateway, DNS server.\`\r
\r
Câu 36: Tham số nào sau đây quyết định khả năng định tuyến (số gói tin định tuyến/1s) của một router?\r
A. Độ lớn của bộ nhớ ở cổng vào (input port)\r
B. Tốc độ xử lý của switching fabric\r
C. Độ lớn của bộ nhớ ở cổng ra (output port)\r
D. Số lượng công vào (input port) và cổng ra (output port)\r
• B. a;\r
^Switching fabric là bộ phận cốt lõi của router, chịu trách nhiệm chuyển các gói tin từ cổng vào sang cổng ra. Tốc độ của nó quyết định trực tiếp đến hiệu suất chuyển tiếp của router.\`\r
\r
Câu 40: Trong quá trình truyền tin từ máy A sang máy B, gói tin lần lượt đi qua 3 môi trường có MTU khác nhau lần lượt là 4980, 1500, 2500 bytes. Hãy cho biết khi gửi 7500 byte dữ liệu từ A đến B thì bên B nhận được bao nhiêu gói tin trước khi ghép mảnh?\r
A. 3\r
B. 6\r
C. 11\r
D. 27\r
• B. a;\r
^Gói 7500 byte dữ liệu (thêm 20B header = 7520B).\r
\r
Qua MTU 4980: Tách thành (4960+20) và (2540+20).\r
\r
Hai mảnh này đến link có MTU 1500.\r
\r
Mảnh 4960B data: Tách thành 3 gói 1480B data và 1 gói 520B data (tổng 4 gói).\r
\r
Mảnh 2540B data: Tách thành 1 gói 1480B data và 1 gói 1060B data (tổng 2 gói).\r
Tổng số mảnh đến B là 4 + 2 = 6 gói.\`\r
\r
Câu 46: Địa chỉ IP của máy tính A là 110.2.112.12/20, địa chỉ IP của máy tính X là 110.2.109.4/20 và địa chỉ IP của máy tính Y là 110.2.105.20/20. Những máy tính nào có cùng địa chỉ mạng (subnet)?\r
A. Máy tính X và máy tính Y\r
B. Cả 3 máy tính\r
C. Máy tính A và máy tính Y\r
D. Máy tính X và máy tính A\r
• A. a;\r
^Với /20, 20 bit đầu phải giống nhau. 110.2. (0110 1001).4 (X) và 110.2.(0110 1001).20 (Y) có cùng 20 bit đầu. 110.2.(0111 0000).12 (A) khác.\`\r
\r
Câu 47: Khi một gói tin rời khỏi mạng, Router NAT thay thế địa chỉ nguồn của gói tin đó bằng\r
A. Địa chỉ IP đích\r
B. Địa chỉ IP của NAT router\r
C. Địa chỉ port đích\r
D. Không đáp án nào đúng\r
• B. a;\r
^Router NAT thay thế địa chỉ IP nguồn (private IP) và port nguồn bằng địa chỉ IP công cộng của chính nó và một port mới.\`\r
\r
Câu 50: Điều nào sau đây đúng với giao thức định tuyến theo thuật toán distance vector ?\r
A. Các bộ định tuyến không trao đổi thông tin với nhau\r
B. Các bộ định tuyến trao đổi distance vector với các nút lân cận (neighbour node)\r
C. Các bộ định tuyến trao đổi bảng định tuyến với nhau\r
D. Các bộ định tuyến sử dụng bảng định tuyến tính\r
• B. a;\r
^Trong thuật toán distance vector, mỗi router định kỳ trao đổi vector khoảng cách (danh sách các khoảng cách đến các mạng đích) của nó với các router hàng xóm trực tiếp.\`\r
\r
Câu 55: Máy tính của Ngân có IP là 17.84.129.73/19, hãy viết địa chỉ Broadcast của mạng IP mà máy tính của Ngân đang tham gia dưới dạng a.b.c.d/x.y.z.t\r
A. 17.84.159.255/255.255.224.0\r
B. 17.84.129.255/255.255.255.0\r
C. 17.84.255.255/255.255.0.0\r
D. 17.84.191.255/255.255.192.0\r
• A. a;\r
^/19 có nghĩa là 19 bit đầu là phần mạng, 13 bit cuối là phần host. Để tìm địa chỉ broadcast, ta giữ nguyên 19 bit đầu và đặt tất cả 13 bit cuối thành 1.\r
17.84.10000001.01001001 -> 17.84.10011111.11111111 -> 17.84.159.255.\`\r
\r
Câu 59: Router A chỉ có 2 node hàng xóm là router B và router C, với chi phí của kết nối từ A đến B và C lần lượt là 2 và 5, B gửi cho A bảng distance vector của mình, trong đó khoảng cách ngắn nhất đến node X từ B được thiết lập là 5. C gửi cho A bảng distance vector của mình, trong đó khoảng cách ngắn nhất đến node X từ C được thiết lập là 3. Hỏi router A sẽ ước lượng khoảng cách ngắn nhất từ A đến X bằng bao nhiêu?\r
A. 8\r
B. 5\r
C. 7\r
D. 2\r
• C. a;\r
^Theo phương trình Bellman-Ford: D_A(X) = min{c(A,B)+D_B(X), c(A,C)+D_C(X)} = min{2+5, 5+3} = min{7, 8} = 7.\`\r
\r
Câu 63: Trong thuật toán định tuyến distance vector, mỗi node trao đổi distance vector của nó với\r
A. Các node hàng xóm và các node lân cận node hàng xóm\r
B. Không trao đổi với ai\r
C. Các node hàng xóm\r
D. Toàn bộ node trên mạng\r
• C. a;\r
^Mỗi router chỉ trao đổi thông tin định tuyến với các router được kết nối trực tiếp với nó (hàng xóm).\`\r
\r
Câu 64: Giao thức DHCP cung cấp cho client\r
A. Địa chỉ IP khi client kết nối vào mạng\r
B. Tất cả đáp án đều đúng\r
C. Tên và địa chỉ IP của DNS Server\r
D. Địa chỉ IP của router đầu tiên trong mạng (first hop router)\r
• B. a;\r
^DHCP có thể cung cấp tất cả các thông số trên cho client.\`\r
\r
Câu 69: Một con số 32 bit, được sử dụng cùng địa chỉ IP của thiết bị để xác định địa chỉ mạng (subnet) của thiết bị là.\r
A. ARP address\r
B. MAC address\r
C. DNS mask\r
D. subnet mask\r
• D. a;\r
^Subnet mask là một số 32-bit được sử dụng để chia một địa chỉ IP thành phần mạng và phần host.\`\r
\r
Câu 73: Câu nói nào là đúng?\r
A. Subnet mask chỉ được sử dụng ở lớp địa chỉ (class) A và B\r
B. Các máy tính đầu cuối luôn có subnet mask\r
C. Subnet mask được gán cho các thiết bị ở lớp địa chỉ (class) A\r
D. Các thiết bị được gán cho một subnet mask chỉ khi chúng thuộc về cùng một mạng con\r
• B. a;\r
^Mọi thiết bị có địa chỉ IP trên mạng TCP/IP đều phải có một subnet mask tương ứng để xác định mạng mà nó thuộc về.\`\r
\r
Câu 80: Router là thiết bị ở tầng\r
A. Ứng dụng\r
B. Liên kết dữ liệu\r
C. Giao vận\r
D. Mạng\r
• D. a;\r
^Router là thiết bị cốt lõi của tầng mạng (Network Layer - Tầng 3).\`\r
\r
Câu 83: Giao thức nào dưới đây là giao thức định tuyến kiểu trạng thái liên kết (link-state routing)?\r
A. BGP\r
B. RIP\r
C. ICMP\r
D. OSPF\r
• D. a;\r
^OSPF (Open Shortest Path First) là giao thức định tuyến link-state. RIP và BGP là giao thức distance-vector.\`\r
\r
Câu 93: Giao thức tự động gán địa chỉ IP cho máy tính\r
A. FTP\r
B. DHCP\r
C. WINS\r
D. NAT\r
• B. a;\r
^DHCP (Dynamic Host Configuration Protocol) là giao thức được thiết kế để tự động hóa việc cấp phát địa chỉ IP.\`\r
\r
Câu 98: 1 gói tin IP có độ dài 2000 byte, độ dài tiêu đề là 20 byte. Gói tin này được truyền qua một liên kết vật lý có MTU là 500 byte và bị phân mảnh. Hỏi giá trị của trường offset của mảnh thứ 2 là bao nhiêu?\r
A. 125\r
B. 60\r
C. 100\r
D. 40\r
• B. a;\r
^Mảnh 1 chứa 480 byte dữ liệu (500 MTU - 20 header). Offset của mảnh 2 = (lượng dữ liệu của mảnh 1) / 8 = 480 / 8 = 60.\`\r
\r
Câu 101: Hãy tìm câu trả lời không chính xác liên quan đến DHCP\r
A. DHCP có thể trả lại địa chỉ của Default gateway (địa chỉ router đầu tiên)\r
B. DHCP hoạt động ở tầng ứng dụng trong mô hình Internet\r
C. Địa chỉ đích của gói tin DHCP Reply là 255.255.255.255\r
D. DHCP có thể sử dụng để truyền tin quảng bá\r
• C. a;\r
^Gói tin DHCP Reply (thực ra là DHCP Offer và DHCP ACK) được gửi dưới dạng broadcast (255.255.255.255). Phát biểu C có thể không chính xác vì không có gói tin tên là "DHCP Reply", nhưng hành vi broadcast là đúng. Tuy nhiên, DHCP Request cũng là broadcast, không phải unicast.\`\r
\r
Câu 110: Bảng định tuyến của router A có các dòng được liệt kê như bên dưới, hãy cho biết nếu một gói tin có địa chỉ đích là 203.113.119.1 thì dòng nào sẽ được chọn để định tuyến cho gói tin đó\r
A. Destination 203.113.0.0/16 → Gateway 193.168.10.1\r
B. Destination 203.113.128.0/17 → Gateway 14.8.10.1\r
C. Destination 203.113.64.0/18 - Gateway 113.57.10.1\r
D. Destination 203.113.192.0/18 Gateway 200.176.10.1\r
• C. a;\r
^Áp dụng nguyên tắc "longest prefix match". Tiền tố 203.113.64.0/18 là tiền tố dài nhất trong bảng khớp với địa chỉ đích 203.113.119.1.\`\r
\r
Câu 113: Lợi ích của việc mạng nội bộ dùng NAT là\r
A. Chỉ cần sử dụng một địa chỉ IP cho tất cả các thiết bị trong mạng\r
B. Có thể thay đổi ISP một cách dễ dàng mà không cần thay đổi địa chỉ IP của các thiết bị trong mạng\r
C. Các thiết bị trong mạng có thể gửi trực tiếp data cho nhau mà không cần địa chỉ IP\r
D. Cả A và B đều đúng\r
• D. a;\r
^NAT cho phép nhiều thiết bị dùng chung 1 IP công cộng và giúp việc thay đổi ISP trở nên dễ dàng hơn vì không cần cấu hình lại IP cho các máy nội bộ.\`\r
\r
Câu 118: Cho sơ đồ mạng sau: R1->subnet A->R2->subnet B->H. Gói tin P có kích cỡ 2000 bytes (gồm tiêu đề và dữ liệu) được gửi từ R1 đến H. MTU của subnet A và B lần lượt là 1500 và 532 bytes. Kích cỡ tiêu đề IP là 20bytes. Khi P đi qua subnet A, P được chia thành 2 mảnh với bit M (fragflag) và offset lần lượt như sau:\r
A. M=1, offset=0; M=0, offset=185\r
B. M=1, offset=0; M=0, offset=1481\r
C. M=0, offset=0; M=1, offset=1480\r
D. M=1, offset=0; M=0, offset=1480\r
• A. a;\r
^Mảnh 1: size=1500, data=1480. M=1 (còn mảnh sau), offset=0.\r
Mảnh 2: data còn lại = (2000-20)-1480 = 500. size=520. M=0 (mảnh cuối). offset = 1480/8 = 185.\`\r
\r
Câu 121: Hiện tượng mất dữ liệu (loss) xảy ra trên mạng truyền dữ liệu (data networks) chủ yếu do nguyên nhân nào?\r
A. Mất gói tin do vượt quá giá trị TTL (Time To Live)\r
B. Cả D, C, A\r
C. Mất gói tin do tràn bộ đệm\r
D. Mất gói tin do lỗi bit trên đường truyền\r
• C. a;\r
^Trong các mạng chuyển mạch gói hiện đại, nguyên nhân chính gây mất gói tin là do bộ đệm (buffer) tại các router bị đầy khi có tắc nghẽn, khiến các gói tin đến sau bị loại bỏ (dropped).\`\r
\r
Câu 131: Địa chỉ IPv4 có bao nhiêu bit\r
A. 8\r
B. 32\r
C. 128\r
D. 64\r
• B. a;\r
^Địa chỉ IPv4 có độ dài 32 bit.\`\r
\r
Câu 135: OSPF là giao thức nào dưới đây?\r
A. Giao thức định tuyến trong mạng chuyển mạch ảo (Virtual circuit routing)\r
B. Giao thức định tuyến trong mạng LAN\r
C. Giao thức định tuyến trong miền tự trị (intra AS)\r
D. Giao thức định tuyến giữa các miền tự trị (inter AS)\r
• C. a;\r
^OSPF là một giao thức định tuyến nội miền (Intra-AS hoặc Interior Gateway Protocol - IGP).\`\r
\r
Câu 137: Một router nhận một gói tin IP có độ dài phần dữ liệu là 1000 byte và định tuyến gói tin này qua một liên kết mạng có MTU là 500 byte. Gói tin IP không có trường option. Trường length của gói bé nhất có giá trị bao nhiêu ?\r
A. 80\r
B. 60\r
C. 40\r
D. 20\r
• B. a;\r
^Dữ liệu 1000 byte. Header 20 byte.\r
\r
Mảnh 1: data 480B, size 500B.\r
\r
Mảnh 2: data 480B, size 500B.\r
\r
Mảnh 3: data còn lại 40B, size 60B.\r
Gói bé nhất có trường length là 60.\`\r
\r
Câu 138: Cơ cấu chuyển mạch (switching fabric) nào sau đây có tốc độ xử lý gói tin nhanh nhất ? Biết tốc độ xử lý của các đường bus là như nhau.\r
A. Kiểu cross-bar\r
B. Kiểu memory\r
C. Kiểu store-and-forward\r
D. Kiểu bus\r
• A. a;\r
^Về tốc độ, memory < bus < crossbar. Crossbar cho phép nhiều gói tin được chuyển mạch song song, mang lại hiệu suất cao nhất.\`\r
\r
Câu 140: Một máy tính có địa chỉ IP là 192.168.1.2 và Subnet mask là 255.255.255.0. Mạng này có thể có tối đa bao nhiêu máy tính có địa chỉ IP riêng (chú ý phần host không thể gồm toàn 0 hoặc toàn 1)\r
A. 254\r
B. 255\r
C. 8\r
D. 256\r
• A. a;\r
^Subnet mask 255.255.255.0 có 8 bit dành cho phần host. Số địa chỉ tối đa = 2^8 - 2 = 256 - 2 = 254 (trừ địa chỉ mạng và địa chỉ broadcast).\`\r
\r
Câu 144: Bảng thông tin chuyển tiếp của một bộ định tuyến như sau. Bộ định tuyến nhận được ba gói tin IPv4 từ máy 10.10.10.1 gửi lần lượt đến các máy 192.168.1.1, 172.16.2.9, 172.5.16.1. Khi đó các gói tin này sẽ được gửi tới các cổng ra tương ứng của bộ định tuyến:\r
| Destination | Output port |\r
|---|---|\r
| 192.168.1.0/24 | A |\r
| 192.168.1.0/30 | B |\r
| 172.16.0.0/16 | C |\r
| 172.16.2.0/24 | D |\r
| 172.16.2.128/25 | E |\r
| 0.0.0.0/0 | F |\r
A. B, D, F\r
B. A, E, F\r
C. B, D, E\r
D. A, C, F\r
• A. a;\r
^1. 192.168.1.1 khớp với /30 (longest match) -> B.\r
2. 172.16.2.9 khớp với /24 (longest match) -> D.\r
3. 172.5.16.1 không khớp với entry nào cụ thể, sẽ đi theo default route 0.0.0.0/0 -> F.\`\r
\r
Câu 152: Chọn một phát biểu chính xác nhất\r
A. RIP là giao thức routing phân cấp (hierarchical routing protocol)\r
B. OSPF là Inter-domain routing\r
C. Routing trên mạng Internet là kết hợp của các giao thức Inter-domain and Intra-domain\r
D. Giao thức định tuyến BGP sử dụng thuật toán routing Dijkstra\r
• C. a;\r
^Việc định tuyến trên Internet là sự kết hợp giữa các giao thức định tuyến nội miền (Intra-domain, ví dụ OSPF, RIP) và liên miền (Inter-domain, ví dụ BGP).\`\r
\r
Câu 158: Câu nào diễn đạt đúng về giao thức IP?\r
A. IP là giao thức không hướng nối (connectionless oriented)\r
B. IP là giao thức đảm bảo thời gian thực\r
C. IP là giao thức tin cậy\r
D. IP là giao thức hướng nối (connection oriented)\r
• A. a;\r
^Giao thức IP (Internet Protocol) cung cấp dịch vụ chuyển phát "best-effort", không hướng nối.\`\r
\r
Câu 173: Ý nào dưới đây không đúng về giao thức OSPF\r
A. OSPF sử dụng thuật toán định tuyến link-state\r
B. OSPF mã hóa các OSPF message\r
C. OSPF không cho phép chọn nhiều path có cost giống nhau\r
D. OSPF hỗ trợ định tuyến phân cấp\r
• C. a;\r
^OSPF cho phép cân bằng tải trên nhiều đường đi có chi phí bằng nhau (Equal-Cost Multi-Path - ECMP).\`\r
\r
Câu 179: Địa chỉ IP loopback là\r
A. 127.0.0.1\r
B. 192.168.1.1\r
C. 10.10.10.10\r
D. 255.255.255.255\r
• A. a;\r
^127.0.0.1 là địa chỉ loopback tiêu chuẩn cho IPv4.\`\r
\r
Câu 182: Một nút mạng có thông số về địa chỉ IP như sau: 194.12.2.179/255.255.255.240. Xác định số hiệu của Subnet mà host này thuộc vào và host number của nút mạng:\r
A. Subnet 176, host number 11\r
B. Subnet 11110000, host number 179\r
C. Subnet 10110000, host number 179\r
D. Subnet 11110000, host number 11\r
• A. a;\r
^Subnet mask 255.255.255.240 (/28). Địa chỉ Subnet = 194.12.2.179 AND 255.255.255.240 = 194.12.2.176. Host number là phần còn lại trong subnet, 179 - 176 = 3 (nhưng câu hỏi có thể diễn giải khác). Trong các đáp án, A có Subnet 176 là đúng.\`\r
\r
CHƯƠNG 5: TẦNG LIÊN KẾT DỮ LIỆU\r
Câu 12: Chọn kết luận sát thực tế nhất về “Độ dài lớn nhất của một frame trong chuẩn 802.3 (Ethernet)” là\r
A. 1518\r
B. 1230\r
C. 1021\r
D. 2048\r
• A. a;\r
^Một frame Ethernet tiêu chuẩn có độ dài lớn nhất là 1518 bytes, bao gồm 14B header + 1500B payload + 4B trailer (FCS).\`\r
\r
Câu 18: (đúng sai) Lựa chọn các chức năng của switch\r
A. đánh địa chỉ IP\r
B. tránh các vòng lặp\r
C. forwarding và lọc frame theo MAC\r
D. học địa chỉ MAC\r
• B. a;\r
^Switch có chức năng học địa chỉ MAC, chuyển tiếp và lọc frame dựa trên MAC, và tránh các vòng lặp bằng STP. Nó không đánh địa chỉ IP.\`\r
\r
Câu 21: Hai máy tính A (IP: 10.10.0.1/24) và B (IP: 172.16.0.1/24) có thể trao đổi dữ liệu với nhau bình thường. Khi tầng Application từ A cần gửi thông tin đến tầng Application của B, bên trong khung tin (frame) đi ra từ tầng liên kết dữ liệu (data link) của máy A gửi đến máy B sẽ chứa\r
A. MAC của A, MAC của B, IP của A, IP của B\r
B. MAC của A, IP của A, IP của B\r
C. MAC của B, IP của A, IP của B\r
D. MAC của A, MAC của B.\r
• B. a;\r
^Vì A và B ở hai mạng khác nhau, frame từ A sẽ được gửi đến router. Frame này chứa địa chỉ IP nguồn của A, IP đích của B, MAC nguồn của A, và MAC đích của router.\`\r
\r
Câu 25: Câu nào diễn đạt đúng về switch?\r
A. tạo ra nhiều miền collision và nhiều miền broadcast\r
B. tạo ra một miền collision và nhiều miền broadcast\r
C. tạo ra nhiều miền collision và một miền broadcast\r
D. tạo ra một miền collision và một miền broadcast\r
• C. a;\r
^Mỗi cổng của switch là một miền xung đột (collision domain) riêng biệt. Tuy nhiên, tất cả các cổng của switch theo mặc định thuộc cùng một miền quảng bá (broadcast domain).\`\r
\r
Câu 27: Các chức năng của link layer được thực hiện ở đâu trong host\r
A. Network interface card (card mạng) và hệ điều hành\r
B. Hệ điều hành\r
C. Bộ nhớ\r
D. Network interface card (card mạng)\r
• D. a;\r
^Phần lớn các chức năng của tầng liên kết dữ liệu (và tầng vật lý) được triển khai trong phần cứng của card mạng (NIC).\`\r
\r
Câu 38: Giao thức nào biết được địa chỉ MAC của một nút mạng, sau đó tạo ra cơ sở dữ liệu lưu tạm thời ánh xạ địa chỉ IP - địa chỉ MAC\r
A. DNS\r
B. IP\r
C. ARP\r
D. RARP\r
• C. a;\r
^ARP (Address Resolution Protocol) phân giải địa chỉ IP thành địa chỉ MAC và lưu kết quả vào cache (ARP table). RARP làm ngược lại.\`\r
\r
Câu 48: Card mạng Ethernet làm gì khi xảy ra xung đột\r
A. Tiếp tục truyền\r
B. Đợi 10 phút rồi truyền lại từ đầu\r
C. Đợi 2 phút rồi truyền tiếp\r
D. Dừng truyền ngay lập tức\r
• D. a;\r
^Khi phát hiện xung đột, card mạng Ethernet sẽ ngay lập tức ngừng truyền và thực hiện thuật toán backoff.\`\r
\r
Câu 53: Một mạng LAN hình trạng bus có chiều dài 2km. Tốc độ lan truyền tín hiệu 2 x 10^8 m/s. Tốc độ truyền dữ liệu 10^7 bps. Trong CSMA/CD, để đảm bảo mọi đụng độ đều có thể được phát hiện, kích cỡ nhỏ nhất của khung tin nên là ?\r
A. 100 bytes\r
B. 25 bytes\r
C. 200 bytes\r
D. 50 bytes\r
• B. a;\r
^T_trans >= 2 * T_prop. T_prop = 2000m / (2*10^8 m/s) = 10^-5 s.\r
Frame_size / 10^7 bps >= 2 * 10^-5 s => Frame_size >= 200 bits = 25 bytes.\`\r
\r
Câu 54: Hub là thiết bị truyền tin?\r
A. Cả ba lựa chọn kia\r
B. Quảng bá\r
C. Điểm tới điểm\r
D. Đa điểm.\r
• B. a;\r
^Hub là một thiết bị tầng 1, nó lặp lại tín hiệu nhận được ở một cổng ra tất cả các cổng khác, hoạt động như một thiết bị quảng bá.\`\r
\r
Câu 61: Topo mạng nào gồm 1 cáp mạng nối tất cả các nút trên mạng\r
A. Bus\r
B. Ring\r
C. Star\r
D. ring-star\r
• A. a;\r
^Topo mạng Bus sử dụng một đường trục cáp chính để kết nối tất cả các thiết bị trên mạng.\`\r
\r
Câu 67:(đúng sai) Các diễn đạt dưới đây về một địa chỉ Ethernet lớp 2 là “Đúng” hay “Sai”\r
A. Được gọi là địa chỉ vật lý\r
B. Địa chỉ này sẽ thay đổi khi thiết bị di chuyển từ subnet này sang subnet khác\r
C. Địa chỉ được thể hiện bởi 4 khối, mỗi khối là một chuỗi 12 bit nhị phân\r
D. Có chiều dài 48 bit\r
• A. a;\r
^Địa chỉ Ethernet/MAC là địa chỉ 48 bit, được gọi là địa chỉ vật lý và không thay đổi khi di chuyển mạng. Nó có 6 khối, mỗi khối 8 bit.\`\r
\r
Câu 68: (đúng sai) Đánh dấu “Đúng” hoặc “Sai” cho các ý sau khi một máy tính A di chuyển từ subnet này sang subnet khác\r
A. Địa chỉ default gateway lưu trên máy A phải giữ nguyên\r
B. Máy A vẫn hoạt động với địa chỉ MAC cũ\r
C. Các ứng dụng chạy trên máy A cần phải được gắn thêm địa chỉ port\r
D. Địa chỉ IP của máy A phải được gán lại\r
• B. a;\r
^Khi di chuyển sang subnet khác, địa chỉ MAC không đổi, nhưng địa chỉ IP và default gateway phải được gán lại cho phù hợp với mạng mới.\`\r
\r
Câu 70: Cho 2 byte dữ liệu dưới dạng mã hexa A0B1. Tính 3-bit CRC của 2 byte dữ liệu đó biết rằng CRC generator G dưới dạng nhị phân là 1001.\r
A. 110\r
B. 011\r
C. 101\r
D. 001\r
• A. a;\r
^Thực hiện phép chia đa thức (XOR) của dữ liệu (đã thêm 3 bit 0) cho đa thức sinh G. Phần dư của phép chia là 110.\`\r
\r
Câu 76: Thiết bị kết nối mạng nào cho phép nhiều nút đồng thời cùng gửi và nhận trên các segment mạng khác nhau\r
A. Repeater\r
B. Switch\r
C. Hub\r
D. Amplifier\r
• B. a;\r
^Switch tạo ra các kết nối điểm-điểm ảo, cho phép nhiều cặp thiết bị truyền thông đồng thời mà không gây xung đột.\`\r
\r
Câu 82: Phát biểu nào dưới đây về địa chỉ MAC là không đúng\r
A. Địa chỉ MAC có chiều dài 48 bit\r
B. Địa chỉ MAC được cấp phát thông qua giao thức ARP\r
C. Địa chỉ MAC được sử dụng để gửi frame ở trong mạng nội bộ\r
D. Địa chỉ MAC được biểu diễn sử dụng hệ “hexa”\r
• B. a;\r
^Địa chỉ MAC được nhà sản xuất gán cố định. ARP chỉ dùng để tìm ra địa chỉ MAC, không phải để cấp phát.\`\r
\r
Câu 86:(Đúng sai) Các diễn đạt dưới đây về phương pháp xác định lỗi bít “single bit parity” ở tầng liên kết là “Đúng” hay “Sai”\r
A. Bit 1 được thêm vào cuối cùng sao cho tổng số bit 1 thu được là số lẻ\r
B. Bit 0 được thêm vào đầu sao cho tổng số bit 0 tạo thành là số lẻ\r
C. Bit 1 được thêm vào cuối cùng sao cho tổng số bit 1 thu được là số chẵn\r
D. Bit 0 được thêm vào đầu sao cho tổng số bit 0 tạo thành là số chẵn\r
• A. a;\r
^Trong phương pháp parity bit lẻ (odd parity), bit parity được thêm vào để tổng số bit 1 là một số lẻ. Tương tự với parity chẵn (even parity). Cả A và C đều là các phương pháp hợp lệ.\`\r
\r
Câu 87: Các phát biểu sau về CSMA, phát biểu nào sai\r
A. Node sẽ không truyền frame nếu kênh truyền đang bận\r
B. Node dừng truyền frame ngay khi xung đột truy nhập kênh (collision) xảy ra\r
C. Node muốn gửi dữ liệu sẽ cảm nhận sóng mang trên kênh trước khi truyền\r
D. Xung đột có thể xảy ra do trễ lan truyền tín hiệu trên kênh\r
• B. a;\r
^CSMA (Carrier Sense Multiple Access) chỉ có cơ chế lắng nghe kênh trước khi truyền. Nó không có cơ chế phát hiện xung đột (Collision Detection - CD). Do đó, khi xung đột xảy ra, nó vẫn tiếp tục truyền hết gói tin.\`\r
\r
Câu 88: Giao thức dùng để tìm địa chỉ MAC nếu biết IP\r
A. ARP\r
B. SSH\r
C. DHCP\r
D. Telnet\r
• A. a;\r
^ARP (Address Resolution Protocol) được sử dụng để ánh xạ địa chỉ IP sang địa chỉ MAC.\`\r
\r
Câu 89: Frame là dữ liệu được trao đổi ở tầng\r
A. Transport\r
B. Datalink\r
C. Network\r
D. Physical\r
• B. a;\r
^Frame (khung tin) là đơn vị dữ liệu của tầng liên kết dữ liệu (Datalink Layer).\`\r
\r
Câu 90: Cho dữ liệu D= 100000, đa thức sinh G= 101. Mã CRC sẽ là :\r
A. 11\r
B. 10\r
C. 00\r
D. 01\r
• B. a;\r
^Thực hiện phép chia đa thức (XOR) của 10000000 (D đã thêm 2 bit 0) cho 101. Phần dư là 10.\`\r
\r
Câu 92: Tốc độ của Gigabit Ethernet là bao nhiêu\r
A. 1000 Mb/s\r
B. 10 Mb/s\r
C. 1 Mb/s\r
D. 100 Mb/s\r
• A. a;\r
^Gigabit Ethernet có tốc độ danh định là 1 Gigabit mỗi giây (Gbps), tương đương 1000 Megabit mỗi giây (Mbps).\`\r
\r
Câu 100: Switch là thiết bị ở tầng\r
A. Giao vận\r
B. Ứng dụng\r
C. Mạng\r
D. Liên kết dữ liệu\r
• D. a;\r
^Switch (Layer 2) là thiết bị hoạt động ở tầng liên kết dữ liệu, chuyển tiếp frame dựa trên địa chỉ MAC.\`\r
\r
Câu 106: Trong mạng cục bộ Ethernet, điều nào sau đây là đúng?\r
A. Bên gửi vẫn tiếp tục gửi khung tin sau khi nghe được đụng độ\r
B. Tín hiệu đụng độ được dùng để bổ trợ cho các khung tin với kích cỡ nhỏ\r
C. Bên gửi dừng nghe đường truyền khi bắt đầu gửi khung tin\r
D. Thời gian chờ thay đổi theo thuật toán exponential backoff làm giảm xác suất đụng độ khi truyền lại\r
• D. a;\r
^Khi xung đột xảy ra, các nút sử dụng thuật toán exponential backoff để tính toán một khoảng thời gian chờ ngẫu nhiên trước khi thử truyền lại, giúp giảm xác suất tái xung đột.\`\r
\r
Câu 108: Những trường nào có trong header của frame Ethernet?\r
A. authentication code\r
B. source and destination hardware addresses\r
C. error correction code\r
D. source and destination network addresses\r
• B. a;\r
^Header của frame Ethernet II chứa địa chỉ MAC nguồn và đích, là các địa chỉ phần cứng (hardware addresses).\`\r
\r
Câu 109: Ba hình trang mạng được dùng phổ biến để nối kết các máy tính là: đường thẳng (bus), hình sao (Star with Switch), mạng vòng (ring). Theo anh/chị, trong trường hợp nào sau đây khi một máy tính truyền tin thì các máy khác đều có thể nhận được?\r
A. Star with Switch và Ring\r
B. Star with Switch và Star\r
C. Ring và Bus\r
D. Star with Switch\r
• C. a;\r
^Trong topo Bus, tín hiệu được truyền trên toàn bộ đường trục. Trong topo Ring, tín hiệu được truyền lần lượt qua từng nút cho đến khi về lại nút gửi. Cả hai trường hợp đều cho phép các máy khác nhận được tin.\`\r
\r
Câu 114: Ưu điểm của thiết bị hub so với thiết bị switch (layer 2) là gì?\r
A. Đơn giản, dễ chế tạo\r
B. Có khả năng định tuyến ở tầng IP\r
C. Có khả năng kết nối các cổng LAN có tốc độ truyền khác nhau\r
D. Phân chia mạng LAN thành các miền xung đột khác nhau\r
• A. a;\r
^Hub có cấu tạo và nguyên lý hoạt động rất đơn giản (chỉ lặp lại tín hiệu) nên nó rẻ và dễ chế tạo hơn switch.\`\r
\r
Câu 122: Trong một mạng LAN có cài đặt một switch nối với một router. Router được tích hợp chức năng DHCP và DNS. Một máy tính C được cấu hình sử dụng DHCP. Khi C truy vấn tên miền www.vnexpress.net đã được cache tại DNS nội bộ. Câu nào chính xác nhất?\r
A. Sau khi C cắm vào switch, ARP được kích hoạt, sau đó DHCP, sau đó DNS.\r
B. Sau khi C cắm vào switch, DHCP được kích hoạt, sau đó DNS được kích hoạt ở tầng ứng dụng khiến cho ARP được kích hoạt ở tầng datalink.\r
C. Sau khi C cắm vào switch, DHCP được kích hoạt, sau đó ARP, sau đó DNS.\r
D. Sau khi C cắm vào switch, DNS được kích hoạt, sau đó DHCP, sau đó ARP.\r
• B. a;\r
^Thứ tự đúng là: 1. DHCP để lấy địa chỉ IP. 2. Client muốn gửi truy vấn DNS đến router, nhưng chưa biết MAC của router, nên phải dùng ARP để tìm MAC. 3. Gửi truy vấn DNS.\`\r
\r
Câu 123: Giao thức nào gửi yêu cầu quảng bá (broadcast) và nhận phản hồi đơn điểm (unicast):\r
A. ARP\r
B. CSMA/CD\r
C. TCP\r
D. ICMP\r
• A. a;\r
^ARP gửi một ARP Request dưới dạng broadcast để hỏi địa chỉ MAC. Host có IP tương ứng sẽ trả lời bằng một ARP Reply dưới dạng unicast.\`\r
\r
Câu 134: Phát biểu nào dưới đây không đúng về thiết bị switch\r
A. Switch sử dụng forwarding table để forward frame\r
B. Switch hoạt động ở tầng vật lý\r
C. Switch hoạt động theo cơ chế store và forward\r
D. Switch xây dựng forwarding table theo cơ chế tự học\r
• B. a;\r
^Switch hoạt động ở tầng liên kết dữ liệu (Tầng 2).\`\r
\r
Câu 139: Máy tính A gửi 1 gói tin IP cho máy tính B không nằm cùng một subnet. Hỏi khung tin (frame) của layer 2 chứa gói tin IP khi gửi đi sẽ có địa chỉ MAC đích là địa chỉ nào?\r
A. Địa chỉ MAC của máy tính A\r
B. Địa chỉ MAC của máy tính B\r
C. Địa chỉ MAC FF-FF-FF-FF\r
D. Địa chỉ MAC của router\r
• D. a;\r
^Khi đích ở mạng khác, frame sẽ được gửi đến default gateway (router), do đó MAC đích là của router.\`\r
\r
Câu 142: Phát biểu nào sau đây không chính xác về giao thức ARP\r
A. ARP hoạt động dựa trên ARP table\r
B. ARP không sử dụng phương thức truyền broadcast trong LAN\r
C. ARP là giao thức hoạt động theo kiểu Request/reply\r
D. ARP phân giải địa chỉ IP ra địa chỉ MAC\r
• B. a;\r
^ARP Request là một thông điệp broadcast.\`\r
\r
Câu 145: Máy tính A muốn gửi 1 gói tin IP cho máy tính B có địa chỉ IP cho trước nhưng không biết địa chỉ MAC của máy tính B. Máy tính A sẽ\r
A. Gửi gói tin IP đi với địa chỉ MAC đích là FF:FF:FF:FF\r
B. Gửi gói tin IP đi với địa chỉ MAC đích là 00:00:00:00\r
C. Gửi truy vấn DNS để biết địa chỉ MAC của máy tính B\r
D. Sử dụng giao thức ARP để truy vấn địa chỉ MAC của máy tính B\r
• D. a;\r
^Nếu B ở cùng subnet, A sẽ dùng ARP để tìm MAC của B. Nếu B ở khác subnet, A sẽ dùng ARP để tìm MAC của router.\`\r
\r
Câu 153: CSMA/CD thuộc kiểu giao thức truy cập môi trường nào\r
A. Random Access\r
B. Taking turn\r
C. Channel Partitioning\r
D. Cả 3 loại trên\r
• A. a;\r
^CSMA/CD là một giao thức truy cập ngẫu nhiên, nơi các nút có thể truyền bất cứ lúc nào sau khi lắng nghe kênh rỗi.\`\r
\r
Câu 155: Máy tính A gửi cho máy tính B dữ liệu là chuỗi bit 11010. Tìm mã kiểm tra lỗi CRC biết biết máy tính A sử dụng đa thức sinh (generator) là 101\r
A. 01\r
B. 10\r
C. 11\r
D. 00\r
• A. a;\r
^Thực hiện phép chia đa thức (XOR) của 1101000 (D đã thêm 2 bit 0) cho 101. Phần dư là 01.\`\r
\r
Câu 163: Trong giao thức CSMA/CD, nếu 2 máy tính cùng đồng thời truyền 2 khung tin vào môi trường truyền thì 2 máy tính này sẽ\r
A. Phát hiện được xung đột và ngừng truyền dữ liệu ngay lập tức\r
B. Chỉ phát hiện được xung đột sau khi nhận được gói tin biên nhận ACK\r
C. Tăng mức năng lượng của tín hiệu truyền để giảm nguy cơ bị lỗi do xung đột xảy ra\r
D. Gửi cảnh báo xung đột cho nhau và tiếp tục truyền\r
• A. a;\r
^Khi phát hiện xung đột, các nút sẽ ngay lập tức ngừng truyền, gửi tín hiệu jam, và thực hiện thuật toán backoff.\`\r
\r
Câu 168: Phương pháp đa truy cập nào dưới đây không thuộc nhóm giao thức “truy cập ngẫu nhiên (random access)\r
A. FDMA\r
B. CSMA/CD\r
C. ALOHA\r
D. CSMA\r
• A. a;\r
^FDMA (Frequency-Division Multiple Access) thuộc nhóm phân chia kênh (Channel Partitioning).\`\r
\r
Câu 175: Tầng datalink sử dụng …. để chuyển gói tin đến đích\r
A. Địa chỉ IP\r
B. Cổng\r
C. Tên máy tính\r
D. Địa chỉ MAC\r
• D. a;\r
^Trong một mạng LAN, tầng datalink sử dụng địa chỉ MAC để chuyển tiếp frame.\`\r
\r
Câu 180: Địa chỉ MAC có chiều dài\r
A. 48 bit\r
B. 32 bit\r
C. 16 bit\r
D. 64 bit\r
• A. a;\r
^Địa chỉ MAC là một địa chỉ 48-bit.\``;export{n as default};
