# My App

This project was bootstrapped with the Create React App TypeScript template.
It uses **SCSS** for styling and includes ESLint with Prettier integration.
The project now provides a simple dashboard layout with authentication
and a Material UI theme extracted from the provided logo colors. A light
and dark mode can be toggled from the header.

Additional demo features include a data grid, chart, file upload and a
rich text editor. Storybook is configured under the `storybook` npm
script to preview UI components in isolation.

## Setup

### Theming

Colors are derived from `src/Asset/MCX_Logo.png`. To change branding,
update the palettes in `src/theme.ts` and restart the application.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.

### `npm test`

Launches the test runner.
Ensure dependencies are installed before running.

### `npm run build`

Builds the app for production.

### `npm run lint`

Runs ESLint over the `src` directory.
This uses a local ESLint version pinned in `package.json`.

### `npm run format`

Formats source files using Prettier.

### `npm run storybook`

Starts Storybook to preview components.

### `npm run test:coverage`

Runs tests with a coverage report.

## Requirements

- Node.js v20 or newer
- React 18 compatible packages
