import { Box, FormControl, MenuItem, Typography } from "@mui/material";

// Components
import { StyledBox, StyledSelect, StyledPagination } from "../../../components";

interface Props {
  total: number;
}

const EnhancedTablePagination = ({ total }: Props) => {
  return (
    <StyledBox
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 1,
        position: "sticky",
        left: 0,
        bottom: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="caption">
          {/* Página {searchParams.get("page") || 1} */}
        </Typography>
        <Typography variant="caption" sx={{ ml: 0.5 }}>
          - {/* {Number(searchParams.get("rowsPerPage") || 20) * */}
          {/* Number(searchParams.get("page") || 1)}{" "} */}
          de {total}
        </Typography>
        <FormControl
          variant="standard"
          size="small"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            ml: 3,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              mr: 1,
            }}
          >
            Filas
          </Typography>
          <StyledSelect
            size="small"
            value={20}
            variant="standard"
            sx={{
              color: "inherit",
            }}
          >
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </StyledSelect>
        </FormControl>
      </Box>
      <Box
        sx={{
          ml: 3,
        }}
      >
        <StyledPagination
          size="small"
          count={Math.ceil(total / 20)}
          showFirstButton
          showLastButton
          page={1}
          siblingCount={1}
          boundaryCount={2}
        />
      </Box>
    </StyledBox>
  );
};

export { EnhancedTablePagination };
