# מישלב — Mishlav

Website for **מישלב - מרכז שירות לאפוטרופסות בטוחה** (Mishlav Guardianship Service Center), a nonprofit providing professional guardianship services in Israel.

**Live repo:** [github.com/ChayaLipshitz/Mishlav](https://github.com/ChayaLipshitz/Mishlav)

## About the site

A bilingual (Hebrew / English) single-page marketing website built with React and Vite. It includes:

- **Hero** — introduction and call-to-action
- **About** — mission, values, and guiding principles
- **Services** — guardianship services offered by the organization
- **Testimonials** — recommendations from families and professionals
- **FAQ** — common questions about guardianship
- **Contact** — contact form and organization details

Accessibility features and a language switcher are included.

## Tech stack

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/) 6
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)

The project was originally generated on [Base44](https://base44.com) and customized to run as a standalone local site.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm

### Install and run locally

```bash
git clone https://github.com/ChayaLipshitz/Mishlav.git
cd Mishlav
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.

No environment variables are required for local development.

### Other commands

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project structure

```
src/
├── components/
│   ├── layout/       # page sections (Hero, About, Services, etc.)
│   ├── content/      # Hebrew translations
│   └── LanguageContext.jsx  # i18n (Hebrew / English)
├── pages/
│   └── HomePage.jsx  # main landing page
└── App.jsx           # routing
```

Content text is managed in `src/components/content/hebrewContent.jsx` and `src/components/LanguageContext.jsx`.

## Contact form

The contact form submits to [Formspree](https://formspree.io/). To use your own inbox, update the endpoint in `src/components/layout/ContactSection.jsx`.

## Deployment

Build the site and deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, etc.):

```bash
npm run build
```

## Contact

- **Phone:** 052-716-5860
- **Email:** mishlav866@gmail.com
- **Address:** ארץ חפץ 102, ירושלים
