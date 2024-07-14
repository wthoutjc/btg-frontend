import { styled } from "@mui/system";
import { Toolbar } from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
}));

export { StyledToolbar };
