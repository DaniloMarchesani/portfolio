// Single source of truth for the app colors.
// Each key becomes a CSS variable (--<key>) and a Tailwind color (see tailwind.config.ts).
export const palette = {
  light: {
    bg: "#fff",
    "text-copy": "#404040",
    "text-heading": "#0a0a0a",
    "text-secondary": "#737373",
    "text-nav": "#737373",
    "text-nav-hover": "#0a0a0a",
    "surface-subtle": "#f5f2e8",
    "code-background": "#f5f2e8",
    "code-inline": "#b9473b",
    divider: "#d4d4d4",
    "line-subtle": "var(--text-copy)",
  },
  dark: {
    bg: "#1b1a19",
    "text-copy": "#e8e5df",
    "text-heading": "#f4f1eb",
    "text-secondary": "#cbc6be",
    "text-nav": "#aaa59e",
    "text-nav-hover": "#f4f1eb",
    "surface-subtle": "#242321",
    "code-background": "#242321",
    "code-inline": "#e06c5f",
    divider: "#3b3936",
    "line-subtle": "var(--text-copy)",
  },
} as const;

export type ColorToken = keyof typeof palette.light;

export const cssVars = (mode: keyof typeof palette) =>
  Object.fromEntries(
    Object.entries(palette[mode]).map(([token, value]) => [
      `--${token}`,
      value,
    ]),
  );

// Tailwind color names → CSS variables, e.g. `text-heading`, `bg-background`, `border-divider`
export const themeColors = {
  background: "var(--bg)",
  copy: "var(--text-copy)",
  heading: "var(--text-heading)",
  secondary: "var(--text-secondary)",
  nav: "var(--text-nav)",
  "nav-hover": "var(--text-nav-hover)",
  "surface-subtle": "var(--surface-subtle)",
  code: "var(--code-background)",
  "code-inline": "var(--code-inline)",
  divider: "var(--divider)",
  "line-subtle": "var(--line-subtle)",
} satisfies Record<string, `var(--${ColorToken})`>;
