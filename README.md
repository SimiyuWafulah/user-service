## User Service

### Description
The User Service is a microservice responsible for managing user-related operations such as user creation, authentication, and profile management. This service is a part of a larger microservices architecture designed to demonstrate scalable and maintainable backend systems.

### Features
- **User Creation**: Allows for creating new user accounts with essential details like name, email, and password.
- **Authentication**: Implements user authentication and authorization mechanisms (to be added in future updates).
- **Profile Management**: Enables users to manage and update their profile information (to be added in future updates).

### Technologies Used
- **Node.js**: JavaScript runtime used to build the server.
- **Express**: Web framework for Node.js to create robust APIs.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Dotenv**: Module to load environment variables from a `.env` file.
- **Docker**: Containerization platform to create and manage containers.

### Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SimiyuWafulah/user-service.git
   cd user-service
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory and add the following:
     ```
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/userdb
     ```

4. **Run the Application**:
   - Start MongoDB:
     ```bash
     mongod --dbpath /path/to/your/db
     ```
   - Start the server:
     ```bash
     npm start
     ```

### Docker Instructions

1. **Build the Docker Image**:
   ```bash
   docker build -t your-dockerhub-username/user-service .
   ```

2. **Run the Docker Container**:
   ```bash
   docker run -p 3000:3000 --env-file .env your-dockerhub-username/user-service
   ```

### Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any features, enhancements, or bug fixes.
