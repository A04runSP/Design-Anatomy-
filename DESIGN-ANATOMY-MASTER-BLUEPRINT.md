# Design Anatomy — Master Blueprint

**Status:** Architecture baseline / v1.0 draft for review  
**Purpose:** Product, information, visual-boundary, and implementation architecture for the clean rebuild.

---

## 0. Core Product Definition

Design Anatomy is a designed educational/exploration application about design languages.

It has two simultaneous roles:

1. **Design Anatomy as a product** — a consistent global app experience.
2. **Design languages as subjects** — independent visual worlds that users can enter, understand, and see applied in multiple contexts.

The application must never confuse these two roles.

---

# 1. Architecture Law: Two Visual Languages

## 1.1 `D.` = Design Anatomy global/product language

The `D.` namespace represents the application itself.

Examples:

- `D.home-page`
- `D.dashboard-page`
- `D.design-library`
- `D.shared`
- `D.navigation`

The global Design Anatomy language is allowed through:

**Home → Dashboard → Design Library**

The currently locked global visual direction is the chosen Design Anatomy shell language (currently glass cards with an Aurora-gradient/blurred visual background).

## 1.2 Style World = particular design language

A Style World represents the design being taught/explored.

Examples:

- Glassmorphism
- Brutalism
- Minimalism
- Dark UI
- Material
- other researched/finalized styles

A Style World owns its complete environment:

- background
- surface treatment
- text colour
- typography
- font sizing
- spacing rhythm
- cards
- buttons
- controls
- borders
- shadows/effects
- illustrations/decorations
- example compositions
- relevant assets

## 1.3 Hard boundary

When the user enters a View Style environment, the Design Anatomy global visual shell stops.

The View Style must **not inherit the global Design Anatomy environment background or visual language** merely because the app was previously using it.

Likewise, a Style World must not leak its styling backward into `D.` pages.

> **Global app language and particular design language are separate systems.**

---

# 2. Product Journey

```text
HOME
  ↓
DASHBOARD
  ↓
EXPLORE STYLES
  ↓
DESIGN LIBRARY
  ↓
VIEW STYLE
  ↓
BASIC EXAMPLE / DESIGN ANATOMY
  ↓
MORE EXAMPLES
  ↓
BACK TO LIBRARY / CONTINUE EXPLORING
```

Alternative direct entry points are intentionally supported:

- Home top `JUMP IN` → Dashboard
- Home live-preview `JUMP IN` → Dashboard
- Dashboard top `EXPLORE STYLES` → Design Library
- Dashboard bottom `EXPLORE STYLES` → Design Library

The duplicated calls-to-action serve different user motivations rather than being accidental duplication.

---

# 3. Home Page — `D.home-page`

## Purpose

Home is the introduction to **Design Anatomy itself**.

It is not the Design Library and it is not a complete design lesson.

Its job is to:

- introduce the product
- communicate what Design Anatomy contains
- create visual curiosity
- allow users who do not want a long introduction to move immediately into the experience

## Content lock

The approved Home content is treated as locked product content once finalized.

During implementation, technical structure, CSS, responsiveness, and components may change, but the approved content must not be silently rewritten.

## Required structure

### A. Introduction

Content slot for the approved Design Anatomy introduction.

### B. Top `JUMP IN`

A prominent navigation action near the top of the page.

Destination: **Dashboard**.

Reason: not every visitor will want the explanatory introduction before exploring.

### C. Home live preview

The live preview is a **trailer/showcase**, not a catalogue.

It must show only **3–5 eye-catching design languages at a time**.

The selection is research/content-driven and remains a future content decision until the design catalogue is researched.

### D. Live preview timing

The target rotation interval is **2.5 seconds per design**.

This is a locked interaction requirement for the rebuild.

The implementation must avoid a slower default slideshow that weakens the intended rapid visual hook.

### E. Preview `JUMP IN`

A second `JUMP IN` appears immediately below the live preview.

Destination: **Dashboard**.

### Home does NOT

- contain the entire design catalogue
- become the Design Library
- expose every design in the live preview
- carry Style World environments into the app shell

---

# 4. Dashboard — `D.dashboard-page`

## Purpose

Dashboard explains the broader story behind design before inviting users to explore individual design languages.

It has two primary content chapters.

## 4.1 Chapter One — Evolution / History of Design

The narrative explores the relationship between design/fashion, status, wealth, society, access, changing trends, and modern accessibility.

The current conceptual direction is:

```text
historical status/access
      ↓
wealth and social position
      ↓
changing fashion/design trends
      ↓
70s–90s transition/context
      ↓
modern commercial/business design
      ↓
broader access and personal expression
```

**Important:** exact historical claims, dates, examples, and images are NOT yet locked. They must be researched later before final content is committed.

## 4.2 Visual storytelling

The historical section should be visually driven rather than becoming a wall of text.

Content slots may include:

- historical image
- concise statement
- supporting explanation
- era transition visual
- comparison visual

The image is part of the storytelling language, not decorative filler.

## 4.3 Chapter Two — Colour Psychology

Colour Psychology follows the historical story.

The conceptual progression is:

```text
historical colour/status associations
      ↓
royal / aristocratic / high-status visual language
      ↓
fashion / designer visual language
      ↓
modern personal expression
```

The section should show **actual colour combinations/palettes** and explain their visual communication.

Colour meaning must not be presented as universal fact without cultural/historical context. Final palettes and explanations are research-dependent.

## 4.4 Top `EXPLORE STYLES`

A prominent button near the top of Dashboard.

Destination: **Design Library**.

Audience: users who want to skip the story and immediately explore.

## 4.5 Bottom `EXPLORE STYLES`

A second button at the end of Dashboard.

Destination: **Design Library**.

Audience: users who have completed the story and are now ready to explore.

---

# 5. Design Library — `D.design-library`

## Purpose

The Design Library is the catalogue of design languages.

It is the bridge between the global Design Anatomy shell and independent Style Worlds.

## Required structure

```text
Design Library
│
├── Category
│   ├── Design Preview Card
│   │   ├── visual preview
│   │   └── design name
│   └── ...
│
├── Category
│   └── ...
│
└── ...
```

Each design entry must have:

- preview card
- design name
- category membership
- `VIEW STYLE` navigation

## Category system

Categories and their exact design counts are **future research decisions**.

The architecture must support variable category sizes.

No fixed catalogue size is allowed.

---

# 6. Library Scalability — N + 1 Layout Principle

Let:

**N = current number of researched/finalized designs.**

The Library must support:

```text
Designs: 1, 2, 3, 4, 5, ... N
```

and an expandable layout/grid system that can introduce new layout arrangements as the catalogue grows.

The intended product rule is:

> **When a new design is introduced, the Library layout system must be capable of adding the layout/grid treatment required to represent that growing catalogue.**

The architecture must NOT hard-code a maximum such as 10 designs or exactly 10 grid layouts.

### Engineering interpretation

The implementation should be **data-driven**, not manually duplicated for every design.

Design data determines what cards exist; the layout system determines how those cards are arranged.

Additional layout patterns can be registered as needed without restructuring the whole Library.

This is the implementation interpretation of the user's N + 1 principle, not a requirement to literally create `N+1` separate CSS grid files.

---

# 7. View Style — Independent Style World

## Purpose

View Style is where the user enters the particular design language.

It must feel like entering the **home/world of that design**, not opening another generic application page.

## Environment ownership

Every View Style owns its own visual language:

```text
Style World
├── background
├── typography
├── colour system
├── spacing
├── surfaces
├── cards
├── buttons
├── controls
├── decorative language
├── basic specimen
├── explanations
└── examples
```

The global `D.` shell is not allowed to supply the Style World's background or visual environment.

## Consistent information architecture, variable visual language

The *structure* of Style Worlds can be consistent so users learn how to navigate them.

The *visual expression* must change according to the particular style.

Therefore:

```text
Same learning structure
        ≠
Same visual design
```

---

# 8. Basic Example

Each Style World should contain a fundamental/basic example.

Purpose:

- demonstrate the core anatomy of the style
- make the style understandable
- provide one controlled specimen before showing broader applications

The basic example is **not** intended to represent every possible use of the design language.

---

# 9. More Examples

## Purpose

The Examples area demonstrates how one design language can be expressed across different real-world contexts.

The key question is:

> **What can this design language become?**

Potential example slots include:

- poster
- webpage
- landing page
- advertisement
- gift/merchandise
- clothing/fashion
- social-media creative
- made-up figure/character
- character poster
- actor/actress/fashion-model campaign concept
- edited short-video/Reel concept
- other context-specific applications

Not every Style World must contain every example type. Examples should be selected according to what genuinely demonstrates the design language.

## Explanation requirement

Examples should not be image-only decoration.

Where useful, explain:

- why the design works
- colour choices
- typography
- composition
- shape/form
- spacing
- visual personality
- why the style fits the particular context

The goal is **visual learning + design reasoning**.

---

# 10. Navigation Contract

## Global shell navigation

```text
Home
 ↕
Dashboard
 ↕
Design Library
```

The shell remains visually consistent.

## Style navigation

```text
Design Library
    ↓
View Style
    ↓
Style World
    ↓
Back / Continue Exploring
```

Entering a Style World is a visual boundary transition.

Leaving it restores the global Design Anatomy shell.

---

# 11. Content vs Implementation

This project intentionally separates four kinds of decisions.

## A. Product architecture — lock now

Examples:

- page hierarchy
- global/style boundary
- navigation
- View Style concept
- Library scalability
- example-system concept

## B. Approved product content — lock when explicitly approved

Examples:

- Home introduction copy
- finalized Dashboard wording
- CTA labels

Once locked, implementation changes must preserve it.

## C. Research-dependent content — later

Examples:

- final design catalogue
- category names/counts
- historical claims
- historical imagery
- colour psychology references
- real-world design examples
- exact examples per style

## D. Implementation — after blueprint

Examples:

- React components
- CSS
- data structures
- routing
- assets
- responsive behavior
- performance

---

# 12. Proposed Technical Architecture

The folder architecture should make ownership visible.

```text
src/
│
├── D.home-page/
│   ├── HomePage.jsx
│   ├── HomePage.css
│   ├── components/
│   └── assets/
│
├── D.dashboard-page/
│   ├── DashboardPage.jsx
│   ├── DashboardPage.css
│   ├── components/
│   └── assets/
│
├── D.design-library/
│   ├── DesignLibrary.jsx
│   ├── DesignLibrary.css
│   ├── components/
│   ├── previews/
│   └── data/
│
├── D.shared/
│   ├── components/
│   └── utilities/
│
├── D.navigation/
│   └── ...
│
├── style-worlds/
│   ├── glassmorphism/
│   │   ├── Glassmorphism.jsx
│   │   ├── Glassmorphism.css
│   │   ├── environment.css
│   │   ├── examples/
│   │   └── assets/
│   │
│   ├── brutalism/
│   ├── minimalism/
│   ├── dark-ui/
│   └── ...
│
├── design-system/
│   ├── tokens/
│   ├── primitives/
│   ├── typography/
│   └── utilities/
│
└── main.jsx
```

### Important

The `design-system/` layer is infrastructure, not a replacement for Style World environments.

Shared primitives must be carefully designed so that they do not force one particular visual language onto every Style World.

---

# 13. Data Architecture

The future Design Library should be data-driven.

Conceptually:

```text
Design
├── id
├── name
├── category
├── preview
├── style-world reference
├── short description
└── example metadata
```

The exact schema is intentionally not finalized until the design research/catalogue phase.

The data layer should allow a new design to be added without manually rebuilding the Library page.

---

# 14. Asset Architecture

Assets should belong to the feature or Style World that owns them whenever practical.

Examples:

```text
D.home-page/assets/
D.dashboard-page/assets/
D.design-library/previews/
style-worlds/glassmorphism/assets/
```

Avoid a single uncontrolled global asset folder containing unrelated style-specific assets.

---

# 15. Responsive Architecture

The app must be designed as a responsive system, not as a desktop page later squeezed onto mobile.

Every major area must define:

- desktop composition
- tablet behavior
- mobile composition
- typography scaling
- grid/card behavior
- overflow behavior
- touch interaction

The Library must remain expandable on smaller screens without requiring a fixed number of columns.

---

# 16. Performance / Stability Requirements

The previous implementation suffered from black-screen and missing-content failures during migration and styling changes.

The rebuild therefore has explicit stability requirements.

## Non-negotiables

- App must have a reliable boot path.
- A failed Style World must not blank the entire application.
- Global CSS must not depend on Style World CSS being loaded.
- Style World CSS must not globally overwrite the app shell.
- Route/navigation failures should have controlled fallback behavior.
- Assets should use predictable paths.
- CSS ownership must be local and explicit wherever possible.
- New styles should be added without destabilizing existing styles.
- Build must be verified after major architectural additions.

## Build strategy

Do not build every Style World simultaneously.

First prove:

```text
Home
 ↓
Dashboard
 ↓
Library
 ↓
ONE Style World
 ↓
Back
```

Then use the proven architecture for additional styles.

---

# 17. Build Sequence

## Phase 1 — Foundation

