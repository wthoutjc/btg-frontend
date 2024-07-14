import { useEffect } from "react";
import { Alert as MUIAlert } from "@mui/material";

// Interfaces
import { Alert as IAlert } from "../../../libs/interfaces";

// Zustand
import { useUIStore } from "../../../zustand/store";

const TIME_OUT = 3500;

const Alert = ({ id, message, severity }: IAlert) => {
  const { removeAlert } = useUIStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeAlert(id);
    }, TIME_OUT);
    return () => clearTimeout(timer);
  }, [id, removeAlert]);

  return (
    <MUIAlert
      className="animate__animated animate__bounceIn"
      severity={severity}
      onClose={() => removeAlert(id)}
      sx={{
        width: "100%",
        border: "1px solid #2f3640",
      }}
    >
      {message}
    </MUIAlert>
  );
};

export { Alert };
