# DATA-BLOCKS

> A modern, source-available data visualization and business intelligence platform inspired by Google Looker.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Screenshots & Demo](#screenshots--demo)
- [Tech Stack](#tech-stack)
- [Architecture & Core Concepts](#architecture--core-concepts)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Available Scripts](#available-scripts)
- [Configuration & Environment Variables](#configuration--environment-variables)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [License](#license)
  - [Free to use for](#free-to-use-for)
  - [Commercial license required for](#commercial-license-required-for)
  - [Commercial licensing](#commercial-licensing)
- [Contributing](#contributing)

---

## Overview

**DATA-BLOCKS** is a data visualization application designed to connect to datasets, compose interactive dashboards, and transform raw data into actionable insights through visual blocks.

---

## Key Features

_(Project is in early stage — features will be added here as development progresses)_

---

## Screenshots & Demo

_(Screenshots and live demo link will be added once visual components are built)_

---

## Tech Stack

- **Framework:** [Remix](https://remix.run/) (with [React 19](https://react.dev/))
- **Build Tool:** [Vite](https://vitejs.dev/) with Remix Vite Plugin
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Linter & Formatter:** [ESLint](https://eslint.org/)

---

## Architecture & Core Concepts

_(Architecture details and data pipeline model will be documented as features are implemented)_

---

## Getting Started

### Prerequisites

- **Node.js:** v20.0.0 or higher
- **pnpm:** v9.0.0 or higher (or npm / yarn)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/KumarjitDas/data-blocks.git
cd data-blocks
pnpm install
```

### Development

Start the Vite development server:

```bash
pnpm dev
```

Open your browser at `http://localhost:5173`.

### Available Scripts

| Command        | Description                                         |
| -------------- | --------------------------------------------------- |
| `pnpm dev`     | Starts the local development server                 |
| `pnpm build`   | Compiles TypeScript and builds production artifacts |
| `pnpm preview` | Previews the production build locally               |
| `pnpm lint`    | Runs ESLint checks across the project               |

---

## Configuration & Environment Variables

_(Environment variables and datasource connection settings will be listed here as configuration options are added)_

---

## Project Structure

```text
data-blocks/
├── app/                       # Remix application directory
│   ├── assets/                # Media and image assets
│   ├── components/            # UI components (forms, layouts, ui)
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions and constants
│   ├── routes/                # Remix route modules
│   │   ├── _index.tsx         # Home page route
│   │   ├── about.tsx          # About route
│   │   └── recent.tsx         # Recent dashboards route
│   ├── services/              # Server-side services (DB, API, Auth)
│   ├── styles/                # Global stylesheets
│   ├── types/                 # TypeScript type definitions
│   ├── entry.client.tsx       # Client entry point
│   ├── entry.server.tsx       # Server entry point
│   ├── index.css              # Main stylesheet
│   └── root.tsx               # Root layout and document shell
├── public/                    # Static public assets
├── CLA.md                     # Contributor License Agreement
├── CONTRIBUTING.md            # Contribution guidelines
├── LICENSE.txt                # Commercial and Noncommercial License terms
├── POLYFORM-NONCOMMERCIAL.md  # PolyForm Noncommercial License
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite configuration with Remix plugin
```

---

## Roadmap

_(Roadmap items will be listed here as project milestones are defined)_

---

## License

DATA-BLOCKS is **source-available** under the
[PolyForm Noncommercial License 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0),
with an additional permission for open-source projects. See [LICENSE](LICENSE.txt) for full terms.

### Free to use for

- Personal projects, learning, and hobby use
- Students, schools, and academic research
- Non-profit organizations and government institutions
- Open-source projects released under an [OSI-approved license](https://opensource.org/licenses)

### Commercial license required for

- Use by or within a for-profit company, including internal tools
- Client or agency work
- Embedding in closed-source or proprietary products
- Offering it as a paid or hosted (SaaS) service

### Commercial licensing

Pricing and terms are flexible. Get in touch at **kumarjitdas1999+comm@gmail.com** with a short
description of your use case and I'll get back to you.

> Not sure whether your use counts as commercial? Just ask. I'm happy to clarify.

---

## Contributing

Contributions are welcome! Before your first pull request is merged, you'll be asked to sign a
[Contributor License Agreement](CLA.md). The CLA lets this project keep offering commercial
licenses that include community contributions.

For detailed guidelines on how to contribute, please refer to [CONTRIBUTING.md](CONTRIBUTING.md).
