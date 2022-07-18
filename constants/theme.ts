import { extendTheme } from "@chakra-ui/react";

const colors = {
  peach: {
    500: "#E7816B",
  },
  black: {
    500: "#1D1C1E",
  },
  lightPeach: {
    500: "#FFAD9B",
  },
  darkGrey: {
    500: "#333136",
  },
  lightGrey: {
    500: "#F1F3F5",
  },
};

const components = {
  Text: {
    baseStyle: {
      fontFamily: "Jost",
      fontSize: "16px",
      lineHeight: "26px",
      fontWeight: 400,
    },
    variants: {
      h1: { fontSize: "48px", lineHeight: "48px", fontWeight: 500 },
      h2: {
        fontSize: "40px",
        lineHeight: "48px",
        fontWeight: 500,
        letterSpacing: "2px",
      },
      h3: {
        fontSize: "20px",
        lineHeight: "26px",
        fontWeight: 500,
        letterSpacing: "5px",
      },
    },
  },
  Button: {
    baseStyle: {
      padding: "18px 24px",
      minHeight: "56px",
      fontSize: "15px",
      lineHeight: "22px",
      fontWeight: 500,
      letterSpacing: "1px",
      fontFamily: "Jost",
    },
    variants: {
      primary: {
        bg: "peach.500",
        color: "white",
      },
      secondary: {
        bg: "lightPeach.500",
        color: "white",
      },
      light: {
        bg: "white",
        color: "darkGrey",
      },
    },
  },
};

const theme = extendTheme({ colors, components });

export default theme;
