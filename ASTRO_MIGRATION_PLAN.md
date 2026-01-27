# Astro Migration Plan for darindimitroff.com

## Current Site Analysis

### Technology Stack
- **Framework:** Jekyll (Ruby-based static site generator)
- **CSS:** Custom utility-first SCSS framework (40+ partials, similar to Tachyons)
- **Content:** Markdown with YAML frontmatter
- **Data:** YAML files (`_data/home.yml`, `_data/social.yml`, `_data/work.yaml`)
- **Build tools:** Gulp, Node.js

### Content Inventory
| Type | Count | Location |
|------|-------|----------|
| Blog Posts | 8 | `_posts/*.markdown` |
| Work/Portfolio | 11 | `work/*.md` |
| Pages | 1 (homepage) | `index.html` |
| Data files | 3 | `_data/` |

### Key Features to Preserve
1. **Dark/Night mode toggle** (emoji-based: 😎/😳)
2. **Responsive 12-column grid** (sm/md/lg/xl breakpoints)
3. **Custom typography** (Avenir Next Rounded Bold for headings)
4. **Utility-first CSS classes** (spacing, colors, flexbox, etc.)
5. **Work cards** with custom colors per project
6. **Blog posts** with reading time estimates
7. **Social links** in footer

---

## Migration Target

### Framework: Astro 4.x
**Why Astro:**
- Zero-JS by default (perfect for a portfolio/blog)
- Native Markdown/MDX support with Content Collections
- Island architecture for interactive components (dark mode toggle)
- Excellent build performance
- Native TypeScript support
- Simple migration path from Jekyll

### CMS: Astro Content Collections (Built-in)
**Why Content Collections over external CMS:**
- Your content is already in Markdown with frontmatter - perfect fit
- Type-safe content schemas with Zod validation
- No external dependencies or API costs
- Git-based workflow you're already using
- Easy to add a headless CMS later if needed (Decap/Netlify CMS, Sanity, etc.)

### CSS: Modern CSS (no framework)
**Approach:** Convert SCSS to modern CSS using:
- CSS Custom Properties (variables) for design tokens
- CSS Nesting (now widely supported)
- CSS Container Queries for component-based responsive design
- Native CSS Grid for layout
- `@layer` for cascade management
- `light-dark()` function for color scheme switching

**Why not CSS-in-JS:**
- Your site is mostly static content
- CSS-in-JS adds runtime overhead
- Modern CSS now has features that made CSS-in-JS popular (nesting, variables)
- Better alignment with Astro's zero-JS philosophy

---

## Detailed Migration Steps

### Phase 1: Project Setup

#### 1.1 Initialize Astro Project
```bash
npm create astro@latest darin-astro
cd darin-astro
```

