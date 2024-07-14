import { useTheme } from "@mui/material";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Typography,
  capitalize,
} from "@mui/material";

// Icons
import HomeIcon from "@mui/icons-material/Home";

// Location
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const theme = useTheme();
  const { pathname } = useLocation();

  return (
    <MUIBreadcrumbs separator="›" sx={{ mb: 2 }}>
      {pathname === "/" && (
        <Typography
          variant="caption"
          sx={{
            color: theme.palette.secondary.main,
          }}
        >
          <HomeIcon
            fontSize="small"
            sx={{
              display: "flex",
              width: "1rem",
              height: "24px",
            }}
          />
        </Typography>
      )}
      {pathname !== "/" &&
        pathname.split("/").map((path, index) =>
          index + 1 === pathname.split("/").length ? (
            <Typography
              key={path + index}
              variant="caption"
              sx={{
                color: theme.palette.secondary.main,
              }}
            >
              {capitalize(path)}
            </Typography>
          ) : (
            <Link key={path + index} to={`/${path}`}>
              <Typography variant="caption">
                {path.length === 0 ? (
                  <HomeIcon
                    fontSize="small"
                    sx={{
                      display: "flex",
                      width: "1rem",
                    }}
                  />
                ) : (
                  capitalize(path)
                )}
              </Typography>
            </Link>
          )
        )}
    </MUIBreadcrumbs>
  );
};

export { Breadcrumbs };
