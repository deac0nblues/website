# Assets Directory

This directory contains static assets for the website.

## Structure

- **`documents/`** - PDFs and other document files
  - Example: `whitepaper.pdf` → accessible at `/assets/documents/whitepaper.pdf`
  
- **`images/`** - Logos, images, and other graphics
  - Example: `logo.svg` → accessible at `/assets/images/logo.svg`

## Usage in Next.js

Files in the `public` directory are served from the root URL. For example:

- `public/assets/documents/whitepaper.pdf` → `/assets/documents/whitepaper.pdf`
- `public/assets/images/logo.svg` → `/assets/images/logo.svg`

### In Components

```tsx
// Link to PDF
<a href="/assets/documents/whitepaper.pdf" download>
  Download Whitepaper
</a>

// Image
<Image src="/assets/images/logo.svg" alt="Logo" width={200} height={50} />
```

## File Naming

- Use lowercase with hyphens for file names (e.g., `company-logo.svg`, `ai-systems-whitepaper.pdf`)
- Keep file sizes optimized for web
- For images, prefer SVG for logos, WebP/PNG for photos