#### 1.2 Project Structure
```
darin-astro/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Nav.astro
│   │   ├── Intro.astro
│   │   ├── HomeContent.astro
│   │   ├── WorkCard.astro
│   │   ├── PostCard.astro
│   │   ├── ReadingTime.astro
│   │   └── ThemeToggle.astro    # Island component for dark mode
│   ├── layouts/
│   │   ├── BaseLayout.astro      # Replaces _layouts/default.html
│   │   ├── PostLayout.astro      # Replaces _layouts/post.html
│   │   └── WorkLayout.astro      # Replaces _layouts/work.html
│   ├── content/
│   │   ├── posts/                # Blog posts (from _posts/)
│   │   │   └── *.md
│   │   ├── work/                 # Portfolio items (from work/)
│   │   │   └── *.md
│   │   └── config.ts             # Content collection schemas
│   ├── data/
│   │   ├── home.ts               # Converted from home.yml
│   │   └── social.ts             # Converted from social.yml
│   ├── styles/
│   │   ├── global.css            # Main stylesheet
│   │   ├── reset.css             # CSS reset
│   │   ├── tokens.css            # Design tokens (CSS variables)
│   │   └── utilities.css         # Utility classes
│   └── pages/
│       ├── index.astro           # Homepage
│       ├── posts/
│       │   └── [...slug].astro   # Dynamic post routes
│       └── work/
│           └── [...slug].astro   # Dynamic work routes
├── public/
│   ├── fonts/
│   │   ├── AvenirNextRounded-Bold.woff
│   │   └── AvenirNextRounded-Bold.woff2
│   └── images/
│       ├── favicon.png
│       └── thumb.png
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### Phase 2: Content Collections Setup

#### 2.1 Define Content Schemas (`src/content/config.ts`)
```typescript
import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const workCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    color: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  work: workCollection,
};
```

#### 2.2 Migrate Content Files
- Remove date prefixes from post filenames (`2017-02-20-accessibility.markdown` → `accessibility.md`)
- Keep the date in frontmatter
- Update image paths if needed
- Convert `<!--More-->` excerpts to proper frontmatter `description` field or use Astro's content excerpt feature

### Phase 3: CSS Migration

#### 3.1 Design Tokens (`src/styles/tokens.css`)
```css
:root {
  /* Colors */
  --color-black: #2C334E;
  --color-white: #FEFEFE;
  --color-grey: #E9EBF1;
  --color-smoke: #2a3148;
  --color-burn: #232940;

  /* Highlights */
  --color-highlight-yellow: rgba(254, 255, 204, 1);
  --color-highlight-green: #D2FFCF;
  --color-highlight-blue: #C9FFEF;
  --color-highlight-darkblue: #C7E1FF;
  --color-highlight-purple: #D9D4FF;
  --color-highlight-pink: #F6D4FF;
  --color-highlight-red: #FFD4D9;

  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-heading: 'Avenir Next Rounded', var(--font-sans);

  /* Type Scale (1.25 ratio) */
  --text-xs: 0.64rem;
  --text-sm: 0.8rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.563rem;
  --text-2xl: 1.953rem;
  --text-3xl: 2.441rem;
  --text-4xl: 3.052rem;

  /* Spacing Scale */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 1rem;
  --space-4: 2rem;
  --space-5: 4rem;
  --space-6: 8rem;

  /* Transitions */
  --transition-fast: 0.1s ease-in-out;
  --transition-normal: 0.2s ease-in-out;

  /* Breakpoints (for reference in media queries) */
  --bp-sm: 34em;   /* 544px */
  --bp-md: 48em;   /* 768px */
  --bp-lg: 62em;   /* 992px */
  --bp-xl: 75em;   /* 1200px */

  /* Semantic Colors */
  --color-text: var(--color-black);
  --color-bg: var(--color-white);
  --color-card-bg: #fff;
  --color-border: var(--color-grey);
}

/* Dark Mode */
[data-theme="dark"] {
  --color-text: var(--color-white);
  --color-bg: color-mix(in srgb, var(--color-black), black 62.5%);
  --color-card-bg: color-mix(in srgb, var(--color-burn), black 35%);
  --color-border: var(--color-smoke);
}

