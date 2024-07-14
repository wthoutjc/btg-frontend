// import { useState } from "react";
import {
  // IconButton,
  // Tooltip,
  useTheme,
  Box,
  // Collapse,
  List,
  ListItem,
} from "@mui/material";

// Components
import { drawerData } from "./DrawerData";

// Icons
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";

// Utils
// import { isActive } from "../../../utils";

const DrawerListClosed = () => {
  const theme = useTheme();

  // const [openNested, setOpenNested] = useState(false);

  return (
    <List
      sx={{
        p: 2,
        backgroundColor: theme.palette.background.default,
        height: "100%",
      }}
    >
      {drawerData.map(({ nested }, index) =>
        nested && nested.length > 0 ? (
          <Box key={index}>
            <ListItem disablePadding>
              {/* <Tooltip title={title}>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenNested(!openNested);
                  }}
                  sx={{
                    mb: 0,
                    flexDirection: "column",
                    backgroundColor: isActive(path, pathname)
                      ? theme.palette.secondary.light
                      : "transparent",
                    borderRadius: 1.5,
                  }}
                >
                  {icon}
                  {openNested ? (
                    <ExpandLess fontSize="small" />
                  ) : (
                    <ExpandMore fontSize="small" />
                  )}
                </IconButton>
              </Tooltip> */}
            </ListItem>
            {/* <Collapse in={openNested} timeout="auto" unmountOnExit>
              {nested.map(({ icon, path, title }, i) => (
                <Link key={`nested-${index}-${i}`} href={path} passHref>
                  <ListItem sx={{ pt: 0 }} disablePadding>
                    <Tooltip title={title}>
                      <IconButton
                        sx={{
                          mt: 0,
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
              ))}
            </Collapse> */}
          </Box>
        ) : (
          <Box key={index}>
            {/* <Link href={path} passHref>
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
            </Link> */}
          </Box>
        )
      )}
    </List>
  );
};

export { DrawerListClosed };
