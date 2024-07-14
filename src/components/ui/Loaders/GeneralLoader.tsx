import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const GeneralLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export { GeneralLoader };
