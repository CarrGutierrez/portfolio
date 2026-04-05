# Portfolio Final - React Version

A modern, animated portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring the dotted glow background component from shadcn/ui.

## Features

- **Modern React Architecture** - Built with Next.js 14 and TypeScript
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Animated Components** - Smooth animations and transitions
- **Smart Navigation** - Context-aware carousel controls
- **Dotted Glow Background** - Interactive canvas-based background effect
- **Performance Optimized** - Static export ready for deployment

## Sections

- **Navigation** - Sticky header with social links
- **Hero Section** - Animated introduction with scroll effects
- **Work Section** - Video carousel showcasing projects
- **Graphics Section** - Image gallery with smart navigation
- **Experience Section** - Interactive experience cards
- **Footer** - Simple contact section

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Add your assets:**

   - Copy your videos to `public/assets/`
   - Copy your images to `public/assets/`
   - Update asset paths in components as needed

3. **Run development server:**

   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Assets Required

Make sure to add these assets to `public/assets/`:

### Videos

- `rentopia.mp4`
- `brgy.mp4`
- `docquick.mp4`

### Images

- `cade poster.png`
- `lukaposter.png`
- `lakers vs suns final.png`
- `MCPI JERSEY.png`
- `dnsc.jpg`
- `rentopia.png`

### SVG Icons

- `arrow-left.svg` ✅ (included)
- `arrow-right.svg` ✅ (included)

## Customization

- Update personal information in components
- Modify colors in `tailwind.config.ts`
- Adjust animations in `globals.css`
- Configure dotted background in components

## Deployment

This project is configured for static export and can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui components
- Canvas API for dotted background
