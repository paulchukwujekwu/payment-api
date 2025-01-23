# Payment API

## Overview
This is a RESTful API for processing payments, designed with versioning to support future enhancements. The API is structured into two versions: v1 and v2, allowing for backward compatibility while introducing new features.

## Features
- **Versioning**: The API supports multiple versions (v1 and v2) to accommodate changes and improvements.
- **Payment Processing**: Handle payment requests and retrieve payment statuses.
- **Clear Status Messages**: Each response includes status messages for clarity.

## Project Structure
```
payment-api
├── .github
│   └── workflows
│       └── ci-cd.yml
├── src
│   ├── v1
│   │   ├── controllers
│   │   │   └── paymentController.ts
│   │   ├── routes
│   │   │   └── paymentRoutes.ts
│   │   └── services
│   │       └── paymentService.ts
│   ├── v2
│   │   ├── controllers
│   │   │   └── paymentController.ts
│   │   ├── routes
│   │   │   └── paymentRoutes.ts
│   │   └── services
│   │       └── paymentService.ts
│   ├── app.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd payment-api
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Running the Application
To start the application, run:
```
npm start
```
The API will be available at `http://localhost:3000`.

### Testing
To run tests, use:
```
npm test
```

### CI/CD Pipeline
The project includes a CI/CD pipeline configured with GitHub Actions. This pipeline automates testing and deployment processes. The configuration can be found in `.github/workflows/ci-cd.yml`.

## API Endpoints
- **POST /v1/payments**: Process a payment (v1)
- **GET /v1/payments/:id/status**: Get payment status (v1)
- **POST /v2/payments**: Process a payment (v2)
- **GET /v2/payments/:id/status**: Get payment status (v2)

## License
This project is licensed under the MIT License.