import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";

// Components
import { drawerData } from "./DrawerData";

// Utils
import { isActive } from "../../../utils";

// Location
import { useLocation } from "react-router-dom";

const DrawerList = () => {
  const theme = useTheme();
  const { pathname } = useLocation();

  return (
    <List
      sx={{
        p: 2,
        backgroundColor: theme.palette.background.default,
        height: "100%",
      }}
    >
      {drawerData.map(({ path, title, icon }, index) => (
        <Box key={index}>
          <Link to={path}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  mb: 1,
                  backgroundColor: isActive(path, pathname)
                    ? theme.palette.mode === "dark"
                      ? theme.palette.primary.main
                      : theme.palette.primary.dark
                    : "transparent",
                  color: isActive(path, pathname)
                    ? theme.palette.primary.contrastText
                    : theme.palette.text.primary,
                  ":hover": {
                    backgroundColor: isActive(path, pathname)
                      ? theme.palette.primary.light
                      : "none",
                    color: isActive(path, pathname)
                      ? theme.palette.primary.contrastText
                      : "inherit",
                  },
                  borderRadius: 1.5,
                }}
              >
                {icon}
                <Typography variant="body2" sx={{ ml: 2 }}>
                  {title}
                </Typography>
              </ListItemButton>
            </ListItem>
          </Link>
        </Box>
      ))}
    </List>
  );
};

export default DrawerList;
