# Replit.md

## Overview

This is a full-stack TypeScript web application featuring a React frontend with a modern component library and an Express backend with PostgreSQL database. The project appears to be a company landing page/marketing site with a contact form submission feature. It uses a monorepo structure with shared code between client and server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and effects
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript compiled with tsx
- **API Pattern**: REST endpoints defined in shared/routes.ts with Zod schemas for type-safe contracts
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Build**: esbuild for production bundling with selective dependency bundling

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Drizzle database schemas and Zod validation schemas
- `routes.ts`: API route definitions with input/output type schemas

### Development vs Production
- **Development**: Vite dev server with HMR, served through Express middleware
- **Production**: Static files built to `dist/public`, served by Express static middleware

### Database Schema
Currently has one table:
- `contact_requests`: Stores contact form submissions (id, name, email, company, message, createdAt)

### Key Design Decisions
1. **Type-safe API contracts**: Using Zod schemas in shared/routes.ts ensures frontend and backend agree on data shapes
2. **Drizzle-Zod integration**: Database schemas automatically generate validation schemas
3. **Component-first UI**: shadcn/ui provides unstyled, accessible components that are fully customizable
4. **CSS Variables theming**: Theme colors defined as HSL values in index.css for easy customization

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via DATABASE_URL environment variable
- **Drizzle Kit**: Schema migrations with `npm run db:push`

### Key NPM Packages
- `drizzle-orm` / `drizzle-zod`: Database ORM and schema validation
- `@tanstack/react-query`: Server state management
- `@radix-ui/*`: Accessible UI primitives (used by shadcn/ui)
- `framer-motion`: Animation library
- `react-hook-form` / `@hookform/resolvers`: Form handling
- `zod`: Schema validation
- `wouter`: Client-side routing

### Replit-Specific Integrations
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development banner

### Fonts
External Google Fonts loaded in index.html and index.css:
- Plus Jakarta Sans (body)
- Outfit (display)
- JetBrains Mono (monospace)