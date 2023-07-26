/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background) / <alpha-value>)",
                secondary_bg: "hsl(var(--secondary-bg) / <alpha-value>)",
                "card-bg": "hsl(var(--card-bg) / <alpha-value>)",
                "button-bg": "hsl(var(--button-bg) / <alpha-value>)",
                accent: "hsl(var(--accent-color1) / <alpha-value>)",
                "accent-2": "hsl(var(--accent-color2) / <alpha-value>)",
                txt_white: "hsl(var(--text1) / <alpha-value>)",
                txt_dark: "hsl(var(--text2) / <alpha-value>)",
                txt3: "hsl(var(--text3) / <alpha-value>)",
            },
            gridTemplateColumns: {
                2: "minmax(0, 280px) 1fr",
            },
            fontFamily: {
                raleway: ["var(--font-raleway)"],
                montserrat: ["var(--font-montserrat)"],
            },
            padding: {
                "5%": "5%",
            },
            keyframes: {
                fixNav: {
                    "0%": { transform: "translateY(-10%)" },
                    "100%": { transform: "translateY(0)" },
                },
                backToTop: {
                    "0%": { transform: "translateY(0%)" },
                    "50%": { transform: "translateY(-5%)" },
                    "100%": { transform: "translateY(0%)" },
                },
                reveal: {
                    "0%": { transform: "translateX(30%)", opaicty: "0" },
                    "100%": { transform: "translateX(0%)", opacity: "1" },
                },
            },
            animation: {
                fixNav: "fixNav .5s ease-in-out 0s 1 forwards",
                backToTop: "backToTop .5s ease-in-out 0s 1 forwards",
                reveal: "reveal .5s ease-in-out 0s 1 forwards",
            },
            boxShadow: {
                "3xl": "8px 14px 24px 0px rgba(0,0,0,0.20)",
                "4xl": "3px 4px 11px 0px rgba(0,0,0,0.25)",
                "5xl": "0px 4px 4px 0px rgba(0,0,0,0.25)",
                img: "6px 7px 12px 0px rgba(0,0,0,0.25)",
            },
            borderRadius: {
                40: "40px",
            },
        },
    },
    plugins: [],
    darkMode: false,
};
