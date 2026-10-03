# Contributing to Nexa Website

## Repository context

This repository contains a static bilingual website for Nexa. It describes product scope and public status; it does not publish a live application endpoint.

## Workflow

1. Follow the repository branch and review process configured by maintainers.
2. Keep edits scoped to a page, content area, or documentation concern.
3. Use Conventional Commit messages when a commit is requested.
4. Validate locally before proposing publication.
5. Do not commit screenshots, local environment files, secrets, or unrelated generated artifacts.

## Architecture

- Preserve semantic HTML and the existing CSS structure.
- Keep JavaScript small and page-focused.
- Treat Blueprint as authority for Nexa product scope.
- Distinguish product targets from implemented and accepted capabilities.
- Do not add unverified application endpoints, pricing, SLA, or support claims.
- Do not add external dependencies without project approval.

## Local preview

```bash
python3 -m http.server 8000
```

The site uses static HTML, CSS, and JavaScript; no package installation is required.
