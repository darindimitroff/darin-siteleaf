# Retro Desktop Experience Migration Plan

Transform darindimitroff.com into a classic Macintosh-inspired desktop experience, similar to [ryOS by Ryo Lu](https://github.com/ryokun6/ryos).

## Inspiration & References

- **[ryOS](https://os.ryo.lu/)** - Ryo Lu's AI desktop experience (Cursor's Head of Design)
- **[System.css](https://sakofchit.github.io/system.css/)** - CSS library for classic Mac OS interfaces
- **[Benchoff's System 7](https://bbenchoff.github.io/pages/system7.html)** - System 7 recreation in CSS
- **[Classic Mac Scrollbars](https://ticky.github.io/classic-scrollbars/)** - Period-accurate scrollbar CSS

---

## Design Direction: Classic Macintosh (1984-1991)

### Visual Language
- **Black and white only** (1-bit display aesthetic)
- **Chicago font** for system UI (or closest web-safe equivalent)
- **Geneva/Monaco** for content text
- **Pixel-perfect borders** (1px black lines)
- **Dithering patterns** for textures/backgrounds
- **No anti-aliasing** on UI elements (sharp pixel edges)

### UI Elements
| Element | Classic Mac Style |
|---------|------------------|
| Windows | Title bar with horizontal stripes, close box (small square), resize handle |
| Buttons | Rounded rectangles with 1px black border, invert on press |
| Scrollbars | Up/down arrows, thumb with horizontal lines, track |
| Icons | 32x32 or 16x16 pixel art, black on white |
| Menus | Apple menu () + File/Edit/View/Special, dropdown with shadow |
| Cursor | Black arrow, watch (loading), hand (links) |
| Dialogs | Centered modal windows with drop shadow |

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | **Next.js 14** (App Router) | SSR, routing, API routes |
| UI Components | **shadcn/ui** | Base component primitives |
| Styling | **Tailwind CSS** | Utility classes + custom theme |
| State | **Zustand** | Window manager, app state |
| Animations | **Framer Motion** | Window dragging, opening/closing |
| Storage | **localStorage** | Window positions, preferences |
| Deployment | **Vercel** | Hosting + Edge Functions |
| Content | **MDX** | Blog posts & work case studies |

---

## Desktop Architecture

### Window Manager
```
┌─────────────────────────────────────────────────────────────────┐
│  Apple  File  Edit  View  Special                    10:32 AM  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│    ┌──────────────────────┐     ┌──────────────────────┐       │
│    │▓▓▓▓ About Darin ▓▓▓▓│     │▓▓▓▓▓ Writing ▓▓▓▓▓▓│       │
│    ├──────────────────────┤     ├──────────────────────┤       │
│    │                      │     │ ≡ Hamburger Menu     │       │
│    │  👋 Hey, I'm Darin   │     │ ≡ iOS 10 Control...  │       │
│    │                      │     │ ≡ Design Tool Wish...│       │
│    │  A technical product │     │ ≡ Accessibility      │       │
│    │  designer with a     │     │ ≡ Vitosha 100 XCM    │       │
│    │  thing for design... │     │                      │       │
│    │                      │     └──────────────────────┘       │
│    └──────────────────────┘                                    │
│                                                                 │
│    ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐               │
│    │ 📁  │  │ 📝  │  │ 💼  │  │ 📧  │  │ ❓  │               │
│    │About│  │Write│  │Work │  │Mail │  │Help │               │
│    └─────┘  └─────┘  └─────┘  └─────┘  └─────┘               │
│                                                                 │
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
└─────────────────────────────────────────────────────────────────┘
```

### Desktop Apps (Windows)

| App | Icon | Content | Features |
|-----|------|---------|----------|
| **About** | 👋 | Intro, bio, currently/previously | Read-only text window |
| **Writing** | 📝 | Blog posts list | List view → opens individual post windows |
| **Work** | 💼 | Portfolio items | Grid of project icons → opens case study |
| **Contact** | 📧 | Email + social links | mailto: link, social icons |
| **Finder** | 📁 | File browser view of all content | Navigate like actual Finder |

### Window States
- **Closed** - Icon on desktop
- **Open** - Draggable, resizable window
- **Minimized** - Icon at bottom of screen
- **Maximized** - Full viewport (with menu bar)
- **Focused** - Active window (z-index top, darker title bar)

---

## Project Structure

```
darin-desktop/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with desktop chrome
│   │   ├── page.tsx                # Main desktop view
│   │   ├── globals.css             # Tailwind + retro theme
│   │   └── api/                    # API routes if needed
│   │
│   ├── components/
│   │   ├── desktop/
│   │   │   ├── Desktop.tsx         # Main desktop container
│   │   │   ├── MenuBar.tsx         # Top menu bar (Apple, File, etc.)
│   │   │   ├── DesktopIcon.tsx     # Clickable desktop icon
│   │   │   └── DockBar.tsx         # Minimized windows tray
│   │   │
│   │   ├── window/
│   │   │   ├── Window.tsx          # Draggable window container
│   │   │   ├── WindowTitleBar.tsx  # Title bar with stripes
│   │   │   ├── WindowContent.tsx   # Scrollable content area
│   │   │   ├── WindowControls.tsx  # Close/minimize buttons
│   │   │   └── WindowResize.tsx    # Resize handle
│   │   │
│   │   ├── ui/                     # shadcn components (customized)
│   │   │   ├── button.tsx          # Retro-styled buttons
│   │   │   ├── scroll-area.tsx     # Classic scrollbars
│   │   │   ├── dialog.tsx          # Modal dialogs
│   │   │   └── dropdown-menu.tsx   # Menu dropdowns
│   │   │
│   │   └── apps/                   # Individual app contents
│   │       ├── AboutApp.tsx        # About me content
│   │       ├── WritingApp.tsx      # Blog list
│   │       ├── WritingPost.tsx     # Individual post view
│   │       ├── WorkApp.tsx         # Portfolio grid
│   │       ├── WorkProject.tsx     # Case study view
│   │       ├── ContactApp.tsx      # Contact info
│   │       └── FinderApp.tsx       # File browser
│   │
│   ├── content/
│   │   ├── posts/                  # MDX blog posts
│   │   │   └── *.mdx
│   │   └── work/                   # MDX case studies
│   │       └── *.mdx
│   │
│   ├── stores/
│   │   ├── windowStore.ts          # Zustand window manager
│   │   └── desktopStore.ts         # Desktop state (icons, prefs)
│   │
│   ├── hooks/
│   │   ├── useWindow.ts            # Window management hooks
│   │   ├── useDraggable.ts         # Drag functionality
│   │   └── useClickOutside.ts      # Menu closing
│   │
│   ├── lib/
│   │   ├── content.ts              # MDX loading utilities
│   │   └── utils.ts                # Shared utilities
│   │
│   └── styles/
│       ├── retro-theme.css         # CSS variables for retro look
│       ├── chicago.css             # Chicago font face
│       └── patterns.css            # Dithering patterns
│
├── public/
│   ├── fonts/
│   │   ├── ChicagoFLF.ttf          # Chicago font
│   │   └── Geneva.ttf              # Geneva font
│   ├── icons/                      # Pixel art desktop icons
│   │   ├── about.png
│   │   ├── writing.png
│   │   ├── work.png
│   │   ├── contact.png
│   │   └── finder.png
│   ├── cursors/                    # Custom cursors
│   │   ├── arrow.cur
│   │   ├── hand.cur
│   │   └── watch.cur
│   └── sounds/                     # Optional UI sounds
│       ├── click.mp3
│       └── error.mp3
│
├── tailwind.config.ts              # Retro theme configuration
├── next.config.mjs                 # Next.js config with MDX
├── components.json                 # shadcn/ui config
└── package.json
```

---

## Implementation Phases

### Phase 1: Project Setup & Core UI

#### 1.1 Initialize Project
```bash
npx create-next-app@latest darin-desktop --typescript --tailwind --app
cd darin-desktop
npx shadcn@latest init
```

#### 1.2 Install Dependencies
```bash
npm install zustand framer-motion @mdx-js/loader @mdx-js/react
npm install -D @next/mdx @types/mdx
```

#### 1.3 Tailwind Retro Theme
```typescript
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        'mac-black': '#000000',
        'mac-white': '#ffffff',
        'mac-gray': '#808080',
      },
      fontFamily: {
        'chicago': ['ChicagoFLF', 'Geneva', 'Verdana', 'sans-serif'],
        'geneva': ['Geneva', 'Verdana', 'sans-serif'],
        'monaco': ['Monaco', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'mac-window': '2px 2px 0 0 #000',
        'mac-inset': 'inset 1px 1px 0 0 #000, inset -1px -1px 0 0 #fff',
      },
      backgroundImage: {
        'stripes': 'repeating-linear-gradient(0deg, #000 0px, #000 1px, #fff 1px, #fff 2px)',
        'dither': 'url("/patterns/dither.png")',
      },
    },
  },
};
```

### Phase 2: Window Manager

#### 2.1 Window Store (Zustand)
```typescript
// src/stores/windowStore.ts
interface WindowState {
  id: string;
  appId: string;
  title: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

interface WindowStore {
  windows: WindowState[];
  activeWindowId: string | null;
  openWindow: (appId: string, title: string) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  moveWindow: (id: string, position: { x: number; y: number }) => void;
  resizeWindow: (id: string, size: { width: number; height: number }) => void;
}
```

#### 2.2 Window Component
```tsx
// Key features:
// - Draggable via Framer Motion's drag
// - Resizable handle in bottom-right
// - Title bar with stripes pattern
// - Close button (small square with X)
// - Focus management (click brings to front)
```

### Phase 3: Desktop Chrome

#### 3.1 Menu Bar
- Fixed top bar with Apple logo menu
- App-specific menus (File, Edit, View, Special)
- Right-aligned clock
- Dropdown menus with classic styling

#### 3.2 Desktop Icons
- Grid-aligned icons
- Double-click to open
- Single-click to select (highlight)
- Icon + label layout (icon above text)

#### 3.3 Dock/Tray
- Minimized windows shown as small icons
- Click to restore window

### Phase 4: App Content

#### 4.1 About App
```tsx
// Simple scrollable text content
// Displays intro, currently working on, previously, passionate about
```

#### 4.2 Writing App (Blog)
```tsx
// List view of posts
// Each item shows: title, date, excerpt
// Double-click opens post in new window
// Scrollable list with classic scrollbar
```

#### 4.3 Work App (Portfolio)
```tsx
// Icon grid view of projects
// Each project is a folder icon with name
// Double-click opens case study window
// Can switch to list view via View menu
```

#### 4.4 Contact App
```tsx
// Simple window with:
// - Email link
// - Social media links (Twitter, Dribbble, Medium, Instagram)
// - Styled as "Address Book" entry
```

### Phase 5: Content Migration

#### 5.1 Convert Posts to MDX
```mdx
// src/content/posts/accessibility.mdx
---
title: "Accessibility"
date: "2017-02-20"
---

Content here with classic styling...
```

#### 5.2 Convert Work to MDX
```mdx
// src/content/work/webflow.mdx
---
title: "Webflow"
date: "2020-01-01"
---

Case study content...
```

### Phase 6: Polish & Details

#### 6.1 Interactions
- Window open/close animations (scale + fade)
- Menu dropdown animations
- Button press states (invert colors)
- Drag feedback (shadow while dragging)

#### 6.2 Sounds (Optional)
- Click sound on button press
- Error beep on invalid action
- Window open/close sounds

#### 6.3 Easter Eggs
- "About This Mac" in Apple menu
- Special menu with "Restart" and "Shut Down"
- Secret key combinations

---

## CSS Reference: Classic Mac Elements

### Window Title Bar
```css
.window-title-bar {
  height: 20px;
  background: repeating-linear-gradient(
    0deg,
    #fff 0px, #fff 1px,
    #000 1px, #000 2px
  );
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  padding: 0 4px;
}

.window-title-bar.focused {
  background: repeating-linear-gradient(
    0deg,
    #000 0px, #000 1px,
    #fff 1px, #fff 2px
  );
}

.close-box {
  width: 13px;
  height: 11px;
  border: 1px solid #000;
  background: #fff;
}
```

### Classic Button
```css
.mac-button {
  background: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 2px 12px;
  font-family: 'ChicagoFLF', sans-serif;
  font-size: 12px;
  cursor: pointer;
}

.mac-button:active {
  background: #000;
  color: #fff;
}
```

### Classic Scrollbar
```css
.mac-scrollbar::-webkit-scrollbar {
  width: 16px;
  background: #fff;
  border-left: 1px solid #000;
}

.mac-scrollbar::-webkit-scrollbar-thumb {
  background: #fff;
  border: 1px solid #000;
  background-image: repeating-linear-gradient(
    0deg,
    transparent 0px, transparent 1px,
    #000 1px, #000 2px,
    transparent 2px, transparent 3px
  );
}

.mac-scrollbar::-webkit-scrollbar-button {
  height: 16px;
  background: #fff;
  border: 1px solid #000;
}
```

---

## Content Mapping

### From Jekyll → Desktop Apps

| Original | Desktop App | Window Type |
|----------|-------------|-------------|
| Homepage intro | **About** window | Text document |
| `_data/home.yml` | **About** window (sections) | Text document |
| `_posts/*.md` | **Writing** app → individual windows | List → Document |
| `work/*.md` | **Work** app → individual windows | Icons → Document |
| `_data/social.yml` | **Contact** window | Address card |
| Footer links | **Menu bar** + Contact | Integrated |

### URL Structure
```
/                    → Desktop with all icons
/about               → Desktop with About window open
/writing             → Desktop with Writing window open
/writing/[slug]      → Desktop with post window open
/work                → Desktop with Work window open
/work/[slug]         → Desktop with project window open
/contact             → Desktop with Contact window open
```

---

## Migration Checklist

### Phase 1: Setup
- [ ] Create Next.js project with TypeScript
- [ ] Configure Tailwind with retro theme
- [ ] Install shadcn/ui and customize components
- [ ] Set up Zustand stores
- [ ] Add Chicago/Geneva fonts

### Phase 2: Window System
- [ ] Build Window component with drag/resize
- [ ] Implement WindowStore with Zustand
- [ ] Add focus management (z-index)
- [ ] Build minimize/restore functionality
- [ ] Add window open/close animations

### Phase 3: Desktop
- [ ] Build MenuBar component
- [ ] Implement desktop icon grid
- [ ] Add double-click to open
- [ ] Build dock/tray for minimized windows
- [ ] Add clock display

### Phase 4: Apps
- [ ] About App with bio content
- [ ] Writing App with post list
- [ ] Writing Post viewer
- [ ] Work App with project grid
- [ ] Work Project viewer
- [ ] Contact App

### Phase 5: Content
- [ ] Migrate 8 blog posts to MDX
- [ ] Migrate 11 work items to MDX
- [ ] Create About content
- [ ] Add social links data

### Phase 6: Polish
- [ ] Button press animations
- [ ] Window animations
- [ ] Menu interactions
- [ ] Custom cursors
- [ ] Responsive behavior (mobile fallback)

### Phase 7: Deploy
- [ ] Configure Vercel project
- [ ] Set up domain
- [ ] Test all interactions
- [ ] Performance optimization

---

## Mobile Considerations

Classic Mac doesn't translate well to touch. Options:

1. **Simplified mobile view** - Stack windows as full-screen cards
2. **Touch gestures** - Swipe to switch windows, tap to focus
3. **Responsive windows** - Windows become full-width on small screens
4. **Mobile menu** - Hamburger menu instead of menu bar

Recommendation: Keep the desktop experience for tablets/desktop, provide a simpler but still retro-styled mobile experience.

---

## Future Enhancements

After launch, consider:

1. **Themes** - Add System 7 color, Mac OS 8 Platinum
2. **Sound toggle** - Enable/disable UI sounds
3. **Finder** - Full file browser experience
4. **Control Panel** - User preferences
5. **Games** - Add Minesweeper or similar
6. **AI Chat** - "Ask Darin" chatbot (like ryOS)
7. **Terminal** - Easter egg command line

---

## Resources

- [System.css Documentation](https://sakofchit.github.io/system.css/)
- [ryOS GitHub](https://github.com/ryokun6/ryos)
- [Chicago Font (Free)](https://fonts.google.com/specimen/ChicagoFLF)
- [Macintosh Human Interface Guidelines (1992)](https://archive.org/details/applehumaninterf00appl)
- [GUIdebook - Mac OS Screenshots](https://guidebookgallery.org/screenshots/macos)
