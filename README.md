# Syazmi Syakira Portfolio

Static site: plain HTML, CSS and JS. No build step.

## Run locally
Open `index.html` in a browser, or run a small server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Replace placeholders
Put photos in `assets/`, then swap each placeholder `<div class="... placeholder">` in `index.html`
for an `<img>` (there is a comment above each one showing the exact tag):

| File | Where | Suggested size |
| --- | --- | --- |
| `assets/hero.jpg` (optional) | Hero background, currently a CSS texture | 1600 x 900, landscape |

`resume.pdf` is the revamped resume. Replace it when the resume changes.

## Publish on GitHub Pages
1. Create a repo (for example `syakira.github.io` for a root URL, or any name).
2. Push these files to the `main` branch.
3. Repo Settings > Pages > Source: "Deploy from a branch", Branch: `main` / root.
4. The site goes live at `https://<username>.github.io/<repo>/` after a minute or two.
