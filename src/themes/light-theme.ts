import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#001e63",
    },
    secondary: {
      main: "#a29bfe",
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
      default: "#f8fafd",
      paper: "#dfe6e9",
    },
    text: {
      primary: "#001e61",
    },
  },
});

export { lightTheme };
