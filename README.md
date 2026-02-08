# Quicksilver Labs Website

A minimal, industrial-design website built with Next.js, React, and Tailwind CSS.

## Prerequisites

- **Node.js** (version 18.x or higher)
- **npm** (comes with Node.js) or **yarn**

To check if you have Node.js installed:
```bash
node --version
npm --version
```

If you don't have Node.js installed:
- **Mac/Linux**: Install via [nvm](https://github.com/nvm-sh/nvm) or download from [nodejs.org](https://nodejs.org/)
- **Windows**: Download the installer from [nodejs.org](https://nodejs.org/)

## Installation

1. **Clone the repository** (if you haven't already):
```bash
git clone https://github.com/deac0nblues/website.git
cd website
```

2. **Install dependencies**:
```bash
npm install
```

This will install all required packages including Next.js, React, Tailwind CSS, Framer Motion, and other dependencies.

## Running Locally

### Development Server

Start the development server:

```bash
npm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000)

Open your browser and navigate to that URL. The page will automatically reload when you make changes to the code.

### Deployment (Vercel + Comments → GitHub Issues)

For deploying to Vercel and using in-context comments that convert to GitHub issues, see **[DEPLOYMENT.md](DEPLOYMENT.md)**.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server locally:

```bash
npm start
```

## Project Structure

```
website/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles and Tailwind config
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Home page
├── components/          # React components
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services section
│   ├── Process.tsx     # AISOS section
│   ├── Boundaries.tsx  # Boundaries section
│   ├── About.tsx       # About section
│   ├── Leadership.tsx  # Leadership section
│   ├── Footer.tsx      # Footer
│   ├── NavigationBar.tsx  # Side navigation
│   ├── DynamicGrid.tsx    # Dynamic background grid
│   ├── AnimatedHeading.tsx # Typography animations
│   └── MouseReactive.tsx  # Mouse-reactive elements
├── lib/                # Utility functions and hooks
│   ├── hooks/
│   │   └── useMousePosition.ts
│   └── utils.ts
└── site.md             # Content and design guidelines
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Inter / IBM Plex Sans** - Typography

## Troubleshooting

### Port 3000 already in use

If you get an error that port 3000 is already in use:

**Mac/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

Or run on a different port:
```bash
npm run dev -- -p 3001
```

### Module not found errors

If you encounter module not found errors, try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors

Clear the Next.js cache:
```bash
rm -rf .next
npm run build
```

## Development Notes

- The site uses a dynamic grid background that changes density based on scroll position
- Section headings animate with a typewriter/reveal effect on scroll
- Geometric elements react subtly to mouse position
- All content is sourced from `site.md` - do not modify component text directly

## License

[Add your license here]
