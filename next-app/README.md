# Teddy Straler Website

A modern, responsive website for Teddy Straler built with Next.js and deployed on Cloudflare Pages.

## Features

- Responsive design that works on all devices
- Modern UI with Tailwind CSS
- Dark mode support
- Fast performance with Next.js
- SEO optimized
- Contact form

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router files
  - `components/` - Reusable UI components
  - `page.tsx` - Main page component
  - `layout.tsx` - Root layout component
  - `globals.css` - Global styles
- `public/` - Static assets and Cloudflare configuration
  - `_headers` - Custom HTTP headers
  - `_redirects` - URL redirects
  - `_cloudflare/` - Cloudflare Pages configuration

## Deployment

This project is configured for deployment on Cloudflare Pages. See [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md) for detailed deployment instructions.

## Technologies Used

- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [Cloudflare Pages](https://pages.cloudflare.com) - Hosting platform

## License

This project is licensed under the MIT License - see the LICENSE file for details.
