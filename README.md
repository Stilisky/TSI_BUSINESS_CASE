# TSI BUSINESS CASE


A comprehensive frontend and backend solution for managing players, Developed in React, Node.js, Express, and MongoDB.

### Features

- User authentication and authorization for admin and user
-  Player management
-  Match management


## Getting Started

### Prerequisites

- Node.js (v18.16.0 or newer)
- MongoDB
- A .env file with necessary environment variables (e.g. SECRET_KEY).
  
### Installation

 Clone the repository:
   
``` git clone repo_link ```

## TSI management Backend API

1. Navigate to the project directory:

```cd SERVER```

2. Install the required dependencies:

```npm install```

3. Start the server:

```npm start```

The server should now be running on the specified port (default: 5000).

### API Endpoints

check swagger to all endpoints ``` /api/v1/api-docs ```

### Unit Test

To run unit test ``` npx mocha Tests/ ```

## TSI Web Application

1. Navigate to the project directory:

```cd web_front```

2. Copie .env copy to .env

3. Add .env variable (API_URL, CLOUDINARY)

4. Install the required dependencies:

```npm install```

5. Start the server:

```npm start```
