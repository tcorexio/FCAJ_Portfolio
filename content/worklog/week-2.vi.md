
### Mục Tiêu Tuần 2

* Tích hợp hệ thống định danh người dùng **Amazon Cognito**[cite: 1].
* Hoàn tất triển khai Backend lên **Amazon ECS (Fargate)**[cite: 1].
* Kết nối frontend **AWS Amplify** với API endpoint thực tế[cite: 1].

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | - Cấu hình **Amazon Cognito** User Pool cho luồng đăng ký/đăng nhập[cite: 1] | 16/03/2026 | 16/03/2026 | - |
| 2 | - Thiết lập **VPC Endpoints** (Interface) kết nối nội bộ tới ECR và CloudWatch[cite: 1] | 17/03/2026 | 17/03/2026 | - |
| 3 | - Build và đẩy Docker image backend NestJS lên ECR[cite: 1] | 18/03/2026 | 18/03/2026 | - |
| 4 | - Triển khai ECS Service chạy trên hạ tầng Fargate[cite: 1] | 19/03/2026 | 19/03/2026 | - |
| 5 | - Kết nối frontend **AWS Amplify** với repository Git[cite: 1] | 20/03/2026 | 20/03/2026 | - |
| 6 | - Inject biến môi trường (API URL, Cognito ID) vào Amplify lúc build[cite: 1] | 21/03/2026 | 21/03/2026 | - |
| 7 | - Kiểm tra luồng End-to-End từ Đăng nhập đến gọi API lấy dữ liệu | 22/03/2026 | 22/03/2026 | - |

### Kết quả đạt được Tuần 2

* Thiết lập thành công hệ thống xác thực người dùng an toàn qua Cognito[cite: 1].
* Backend NestJS chính thức vận hành trên môi trường container không máy chủ (Fargate)[cite: 1].
* Frontend đã có thể tương tác trực tiếp với API backend thông qua AWS Amplify[cite: 1].

### Khó khăn & Bài học

* **Khó khăn:** Lỗi xác thực API do sai lệch biến môi trường giữa môi trường local và Cloud[cite: 1].
* **Giải pháp:** Chuẩn hóa checklist release và quy trình đặt tên biến môi trường nhất quán[cite: 1].
* **Bài học:** Việc kiểm tra sớm các kết nối nội bộ qua VPC Endpoint giúp giảm đáng kể chi phí traffic NAT Gateway[cite: 1].

### Kế hoạch Tuần tới

* Khởi tạo cơ sở dữ liệu **Amazon RDS (PostgreSQL)**[cite: 1].
* Cấu hình HTTPS và tiếp tục bảo mật hóa hạ tầng[cite: 1].