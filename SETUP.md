# Setup & Installation Guide

## Quick Start

After cloning this repository, follow these steps to get the project running:

### 1. Install Dependencies

```bash
npm install
```

This will download all required dependencies from `package.json`. Dependencies are **not** stored in Git to keep the repository lightweight.

**Alternative package managers:**
- Using Yarn: `yarn install`
- Using pnpm: `pnpm install`

### 2. Start Development Server

```bash
npm run dev
```

This launches the development environment where you can preview the design system and components.

### 3. Build for Production

```bash
npm run build
```

Creates optimized production files.

## Project Structure

```
sellingpage/
├── components/
│   ├── core/              # Basic components (Button, Input, Badge, Card)
│   └── shift/             # Shift-specific components (FiableStamp, ReliabilityScore, etc)
├── tokens/                # Design tokens (colors, typography, spacing)
├── guidelines/            # Design guidelines & specimen cards
├── ui_kits/
│   └── landing/           # Pre-launch waitlist landing page
├── assets/                # Logos and brand assets
├── styles.css             # Root stylesheet
└── package.json           # Dependencies & scripts
```

## Why Dependencies Aren't in Git

By default, `node_modules/` and lock files are ignored (see `.gitignore`). This approach:
- ✅ Keeps the repository small (~1-2 MB instead of 100+ MB)
- ✅ Ensures everyone has the latest compatible versions
- ✅ Prevents merge conflicts from dependency updates
- ✅ Makes cloning faster
- ✅ Reduces GitHub storage usage

**First-time setup is simple:** just run `npm install` once, and you're ready to go.

## Node & npm Versions

- **Node.js:** >= 16.0.0
- **npm:** >= 8.0.0

Check your versions:
```bash
node --version
npm --version
```

If you need to update Node, download from [nodejs.org](https://nodejs.org/).

## Troubleshooting

**Problem:** `npm install` is slow or fails

**Solution:** Clear the npm cache:
```bash
npm cache clean --force
npm install
```

**Problem:** Module not found errors after cloning

**Solution:** Ensure dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

For more details on the design system, see [README.md](./README.md).

