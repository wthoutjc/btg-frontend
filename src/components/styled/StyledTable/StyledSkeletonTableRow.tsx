import { styled } from "@mui/system";
import { TableRow } from "@mui/material";

const StyledSkeletonTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

export { StyledSkeletonTableRow };
