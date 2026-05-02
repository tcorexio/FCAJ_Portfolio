

### Week 2 Objectives

* Integrate the **Amazon Cognito** user identity system.
* Complete the Backend deployment on **Amazon ECS (Fargate)**.
* Connect the **AWS Amplify** frontend with the actual API endpoint.

### Tasks carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | - Configure **Amazon Cognito** User Pool for sign-up/sign-in | 16/03/2026 | 16/03/2026 | - |
| 2 | - Set up **VPC Endpoints** (Interface) for internal ECR/CloudWatch access | 17/03/2026 | 17/03/2026 | - |
| 3 | - Build and push NestJS backend Docker image to ECR | 18/03/2026 | 18/03/2026 | - |
| 4 | - Deploy ECS Service running on Fargate infrastructure | 19/03/2026 | 19/03/2026 | - |
| 5 | - Connect **AWS Amplify** frontend to the Git repository | 20/03/2026 | 20/03/2026 | - |
| 6 | - Inject environment variables (API URL, Cognito ID) during build | 21/03/2026 | 21/03/2026 | - |
| 7 | - Verify end-to-end flow from Login to API data retrieval | 22/03/2026 | 22/03/2026 | - |

### Week 2 Achievements

* Successfully established a secure user authentication system via Cognito.
* NestJS backend is officially operational on a serverless container environment (Fargate).
* Frontend Amplify can now communicate directly with the backend API.

### Challenges & Lessons

* **Challenges:** 
  * Experienced authentication errors due to environment variable mismatches between local and Cloud environments.
* **Solutions:** 
  * Standardized the release checklist and environment variable naming conventions.
* **Lessons Learned:** 
  * Early validation of internal networking via VPC Endpoints significantly reduces NAT Gateway traffic costs.

### Next Week Plan

* Initialize the **Amazon RDS (PostgreSQL)** database.
* Configure HTTPS and further security hardening.