/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "448px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1600px",
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        extend: {
            backgroundImage: {
                header: "url('/src/images/header.jpg')",
                hero: "url('/src/images/hero.jpg')",
            },
            gridTemplateRows: {
                "card-body": "minmax(64px, auto) minmax(104px, auto) minmax(48px, 1fr)",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp"), require("daisyui"), require("tailwind-scrollbar")],

    // DaisyUI Customized
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")["[data-theme=light]"],
                    "base-100": "#ffffff",
                    "base-content": "#161616",
                    neutral: "#161616",
                    "neutral-content": "#ffffff",
                    primary: "#9615DB",
                },
                dark: {
                    ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
                    "base-100": "#161616",
                    "base-content": "#ffffff",
                    neutral: "#ffffff",
                    "neutral-content": "#161616",
                    primary: "#9615DB",
                },
            },
            "light",
            "dark",
        ],
    },
};
