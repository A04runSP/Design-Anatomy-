import React, { Suspense, lazy } from "react";

const stylePages = {
  minimalism: lazy(() => import("../Minimalism.jsx")),
  glassmorphism: lazy(() => import("../Glassmorphism.jsx")),
  neumorphism: lazy(() => import("../Neumorphism.jsx")),
  brutalism: lazy(() => import("../Brutalism.jsx")),
  skeuomorphism: lazy(() => import("../Skeuomorphism.jsx")),
  claymorphism: lazy(() => import("../Claymorphism.jsx")),
  maximalism: lazy(() => import("../Maximalism.jsx")),
  materialdesign: lazy(() => import("../MaterialDesign.jsx")),
  flatdesign: lazy(() => import("../FlatDesign.jsx")),
  auroragradient: lazy(() => import("../AuroraGradient.jsx")),
};

function StyleLoadingState() {
  return (
    <main className="style-loading" aria-live="polite" aria-busy="true">
      <p>Loading design environment…</p>
    </main>
  );
}

export default function StyleEnvironmentLoader({ route, onBack }) {
  const StylePage = stylePages[route];

  if (!StylePage) return null;

  return (
    <Suspense fallback={<StyleLoadingState />}>
      <StylePage onBack={onBack} />
    </Suspense>
  );
}
