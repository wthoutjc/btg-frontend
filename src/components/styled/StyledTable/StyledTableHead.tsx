import { styled } from "@mui/system";
import { TableHead } from "@mui/material";

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.primary.main
      : theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
}));

export { StyledTableHead };
