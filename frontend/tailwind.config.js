/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ cobre seus componentes
  ],
  theme: {
    extend: {
      colors: {
        mossGreen: "rgba(85, 107, 47, 0.7)",
        mossLight: "rgba(85, 107, 47, 0.3)",
        mossGlass: "rgba(85, 107, 47, 0.3)",
        mossBorder: "rgba(85, 107, 47, 0.5)",
        mossDark: "rgba(85, 107, 47, 0.9)",
        mossVeryDark: "rgba(34, 43, 20, 1)", // musgo quase preto (um tom super escuro)
        beige: "#FAF0E6", // clássico bege suave

      },
      fontFamily: {
        wedding: ['"Great Vibes"', "cursive"],
      },
    },
  },
  plugins: [],
};
