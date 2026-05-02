

### Mục Tiêu Tuần 1

* Chốt yêu cầu chức năng và các tiêu chuẩn phi chức năng (NFR) cho ứng dụng Spendwise[cite: 1].
* Khởi tạo chiến lược quản lý hạ tầng bằng Terraform (S3 backend/State strategy)[cite: 1].
* Thiết lập nền móng hạ tầng mạng cơ bản trên AWS bao gồm VPC, Security Groups, ALB và ECR[cite: 1].

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | - Phân tích yêu cầu Spendwise <br>&emsp; + Chốt tính năng theo dõi và phân tích tài chính <br>&emsp; + Xác định các yêu cầu về tính ổn định và an toàn dữ liệu | 09/03/2026 | 09/03/2026 |[cite: 1] |
| 2 | - Khởi tạo Terraform <br>&emsp; + Cấu hình S3 bucket làm remote backend <br>&emsp; + Thiết lập DynamoDB để lock state | 10/03/2026 | 10/03/2026 |[cite: 1] |
| 3 | - Thiết lập **Amazon VPC** <br>&emsp; + Chia Subnet Public/Private trên nhiều Availability Zones <br>&emsp; + Cấu hình Internet Gateway cho lớp Public | 11/03/2026 | 11/03/2026 |[cite: 1] |
| 4 | - Cấu hình Security <br>&emsp; + Thiết lập **Security Group** cho ALB, ECS và RDS <br>&emsp; + Áp dụng nguyên tắc Least Privilege | 12/03/2026 | 12/03/2026 |[cite: 1] |
| 5 | - Khởi tạo dịch vụ tính toán <br>&emsp; + Tạo repository trên **Amazon ECR** <br>&emsp; + Cấu hình cluster **Amazon ECS** cơ bản | 13/03/2026 | 13/03/2026 |[cite: 1] |
| 6 | - Cân bằng tải <br>&emsp; + Thiết lập **Application Load Balancer (ALB)** <br>&emsp; + Cấu hình Target Group cho backend NestJS | 14/03/2026 | 14/03/2026 |[cite: 1] |
| 7 | - Kiểm tra hạ tầng <br>&emsp; + Verify kết nối mạng giữa các subnet <br>&emsp; + Kiểm tra khả năng đẩy image lên ECR | 15/03/2026 | 15/03/2026 |[cite: 1] |

### Kết quả đạt được Tuần 1

* Toàn bộ thành viên đã thống nhất về kiến trúc 3-tier triển khai trên AWS Cloud[cite: 1].
* Hạ tầng mạng (VPC) đã sẵn sàng với các lớp bảo vệ Security Group tương ứng cho từng dịch vụ[cite: 1].
* Đã có kho lưu trữ image (ECR) và điểm vào hệ thống (ALB) để chuẩn bị cho việc deploy ứng dụng[cite: 1].

### Khó khăn & Bài học

* **Khó khăn:** 
  * Việc phân chia Subnet và cấu hình Routing cho các VPC Endpoint ban đầu khá phức tạp để đảm bảo traffic nội bộ không đi qua Internet[cite: 1].
* **Giải pháp:** 
  * Tham khảo tài liệu Best Practice của AWS về VPC Design và tách biệt rõ ràng lớp Public/Private[cite: 1].
* **Bài học:** 
  * Việc sử dụng Terraform từ ngày đầu giúp kiểm soát hạ tầng chặt chẽ và dễ dàng tái sử dụng cấu hình cho các môi trường khác nhau[cite: 1].

### Kế hoạch Tuần tới

* Tích hợp **Amazon Cognito** cho hệ thống đăng nhập/đăng ký[cite: 1].
* Thực hiện đẩy Backend image lên ECR và triển khai chính thức trên ECS Fargate[cite: 1].
* Kết nối Frontend Amplify với API endpoint thực tế[cite: 1].