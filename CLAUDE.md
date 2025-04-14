# CLAUDE.md for CompMotifs Website

## Build Commands
- Development: `pnpm dev` (starts dev server)
- Build: `pnpm build` (builds for production)
- Preview: `pnpm preview` (previews production build)

## Code Style Guidelines
- **TypeScript**: Follows strict TypeScript configuration (see tsconfig.json)
- **Naming**:
  - Components use PascalCase (Article, Sidenote)
  - Files use lowercase (article.astro, sidenote.astro)
- **Imports**: Layout imports first, then components
- **Components**: Use explicit Props interface with typed properties
- **CSS**:
  - Variables use -- prefix
  - Media queries at 760px and 960px breakpoints
  - ET Book font family used throughout

## Project Structure
- `src/components/` - Reusable UI components
- `src/layouts/` - Page layouts
- `src/pages/` - Route pages
- `src/styles/` - CSS styles
- `public/` - Static assets (images, fonts)