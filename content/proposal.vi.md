# Nền tảng SpendWise

## Đề xuất triển khai SpendWiseApp trên AWS

---

### 1. Tóm tắt Dự án

Ứng dụng Quản lý Chi tiêu Cá nhân Spendwise là một web application hoàn chỉnh được xây dựng nhằm giải quyết bài toán thực tế: giúp người dùng theo dõi, phân tích và kiểm soát tình hình tài chính cá nhân một cách trực quan và hiệu quả[cite: 1]. Ứng dụng được triển khai hoàn toàn trên môi trường AWS Cloud nhằm đảm bảo tính linh hoạt và an toàn dữ liệu[cite: 1].

---

### 2. Bối cảnh và Giải pháp

#### Vấn đề hiện tại
Với một ứng dụng quản lý chi tiêu, dữ liệu người dùng và độ ổn định của hệ thống là yếu tố cần được chú trọng[cite: 1]. Nếu triển khai theo mô hình máy chủ đơn lẻ hoặc hạ tầng tự quản rời rạc, hệ thống sẽ dễ gặp các tình huống[cite: 1]:
* **Rủi ro mất mát dữ liệu** tài chính do backup thủ công, quy trình khôi phục không nhất quán[cite: 1].
* **Truy cập tăng đột biến** vào đầu/cuối tháng khiến hệ thống phản hồi chậm, dễ nghẽn và gián đoạn[cite: 1].
* **Nâng cấp khó khăn** do phải thao tác trực tiếp trên máy chủ, dễ phát sinh sai sót cấu hình[cite: 1].
* **Khó giám sát tập trung** khi có sự cố, dẫn đến thời gian phát hiện và xử lý lỗi kéo dài[cite: 1].
* **An toàn dữ liệu thấp** do cơ chế phân quyền truy cập và kiểm soát hạ tầng chưa được chuẩn hóa[cite: 1].

#### SpendWise giải quyết thế nào?
Để cải thiện phần nào vấn đề Spendwise lựa chọn tiếp cận theo kiến trúc Cloud thông qua AWS Cloud[cite: 1]:
* **Frontend hiện đại:** Sử dụng framework NextJS được lưu trữ và triển khai thông qua dịch vụ AWS Amplify[cite: 1].
* **Backend:** Sử dụng framework NestJS và triển khai thông qua AWS ECS Fargate[cite: 1].
* **Hệ thống mạng:** Triển khai trong VPC, tách lớp truy cập public/private và điều phối lưu lượng qua Application Load Balancer[cite: 1].

---

### 3. Kiến trúc Giải pháp

Kiến trúc đề xuất bám sát mô hình 3-tier ứng dụng trên môi trường cloud[cite: 1]:

#### Các dịch vụ AWS
| Dịch vụ | Vai trò trong SpendWise |
|:---|:---|
| **Amazon VPC** | Mạng riêng; chia subnet public/private trên nhiều AZ[cite: 1]. |
| **ALB** | Cân bằng tải và chuyển traffic tới backend trên ECS[cite: 1]. |
| **Amazon ECS** | Chạy container backend NestJS; không quản lý EC2[cite: 1]. |
| **Amazon RDS** | CSDL quan hệ cho dữ liệu chi tiêu; đặt trong mạng private[cite: 1]. |
| **AWS Amplify** | Build và host frontend Next.js từ Git[cite: 1]. |
| **Amazon Cognito** | Quản lý đăng ký, đăng nhập và xác nhận người dùng[cite: 1]. |
| **AWS WAF** | Lớp bảo vệ web trước các request độc hại phổ biến[cite: 1]. |

#### Thiết kế kỹ thuật đặc thù
* **VPC Endpoint:** Kết nối nội bộ tới ECR, CloudWatch, Cognito mà không cần qua NAT[cite: 1].
* **Bastion Host:** Sử dụng Amazon EC2 để truy cập và vận hành DB an toàn[cite: 1].
* **Secrets Manager:** Lưu trữ và quản lý an toàn mật khẩu DB và các secret key[cite: 1].

