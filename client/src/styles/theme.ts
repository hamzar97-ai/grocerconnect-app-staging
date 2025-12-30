import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#6db54e", // Fresh Green
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
      main: "#FBEF43", // Lemon
    },

    error: {
      main: "#EB373E", // Berry Red
    },

    info: {
      main: "#7F4E9F", // Lavender
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
