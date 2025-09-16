# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js landing page for Probook, an AI dispatching software for home services companies. The application is built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Development Commands

- `npm run dev` - Start development server with Turbopack (opens at http://localhost:3000)
- `npm run build` - Build production version
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture

### App Structure
- Uses Next.js App Router architecture (`src/app/`)
- Components are located in `src/app/components/`
- Pages follow the App Router file-based routing:
  - Home page: `src/app/page.tsx`
  - Careers: `src/app/careers/page.tsx`
  - Case studies: `src/app/case-studies/` with individual company pages

### Key Technologies
- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS** for styling with custom color scheme (red: #C40000, blue: #005DC4, dark-blue: #002D5E)
- **Material-UI** icons (@mui/icons-material)
- **Spline** for 3D graphics integration
- **Google Fonts**: Source Sans 3 and Space Grotesk

### Component Organization
- Reusable components in `src/app/components/`:
  - `Navbar.tsx`, `Footer.tsx` - Layout components
  - `GradientButton.tsx`, `AnimatedGradientText.tsx` - Interactive UI elements
  - `CustomerCarousel.tsx`, `TeamPhotoCarousel.tsx` - Content carousels
  - `DotGrid.tsx`, `AnimatedBlurCircle.tsx` - Visual effects

### Styling Approach
- Tailwind CSS with custom configuration in `tailwind.config.ts`
- Custom color palette defined for brand colors
- Font variables set up in layout.tsx for consistent typography
- Responsive design with mobile-first approach

### Import Aliases
- `@/*` maps to `./src/*` for cleaner imports (configured in tsconfig.json)

## Content Structure

The landing page includes:
- Hero section with 3D Spline animation
- Partner/customer showcases
- Customer testimonials with case study links
- About section with embedded video
- Careers section with job listings
- Multiple call-to-action sections for demo booking