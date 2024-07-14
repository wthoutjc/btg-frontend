import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#374a53",
      contrastText: "#f3f8f8",
      dark: "#202c33",
      light: "#6a99a6",
    },
    secondary: {
      main: "#93c1cd",
      light: "#6a99a6",
      dark: "#446876",
      contrastText: "#f3f8f8",
    },
    error: {
      main: "#d32f2f",
      contrastText: "#eef7ff",
    },
    warning: {
      main: "#fdec12",
      light: "#feff89",
      dark: "#a37605",
    },
    success: {
      main: "#52d689",
      light: "#bef4d4",
      dark: "#1b7a43",
    },
    background: {
      default: "#0c1317",
      paper: "#0c1317",
    },
  },
});

export { darkTheme };
