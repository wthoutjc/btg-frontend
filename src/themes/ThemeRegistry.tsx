import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

// Themes
import { lightTheme, darkTheme } from "../themes";

// Zustand
import { useUIStore } from "../zustand/store";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const { darkMode } = useUIStore();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
