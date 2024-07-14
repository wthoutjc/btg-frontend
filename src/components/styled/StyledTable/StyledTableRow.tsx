import { styled } from "@mui/system";
import { TableRow } from "@mui/material";

const StyledTableRow = styled(TableRow)(({ theme }) => {
  return {
    "&.Mui-selected": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? theme.palette.secondary.dark
          : theme.palette.secondary.light,
    },
    // "&.Mui-selected:hover": {
    //   backgroundColor: theme.palette.secondary.main,
    // },
  };
});

export { StyledTableRow };
