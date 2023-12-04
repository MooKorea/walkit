import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        inputBackground: "var(--inputBackground)",
        inputForeground: "var(--inputForeground)",
        textPrimary: "var(--textPrimary)",
        textSecondary: "var(--textSecondary)",
        textTertiary: "var(--textTertiary)"
      },
      fontFamily: {
        RubikRegular: ["RubikRegular", "sans-serif"],
        RubikMedium: ["RubikMedium", "sans-serif"],
        RubikBold: ["RubikBold", "sans-serif"]
      },
      spacing: {
        buttonHeight: "59px",
        panelWidth: "392px"
      },
      boxShadow: {
        panel: "0px 4px 4px rgba(0, 0, 0, 0.25), 10px 17px 29.4px rgba(62, 37, 0, 0.6)",
        small: "2px 4px 8.5px rgba(0, 0, 0, 0.15)",
        inset: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        gradient: "radial-gradient(50% 50% at 50% 50%, rgba(104, 251, 233, 0) 43.75%, rgba(104, 251, 233, 0.72) 100%)"
      }

    },
  },
  plugins: [],
}
export default config
