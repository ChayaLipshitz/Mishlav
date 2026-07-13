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

## Deployment (Netlify via GitHub Actions)

Every push to `main` automatically builds and deploys to Netlify.

**No need to connect Netlify to GitHub.** Your Netlify site can stay standalone — GitHub Actions uploads the built files using an API token.

### One-time setup

#### 1. Get your Netlify Site ID

You already have a Netlify site — you just need its ID:

1. Sign in at [app.netlify.com](https://app.netlify.com)
2. Open your Mishlav site
3. Go to **Site configuration** → **General** → **Site details**
4. Copy the **Site ID** (looks like `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

#### 2. Create a Netlify personal access token

1. Click your avatar (top right) → **User settings**
2. Go to **Applications** → **Personal access tokens**
3. Click **New access token** → name it e.g. `github-actions-mishlav`
4. Copy the token immediately (it is only shown once)

#### 3. Add secrets to your GitHub repo

In GitHub: open `ChayaLipshitz/Mishlav` → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Add these two secrets:

| Secret name | Value |
|-------------|-------|
| `NETLIFY_AUTH_TOKEN` | The token from step 2 |
| `NETLIFY_SITE_ID` | The Site ID from step 1 |

#### 4. Push the workflow to GitHub

If you haven't pushed the workflow file yet:

```bash
git add .
git commit -m "Add Netlify deploy workflow"
git push
```

#### 5. Verify the deploy

1. On GitHub, open the **Actions** tab — you should see **Build and Deploy to Netlify** running
2. When it turns green, open your Netlify site URL (under **Domain management**)
3. Your site should show the latest version

Future pushes to `main` will deploy automatically.

### How it works

```
GitHub (push to main)
  → GitHub Actions runs npm run build
  → uploads dist/ to your existing Netlify site via API
```

Netlify does not need access to your GitHub repo. Only the two secrets above are required.

### Manual deploy (optional)

If you ever want to deploy from your computer without GitHub Actions:

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

(You'll be prompted to log in to Netlify the first time.)

## Contact

- **Phone:** 052-716-5860
- **Email:** mishlav866@gmail.com
- **Address:** ארץ חפץ 102, ירושלים
