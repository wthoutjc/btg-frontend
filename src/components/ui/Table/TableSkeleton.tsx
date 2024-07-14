import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableBody,
  Skeleton,
  CircularProgress,
} from "@mui/material";
import { StyledSkeletonTableRow } from "../../../components/styled/StyledTable/StyledSkeletonTableRow";

const TableSkeleton = () => {
  return (
    <Paper elevation={2}>
      <TableContainer>
        <Table aria-labelledby="orders-juanashop[loading]">
          <TableHead>
            <StyledSkeletonTableRow>
              <TableCell
                align="left"
                padding="normal"
                sx={{
                  display: "flex",
                }}
              >
                <CircularProgress color="info" size={24} />
                <Typography
                  variant="body1"
                  fontWeight={600}
                  sx={{ ml: 2, color: "inherit" }}
                >
                  Cargando datos...
                </Typography>
              </TableCell>
              <TableCell align="left" padding="normal" />
              <TableCell align="left" padding="normal" />
            </StyledSkeletonTableRow>
          </TableHead>
          <TableBody>
            {Array.from(new Array(3)).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton variant="rounded" width={"100%"} height={40} />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rounded" width={"100%"} height={40} />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rounded" width={"100%"} height={40} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableSkeleton;
