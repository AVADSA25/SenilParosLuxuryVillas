# SENIL Paros Villas - Luxury Real Estate Website

## Overview

SENIL is a single-page, conversion-focused luxury real estate website showcasing three exclusive villas in Isterni, Paros, Greece. The project emphasizes "quiet luxury" aesthetics with minimal design, fast performance, and lead generation through appointment requests and brochure downloads.

**Key Details:**
- 3 luxury villas totaling 1,032.82 m² living space, 19 bedrooms
- Completion: 2026
- Price: On request (€12,400,000 internally)
- Target: High-net-worth individuals seeking premium Greek island properties

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling:**
- React 18 with TypeScript (strict mode)
- Vite as build tool and dev server
- Wouter for client-side routing
- Single-page application architecture with smooth-scroll navigation

**UI Component System:**
- shadcn/ui component library (New York style preset)
- Radix UI primitives for accessible interactions
- Tailwind CSS for styling with custom design tokens
- Framer Motion for animations and micro-interactions

**Design System:**
- **Brand Colors:** Three-color palette (Ash Stone #D8D5CC, Olive Slate #75776A, Deep Graphite #1E1E1C)
- **Typography:** Newsreader (serif, headings) + Inter (sans-serif, body)
- **Layout:** 12-column grid, max-width 1200px, 8px spacing rhythm
- **Border Radius:** 12px for cards, 999px (pill) for buttons
- **Performance Budget:** LCP ≤ 2.0s, CLS < 0.05, route JS ≤ 180KB gzipped

**State Management:**
- TanStack Query (React Query) for server state
- Local component state with React hooks
- Toast notifications via custom hook system

**Key Features:**
- First-visit logo micro-intro with localStorage persistence
- Sticky header with smooth scroll navigation
- Villa cards with image galleries and modal dialogs
- Lead capture forms (viewing requests, brochure downloads)
- Responsive design with mobile-first approach
- Accessibility: prefers-reduced-motion support, focus states, semantic HTML

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- HTTP server creation via Node's native `http` module
- Custom logging middleware for API routes

**Development Setup:**
- Vite middleware mode for HMR during development
- Custom error handling middleware
- Static file serving in production

**Storage Interface:**
- Abstract `IStorage` interface for data operations
- In-memory storage implementation (`MemStorage`)
- Ready for database migration (Drizzle ORM configured)

**Current Implementation:**
- User CRUD operations (skeleton structure)
- API routes prefixed with `/api`
- Session handling prepared but not yet implemented

### Data Layer (Prepared but Not Active)

**ORM & Database:**
- Drizzle ORM configured for PostgreSQL
- Neon Database serverless driver (@neondatabase/serverless)
- Schema definition in `shared/schema.ts`

**Current Schema:**
- Users table with UUID primary keys
- Zod schemas for validation via drizzle-zod

**Migration Strategy:**
- Drizzle Kit configured for schema push
- Migrations output to `./migrations` directory
- Environment variable required: `DATABASE_URL`

**Note:** The application structure suggests future database integration for storing lead inquiries, brochure requests, and user management, but currently uses in-memory storage.

## External Dependencies

### UI & Styling
- **shadcn/ui:** Pre-built accessible components
- **Radix UI:** Headless UI primitives (dialogs, dropdowns, accordions, etc.)
- **Tailwind CSS:** Utility-first CSS framework with custom configuration
- **Framer Motion:** Animation library for scroll effects and transitions
- **class-variance-authority:** Type-safe component variants
- **Lucide React:** Icon library

### Forms & Validation
- **React Hook Form:** Form state management
- **@hookform/resolvers:** Validation resolver for React Hook Form
- **Zod:** Schema validation (via drizzle-zod)

### Data Fetching
- **TanStack Query:** Server state management and caching
- **date-fns:** Date formatting utilities

### Database & ORM
- **Drizzle ORM:** Type-safe SQL query builder
- **@neondatabase/serverless:** PostgreSQL driver for edge/serverless environments
- **drizzle-kit:** Schema migrations and introspection

### Development Tools
- **tsx:** TypeScript execution for development
- **esbuild:** Server-side bundling for production
- **Vite plugins:** Runtime error overlay, Replit cartographer, dev banner

### Fonts
- **Google Fonts:** Newsreader (serif) and Inter (sans-serif) loaded via HTML link tags

### Future Integrations (Mentioned in Design Docs)
- **Resend:** Email service for lead notifications
- **reCAPTCHA v3:** Anti-spam protection for forms
- **Lenis:** Smooth scrolling (optional)

**Deployment Target:** Vercel (optimized for serverless deployment)