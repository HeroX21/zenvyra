tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63"
        },
        midnight: "#050816",
        ink: "#eef2ff",
        mist: "#94a3b8",
        royal: "#7c3aed",
        coral: "#fb7185",
        limeglow: "#a3e635"
      },
      fontFamily: {
        condensed: ['"Barlow Condensed"', "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 60px rgba(34, 211, 238, 0.22)",
        panel: "0 22px 70px rgba(2, 8, 23, 0.45)",
        soft: "0 12px 36px rgba(15, 23, 42, 0.3)"
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.18), transparent 42%), radial-gradient(circle at 80% 0%, rgba(124, 58, 237, 0.22), transparent 32%), radial-gradient(circle at 50% 100%, rgba(251, 113, 133, 0.14), transparent 36%)",
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
      },
      animation: {
        "float-slow": "float 7s ease-in-out infinite",
        "spin-slower": "spin 20s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        }
      }
    }
  }
};
