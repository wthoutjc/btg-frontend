import { useState } from "react";
import MUIDialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

// Zustand
import { useUIStore } from "../../../zustand/store";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

// Initial state
import { INIT_DIALOG } from "../../../libs/constants/init-dialog";
import { Stack } from "@mui/material";

const Dialog = () => {
  const { dialog, setDialog } = useUIStore();
  const { open, title, message, children } = dialog;

  const [fullScreen, setFullScreen] = useState(false);

  const onClose = () => setDialog(INIT_DIALOG);

  const handleFullScreen = () => setFullScreen(!fullScreen);

  return (
    <MUIDialog
      onClose={onClose}
      open={open}
      fullWidth
      fullScreen={fullScreen}
      maxWidth={"md"}
    >
      <DialogTitle
        sx={{
          backgroundColor: "primary.dark",
          color: "primary.contrastText",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              onClick={handleFullScreen}
              color="inherit"
              sx={{ ml: 3 }}
            >
              {fullScreen ? (
                <CloseFullscreenIcon fontSize="small" />
              ) : (
                <OpenInFullIcon fontSize="small" />
              )}
            </IconButton>

            <IconButton onClick={onClose} color="inherit" sx={{ ml: 3 }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </DialogTitle>
      <DialogContent>
        {message && (
          <Box
            sx={{
              p: 2,
              pl: 0,
            }}
          >
            <Typography variant="body2">{message}</Typography>
          </Box>
        )}
        {children}
      </DialogContent>
    </MUIDialog>
  );
};

export { Dialog };
