# Pico y Placa Predictor

This is a **Pico y Placa Predictor** application built with **React** and **Vite**. The application allows users to check whether their vehicle is allowed to circulate based on the "Pico y Placa" rules, taking into account the vehicle's license plate, the date, and time. It also includes a dashboard for easy navigation and integration with Vercel for deployment.

## Features

- **Pico y Placa Prediction:** Based on the vehicle's license plate, date, and time, it determines whether the vehicle can circulate.
- **Responsive Dashboard:** The app includes a responsive sidebar for easy navigation.
- **CI/CD Pipeline:** Automated testing and coverage checks with Vitest and GitHub Actions.
- **Deployed on Vercel:** The application is deployed and live on Vercel.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Vite](https://vitejs.dev/)

### Clone the Repository

```
git clone https://github.com/Aristox173/Pico-Placa_Predictor.git
cd pico-placa_predictor
```

### Install Dependencies

Run the following command to install all required dependencies:

```
npm install
```

### Run the Development Server

To start the application locally in development mode, run:

```
npm run dev
```

### Build for Production

To create a production build of the app, run:

```
npm run build
```

## CI Pipeline

The project is configured with GitHub Actions for Continuous Integration (CI). The pipeline includes:

- Testing: Runs tests using Vitest and enforces a minimum coverage of 70%.

- Build: Ensures the project is built correctly before deployment.

Here is the pipeline configuration:

```
name: CI - Test and Coverage

on:
  pull_request:
    branches: [dev]

jobs:
  test:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Run tests with coverage
        run: npx vitest run --coverage --silent

      - name: Enforce minimum coverage (>= 70%)
        run: |
          TOTAL=$(node -pe "require('./coverage/coverage-summary.json').total.statements.pct")
          echo "Total statement coverage: $TOTAL%"
          if [ "$TOTAL" -lt 70 ]; then
            echo "Coverage is below 70%"
            exit 1
          else
            echo "Coverage is acceptable (>= 70%)"
          fi

      - name: Post-job success
        if: success()
        run: echo "Pipeline completed successfully. Everything is good!"

      - name: Post-job failure
        if: failure()
        run: echo "Pipeline failed. Check the errors and coverage level."
```

## Test Coverage

The project is tested using Vitest, with a high coverage of 90.74% across all files. The test coverage includes unit tests for components and hooks. The detailed coverage report is as follows:

Test Files 15 passed (15)
Tests 49 passed (49)

| File           | % Stmts | % Branch | % Funcs | % Lines |
| -------------- | ------- | -------- | ------- | ------- |
| All files      | 91.22   | 97.43    | 87.8    | 91.22   |
| src            | 100     | 100      | 100     | 100     |
| src/components | 100     | 93.75    | 100     | 100     |
| src/hooks      | 60      | 100      | 87.5    | 60      |
| src/layout     | 100     | 100      | 100     | 100     |
| src/pages      | 100     | 100      | 33.33   | 100     |

## Deployment

The project is deployed to Vercel. Changes pushed to the main branch are automatically deployed. Check the live version at: [Vercel Deployment](https://pico-placa-predictor-psi.vercel.app/)
