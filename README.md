Built with React, Vite, and shadcn/ui.

## Prerequisites

- Node.js 16.x or higher
- npm or yarn

## Setup

1. Clone the repository:
```bash
git clone https://github.com/Raviikumar001/ui-dashboard-Ant.git
cd ui-dashboard-Ant
```

## INSTALL DEPENDENCIES
```bash
npm install
```
##RUN THE APPLICATION
```bash
npm run dev
```

## Project Structure
```
src/
├── assets/                    # Static assets like images, fonts
├── components/
│   ├── auth/                 # Authentication related components
│   │   └── sign-in-page.tsx
│   ├── dashboard/            # Dashboard related components
│   │   ├── Dashboard.tsx
│   │   ├── RepositoriesList.tsx
│   │   └── SideNav.tsx
│   └── ui/                   # Reusable UI components (shadcn/ui)
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── separator.tsx
│       └── ...
├── hooks/                    # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                      # Utility functions and shared logic
│   └── utils.ts
├── mock-data/               # Mock data for development
│   └── repo.json
├── styles/                  # Global styles and theme
│   └── globals.css
├── types/                   # TypeScript type definitions
│   └── index.d.ts
├── App.tsx                  # Root component
├── index.css               # Global CSS imports
├── main.tsx                # Entry point
└── vite-env.d.ts          # Vite type definitions

config/
├── components.json         # shadcn/ui configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── tsconfig.json          # TypeScript configuration

public/
├── images/                # Public images
└── svg/                   # Public SVGs

```

  ## Technologies Used
 ```
  React 18
  Vite
  shadcn/ui
  Tailwind CSS
  Lucide Icons
  ```
