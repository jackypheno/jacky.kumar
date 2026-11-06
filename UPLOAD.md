# Upload to GitHub Pages

## Recommended clean repository
Create a repository named `jackypheno.github.io`, then from this folder run:

```bash
git init
git branch -M main
git add .
git commit -m "Create Jacky Kumar academic website"
git remote add origin https://github.com/jackypheno/jackypheno.github.io.git
git push -u origin main
```

If the repository already exists, clone it first and copy these files into it, then:

```bash
git add .
git commit -m "Update academic website"
git push origin main
```

In GitHub: Settings -> Pages -> Deploy from a branch -> `main` -> `/ (root)`.
