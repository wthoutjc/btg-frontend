import { useTheme } from "@mui/material";
import { ToggleButton, Typography } from "@mui/material";

// Components
import { ToggleDrawer } from "./ToggleDrawer";

// Icons
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Zustand
import { useUIStore } from "../../../zustand/store";

// Components
import { StyledDrawerHeader } from "../../../components/styled/StyledDrawer/StyledDrawerHeader";

// Images
import darkLogo from "../../../assets/btg-pactual-dark.png";
import lightLogo from "../../../assets/btg-pactual-light.png";

const DrawerHead = () => {
  const theme = useTheme();

  const { drawer, setDrawer, darkMode } = useUIStore((state) => state);
  const { open } = drawer;

  return (
    <StyledDrawerHeader
      sx={{
        p: 2,
        display: open ? "flex" : "block",
        flexDirection: open ? "row" : "column",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <ToggleDrawer />

      <Typography
        variant="h6"
        sx={{ flexGrow: 1, ml: open ? 1 : 0 }}
        fontSize={open ? "1.2rem" : "1.5rem"}
        fontWeight={600}
        textAlign={open ? "left" : "center"}
      >
        {open ? (
          darkMode ? (
            <img src={lightLogo} width={100} />
          ) : (
            <img src={darkLogo} width={100} />
          )
        ) : (
          "B"
        )}
      </Typography>

      <ToggleButton
        value="check"
        aria-label="list"
        size="small"
        sx={{
          padding: "5px",
          borderRadius: 1.5,
        }}
        onClick={() => setDrawer({ open: !open })}
      >
        {open ? (
          <NavigateBeforeIcon fontSize="small" />
        ) : (
          <NavigateNextIcon fontSize="small" />
        )}
      </ToggleButton>
    </StyledDrawerHeader>
  );
};

export { DrawerHead };
