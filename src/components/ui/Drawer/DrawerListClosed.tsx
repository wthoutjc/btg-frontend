import {
  IconButton,
  Tooltip,
  useTheme,
  Box,
  List,
  ListItem,
} from "@mui/material";

// Components
import { drawerData } from "./DrawerData";

// Utils
import { isActive } from "../../../utils";

// Location
import { Link, useLocation } from "react-router-dom";

const DrawerListClosed = () => {
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
              <Tooltip title={title}>
                <IconButton
                  sx={{
                    mb: 1,
                    backgroundColor: isActive(path, pathname)
                      ? theme.palette.secondary.light
                      : "transparent",
                    borderRadius: 1.5,
                  }}
                >
                  {icon}
                </IconButton>
              </Tooltip>
            </ListItem>
          </Link>
        </Box>
      ))}
    </List>
  );
};

export { DrawerListClosed };
