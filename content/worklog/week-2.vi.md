
### Mục Tiêu Tuần 2

* Tích hợp hệ thống định danh người dùng **Amazon Cognito**.
* Hoàn tất triển khai Backend lên **Amazon ECS (Fargate)**.
* Kết nối frontend **AWS Amplify** với API endpoint thực tế.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | - Cấu hình **Amazon Cognito** User Pool cho luồng đăng ký/đăng nhập | 16/03/2026 | 16/03/2026 | - |
| 2 | - Thiết lập **VPC Endpoints** (Interface) kết nối nội bộ tới ECR và CloudWatch | 17/03/2026 | 17/03/2026 | - |
| 3 | - Build và đẩy Docker image backend NestJS lên ECR | 18/03/2026 | 18/03/2026 | - |
| 4 | - Triển khai ECS Service chạy trên hạ tầng Fargate | 19/03/2026 | 19/03/2026 | - |
| 5 | - Kết nối frontend **AWS Amplify** với repository Git | 20/03/2026 | 20/03/2026 | - |
| 6 | - Inject biến môi trường (API URL, Cognito ID) vào Amplify lúc build | 21/03/2026 | 21/03/2026 | - |
| 7 | - Kiểm tra luồng End-to-End từ Đăng nhập đến gọi API lấy dữ liệu | 22/03/2026 | 22/03/2026 | - |

### Kết quả đạt được Tuần 2

* Thiết lập thành công hệ thống xác thực người dùng an toàn qua Cognito.
* Backend NestJS chính thức vận hành trên môi trường container không máy chủ (Fargate).
* Frontend đã có thể tương tác trực tiếp với API backend thông qua AWS Amplify.

### Khó khăn & Bài học

* **Khó khăn:** Lỗi xác thực API do sai lệch biến môi trường giữa môi trường local và Cloud.
* **Giải pháp:** Chuẩn hóa checklist release và quy trình đặt tên biến môi trường nhất quán.
* **Bài học:** Việc kiểm tra sớm các kết nối nội bộ qua VPC Endpoint giúp giảm đáng kể chi phí traffic NAT Gateway.

### Kế hoạch Tuần tới

* Khởi tạo cơ sở dữ liệu **Amazon RDS (PostgreSQL)**.
* Cấu hình HTTPS và tiếp tục bảo mật hóa hạ tầng.