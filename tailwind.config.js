/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        primaryHover: "#4F46E5",
        accent: "#FB7185",
        bgSoft: "#F8FAFC",
        textMain: "#0F172A",
        textMuted: "#64748B",
        borderSoft: "#E2E8F0",
      },
      
    },
  },
  plugins: [],
};