---

### 4. Triển khai Kỹ thuật

#### Công nghệ sử dụng
* **Frontend:** NextJS, AWS Amplify[cite: 1].
* **Backend:** NestJS, AWS ECS Fargate, ECR[cite: 1].
* **Hạ tầng:** Terraform (đề xuất) để quản lý cấu hình VPC, SG, ALB[cite: 1].

#### Lộ trình phát triển
Dự án tập trung vào việc dựng nền tảng mạng và danh tính trước, sau đó triển khai ứng dụng và ổn định hóa dữ liệu[cite: 1].

---

### 5. Lịch trình & Cột mốc (Timeline)

* **Tuần 1 - Foundation:** Chốt yêu cầu, khởi tạo Terraform, dựng VPC, SG, ALB, ECR, ECS cơ bản[cite: 1].
* **Tuần 2 - Identity & App Deployment:** Tích hợp Cognito, đẩy image lên ECR và rollout ECS, kết nối Amplify[cite: 1].
* **Tuần 3 - Data & Hardening:** Bật RDS và migration dữ liệu, kiểm tra private networking, thiết lập HTTPS[cite: 1].
* **Tuần 4 - Stabilization & Handover:** Kiểm thử hiệu năng, thiết lập giám sát, đánh giá chi phí và tối ưu[cite: 1].

---

### 6. Đánh giá Rủi ro & Xử lý

| Rủi ro | Cách xử lý |
|:---|:---|
| **Chi phí NAT/ALB tăng nhanh** | Đặt budget alarm, review cost theo tuần, right-size tài nguyên[cite: 1]. |
| **Sai lệch cấu hình env** | Chuẩn hóa biến môi trường, checklist release bắt buộc[cite: 1]. |
| **Rủi ro vận hành DB** | Migration có kiểm soát, test restore định kỳ, giám sát connection[cite: 1]. |
| **Bảo mật hạ tầng** | Áp dụng nguyên tắc least privilege, review SG/IAM định kỳ[cite: 1]. |

---

### 7. Ngân sách (Ước tính tháng)

* **Tổng chi phí AWS:** $69 - $326[cite: 1].
* **Thành phần chính:**
    * **ALB:** $18 - $35[cite: 1].
    * **ECS Fargate:** $9 - $25[cite: 1].
    * **RDS PostgreSQL:** $12 - $35[cite: 1].
    * **VPC Endpoints:** $20 - $70[cite: 1].

---

### 8. Bước Tiếp Theo

* **Kiểm soát chi phí:** Tạm tắt Bastion và Custom domain ở giai đoạn đầu để giảm chi phí cố định[cite: 1].
* **Tối ưu DB:** Chỉ duy trì 1 RDS duy nhất (Single-AZ, cấu hình nhỏ)[cite: 1].
* **Giám sát:** Thiết lập retention log CloudWatch hợp lý để tránh phát sinh phí lưu trữ[cite: 1].

---

### 9. Kết quả Kỳ vọng

* **Hiệu suất:** Thời gian đăng món ăn giảm từ 3 phút xuống còn 10 giây nhờ AI[cite: 1].
* **Độ chính xác:** Đạt 95% độ chính xác cho các món ăn Việt Nam nhờ mô hình Vision AI tiên tiến[cite: 1].
* **Khả năng mở rộng:** Sẵn sàng chịu tải 10.000+ người dùng với chi phí duy trì gần như bằng 0 khi idle[cite: 1].

---

### 10. Chiến lược Phục hồi

* **Triển khai tự động:** Sử dụng quy trình image/deploy chuẩn hóa để giảm thiểu sai sót cấu hình[cite: 1].
* **Phục hồi dữ liệu:** Sử dụng cơ chế backup của RDS để đảm bảo khả năng khôi phục khi gặp sự cố[cite: 1].
* **Giám sát sự cố:** Sử dụng CloudWatch để phát hiện và xử lý lỗi nhanh chóng, rút ngắn thời gian gián đoạn[cite: 1].