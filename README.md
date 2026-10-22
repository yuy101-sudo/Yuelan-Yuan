# Yuelan Yuan — Personal Brand Website

A lightweight, responsive single-page workshop prototype built with semantic HTML, CSS, and vanilla JavaScript. It uses a small Node.js server so it can run on Railway without a build step, database, login, external API, or paid service.

## Run locally

Requirements: Node.js 18 or newer.

```bash
npm start
```

Open http://localhost:3000.

## Test

```bash
npm test
```

The included test suite checks that the server returns the page and static assets successfully.

## Deploy to Railway

1. Push this folder to a GitHub repository.
2. In Railway, create a project from that repository.
3. Railway should detect the Node project and run `npm start`. The server listens on Railway's `PORT` environment variable.
4. Generate a public domain in the Railway service settings.

No environment variables need to be configured manually.

## Review before publishing

Only the name Yuelan Yuan, the UC San Diego affiliation, and the broad personal-brand direction from the workshop conversation are used as personal details. The experience cards and skills are explicitly framed as prompts/candidates, not verified claims.

Replace or confirm:
- Academic major and current status/wording of UC San Diego affiliation.
- Bio wording and actual professional interests.
- Three real experiences/projects, including role, dates, actions, and outcomes.
- Skills supported by examples.
- Email address in the `mailto:` link and a real LinkedIn URL.
- Whether the headline reflects your voice and goals.

Fonts load from Google Fonts when available; system fallbacks are included. The site remains usable without the external font request.
