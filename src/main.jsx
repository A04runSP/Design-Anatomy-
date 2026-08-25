import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, Compass, Eye, Lightbulb, Search, ArrowLeft, X } from "lucide-react";
import Minimalism from "./Minimalism.jsx";
import Glassmorphism from "./Glassmorphism.jsx";
import Neumorphism from "./Neumorphism.jsx";
import Brutalism from "./Brutalism.jsx";
import BrutalSecondary from "./BrutalSecondary.jsx";
import Skeuomorphism from "./Skeuomorphism.jsx";
import Claymorphism from "./Claymorphism.jsx";
import Maximalism from "./Maximalism.jsx";
import MaterialDesign from "./MaterialDesign.jsx";
import FlatDesign from "./FlatDesign.jsx";
import AuroraGradient from "./AuroraGradient.jsx";
import "./style.css";
import "./enhancements.css";
import "./typography.css";
import "./spacing.css";
import "./light-material.css";
import "./contrast.css";
import "./start-here.css";
import "./library.css";
import "./material-design.css";
import "./material-preview.css";

// Home preview and entry-level overrides are part of the Vite CSS graph.
// Keeping them here makes load order deterministic instead of relying on
// standalone <link> tags in index.html.
import "./home-live-preview-fix.css";
import "./minimal-preview.css";
import "./minimalism-geometric.css";
import "./flat-preview-fix.css";
import "./maximalism-live-override.css";
import "./home-viewport.css";
import "./heading-overrides.css";

const styles = [
  { family: "MORPHISM FAMILY", name: "GLASSMORPHISM", icon: Eye, tag: "01.01", copy: "Translucent surfaces, blur and light create depth without making the interface noisy.", route: "glassmorphism", preview: 1 },
  { family: "MORPHISM FAMILY", name: "NEUMORPHISM", icon: Lightbulb, tag: "01.02", copy: "Soft shadows make controls feel physical, tactile and quietly dimensional.", route: "neumorphism", preview: 2 },
  { family: "MORPHISM FAMILY", name: "CLAYMORPHISM", icon: Lightbulb, tag: "01.03", copy: "Soft inflated forms, rounded surfaces and gentle depth create a playful tactile interface.", route: "claymorphism", preview: 5 },
  { family: "MORPHISM FAMILY", name: "SKEUOMORPHISM", icon: Compass, tag: "01.04", copy: "Familiar physical objects, materials and controls become visual metaphors for digital interaction.", route: "skeuomorphism", preview: 4 },
  { family: "LISM FAMILY", name: "BRUTALISM", icon: Compass, tag: "01.05", copy: "Raw structure, bold typography and deliberate visual tension make the interface impossible to ignore.", route: "brutalism", preview: 3 },
  { family: "LISM FAMILY", name: "MINIMALISM", icon: Compass, tag: "01.06", copy: "Clarity through restraint. Space, hierarchy and simple form do the heavy lifting.", route: "minimalism", preview: 0 },
  { family: "LISM FAMILY", name: "MAXIMALISM", icon: Compass, tag: "01.07", copy: "Abundance with intention — colour, typography, imagery, pattern and texture create a rich visual experience.", route: "maximalism", preview: 6 },
  { family: "MATERIAL FAMILY", name: "MATERIAL DESIGN", icon: Compass, tag: "02.01", copy: "Structured surfaces, elevation and clear interaction patterns create a practical digital language.", route: "material-design", preview: 7 },
  { family: "MATERIAL FAMILY", name: "FLAT DESIGN", icon: Compass, tag: "02.02", copy: "Flat surfaces, bold colour and direct visual communication remove unnecessary visual depth.", route: "flat-design", preview: 8 },
  { family: "AURORA FAMILY", name: "AURORA GRADIENT DESIGN", icon: Compass, tag: "03.01", copy: "Luminous gradients, atmospheric colour and soft motion create an immersive visual environment.", route: "aurora-gradient", preview: 9 }
];

