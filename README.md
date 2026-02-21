# hosted-spa

A tiny hello-world single page app configured for GitHub Pages.

## Local preview

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Deploy

Push to `main` and GitHub Actions will deploy this static site to GitHub Pages using `.github/workflows/deploy.yml`.

### Notes

- Uses hash routing (`#/`) for reliable SPA navigation on GitHub Pages.
- Includes `404.html` redirect for direct URL hits.
