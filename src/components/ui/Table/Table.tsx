import { isValidElement, useState } from "react";
import { Table, TableBody, TableCell, Paper, Checkbox } from "@mui/material";

// Components
import { EnhancedTableHead } from "./TableHead";
import { StyledTableRow } from "../../../components/styled/StyledTable/StyledTableRow";
import { EnhancedTableToolbar } from "./TableToolbar";
import { EnhancedTablePagination } from "./TablePagination";

// Head Cells Dictionary
import { transformKeys, parseTableActions } from "../../../utils";

// Interfaces
import { TableActions } from "../../../libs/interfaces";
import TableError from "./TableError";

// Navigation
import { useNavigate, useLocation } from "react-router-dom";

interface Props<T> {
  rows: readonly T[];
  dict: { [key: string]: string };
  total: number;
  actions: TableActions[];
  readonly?: boolean;
}

const EnhancedTable = ({
  rows,
  dict,
  actions,
  total,
  readonly = false,
}: Props<unknown>) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [selected, setSelected] = useState<readonly string[]>([]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = (rows as object[]).map(
        (n) => (n as unknown as { [key: string]: never })[Object.keys(n)[0]]
      );
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  return (
    <Paper
      sx={{
        overflow: "auto",
      }}
    >
      <EnhancedTableToolbar
        selected={selected}
        numSelected={selected.length}
        pathname={"/"}
        tableActions={parseTableActions(actions)}
        readonly={readonly}
      />
      <Table aria-labelledby="ocr-table">
        {rows.length > 0 ? (
          <>
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              columns={transformKeys(rows as object[], dict)}
              rowCount={rows.length}
              readonly={readonly}
            />
            <TableBody sx={{ overflow: "hidden" }}>
              {rows.map((row, i) => {
                const rowEntries = Object.entries(row as never);
                const firstKey = rowEntries[0][0];
                const isItemSelected = isSelected((row as never)[firstKey]);
                const labelId = `enhanced-table-checkbox-${i}`;

                return (
                  <StyledTableRow
                    hover={!readonly}
                    onDoubleClick={() =>
                      !readonly &&
                      navigate(`${pathname}/${(row as never)[firstKey]}`)
                    }
                    onClick={(event) =>
                      !readonly && handleClick(event, (row as never)[firstKey])
                    }
                    role="checkbox"
                    tabIndex={-1}
                    key={(row as never)[firstKey] || i}
                    selected={isItemSelected}
                    sx={{ cursor: readonly ? "default" : "pointer" }}
                  >
                    {!readonly && (
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                    )}
                    {rowEntries.slice(1).map(
                      (
                        [key, value] // Ignora la primera columna (UUID)
                      ) => (
                        <TableCell align="left" key={key}>
                          {isValidElement(value)
                            ? (value as React.ReactNode)
                            : (value as string) || "-"}
                        </TableCell>
                      )
                    )}
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </>
        ) : (
          <TableError />
        )}
      </Table>
      <EnhancedTablePagination total={total} />
    </Paper>
  );
};

export default EnhancedTable;
