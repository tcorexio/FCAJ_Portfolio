
### Week 3 Objectives

* Deploy the **Amazon RDS (PostgreSQL)** database within a private network.
* Implement secure infrastructure hardening and secret management via Secrets Manager.
* Set up HTTPS and Custom Domains using Route 53 and ACM.

### Tasks carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | - Initialize **Amazon RDS (PostgreSQL)** (Small Single-AZ instance) | 23/03/2026 | 23/03/2026 | - |
| 2 | - Run database schema migrations from ECS to RDS | 24/03/2026 | 24/03/2026 | - |
| 3 | - Configure **S3 Gateway Endpoint** for internal blob layer access | 25/03/2026 | 25/03/2026 | - |
| 4 | - Store DB credentials and secret tokens in **AWS Secrets Manager** | 26/03/2026 | 26/03/2026 | - |
| 5 | - Request SSL Certificate via ACM and attach it to the ALB | 27/03/2026 | 27/03/2026 | - |
| 6 | - Map custom domain via Route 53 to ALB and Amplify | 28/03/2026 | 28/03/2026 | - |
| 7 | - Perform network security audit and close unnecessary ports | 29/03/2026 | 29/03/2026 | - |

### Week 3 Achievements

* Spendwise database is now running securely within a Private Subnet.
* Achieved full HTTPS compliance, ensuring encrypted data transmission for financial info.
* Centralized sensitive information management, eliminating hardcoded passwords in the codebase.

### Challenges & Lessons

* **Challenges:** 
  * Managing database connection pools from Fargate to prevent RDS exhaustion.
* **Solutions:** 
  * Implemented controlled migrations and connection monitoring.
* **Lessons Learned:** 
  * Using Secrets Manager is a mandatory security practice to avoid exposing credentials in config files.

### Next Week Plan

* Conduct basic performance and stability testing.
* Set up monitoring dashboards and AWS cost alerts.