1. Confirm `package.json` dependency/tooling requirements.
2. Replace obsolete Vercel rewrite configuration when new routing is defined.
3. Create `index.html`.
4. Create the minimal React boot path.
5. Verify the app renders before adding visual complexity.

## Phase 2 — Global `D.` shell

6. Build `D.home-page`.
7. Lock approved Home content into its structure.
8. Build global visual language.
9. Build `D.dashboard-page`.
10. Build `D.design-library`.
11. Verify Home → Dashboard → Library navigation.

## Phase 3 — Library data model

12. Create expandable design/category data architecture.
13. Create preview-card component.
14. Create scalable grid/layout system.
15. Leave research-dependent catalogue entries as empty/TBD data slots.

## Phase 4 — First Style World

16. Select the first researched/finalized design.
17. Build its isolated environment.
18. Build basic example.
19. Build design explanation/anatomy.
20. Build More Examples system.
21. Verify entering/leaving the Style World.

## Phase 5 — Replication

22. Add additional Style Worlds using the proven contract.
23. Never copy global shell styling into a Style World.
24. Test each new style independently.

## Phase 6 — Research/content population

25. Research the design catalogue.
26. Populate the user's design sheet.
27. Create the GitHub data file.
28. Research Dashboard history/images.
29. Research colour psychology references/palettes.
30. Populate Style World examples.

## Phase 7 — Final hardening

31. Responsive testing.
32. Build/deployment verification.
33. Navigation verification.
34. Asset verification.
35. CSS isolation verification.
36. Production sanity check.

---

# 18. Change-Control Rules

Before implementing a change, ask:

1. Which layer owns this change?
2. Is it global `D.` or Style World specific?
3. Is it content, architecture, research, or implementation?
4. Could it leak into another layer?
5. Does it change a locked decision?
6. Does it introduce a new dependency?
7. Can it break the boot path?
8. Can it be tested independently?

If ownership is unclear, **do not patch first; investigate first.**

---

# 19. Research Deliverables — Later, Not Now

Two catalogue outputs will eventually be produced from the same research:

### A. Personal Design Sheet

For planning/review:

- categories
- designs
- counts
- references
- notes
- visual direction
- research status

### B. GitHub Design Data File

For application use:

- finalized design names
- categories
- descriptions
- identifiers
- preview references
- Style World references
- example metadata

These are downstream of the blueprint and must not drive the architecture prematurely.

---

# 20. Master Rules — Non-Negotiable

1. **`D.` means Design Anatomy's global/product language.**
2. **Style Worlds mean particular design languages.**
3. **Global styling ends at the Design Library boundary.**
4. **A View Style owns its complete environment.**
5. **A Library preview is not the full Style World.**
6. **A Basic Example teaches the core anatomy; More Examples demonstrate breadth.**
7. **The Library is expandable; there is no fixed maximum design count.**
8. **Library layout is data-driven and can grow with the catalogue.**
9. **Research-dependent content is not invented merely to fill the blueprint.**
10. **Locked content is not silently rewritten during implementation.**
11. **Architecture must prevent CSS/visual leakage rather than relying on patches.**
12. **A new Style World must not destabilize existing worlds or the global shell.**
13. **The first Style World is a proof of architecture before mass replication.**
14. **When something breaks, investigate the ownership/dependency chain before patching.**
15. **The goal is a maintainable application, not a collection of visually successful patches.**

---

# 21. Current Status

### Locked

- Two-language architecture (`D.` global vs Style World)
- Home → Dashboard → Library → View Style journey
- Home live preview = 3–5 designs
- Live preview target = 2.5 seconds/design
- Home top and preview `JUMP IN` actions → Dashboard
- Dashboard history/story before Colour Psychology
- Dashboard top and bottom `EXPLORE STYLES` → Library
- View Style is a complete independent visual environment
- Basic Example + More Examples concept
- Library preview card + design name
- Expandable N-based design catalogue
- Expandable layout/grid system

### Awaiting research

- Final design catalogue
- Category names and counts
- Final historical content and imagery
- Colour Psychology research/content
- Final 3–5 Home showcase designs
- Exact Style World example sets
- Final asset collection

### Awaiting implementation

- New React application
- Global shell
- Routing/navigation
- Library data architecture
- First Style World
- Example system
- Responsive system
- Production hardening

---

**Blueprint principle:**

> **Design the architecture so the content can grow, and design the boundaries so the visual languages cannot collapse into one another.**
