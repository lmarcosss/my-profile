# Project Context - My Profile

## Overview

**My Profile** is a modern and minimalist personal portfolio developed for Leonardo Marcos, a software developer with over 6 years of experience. The project serves as a professional showcase, presenting skills, projects, and contact information in an elegant and interactive way.

## Technology Stack

### Core
- **React 18.3.1** - UI library
- **TypeScript 5.6.2** - Static typing
- **Vite 5.4.10** - Build tool and dev server

### Styling
- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **tailwindcss-animate** - Animations for Tailwind
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

### UI and Components
- **Radix UI** - Accessible and unstyled components
  - `@radix-ui/react-dropdown-menu`
  - `@radix-ui/react-icons`
  - `@radix-ui/react-navigation-menu`
  - `@radix-ui/react-slot`
- **Framer Motion 11.11.10** - Animations and transitions
- **Lucide React** - Modern icons
- **class-variance-authority** - Component variant management
- **clsx** + **tailwind-merge** - CSS class utilities

### Internationalization
- **i18next 25.3.2** - i18n framework
- **react-i18next 15.6.1** - React integration

### Others
- **Embla Carousel React** - Carousel component
- **Umami Analytics** - Analytics (optional, via env vars)

## Project Architecture

### Directory Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   ├── animated-card.tsx
│   ├── footer.tsx
│   ├── navigation-menu.tsx
│   ├── presentation.tsx
│   ├── project.tsx
│   └── projects.tsx
├── config/              # Configuration files
│   ├── i18n.ts         # Internationalization configuration
│   └── umami.ts        # Analytics configuration
├── contexts/           # Context API
│   └── theme-provider.tsx
├── assets/             # Static assets
│   ├── flags/         # Flags for language selector
│   ├── profile-image.webp
│   └── projects/       # Project images
├── lib/                # Utilities
│   └── utils.ts       # Helper functions (cn helper)
├── App.tsx             # Main component
├── App.css             # App-specific styles
├── index.css           # Global styles and CSS variables
└── main.tsx            # Application entry point
```

### Data Flow

```
main.tsx
  └── App.tsx
      └── ThemeProvider (Context)
          ├── NavigationMenu
          ├── Presentation
          ├── Projects
          │   └── Project (multiple)
          └── Footer
```

## Main Components

### App.tsx
Root component that:
- Wraps the application with `ThemeProvider`
- Defines the main layout (fixed header + content)
- Manages background (white/dark `#0a0a0a`)

### NavigationMenu
Fixed navigation menu at the top with:
- "Leo." logo (green in dark mode)
- Link to CV (Google Drive)
- Theme toggle (light/dark)
- Language selector (PT-BR/EN-US)
- Responsive menu for mobile

### Presentation
Presentation section containing:
- Profile picture with flip animation (easter egg)
- Title with green highlight on second part
- Professional description
- Social links (GitHub, LinkedIn, Instagram, Email) with gray borders and green hover effect
- Responsive layout: centered on mobile, side-by-side on medium+ screens
- Text width limited to max-w-2xl on large screens
- Image aligned with top of title text on large screens

### Projects
List of developed projects:
- Responsive grid (1 column mobile, 2 desktop)
- Cards with image, title, description and technologies
- Standardized button sizes (flex-1 with min-w-[120px])
- Buttons for code (GitHub) and demo (when available)
- Hover effects with green borders and text

### AnimatedCard
Special component that:
- Allows 3D flip of profile picture (like a coin)
- Reveals easter egg on the back (yellow border)
- Uses Framer Motion for smooth animation

### Footer
Simple footer with dynamic copyright

## Design System

### Colors
- **Light background**: White (`#ffffff`)
- **Dark background**: Almost black (`#0a0a0a`) - neutral, no blue tones
- **Accent color**: Green (`green-500`) - used as secondary color
- **Borders**: Light/dark gray according to theme

### Typography
- **Main font**: Inter (loaded from Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Fallback**: system-ui, Avenir, Helvetica, Arial, sans-serif

### Theme
- Support for light and dark mode
- Manual or system toggle
- Persistence via localStorage
- CSS variables for dynamic colors

### Animations
- Smooth transitions on hovers
- 3D flip on profile picture
- Scale and color effects on buttons
- Animations with Framer Motion

## Internationalization (i18n)

### Supported Languages
- **Portuguese (pt-BR)** - Default language
- **English (en-US)**

### Translation Keys
- Titles and descriptions
- Button labels
- Copyright messages
- Navigation texts
- Easter egg

### Configuration
File `src/config/i18n.ts` contains all inline translations.

## Main Features

1. **Dark/Light Theme**
   - Manual toggle
   - System preference detection
   - Persistence in localStorage

2. **Multi-language**
   - Portuguese and English
   - Dynamic switching without reload
   - Fixed height to prevent layout shift

3. **Interactive Animations**
   - Profile picture flip (easter egg)
   - Hovers with green effects
   - Smooth transitions

4. **Responsiveness**
   - Mobile-first
   - Tailwind breakpoints (sm, lg)
   - Hamburger menu on mobile

5. **Analytics (Optional)**
   - Umami integration
   - Configurable via environment variables
   - Event tracking (link clicks)

## Build and Deploy

### NPM Scripts
- `npm run dev` - Development server
- `npm run build` - Production build (TypeScript + Vite)
- `npm run lint` - Code verification
- `npm run preview` - Build preview

### Deploy
- **Firebase Hosting** configured
- **GitHub Actions** for CI/CD
  - Automatic deploy on merge to main
  - PR previews

### Optimizations
- Code splitting (React, layout, i18n)
- Lazy loading of components
- Optimized build with Vite

## Main Dependencies

### Production
- React ecosystem (react, react-dom)
- UI libraries (Radix UI, Framer Motion)
- Styling (Tailwind CSS)
- i18n (i18next, react-i18next)

### Development
- TypeScript and types
- ESLint + Prettier
- Vite plugins
- PostCSS

## Conventions and Standards

### Naming
- Components: PascalCase (`Presentation.tsx`)
- Files: kebab-case or camelCase
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE

### Component Structure
- Typed props with TypeScript
- Custom hooks when needed
- Separation of logic and presentation

### Styling
- Tailwind CSS for styles
- Utility classes
- CSS variables for themes
- Dark mode with `dark:` class

## Special Features

1. **Easter Egg**: Clickable profile picture that flips revealing a message
2. **Minimalist Design**: Focus on simplicity and elegance
3. **Performance**: Optimized build, lazy loading
4. **Accessibility**: Radix UI components, ARIA labels
5. **SEO**: Semantic HTML structure

## Important Configurations

### Vite (`vite.config.ts`)
- `@` alias for `./src`
- Code splitting configured
- React plugin

### Tailwind (`tailwind.config.js`)
- Dark mode via class
- Custom font (Excalifont)
- CSS variables for colors
- Animation plugin

### TypeScript
- Strict configuration
- Path aliases
- Types for Vite

## Development Notes

- The project uses a minimalist palette: almost pure black (`#0a0a0a`) - neutral, no blue tones - and green (`green-500`) as accent color
- The Inter font provides a clean, modern look
- Animations are subtle and non-intrusive
- Layout uses responsive breakpoints (md: for medium screens, lg: for large screens)
- Social icons have gray borders with green hover effect in both light and dark modes
- All components are functional (hooks)
- Text content has max-width limits to prevent excessive stretching on large screens

## Potential Next Steps

- Add more projects
- Implement skills section
- Add blog or articles
- Improve SEO with meta tags
- Add unit tests
