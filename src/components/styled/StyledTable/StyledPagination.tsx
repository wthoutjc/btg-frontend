import { styled } from "@mui/system";
import { Pagination } from "@mui/material";

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    color: theme.palette.primary.contrastText,
  },
  "& .MuiPaginationItem-root.Mui-selected": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.primary.light,
  },
}));

export { StyledPagination };
