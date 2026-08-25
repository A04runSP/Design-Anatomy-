# Design Anatomy — Engineering & Design Audit

**Audit phase:** Phase 1 / Phase 2A CSS ownership forensic pass
**Branch:** main
**Purpose:** Record verified findings before destructive cleanup or broad refactor.

## Safety rule

No existing runtime file is removed merely because it appears old, duplicated, or unusually named. Every candidate must first be traced through imports, references, selectors, and runtime/build ownership.

## Current application path

```text
index.html
  -> /src/main.jsx
  -> App()
  -> Home / Dashboard / Library / style environments
```

`src/main.jsx` is the application entry and contains the style registry, Home `StylePreview`, navigation state, and imports for the style environments.

## Verified findings

### A. Two CSS delivery paths — RESOLVED IN PHASE 2A

The repository previously loaded application CSS through both JavaScript imports in `src/main.jsx` and direct `<link>` tags in `index.html`.

This created ordering and ownership ambiguity, especially for Home preview correction layers.

**Permanent change made:** application CSS is now imported through the Vite module graph from `src/main.jsx`; `index.html` is responsible only for document metadata and the stable Vite entry.

**Expected result:** deterministic CSS loading order, clearer dependency tracing, and fewer browser/deployment differences caused by standalone stylesheet links.

The CSS files themselves were intentionally retained. No style sheet was deleted as part of this change.

### B. Preview correction layers — HIGH / STILL UNDER REVIEW

The repository contains explicitly corrective/override styles such as `home-live-preview-fix.css`, `flat-preview-fix.css`, `flat-preview-final.css`, and `maximalism-live-override.css`.

**Risk:** fixes can become permanent cascade dependencies and can mask the original ownership problem.

**Decision:** KEEP temporarily. Their selectors must be traced before any consolidation or removal.

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

## Phase 2A change log

### Completed

- Moved the eight Home/preview/entry override styles that were manually linked from `index.html` into the Vite CSS import graph in `src/main.jsx`.
- Removed the standalone stylesheet `<link>` tags from `index.html`.
- Kept all existing CSS files and selectors intact.
- Kept the stable `/src/main.jsx` Vite entry intact.
- Preserved the existing visual preview implementation.

### Why this is safe

This change alters **how CSS is loaded**, not the CSS rules themselves. It gives Vite one authoritative CSS dependency graph and removes the previous split between module imports and document-level stylesheet links.

### Remaining work

This does **not** mean every override file is now justified. The next forensic step is selector-level tracing to determine which rules overlap and which files have unique ownership.

## Protected assets / architecture

The following are considered intentional until proven otherwise:

- individual style environment JSX components
- the existing structural blueprint
- current production visual design
- existing assets
- current React application entry
- current single production Vercel deployment
- existing preview correction CSS until selector tracing is complete

## Next safe actions

1. Trace selector overlap among Home preview, library preview, and full style environment CSS.
2. Identify duplicate declarations and cascade dependencies.
3. Trace `minimalism.html` references.
4. Trace `/library.html` references.
5. Establish the current dependency versions before pinning.
6. Produce a KEEP / MERGE / REFACTOR / REMOVE decision for each CSS candidate.
7. Only then implement the next smallest permanent architectural change.

## Explicitly not done

- No design style deleted.
- No CSS candidate deleted.
- No visual redesign.
- No dependency version guessed or changed.
- No routing rule removed.
- No Home preview markup moved.
