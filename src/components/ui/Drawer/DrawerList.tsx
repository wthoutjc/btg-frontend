import { useTheme } from "@mui/material";
import { useState } from "react";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";

// Icons
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// Components
import { drawerData } from "./DrawerData";

// Utils
// import { isActive } from "../../../utils";
// import { CircularProgressWithLabel } from "../CircularProgress/CircularProgress";

const DrawerList = () => {
  const theme = useTheme();

  const [openNested, setOpenNested] = useState(false);

  const handleClick = () => {
    setOpenNested(!openNested);
  };

  return (
    <List
      sx={{
        p: 2,
        backgroundColor: theme.palette.background.default,
        height: "100%",
      }}
    >
      {drawerData.map(({ icon, title, nested }, index) =>
        nested && nested.length > 0 ? (
          <Box key={index}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick();
                }}
                // sx={{
                //   mb: 1,
                //   backgroundColor: isActive(path, pathname)
                //     ? theme.palette.mode === "dark"
                //       ? theme.palette.primary.main
                //       : theme.palette.primary.dark
                //     : "transparent",
                //   color: isActive(path, pathname)
                //     ? theme.palette.primary.contrastText
                //     : theme.palette.text.primary,
                //   ":hover": {
                //     backgroundColor: isActive(path, pathname)
                //       ? theme.palette.primary.light
                //       : "none",
                //     color: isActive(path, pathname)
                //       ? theme.palette.primary.contrastText
                //       : "inherit",
                //   },
                //   borderRadius: 1.5,
                // }}
              >
                {icon}
                <Typography variant="body2" sx={{ ml: 2 }}>
                  {title}
                </Typography>
                {openNested ? (
                  <ExpandLess fontSize="small" sx={{ ml: 1 }} />
                ) : (
                  <ExpandMore fontSize="small" sx={{ ml: 1 }} />
                )}
              </ListItemButton>
            </ListItem>
            <Collapse in={openNested} timeout="auto" unmountOnExit>
              a
              {/* {nested.map(({ icon, path, title }, i) => (
                <Link key={`nested-${index}-${i}`} href={path} passHref>
                  <ListItem sx={{ pt: 0 }}>
                    <ListItemButton
                      sx={{
                        mt: 0,
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
              ))} */}
            </Collapse>
          </Box>
        ) : (
          <Box key={index}>
            b
            {/* <Link href={path} passHref>
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
                  {activeStep === 1 && title === "Inicio" && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        position: "absolute",
                        right: 10,
                      }}
                    >
                      <CircularProgressWithLabel
                        color="secondary"
                        size={21}
                        value={progress}
                        fontSize={7}
                      />
                    </Box>
                  )}
                </ListItemButton>
              </ListItem>
            </Link> */}
          </Box>
        )
      )}
    </List>
  );
};

export default DrawerList;
