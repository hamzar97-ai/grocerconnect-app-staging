import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#2F9E44", // Fresh Green
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#F08C00", // Citrus Orange
      contrastText: "#ffffff",
    },

    success: {
      main: "#20C997", // Mint
    },

    warning: {
      main: "#FFD43B", // Lemon
    },

    error: {
      main: "#E03131", // Berry Red
    },

    info: {
      main: "#7048E8", // Lavender
    },

    background: {
      default: "#F8F9FA",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#212529",
      secondary: "#495057",
    },
  },

  typography: {
    fontFamily: `"Inter", "Roboto", "Arial", sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;