/* Or use color-scheme with light-dark() function */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    color-scheme: dark;
  }
}
```

#### 3.2 Utility Classes (`src/styles/utilities.css`)
```css
/* Use CSS Layers for better cascade management */
@layer utilities {
  /* Display */
  .flex { display: flex; }
  .block { display: block; }
  .inline { display: inline; }
  .inline-block { display: inline-block; }

  /* Flexbox */
  .flex-column { flex-direction: column; }
  .flex-wrap { flex-wrap: wrap; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .items-center { align-items: center; }

  /* Spacing (generate programmatically or manually) */
  .m0 { margin: 0; }
  .mb0 { margin-bottom: 0; }
  .mb1 { margin-bottom: var(--space-1); }
  .mb2 { margin-bottom: var(--space-2); }
  .mb3 { margin-bottom: var(--space-3); }
  .mb4 { margin-bottom: var(--space-4); }
  /* ... more utilities */

  /* Typography */
  .f1 { font-size: var(--text-4xl); }
  .f2 { font-size: var(--text-3xl); }
  .f3 { font-size: var(--text-2xl); }
  .f4 { font-size: var(--text-xl); }
  .f5 { font-size: var(--text-lg); }
  .f6 { font-size: var(--text-sm); }

  .b { font-weight: bold; }
  .lh-title { line-height: 1.25; }
  .lh-copy { line-height: 1.5; }

  /* Max Widths */
  .mwtxt { max-width: 42rem; }
  .mw7 { max-width: 48rem; }

  /* Borders */
  .br1 { border-radius: 0.125rem; }
  .br-pill { border-radius: 9999px; }

  /* Colors */
  .black { color: var(--color-black); }
  .white { color: var(--color-white); }
  .bg-grey { background-color: var(--color-grey); }
  .bg-fff { background-color: #fff; }
}

/* Responsive utilities using modern container queries */
@layer responsive {
  @media (min-width: 34em) {
    .flex-md { display: flex; }
    .justify-start-md { justify-content: flex-start; }
    .col-sm-6 { flex-basis: 50%; max-width: 50%; }
  }

  @media (min-width: 48em) {
    /* md breakpoint utilities */
  }
}
```

### Phase 4: Component Migration

#### 4.1 BaseLayout.astro (replaces `_layouts/default.html`)
```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description = "Inter-disciplinary digital designer living in Sofia." } = Astro.props;
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{title} | Darin Dimitroff</title>
    <meta name="description" content={description}>

    <!-- Open Graph -->
    <meta property="og:title" content={title}>
    <meta property="og:description" content={description}>
    <meta property="og:image" content="/images/me.jpg">
    <meta property="og:type" content="website">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/images/favicon.png">
    <link rel="apple-touch-icon" href="/images/thumb.png">

    <!-- Styles -->
    <link rel="stylesheet" href="/styles/global.css">
  </head>
  <body>
    <slot />
  </body>
</html>
```

#### 4.2 ThemeToggle.astro (Island Component)
```astro
---
// This component needs client-side JS, so we'll use client:load
---
<button class="theme-toggle" aria-label="Toggle dark mode">
  <span class="theme-emoji">😎</span>
</button>

<script>
  const toggle = document.querySelector('.theme-toggle');
  const emoji = toggle?.querySelector('.theme-emoji');
  const html = document.documentElement;

  toggle?.addEventListener('click', (e) => {
    e.preventDefault();
    const isDark = html.dataset.theme === 'dark';
    html.dataset.theme = isDark ? 'light' : 'dark';
    if (emoji) emoji.textContent = isDark ? '😎' : '😳';
    localStorage.setItem('theme', html.dataset.theme);
  });

  // Initialize from localStorage
  const saved = localStorage.getItem('theme');
  if (saved) {
    html.dataset.theme = saved;
    if (emoji) emoji.textContent = saved === 'dark' ? '😳' : '😎';
  }
</script>
```

### Phase 5: Page & Route Migration

#### 5.1 Homepage (`src/pages/index.astro`)
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Intro from '../components/Intro.astro';
import HomeContent from '../components/HomeContent.astro';
import Footer from '../components/Footer.astro';
import { getCollection } from 'astro:content';

const posts = await getCollection('posts');
const sortedPosts = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

// Work data (imported from data file)
import { work } from '../data/work';
---
<BaseLayout title="Darin Dimitroff">
  <Header />
  <Intro />
  <HomeContent posts={sortedPosts} work={work} />
  <Footer />
</BaseLayout>
```

#### 5.2 Dynamic Post Routes (`src/pages/posts/[...slug].astro`)
```astro
---
import { getCollection } from 'astro:content';
import PostLayout from '../../layouts/PostLayout.astro';

export async function getStaticPaths() {
  const posts = await getCollection('posts');
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();
---
<PostLayout frontmatter={post.data}>
  <Content />
</PostLayout>
```

### Phase 6: Data Migration

#### 6.1 Convert YAML to TypeScript
Create `src/data/work.ts`:
```typescript
export interface WorkItem {
  title: string;
  bgColor: string;
  color: string;
  url: string;
  excerpt: string;
}

export const work: WorkItem[] = [
  {
    title: "Webflow",
    bgColor: "#E7F0FE",
    color: "#146EF5",
    url: "/work/webflow",
    excerpt: "I spent four years working on visual development tools..."
  },
  // ... rest of items
];
```

### Phase 7: Build & Deployment

#### 7.1 Astro Config (`astro.config.mjs`)
```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://darindimitroff.com',
  output: 'static',
  build: {
    assets: '_assets',
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
```

#### 7.2 Deployment Options
- **GitHub Pages:** Built-in Astro adapter
- **Netlify:** Built-in adapter, easy migration from Jekyll
- **Vercel:** Built-in adapter

---

## Migration Checklist

### Pre-Migration
- [ ] Back up existing site
- [ ] Document all current URLs for redirect mapping
- [ ] Test current site build to establish baseline

### Phase 1: Setup
- [ ] Initialize Astro project
- [ ] Set up TypeScript config
- [ ] Install dependencies
- [ ] Configure Astro

### Phase 2: Content
- [ ] Create content collection schemas
- [ ] Migrate blog posts (8 files)
- [ ] Migrate work items (11 files)
- [ ] Update frontmatter format
- [ ] Fix image paths
- [ ] Test content rendering

### Phase 3: CSS
- [ ] Create tokens.css with design variables
- [ ] Create reset.css
- [ ] Migrate typography styles
- [ ] Migrate color utilities
- [ ] Migrate spacing utilities
- [ ] Migrate flexbox utilities
- [ ] Migrate grid system
- [ ] Migrate component styles (.card, .cms, etc.)
- [ ] Implement dark mode with CSS
- [ ] Test responsive breakpoints

### Phase 4: Components
- [ ] Create BaseLayout.astro
- [ ] Create PostLayout.astro
- [ ] Create WorkLayout.astro
- [ ] Create Header.astro
- [ ] Create Footer.astro
- [ ] Create Nav.astro
- [ ] Create Intro.astro
- [ ] Create HomeContent.astro
- [ ] Create WorkCard.astro
- [ ] Create PostCard.astro
- [ ] Create ReadingTime.astro
- [ ] Create ThemeToggle.astro (with client JS)

### Phase 5: Pages
- [ ] Create index.astro (homepage)
- [ ] Create posts/[...slug].astro (blog)
- [ ] Create work/[...slug].astro (portfolio)

### Phase 6: Data
- [ ] Convert home.yml to TypeScript
- [ ] Convert social.yml to TypeScript
- [ ] Convert work.yaml to TypeScript (or keep in content collection)

### Phase 7: Assets
- [ ] Copy fonts to public/fonts
- [ ] Copy images to public/images
- [ ] Set up font-face declarations
- [ ] Verify favicon and touch icons

### Phase 8: Testing
- [ ] Test all pages render correctly
- [ ] Test dark mode toggle
- [ ] Test responsive layouts at all breakpoints
- [ ] Test all links work
- [ ] Compare visual appearance to original
- [ ] Test build performance
- [ ] Lighthouse audit

### Phase 9: Deployment
- [ ] Configure deployment adapter
- [ ] Set up CI/CD
- [ ] Configure domain/DNS
- [ ] Set up redirects if URL structure changed
- [ ] Deploy to staging
- [ ] Final visual QA
- [ ] Deploy to production

---

## Risk Mitigation

### Preserve Exact Design
1. **Screenshot comparison:** Take screenshots of every page before migration
2. **CSS diff testing:** Compare computed styles on key elements
3. **Keep utility classes:** Maintain the same class names for easy comparison

### URL Preservation
The URL structure should remain identical:
- Posts: `/posts/[slug]/`
- Work: `/work/[slug]/`

### SEO Continuity
- Maintain all meta tags
- Keep canonical URLs
- Preserve Open Graph tags
- Keep sitemap generation (Astro has built-in sitemap support)

---

## Future Enhancements (Post-Migration)

1. **Add MDX support** for interactive blog posts
2. **Image optimization** with Astro's built-in image component
3. **View Transitions API** for page transitions
4. **RSS feed** with @astrojs/rss
5. **Search** with Pagefind
6. **Comments** with Giscus or similar
7. **CMS integration** (Decap CMS, Sanity, etc.) if needed

---

## Estimated Complexity

| Phase | Complexity | Notes |
|-------|------------|-------|
| Setup | Low | Standard Astro initialization |
| Content | Low | Mostly copy-paste with minor edits |
| CSS | Medium | Main effort - converting 40+ SCSS files |
| Components | Low-Medium | Direct template translation |
| Pages | Low | Simple Astro pages |
| Testing | Medium | Thorough visual regression testing |

The CSS conversion is the main effort since you have a comprehensive custom utility framework. The content and component migration should be straightforward given the similar templating paradigms between Jekyll/Liquid and Astro.
