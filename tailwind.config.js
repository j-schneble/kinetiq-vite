/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
            primary: {
              50: '#fafafa',
              100: '#f4f4f5',
              200: '#e4e4e7',
              300: '#d4d4d8',
              400: '#a1a1aa',
              500: '#71717a',
              600: '#52525b',
              700: '#3f3f46',
              800: '#27272a',
              900: '#18181b',
            },
            blueGray: {
                50: '#F8FAFC',
                100: '#F1F5F9',
                200:'#E2E8F0',
                300:'#CBD5E1',
                400:'#94A3B8',
                500:'#64748B',
                600:'#475569',
                700:'#334155',
                800:'#1E293B',
                900:'#0F172A',
            },
            zinc: {
                50: '#fafafa',
                100: '#f4f4f5',
                200:'#e4e4e7',
                300:'#d4d4d8',
                400:'#a1a1aa',
                500:'#52525b',
                600:'#52525b',
                700:'#3f3f46',
                800:'#27272a',
                900:'#18181b',
                950: '#09090b',
            },
        },
        backgroundImage: (theme) => ({
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
              "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "mobile-home": "url('./assets/.png')",
        }),
        fontFamily: {
        },
        content: {},
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
    plugins: [],
  };
