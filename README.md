# ABC Racing Digital experience platform

## Description

This project is a Next.js application built using [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Directory Structure

The project directory is structured as follows:

- `src/`: Contains the source code files
  - `app/`: next.js file system localized routing
    - `[locale]/`:
      - `error.tsx`: error boundary component
      - `layout.tsx`: render Shared UI for a segment and its children
      - `page.tsx`: Unique UI of a route and make routes publicly accessible
      - `commerce/`: future development module
  - `components/`: Contains reusable React components
    - `blocks/`: Contains dynamically component to be render by wrapper component(dynamic component publishing from CMS)
    - `client/`: client component for easy categorisation('use client')
  - `styles/`: Contains CSS or SCSS files for styling
  - `utils/`: Contains utility functions or helper modules
  - `lib/`: Contains reusable services such as graphql client
- `public/`: Contains static assets such as images or fonts
- `__tests__/`: Contains test files for unit testing
- `.husky/`: git hooks
  - `commit-msg` convential commit message check
  - `pre-commit` - prettier, eslint check before git commit
  - `pre-push` - unit and e2e test before push
- `.github/` - github actions for development and production workflow
- `package.json`: Defines the project dependencies and scripts
- `README.md`: Provides information about the project

## Pre-requisite

    Node 18

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/svashisth07/abc-racing-dxp`
2. Navigate to the project directory: `cd abc-racing-dxp]`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit: `http://localhost:3000`
