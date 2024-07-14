import { styled } from "@mui/system";
import { IconButton } from "@mui/material";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,

  color: "whitesmoke",
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

export { StyledIconButton };
