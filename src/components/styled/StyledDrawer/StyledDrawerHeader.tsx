import { styled } from "@mui/material";

const StyledDrawerHeader = styled("div")(({ theme }) => ({
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export { StyledDrawerHeader };
