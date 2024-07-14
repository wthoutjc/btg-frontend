"use client";
import {
  Typography,
  // Tooltip,
  // IconButton,
  capitalize,
  Box,
} from "@mui/material";

// Components
import { StyledToolbar } from "../../../components/styled/StyledTable/StyledToolbar";
import { TableAction } from "../../../libs/interfaces/ui/table/table-action";

// Icons
// import AddBoxIcon from "@mui/icons-material/AddBox";

// Zustand
// import { useUIStore } from "../../../zustand/store";

interface Props {
  selected: readonly string[];
  numSelected: number;
  pathname: string;
  tableActions: TableAction[];
  readonly?: boolean;
}

const EnhancedTableToolbar = ({
  // selected,
  numSelected,
  pathname,
  // tableActions,
  readonly,
}: Props) => {
  // const { setDialog } = useUIStore();

  // const handleMultiple = (
  //   { title, ...params }: TableAction,
  //   selected: readonly string[]
  // ) => {
  //   setDialog({
  //     open: true,
  //     title,
  //     message: "",
  //     children: <params.children selected={selected} />,
  //   });
  // };

  return (
    <StyledToolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
        left: 0,
      }}
    >
      {numSelected > 0 ? (
        <Typography color="inherit" variant="body1">
          {numSelected > 1 ? `${numSelected} seleccionados` : "1 seleccionado"}
        </Typography>
      ) : (
        <Typography variant="h6" fontWeight={400}>
          {pathname === "/" ? "Inicio" : capitalize(pathname.slice(1))}
        </Typography>
      )}
      {!readonly && (
        <Box>
          {/* {numSelected === 1 &&
            tableActions
              .filter((action) => !action.multiple)
              .map(({ action, title, multiple, ...params }, i) => (
                <Link
                  key={i}
                  href={`${pathname}/${selected[0]}?${action}=true`}
                >
                  <Tooltip title={title} color="inherit">
                    <IconButton size="small">
                      {<params.icon fontSize="small" />}
                    </IconButton>
                  </Tooltip>
                </Link>
              ))} */}

          {/* {numSelected === 1 &&
            tableActions
              .filter((action) => action.multiple)
              .map((tableAction, i) => {
                const { action, title, multiple, ...params } = tableAction;
                return (
                  <Tooltip key={i} title={title} color="inherit">
                    <IconButton
                      size="small"
                      onClick={() => handleMultiple(tableAction, selected)}
                    >
                      {<params.icon fontSize="small" />}
                    </IconButton>
                  </Tooltip>
                );
              })} */}

          {/* {numSelected > 1 &&
            tableActions
              .filter((action) => action.multiple)
              .map((tableAction, i) => {
                const { action, title, multiple, ...params } = tableAction;
                return (
                  <Tooltip key={i} title={title} color="inherit">
                    <IconButton
                      size="small"
                      onClick={() => handleMultiple(tableAction, selected)}
                    >
                      {<params.icon fontSize="small" />}
                    </IconButton>
                  </Tooltip>
                );
              })} */}

          {/* {numSelected === 0 && (
            <Link href={`${pathname}/registrar`}>
              <Tooltip title={"Crear"} color="inherit">
                <IconButton size="small">
                  {<AddBoxIcon fontSize="small" />}
                </IconButton>
              </Tooltip>
            </Link>
          )} */}
        </Box>
      )}
    </StyledToolbar>
  );
};

export { EnhancedTableToolbar };
