import { styled } from "@mui/system";
import { Select } from "@mui/material";

const StyledSelect = styled(Select)(({ theme }) => ({
  "&:before": {
    borderBottom: "1px solid" + theme.palette.primary.contrastText,
  },

  "& .MuiSelect-icon": {
    color: theme.palette.primary.contrastText,
  },
}));

export { StyledSelect };
