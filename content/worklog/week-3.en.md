
### Week 3 Objectives

* Deploy the **Amazon RDS (PostgreSQL)** database within a private network[cite: 1].
* Implement secure infrastructure hardening and secret management via Secrets Manager[cite: 1].
* Set up HTTPS and Custom Domains using Route 53 and ACM[cite: 1].

### Tasks carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | - Initialize **Amazon RDS (PostgreSQL)** (Small Single-AZ instance)[cite: 1] | 23/03/2026 | 23/03/2026 | - |
| 2 | - Run database schema migrations from ECS to RDS[cite: 1] | 24/03/2026 | 24/03/2026 | - |
| 3 | - Configure **S3 Gateway Endpoint** for internal blob layer access[cite: 1] | 25/03/2026 | 25/03/2026 | - |
| 4 | - Store DB credentials and secret tokens in **AWS Secrets Manager**[cite: 1] | 26/03/2026 | 26/03/2026 | - |
| 5 | - Request SSL Certificate via ACM and attach it to the ALB[cite: 1] | 27/03/2026 | 27/03/2026 | - |
| 6 | - Map custom domain via Route 53 to ALB and Amplify[cite: 1] | 28/03/2026 | 28/03/2026 | - |
| 7 | - Perform network security audit and close unnecessary ports[cite: 1] | 29/03/2026 | 29/03/2026 | - |

### Week 3 Achievements

* Spendwise database is now running securely within a Private Subnet[cite: 1].
* Achieved full HTTPS compliance, ensuring encrypted data transmission for financial info[cite: 1].
* Centralized sensitive information management, eliminating hardcoded passwords in the codebase[cite: 1].

### Challenges & Lessons

* **Challenges:** 
  * Managing database connection pools from Fargate to prevent RDS exhaustion[cite: 1].
* **Solutions:** 
  * Implemented controlled migrations and connection monitoring[cite: 1].
* **Lessons Learned:** 
  * Using Secrets Manager is a mandatory security practice to avoid exposing credentials in config files[cite: 1].

### Next Week Plan

* Conduct basic performance and stability testing[cite: 1].
* Set up monitoring dashboards and AWS cost alerts[cite: 1].