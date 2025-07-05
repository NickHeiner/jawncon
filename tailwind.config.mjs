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
        secondary: "#764ba2",
        accent: "#f59e0b",
        warning: "#f97316",
        uncanny: "#84cc16",
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
