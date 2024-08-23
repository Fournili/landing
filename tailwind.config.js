const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [nextui()],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|navbar|divider).js"
  ],
  theme: {
    extend: {
      colors: {
        "whites-300": "#fcfbfa",
        "whites-400": "#e6e4d5",
        "greys-200": "#d2d2d2",
        "greys-300": "#6e6d6d",
        gray: {
          "100": "#fffffb",
          "200": "#28232e",
          "300": "#1b1b1b",
          "400": "rgba(255, 255, 255, 0.6)",
          "500": "rgba(255, 255, 255, 0.9)",
          "600": "rgba(124, 124, 124, 0.75)",
        },
        "secondary-400": "#b69234",
        "primary-300": "#e62042",
        black: "#000",
        "secondary-100": "#f4f3ec",
        "secondary-200": "#efe8c4",
        wheat: "#d6cfab",
        dimgray: {
          "100": "#646464",
          "200": "#595163",
          "300": "#4f4f4f",
        },
        slategray: "#89789a",
        white: "#fff",
        "accent-blue-100": "#e6e7ff",
        "accent-blue-300": "#575cd2",
      },
      backgroundColor: {
        'accordion-item': 'transparent',
      },
      spacing: {},
      fontFamily: {
        body: "'Circular Std'",
      },
      borderRadius: {
        "16xl-1": "35.1px",
        "8xl-6": "27.6px",
        "15xl-3": "34.3px",
        "15xl-5": "34.5px",
        "12xl-3": "31.3px",
        "12xs-7": "0.7px",
        "12xs-8": "0.8px",
        "11xs-5": "1.5px",
        "base-6": "16.6px",
        "12xs-2": "0.2px",
        "281xl-8": "300.8px",
        "291xl-4": "310.4px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "5xs": "8px",
      "3xs": "10px",
      "21xl": "40px",
      "13xl": "32px",
      "45xl": "64px",
      "32xl": "51px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
