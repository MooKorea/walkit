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
        buttonHeight: "3.688rem",
        panelWidth: "calc(100vw - 2.5rem)"
      },
      boxShadow: {
        panel: "0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25), 0.625rem 1.063rem 1.838rem rgba(62, 37, 0, 0.6)",
        small: "0.125rem 0.25rem 0.531rem rgba(0, 0, 0, 0.15)",
        inset: "inset 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        gradient: "radial-gradient(50% 50% at 50% 50%, rgba(104, 251, 233, 0) 43.75%, rgba(104, 251, 233, 0.72) 100%)"
      }

    },
  },
  plugins: [],
}
export default config
