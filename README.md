# Capital Assist — Static Marketing Site

A sleek, professional multi-page SPA for a B2B/B2B financial services company specializing in large-ticket construction & commercial vehicle finance, bridging clients with 14+ major Indian banks and NBFCs.

## Stack
- **React 18 + Vite** — fast SPA scaffold
- **Tailwind CSS** — navy / slate / gold design system
- **React Router v6** — multi-page navigation
- **Framer Motion** — page transitions & scroll-reveal animations
- **lucide-react** — iconography

## Getting Started
```bash
npm install
npm run dev
```

## Structure
```
src/
  components/      Reusable UI (Header, Footer, EMICalculator, DocumentChecklist…)
  pages/           Route-level views (Home, Services, Products, HowItWorks, Partners, About, Contact)
  utils/           Helpers (emi calc, form submit abstraction)
  data/            Static content (banks, services, products, checklists)
  main.jsx         Entry — mounts router
  App.jsx          Routes + AnimatePresence page transitions
```

## Backend Integration
Form submission is abstracted through `src/utils/api.js` → `submitCallback(payload)`.
Swap the simulated implementation with a real Supabase / Firebase / REST call; the UI is already wired for loading + success states.
