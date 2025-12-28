/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#f90643",
        "primary-dark": "#d60036",
        "secure": "#10b981",
        "background-light": "#f8f5f6",
        "background-dark": "#0a0a0a",
        "surface-dark": "#141414",
        "surface-highlight": "#1e1e1e",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"],
        "mono": ["Space Mono", "monospace"],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(#10b98120 1px, transparent 1px)",
        'circuit-pattern': "radial-gradient(circle at center, #10b98110 0%, transparent 70%)",
        'dots-pattern': "radial-gradient(#333 1px, transparent 1px)"
      },
    },
  },
  plugins: [],
}

