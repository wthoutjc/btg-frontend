import { Box } from "@mui/material";

// Zustand
import { useUIStore } from "../../../zustand/store";

// Components
import { Alert } from "./Alert";

const Alerts = () => {
  const { alerts } = useUIStore();

  return (
    <Box
      sx={{
        position: "absolute",
        width: "40vw",
        minWidth: 300,
        maxHeight: "50vh",
        overflowY: "auto",
        bottom: 0,
        right: 0,
        margin: "auto",
        zIndex: 9999,
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 1,
      }}
    >
      {alerts.map((alert, i) => (
        <Alert key={i} {...alert} />
      ))}
    </Box>
  );
};

export { Alerts };
