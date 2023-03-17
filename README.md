# Node.js REST API with TypeScript, Express, Prisma, and Zod

This is a boilerplate for creating a Node.js RESTful API using TypeScript, Express, Prisma, and Zod. Prisma is a modern database toolkit and ORM for Node.js that enables you to easily interact with your database in a type-safe and intuitive way. Zod is a TypeScript-first schema validation library that allows you to validate and sanitize data in your API endpoints.

## Getting Started

### Prerequisites

To use this boilerplate, you need to have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [pnpm](https://pnpm.io/installation) (v6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nbotond20/rest-api-template
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory of the project and add the following environment variables:

   ```bash
   DATABASE_URL=
   PORT=
   TOKEN_KEY=
   ```

   - The `DATABASE_URL` variable should contain the connection string to your database.
   - The `PORT` variable should contain the port number on which the server will run.
   - The `TOKEN_KEY` variable should contain a secret key that will be used to sign the JWT tokens.

### Running the App

To run the app in development mode, use the following command:

```bash
pnpm dev
```

This will start the server at http://localhost:<`PORT`>.

### Building and run the App

To build the app, use the following command:

```bash
pnpm build
```

This will create a `dist` directory in the root directory of the project, which contains the compiled JavaScript files.

To run the app in production mode, use the following command:

```bash
pnpm start
```

## Usage

This REST API comes with a set of pre-built routes for handling CRUD operations. To use the API, you can send HTTP requests to the following routes:

- `GET /users`: Returns a list of all users.
- `GET /users/:id`: Returns a single user with the specified ID.
- `POST /users`: Creates a new user.
- `PUT /users/:id`: Updates an existing user with the specified ID.
- `DELETE /users/:id`: Deletes an existing user with the specified ID.

The API uses JSON Web Tokens (JWT) for authentication. To access the protected routes, you'll need to include the JWT token in the Authorization header of your HTTP requests, like so:

```bash
Authorization: Bearer <token>
```

## Project Structure

The project structure is as follows:

```
├── prisma
│ ├── migrations
│ ├── schema.prisma
│ └── dev.db
├── src
│ ├── routes
│ │ └── userRoute.ts
│ │ └── ...
│ ├── controllers
│ │ └── userController.ts
│ │ └── ...
│ ├── domains
│ │ └── userDomain.ts
│ │ └── ...
│ ├── stores
│ │ └── userStore.ts
│ │ └── ...
│ ├── models
│ │ ├── index.ts
│ │ └── users
│ │  └── userModels.schema.ts
│ │  └── ...
│ │ └── ...
│ ├── middlewares
│ │ ├── auth.ts
│ │ └── errorHandler.ts
│ ├── app.ts
│ ├── db.ts
│ └── index.ts
├── .env
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── nodemon.json
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

1. **Routes**: The route layer is responsible for defining the application routes and the middleware functions that should be executed for each route.
2. **Controllers**: The controller layer is responsible for forwarding requests to the appropriate domain logic.
3. **Domains**: The domain layer is responsible for defining the business logic for each route.
4. **Stores**: The store layer is responsible for interacting with the database via the Prisma ORM.

- **`prisma`**: This directory contains files related to the Prisma ORM, including:

  - `migrations`: This directory is used to store database schema migrations.
  - `schema.prisma`: This is the main configuration file for the Prisma ORM, used to define the data models and database connections.
  - `dev.db`: This is a SQLite database file used for local development.

- **`src`**: This directory contains the application source code, organized into subdirectories for different concerns:

  - `routes`: This directory contains files defining the application routes and associated middleware.
  - `controllers`: The controller layer is responsible for forwarding requests to the appropriate domain logic.
  - `domains`: The domain layer is responsible for defining the business logic for each route.
  - `stores`: This directory contains files defining the data access layer for the application, which interacts with the database via the Prisma ORM.
  - `models`: This directory contains the Prisma data model definitions, including an
    `index.ts` file that exports all the models and a subdirectory for each model.
  - `middlewares`: This directory contains custom middleware functions used in the application, such as authentication and error handling.
  - `app.ts`: This is the main application entry point file, where the application is configured and initialized.
  - `db.ts`: This file contains code to initialize the Prisma ORM and establish a database connection.
  - `index.ts`: This file exports the application instance and starts the server.

- `env`, `.gitignore`, `.eslintrc.json`, `.prettierrc`, `nodemon.json`, `package.json`, `pnpm-lock.yaml`, and `tsconfig.json`: These files are used for various configuration purposes, including environment variables, Gitignore rules, linting and formatting rules, nodemon configuration, package dependencies, package lockfile, and TypeScript configuration.
