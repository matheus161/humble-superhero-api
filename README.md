## Description

Welcome to the Humble Superhero API documentation! At our company, we believe every team member is a superhero in their own unique way, solving problems, building amazing things, and helping others along the journey.

## 📂 Project structure

| Type   | Name           | Description                                                  |
| ------ | -------------- | ------------------------------------------------------------ |
| folder | `node_modules` | Project dependencies managed by NPM                          |
| folder | `src`          | The main folder that defines the behavior of the application |                                     |
| folder | `.test`        | Folder containing the test files and test-related resources  |

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# lint
$ npm run lint
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Collaborative Development Workflow

To improve or expand this task with a teammate, I would suggest dividing the application into smaller tasks. Here's how we could approach it:

#### Task Breakdown:

- One teammate could focus on building and refining the API endpoints. He would handle database integration, validation, and API routing.
- One teammate could be responsible for writing unit tests, integration tests, and API tests to ensure the system is reliable and bug-free.

#### Version Control & Branching:

- Each team member would create their own branch for specific tasks or features.
- Once the task is completed, the teammate would open a Pull Request (PR) to merge their work into the main branch.

#### Code Reviews:

- We’d review each other's code through pull requests, offering constructive feedback and suggestions for improvements.

#### Continuous Integration:

- Set up a CI/CD pipeline to automatically run tests when new code is pushed, ensuring that everything works as expected and that there are no conflicts when merging into the main branch.
- We'd set up test coverage to ensure code quality and prevent bugs

#### Documentation:

- Both teammates would contribute to the documentation, ensuring that any new features or changes to the API are clearly outlined in the README or an API specification document.

## If I had more time

If I had more time, I would focus on expanding the functionality and improving the overall user experience of the application. Here are a few things I would consider adding or enhancing:

#### User Profiles:

- Implement a user profile system to allow users to link superheroes to their specific accounts.

#### Authentication:

- Add authentication and authorization to the API, so only authorized users can add or modify superheroes. This could be done with JWT (JSON Web Tokens), OAuth or Cognito, providing security for users' data and actions.

#### Additional Routes:

- Extend the API with more functionality, such as updating or deleting superheroes, list pagination and adding filtering options.
- Include a route for updating user profile information or changing their password.

#### Enhanced Tests:

- Write more comprehensive unit and integration tests to ensure the application is robust and handles edge cases.


#### Rate Limiting and Throttling:

- Enhance the throttler filter to ensure that the API can handle high traffic and prevent abuse.

#### Swagger Documentation:

- Expand the Swagger documentation to cover all new endpoints, providing detailed descriptions, response types, and sample requests to make it easier for developers to interact with the API.

