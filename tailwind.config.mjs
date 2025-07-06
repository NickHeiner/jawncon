/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      backgroundImage: {
        "jawn-pattern": "url('/assets/images/jawn-bg.jpeg')",
      },
      colors: {
        primary: "#667eea",
        "primary-foreground": "#ffffff",
        secondary: "#764ba2",
        "secondary-foreground": "#ffffff",
        accent: "#f59e0b",
        "accent-foreground": "#000000",
        warning: "#f97316",
        "warning-foreground": "#ffffff",
        uncanny: "#84cc16",
        "uncanny-foreground": "#000000",
        teal: "#007C89",
        "teal-foreground": "#ffffff",
        background: "#ffffff",
        foreground: "#1f2937",
        muted: {
          DEFAULT: "#f3f4f6",
          foreground: "#6b7280",
        },
        border: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
