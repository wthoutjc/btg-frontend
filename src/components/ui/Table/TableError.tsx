import { StyledTableRow } from "../../../components/styled/StyledTable/StyledTableRow";
import { TableBody, TableCell, Typography } from "@mui/material";

const TableError = () => {
  return (
    <TableBody>
      <StyledTableRow>
        <TableCell align="left">
          <Typography variant="body2">No se encontraron resultados</Typography>
        </TableCell>
      </StyledTableRow>
    </TableBody>
  );
};

export default TableError;
