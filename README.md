# Will Finlay Photography

A Hugo photography portfolio site with a filterable Travel/Events grid, lightbox galleries, and a Previous/Next gallery pager.

## Adding a new gallery

Galleries live under `content/portfolio/travel/` or `content/portfolio/events/`. Each gallery is its own folder containing an `index.md` and its photos.

1. Make a new folder, e.g. `content/portfolio/travel/hawaii/`
2. Add an `index.md` inside it:

   ```yaml
   ---
   title: "Hawaii"
   date: 2024-06-01
   weight: 3
   cover: "01-beach.jpg"
   ---
   ```

   - `weight` controls ordering within the category (and the Previous/Next pager order) — lower numbers come first.
   - `cover` is the filename of the photo to use as the grid thumbnail. If omitted, the first photo alphabetically is used.

3. Drop your photos into that same folder, alongside `index.md`. Keep filenames simple (`01-beach.jpg`, `02-sunset.jpg`, etc.) — the two-digit prefix keeps them in a predictable order in the gallery.

That's it — the gallery will automatically appear in its category page and in the full Portfolio grid.

## Photo sizing

Don't drop full-resolution camera originals straight into the repo — Hugo resizes images at build time, but very large source files slow down builds and bloat the git history. Before adding photos:

- Export/resize to roughly **2000–2500px** on the long edge.
- JPEG quality ~80–85% is plenty for web use.
- Keep full-resolution originals somewhere else (external drive, cloud storage) — they don't need to be in this repo.

## Local preview

```bash
hugo server -D
```

Then open http://localhost:1313. Pages reload automatically as you edit content or photos.

## Deployment

Pushing to `main` automatically builds and deploys the site via GitHub Actions (`.github/workflows/hugo.yml`) to GitHub Pages.

## Editing the About page

Edit `content/about.md`.

## Publishing changes to site

In Terminal, type

cd [drag and drop 'Will-Finlay-Photography-main' folder into Terminal]

enter

then type

git add .

enter

then type

git commit -m "[short description of updates]

enter

then type

git push

enter

Github page should now show orange "pending" dot. After a minute, changes to green check. Refresh webpage, edits should be there.
