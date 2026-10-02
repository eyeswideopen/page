# eyes wide open

Personal dev blog at <https://eyeswideopen.dev>. Static [Astro](https://astro.build) site with no client-side JavaScript, deployed to GitHub Pages.

## Writing a post

Create a Markdown file in `src/content/posts/`. The file name becomes the URL, so `my-post.md` is published at `/posts/my-post/`.

```markdown
---
title: My post
description: One sentence. Used for the meta description, link previews and RSS.
pubDate: 2026-10-02
updatedDate: 2026-10-05 # optional
draft: true # optional, default false
---

Post body in Markdown. Fenced code blocks get syntax highlighting at build time.
```

Drafts appear (marked "draft") when you run `npm run dev`, and are left out of production builds, the RSS feed and the sitemap. When the post is ready, remove `draft: true` (or set it to `false`).

The frontmatter is checked against a schema in `src/content.config.ts`, so a missing title or a bad date fails the build.

## Running locally

Requires Node 22.12 or newer.

```sh
npm install
npm run dev       # dev server at http://localhost:4321, includes drafts
npm run build     # production build to dist/
npm run preview   # serve dist/ locally
npx astro check   # type-check
```

## Deploying

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site with `withastro/action` and publishes it with `actions/deploy-pages`. You can also start it by hand under **Actions → Deploy to GitHub Pages → Run workflow**.

`public/CNAME` sets the custom domain, so no base path is needed.

## Layout

```
src/
  content/posts/      posts (Markdown)
  content.config.ts   post schema
  layouts/Base.astro  shared layout: <head>, SEO/Open Graph tags, header, footer
  pages/              home, post pages, about, impressum, datenschutz, rss.xml
  styles/global.css   the only stylesheet (inlined into each page at build time)
  consts.ts           site title and description
```
