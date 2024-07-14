// import { useTheme } from "@mui/material";
import {
  Breadcrumbs as MUIBreadcrumbs,
  // Typography,
  // capitalize,
} from "@mui/material";

// Icons
// import HomeIcon from "@mui/icons-material/Home";

const Breadcrumbs = () => {
  // const theme = useTheme();

  return (
    <MUIBreadcrumbs separator="›">
      {/* {pathname === "/" && (
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
      )} */}
      {/* {pathname !== "/" &&
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
            // <Link key={path + index} href={`/${path}`}>
            // </Link>
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
          )
        )} */}
    </MUIBreadcrumbs>
  );
};

export { Breadcrumbs };
