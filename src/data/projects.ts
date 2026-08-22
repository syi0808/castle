export type ProjectStatus = "active" | "lab" | "archived";
export type ProjectCategory = "tooling" | "systems" | "interaction" | "experiment";

export interface Project {
  name: string;
  tagline: string;
  year: number;
  status: ProjectStatus;
  category: ProjectCategory;
  github?: string;
  website?: string;
  featured: boolean;
  order: number;
}

export const projects: Project[] = [
  { name: "rougher-stuff", tagline: "expressive web primitives", year: 2026, status: "active", category: "interaction", github: "https://github.com/I-LIKE-ROUGH/rougher-stuff", featured: true, order: 1 },
  { name: "trandimation", tagline: "traditional UI motion", year: 2026, status: "active", category: "interaction", github: "https://github.com/tradimation/tradimation", featured: true, order: 2 },
  { name: "svgr2", tagline: "SVG to component tooling", year: 2026, status: "active", category: "tooling", github: "https://github.com/syi0808/svgr2", featured: true, order: 3 },
  { name: "comorph", tagline: "code transformation experiments", year: 2026, status: "lab", category: "tooling", github: "https://github.com/syi0808/comorph", featured: false, order: 4 },
  { name: "actorble", tagline: "small interaction studies", year: 2026, status: "lab", category: "experiment", github: "https://github.com/syi0808/actorble", featured: false, order: 5 },
];
