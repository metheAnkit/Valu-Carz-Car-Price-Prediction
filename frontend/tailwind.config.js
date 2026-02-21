/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#8B5CF6",
        accent: "#EC4899",
        background: "#0F172A",
        foreground: "#F8FAFC",
        card: "#1E293B",
        muted: "#64748B",
        "muted-foreground": "#94A3B8",
        "primary-foreground": "#FFFFFF",
        "secondary-foreground": "#FFFFFF",
        "accent-foreground": "#FFFFFF",
        border: "#334155",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)",
        "gradient-premium": "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
      },
      boxShadow: {
        "glow": "0 0 20px rgba(59, 130, 246, 0.5)",
      },
    },
  },
  plugins: [],
}
