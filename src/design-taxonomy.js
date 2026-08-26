/**
 * Design Anatomy — research-grounded taxonomy.
 *
 * This is our organizational model, not a claim that the industry has one
 * universal taxonomy. Each entry keeps a primary home plus related concepts
 * so future styles can be classified without forcing them into one box.
 */

export const DESIGN_TAXONOMY = [
  {
    id: "foundations",
    number: "01",
    name: "FOUNDATIONS",
    description: "Visual philosophies, structural traditions and design movements.",
    subfamilies: [
      { id: "structure-restraint", name: "STRUCTURE & RESTRAINT", styles: ["minimalism", "swiss-international", "modernism", "functionalism"] },
      { id: "raw-anti-refinement", name: "RAW & ANTI-REFINEMENT", styles: ["brutalism", "neubrutalism", "anti-design"] },
      { id: "expansion-abundance", name: "EXPANSION & ABUNDANCE", styles: ["maximalism", "eclecticism"] },
      { id: "historical-movements", name: "HISTORICAL MOVEMENTS", styles: ["bauhaus", "constructivism", "de-stijl", "art-nouveau", "art-deco", "postmodernism", "memphis"] },
    ],
  },
  {
    id: "surface-material",
    number: "02",
    name: "SURFACE & MATERIAL",
    description: "How interfaces communicate material, depth, texture and physical metaphor.",
    subfamilies: [
      { id: "morphic-physical", name: "MORPHIC / PHYSICAL", styles: ["skeuomorphism", "neumorphism", "glassmorphism", "claymorphism"] },
      { id: "transparent-fluid", name: "TRANSPARENT / FLUID", styles: ["glassmorphism", "liquid-glass", "acrylic"] },
      { id: "depth-elevation", name: "DEPTH / ELEVATION", styles: ["neumorphism", "material-elevation", "spatial-ui"] },
    ],
  },
  {
    id: "digital-interface",
    number: "03",
    name: "DIGITAL INTERFACE",
    description: "Interface-specific visual languages, systems and UI strategies.",
    subfamilies: [
      { id: "flat-reduced-depth", name: "FLAT / REDUCED DEPTH", styles: ["flat-design", "metro-modern-ui"] },
      { id: "systemic", name: "SYSTEMIC INTERFACES", styles: ["material-design", "fluent-design", "carbon-design", "lightning-design"] },
      { id: "interface-modes", name: "INTERFACE MODES", styles: ["dark-ui", "light-ui", "monochrome-ui", "data-dense-ui"] },
      { id: "spatial-environmental", name: "SPATIAL / ENVIRONMENTAL", styles: ["spatial-ui", "bento-ui"] },
    ],
  },
  {
    id: "expressive-creative",
    number: "04",
    name: "EXPRESSIVE & CREATIVE",
    description: "Expressive visual languages driven by colour, culture, decoration and experimentation.",
    subfamilies: [
      { id: "light-colour", name: "LIGHT & COLOUR", styles: ["aurora-gradient", "gradient-mesh", "holographic", "iridescent"] },
      { id: "cultural-era", name: "CULTURAL / ERA-BASED", styles: ["y2k", "vaporwave", "retro", "cyberpunk"] },
      { id: "experimental", name: "EXPERIMENTAL", styles: ["glitch", "experimental-typography", "generative", "anti-design"] },
      { id: "decorative", name: "DECORATIVE", styles: ["memphis", "psychedelic", "ornamental"] },
      { id: "illustrative-artistic", name: "ILLUSTRATIVE / ARTISTIC", styles: ["hand-drawn", "collage", "editorial-illustration"] },
    ],
  },
  {
    id: "motion-interaction",
    number: "05",
    name: "MOTION & INTERACTION",
    description: "Behavioural and interactive languages that can combine with any visual style.",
    subfamilies: [
      { id: "motion-first", name: "MOTION-FIRST", styles: ["motion-first", "micro-interaction"] },
      { id: "typography-motion", name: "TYPOGRAPHY MOTION", styles: ["kinetic-typography"] },
      { id: "scroll-spatial", name: "SCROLL / SPATIAL", styles: ["scroll-driven", "parallax", "spatial-depth"] },
      { id: "reactive", name: "REACTIVE / GENERATIVE", styles: ["cursor-reactive", "generative", "procedural"] },
    ],
  },
];

export const STYLE_CLASSIFICATION = {
  glassmorphism: { domain: "surface-material", subfamily: "morphic-physical", type: "UI visual style", related: ["neumorphism", "skeuomorphism", "claymorphism", "transparency", "depth"] },
  neumorphism: { domain: "surface-material", subfamily: "morphic-physical", type: "UI visual style", related: ["skeuomorphism", "glassmorphism", "depth", "elevation"] },
  claymorphism: { domain: "surface-material", subfamily: "morphic-physical", type: "UI visual style", related: ["neumorphism", "3d", "soft surfaces"] },
  skeuomorphism: { domain: "surface-material", subfamily: "morphic-physical", type: "physical-metaphor style", related: ["neumorphism", "material", "physical metaphor"] },
  brutalism: { domain: "foundations", subfamily: "raw-anti-refinement", type: "design movement / web aesthetic", related: ["neubrutalism", "anti-design", "experimental typography"] },
  minimalism: { domain: "foundations", subfamily: "structure-restraint", type: "design philosophy / movement", related: ["swiss-international", "modernism", "functionalism"] },
  maximalism: { domain: "foundations", subfamily: "expansion-abundance", type: "design approach / aesthetic", related: ["eclecticism", "decorative", "expressive"] },
  "flat-design": { domain: "digital-interface", subfamily: "flat-reduced-depth", type: "digital visual approach", related: ["minimalism", "metro-modern-ui", "material-design"] },
  "material-design": { domain: "digital-interface", subfamily: "systemic", type: "design system / language", related: ["flat-design", "elevation", "motion", "components"] },
  "dark-ui": { domain: "digital-interface", subfamily: "interface-modes", type: "UI visual strategy", related: ["aurora-gradient", "monochrome-ui", "spatial-ui"] },
  "aurora-gradient": { domain: "expressive-creative", subfamily: "light-colour", type: "contemporary visual style", related: ["gradient-mesh", "holographic", "dark-ui", "motion"] },
};

export function getStyleClassification(styleId) {
  return STYLE_CLASSIFICATION[styleId] ?? null;
}
