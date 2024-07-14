import { useEffect } from "react";

// Zustand
import { useUIStore } from "../../../zustand/store";

// Components
import { ToggleButton } from "@mui/material";

// Icons
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ToggleDrawer = () => {
  const { setDarkMode, darkMode } = useUIStore();

  const onChange = () => {
    darkMode
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
    localStorage.setItem("vitaAppV2-dark-mode", darkMode ? "false" : "true");
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const darkModePreference =
      localStorage.getItem("vitaAppV2-dark-mode") === "true";
    setDarkMode(darkModePreference);
  }, [setDarkMode]);

  // return <StyledSwitch onChange={onChange} checked={darkMode} />;
  return (
    <ToggleButton
      value="list"
      aria-label="list"
      size="small"
      sx={{
        padding: "5px",
        borderRadius: 1.5,
      }}
      onClick={onChange}
    >
      {darkMode ? (
        <LightModeIcon fontSize="small" />
      ) : (
        <DarkModeIcon fontSize="small" />
      )}
    </ToggleButton>
  );
};

export { ToggleDrawer };
