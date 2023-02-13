import { createTheme, responsiveFontSizes } from "@mui/material/styles";
export const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
      primary: {
        light: "#25AEDE",
        main: "#0236d7",
        dark: "#081F56",
        contrastText: "#fff",
      },
      secondary: {
        main: "#FF640D",
        dark: "#C94C06",
      },
      error: {
        main: "#f8f8f8",
        dark: "#560814",
        light: "#e6e6e6",
      },
      common: {
        white: "#ffffff",
        black: "#000000",
      },
      info: {
        main: "#000000",
        dark: "#e8e8e8",
        light: "grey.50",
      },
    },
    spacing: 4,
    direction: "rtl",
    shape: {
      borderRadius: 4,
    },

    typography: {
      fontFamily: "Anjoman",
      htmlFontSize: 25,
    },
  })
);
