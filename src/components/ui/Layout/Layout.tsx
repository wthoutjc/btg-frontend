import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      component={"section"}
      id="btg-app"
      sx={{
        padding: 2,
        width: "100%",
      }}
    >
      <Breadcrumbs />
      {children}
    </Box>
  );
};

export { Layout };
