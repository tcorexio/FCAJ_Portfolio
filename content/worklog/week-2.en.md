

### Week 2 Objectives

* Integrate the **Amazon Cognito** user identity system[cite: 1].
* Complete the Backend deployment on **Amazon ECS (Fargate)**[cite: 1].
* Connect the **AWS Amplify** frontend with the actual API endpoint[cite: 1].

### Tasks carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | - Configure **Amazon Cognito** User Pool for sign-up/sign-in[cite: 1] | 16/03/2026 | 16/03/2026 | - |
| 2 | - Set up **VPC Endpoints** (Interface) for internal ECR/CloudWatch access[cite: 1] | 17/03/2026 | 17/03/2026 | - |
| 3 | - Build and push NestJS backend Docker image to ECR[cite: 1] | 18/03/2026 | 18/03/2026 | - |
| 4 | - Deploy ECS Service running on Fargate infrastructure[cite: 1] | 19/03/2026 | 19/03/2026 | - |
| 5 | - Connect **AWS Amplify** frontend to the Git repository[cite: 1] | 20/03/2026 | 20/03/2026 | - |
| 6 | - Inject environment variables (API URL, Cognito ID) during build[cite: 1] | 21/03/2026 | 21/03/2026 | - |
| 7 | - Verify end-to-end flow from Login to API data retrieval | 22/03/2026 | 22/03/2026 | - |

### Week 2 Achievements

* Successfully established a secure user authentication system via Cognito[cite: 1].
* NestJS backend is officially operational on a serverless container environment (Fargate)[cite: 1].
* Frontend Amplify can now communicate directly with the backend API[cite: 1].

### Challenges & Lessons

* **Challenges:** 
  * Experienced authentication errors due to environment variable mismatches between local and Cloud environments[cite: 1].
* **Solutions:** 
  * Standardized the release checklist and environment variable naming conventions[cite: 1].
* **Lessons Learned:** 
  * Early validation of internal networking via VPC Endpoints significantly reduces NAT Gateway traffic costs[cite: 1].

### Next Week Plan

* Initialize the **Amazon RDS (PostgreSQL)** database[cite: 1].
* Configure HTTPS and further security hardening[cite: 1].