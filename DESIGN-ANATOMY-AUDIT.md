# Design Anatomy — Engineering & Design Audit

**Audit phase:** Phase 1 / CSS ownership + architecture forensic pass
**Branch:** main
**Purpose:** Record verified findings before any destructive cleanup or refactor.

## Safety rule

No existing runtime file is removed or rewritten merely because it appears old, duplicated, or unusually named. Every candidate must first be traced through imports, references, selectors, and runtime/build ownership.

## Current application path

```text
index.html
  -> /src/main.jsx
  -> App()
  -> Home / Dashboard / Library / style environments
```

`src/main.jsx` is the current application entry and contains the style registry, Home `StylePreview`, navigation state, and imports for the style environments.

## Verified findings

### A. Two CSS delivery paths — HIGH

CSS is loaded both through JavaScript imports in `src/main.jsx` and direct `<link>` tags in `index.html`.

Examples from `main.jsx`:
- style.css
- enhancements.css
- typography.css
- spacing.css
- light-material.css
- contrast.css
- start-here.css
- library.css
- material-design.css
- material-preview.css

Examples from `index.html`:
- heading-overrides.css
- home-viewport.css
- home-live-preview-fix.css
- minimal-preview.css
- minimalism-geometric.css
- flat-preview-fix.css
- flat-preview-final.css
- maximalism-live-override.css

**Risk:** unclear cascade ownership, ordering dependence, and harder Vite dependency tracing.

**Decision:** REFRACTOR, but only after selector/import tracing. Do not delete the linked files yet.

### B. Preview correction layers — HIGH

The repository contains explicitly corrective/override styles such as `home-live-preview-fix.css`, `flat-preview-fix.css`, `flat-preview-final.css`, and `maximalism-live-override.css`.

**Risk:** fixes can become permanent cascade dependencies and can mask the original ownership problem.

**Decision:** KEEP temporarily. Consolidate only after each selector is traced to its owning component and visual role.

### C. Home preview markup is coupled to `main.jsx` — MEDIUM

`StylePreview()` contains the markup for all Home showcase previews and the style registry also lives in `main.jsx`.

**Risk:** `main.jsx` grows as more styles/previews are added and preview changes can become entangled with application routing.

**Decision:** REFACTOR LATER into a dedicated preview registry/component boundary. Preserve current visual output during extraction.

### D. Global style surface — MEDIUM

`style.css` contains global tokens/reset/body rules, Home layout, preview containment, individual preview styles, and dashboard foundation.

**Risk:** broad selectors and mixed responsibilities make cascade debugging harder.

**Decision:** REFACTOR BY OWNERSHIP, not by filename size. First identify global, shared component, Home, dashboard, and specimen responsibilities.

### E. Legacy/parallel HTML — NEEDS VERIFICATION

`minimalism.html` exists at repository root while `src/Minimalism.jsx` is the React implementation.

**Decision:** KEEP until repository references and deployment behaviour are traced. If unused, document it as legacy before any removal.

### F. Vercel rewrite — NEEDS VERIFICATION

`vercel.json` rewrites `/library.html` to `/index.html`.

**Decision:** KEEP until references to `/library.html` are checked. Do not remove a routing rule without proving it is unused.

### G. Dependency reproducibility — HIGH

`package.json` currently uses `latest` for Vite, React, React DOM, the React Vite plugin, and Lucide React.

**Risk:** future installs can resolve different versions without application code changes.

**Decision:** PIN after determining the exact dependency versions used by the currently working application. Do not guess versions.

## Protected assets / architecture

The following are considered intentional until proven otherwise:

- individual style environment JSX components
- the existing structural blueprint
- current production visual design
- existing assets
- current React application entry
- current single production Vercel deployment

## Next safe actions

1. Trace every CSS import and direct stylesheet link.
2. Identify selector overlap between Home previews and full style environments.
3. Trace `minimalism.html` references.
4. Trace `/library.html` references.
5. Establish the current dependency versions before pinning.
6. Produce a KEEP / MERGE / REFACTOR / REMOVE decision for each CSS candidate.
7. Only then implement the smallest permanent architectural changes.

## Explicitly not done in this phase

- No CSS files deleted.
- No design styles removed.
- No visual redesign.
- No dependency version guessed or changed.
- No routing rule removed.
- No Home preview markup moved.
