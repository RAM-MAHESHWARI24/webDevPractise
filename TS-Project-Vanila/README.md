# Enterprise Dashboard (TypeScript + Vite)

A modern, high-performance web-based Enterprise Dashboard built with Vanilla TypeScript and Vite. It features a responsive layout, simulated enterprise authentication, and dynamic tab-based rendering with custom styling themes.

## Features

- **Authentication System:** A simulated secure login interface. (Use `a@g.com` / `123` to test).
- **Dynamic Dashboard Navigation:** Seamlessly switch between tabs (Overview, Network Logs, Node Status, Settings) without full page reloads.
- **Modular Architecture:** Code is split into logical modules (e.g., `modules/overview.ts`) for maintainable and scalable frontend logic.
- **Premium UI/UX:** Utilizes dynamic CSS gradients and sleek UI components that respond to user interaction.
- **Type Safety:** Written completely in TypeScript for robustness and developer experience.
- **Vite Powered:** Fast development server and optimized production builds.

## Tech Stack

- **Core:** HTML5, CSS3, Vanilla TypeScript
- **Build Tool:** Vite

## Getting Started

### Prerequisites

- Node.js (version 16+ recommended)
- npm or yarn

### Installation

1. Navigate into the project directory (if not already there):
   ```bash
   cd TS-Project-Vanila
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the local development server:

```bash
npm run dev
```

Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

### Building for Production

To build the application for production, run:

```bash
npm run build
```

This will output optimized, minified files into the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
TS-Project-Vanila/
├── index.html          # Login page entry point
├── dashboard.html      # Main dashboard layout
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── src/
│   ├── main.ts         # Login authentication logic
│   ├── dashboard.ts    # Dashboard navigation and rendering logic
│   ├── style.css       # Global styles and design system
│   ├── modules/        # Dynamic content modules for the dashboard
│   │   ├── overview.ts
│   │   ├── networkLogs.ts
│   │   ├── nodeStatus.ts
│   │   └── settings.ts
│   └── assets/         # Static assets (images, icons)
```

## Usage

1. Open the app on the Login page (`/`).
2. Enter the test credentials:
   - **Email:** `a@g.com`
   - **Password:** `123`
3. Click "Authenticate" to simulate a backend request and access the Enterprise Dashboard.
4. Navigate through the sidebar to view different modules with dynamic theme changes.
