# Design Anatomy — Structural Blueprint

**Version:** 1.0  
**Purpose:** Development contract for adding, routing, structuring, and safely maintaining every design style in Design Anatomy.

---

## 01 — Global Architecture

```text
HOME
  ↓
DASHBOARD
  ↓
DESIGN LIBRARY
  ↓
DESIGN FAMILY
  ↓
STYLE CARD
  ↓
VIEW STYLE
  ↓
STYLE ENVIRONMENT
```

### Navigation ownership

- `src/main.jsx` is the single source of truth for application routing.
- Each style receives an `onBack` callback from the parent application.
- A style page must never create another application root.
- A style page must never create a second Dashboard or Library.
- Do not use document-level navigation injection when React routing can handle the route directly.

---

## 02 — Route Map

| Screen | Hash route | Parent | Back destination |
|---|---|---|---|
| Home | `/` | Root | — |
| Dashboard | `#dashboard` | Home | Home |
| Design Library | `#library` | Dashboard | Dashboard |
| Flat Design | `#flatdesign` | Library | Library |
| Material Design | `#materialdesign` | Library | Library |
| Fluent Design | — | — | **Skipped for now** |

### Route rule

Every design has exactly **one route** and exactly **one React page component**.

```text
Library card
    ↓
route: "style-name"
    ↓
App view switch
    ↓
<StyleName onBack={() => go("library")} />
```

---

## 03 — Design Family Structure

Current structure:

```text
DESIGN LIBRARY
│
├── 01 MORPHISM FAMILY
│   ├── 01.01 Glassmorphism
│   ├── 01.02 Neumorphism
│   ├── 01.03 Claymorphism
│   └── 01.04 Skeuomorphism
│
├── 02 LISM FAMILY
│   ├── 02.01 Brutalism
│   ├── 02.02 Minimalism
│   └── 02.03 Maximalism
│
└── 02 MODERN DIGITAL STYLES
    ├── 02.01 Flat Design
    └── 02.02 Material Design
```

### Numbering note

The existing numbering is preserved for compatibility with the current UI. Do **not** renumber existing styles casually. Before introducing a new family or changing numbering, update this blueprint first and confirm the impact on existing cards, routes, previews, and content.

Fluent Design remains intentionally skipped.

---

## 04 — Style File Contract

Every new design should follow the same basic file structure:

```text
src/
├── StyleName.jsx
├── style-name.css
└── optional assets/
```

The component contract is:

```jsx
export default function StyleName({ onBack }) {
  // style environment
}
```

The parent application owns navigation:

```jsx
<StyleName onBack={() => go("library")} />
```

**Do not create another `createRoot()` for an individual style.**

---

## 05 — Explore Styles Card Contract

Every library card should contain the same structural layers:

```text
┌──────────────────────────────┐
│ NUMBER                 ICON  │
│                              │
│ STYLE NAME                   │
│                              │
│ DESCRIPTION                  │
│                              │
│ STYLE PREVIEW ENVIRONMENT    │
│                              │
│ VIEW STYLE →                 │
└──────────────────────────────┘
```

Required data:

```js
{
  family: "...",
  name: "...",
  icon: Icon,
  tag: "XX.XX",
  copy: "...",
  route: "style-name",
  preview: number
}
```

The card must use the existing `StyleCard` structure wherever possible.

---

## 06 — View Style Page Contract

Every style environment follows this information architecture:

```text
← BACK TO LIBRARY

STYLE NUMBER
STYLE NAME
INTRODUCTION

┌──────────────────────────────┐
│                              │
│      STYLE ENVIRONMENT       │
│                              │
│  visual atmosphere           │
│  components                  │
│  examples                    │
│                              │
└──────────────────────────────┘

THE PARTS
↓
PRINCIPLES
↓
VISUAL EXAMPLES
↓
TAKEAWAY
```

The visual identity can change completely between styles. The **information architecture and navigation contract should not**.

