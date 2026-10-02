---
title: Hello, world
description: The first post, showing how posts are structured.
pubDate: 2026-10-02
---

This is an example post. Every post is a Markdown file in `src/content/posts/`; the file name becomes the URL slug (`/posts/hello-world`).

## Frontmatter

Each post starts with a frontmatter block:

```yaml
---
title: Hello, world
description: Shown in search results, link previews and the RSS feed.
pubDate: 2026-10-02
updatedDate: 2026-10-03 # optional
draft: true # optional, default false; drafts are left out of production builds
---
```

## Code

Code blocks are highlighted at build time, no JavaScript shipped:

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

> Quotes, *emphasis*, **bold**, and [links](https://eyeswideopen.dev) work as usual.
