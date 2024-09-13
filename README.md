# gymnago

To run this project, use the command: npm run dev

I'm not using any third-party packages for validation here;  I'm handling it with custom checks instead, as it's straightforward to implement.

I've used MongoDB localhost instance to store data for the course module. I've attached a Postman collection and confirmed that all the APIs are working correctly i have double-checked them

Assessment Documentation
Project Overview
This project is a backend API implementation using Node.js with Express.js and MongoDB. It includes CRUD operations for course module, using JWT authentication, and rate limiting to manage the number of requests from users. The project also includes input validation, error handling, and Postman. Response  and Error  
Key Features:
1.	CRUD Operations: Create, Read, Update, and Delete operations for Course entity
2.	Input Validation: Ensuring valid data is sent to the server through API endpoints.
3.	Error Handling: Proper error messages are returned for invalid or failed requests.
4.	JWT Authentication: Secure access to API endpoints by requiring a valid JWT token.
5.	Rate Limiting: Limit the number of requests a user can make within a set time frame (e.g., 10 requests per minute).
1. Backend Service Requirements
Framework:
•	Node.js with Express.js
Database:
•	MongoDB
API Features:
•	CRUD Operations:
o	Course entity in the system has endpoints for creating, reading, updating, and deleting data.
o	Example course entity endpoints:
	POST /create/course - Create a new entity
	GET /get/course - Retrieve a list of entities
	PATCH /update/course - Update an existing entity
	DELETE /delete/course/:id - Delete an entity
Input Validation:
•	Ensure that all incoming requests are validated before being processed.
•	Custom validation.
Error Handling:
•	Use try/catch blocks and middleware to return meaningful error responses for invalid requests or system errors.
2. Authentication and Rate Limiting
JWT Authentication:
•	User Registration (POST /register): Allows new users to create an account by providing required details (e.g., username, password).
•	User Login (POST /login): Users log in by providing their credentials. Upon successful authentication, a JWT token is generated and returned.
•	JWT Token: This token must be included in the request header (as Authorization: Bearer <token>) for accessing any API endpoint.
•	Protected Endpoints: All CRUD operations are secured using JWT authentication.
Rate Limiting:
•	Limit the number of API requests a user can make to, for example, 10 requests per minute.
•	Use middleware like express-rate-limit to implement rate limiting.
•	Configure the rate limiter to ensure API stability and prevent abuse.