---

## 07 — Preview Contract

There are two different preview contexts:

### Explore Styles preview

Small, self-contained representation of the style. It must:

- fit inside the card;
- not modify page dimensions;
- not leak global styles;
- not control application navigation;
- remain visually understandable at mobile width.

### View Style environment

Full visual environment for the selected design. It can be immersive and expressive, but must remain scoped to its own component/page.

**A View Style environment must never style the Home page, Dashboard, Library, or another design.**

---

## 08 — CSS Isolation Rules

A new design stylesheet must use a unique root namespace.

Good:

```css
.flat-page { ... }
.flat-hero { ... }
.flat-specimen { ... }
```

Avoid generic global selectors such as:

```css
body { ... }
h1 { ... }
button { ... }
.card { ... }
```

unless the change is intentionally global and has been tested against every existing screen.

### Critical rule

Do not solve a local overflow problem by changing global viewport behaviour.

Before adding `overflow-x`, `min-width`, `100vw`, transforms, or large absolute elements, inspect the element creating the overflow.

---

## 09 — Navigation Safety Rules 🔒

### Never

- Create a second `createRoot()` for a style.
- Mount a Dashboard inside a style page.
- Mount a Library inside a style page.
- Inject cards with a second navigation system when the React data model can represent them.
- Add a document-wide click interceptor for one style.
- Change Home routing while adding a library style.
- Change global viewport rules to solve a style-specific issue.
- Delete an existing design to solve a new design's problem.
- Rename or renumber an existing style without checking every route and reference.
- Reuse another design's stylesheet without deliberate namespacing.

### Always

- Add the style to the central `styles` array.
- Give it a unique `route`.
- Add its component import to `main.jsx`.
- Add one `view === route` branch in `App`.
- Pass `onBack={() => go("library")}`.
- Use the existing `StyleCard`.
- Keep preview markup scoped.
- Test desktop and mobile.
- Test forward and backward navigation.

---

## 10 — Required Test Path

Before declaring a new design complete, test this exact sequence:

```text
HOME
 ↓
DASHBOARD
 ↓
OPEN LIBRARY
 ↓
MODERN DIGITAL STYLES / FAMILY
 ↓
VIEW STYLE
 ↓
STYLE ENVIRONMENT
 ↓
BACK TO LIBRARY
 ↓
DASHBOARD
 ↓
HOME
```

Then repeat from a mobile viewport.

### Failure conditions

Stop the implementation if any of these occur:

- duplicate Dashboard;
- duplicate Library;
- route loop;
- stale/placeholder back button;
- horizontal page dragging caused by a style;
- another style changes appearance;
- Home changes unexpectedly;
- mobile layout gains extra width;
- Vercel build fails.

Fix the root cause before adding another patch.

---

## 11 — Implementation Workflow

```text
01. Define the style
        ↓
02. Collect reference images
        ↓
03. Decide Explore Styles preview
        ↓
04. Decide View Style environment
        ↓
05. Add component + scoped CSS
        ↓
06. Add central styles entry
        ↓
07. Add route
        ↓
08. Add View Style component branch
        ↓
09. Test navigation
        ↓
10. Test mobile width
        ↓
11. Build / deploy
        ↓
12. Verify live UI
```

No step should be skipped merely to make a card appear faster.

---

## 12 — Current Project Checkpoint

### Stable

- Home
- Dashboard
- Design Library
- Morphism family
- Lism family
- Flat Design
- Material Design
- Existing View Style navigation
- Mobile Home width behaviour

### Intentionally skipped

- Fluent Design

### Architectural priority

**Stability > speed.**

A new design should be treated as an isolated feature added to a stable system, not as a reason to rewrite the system.

---

## 13 — Golden Rule

> **One app. One router. One Dashboard. One Library. One route per design. Scoped styles. No shortcuts that can leak into the rest of the system.**

This blueprint is the structural reference for future Design Anatomy development.
