import { TableActions, TableAction } from "../libs/interfaces";

// Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";

const parseTableActions = (actions: TableActions[]): TableAction[] => {
  const newActions: TableAction[] = [];
  actions.forEach((action) => {
    switch (action) {
      case TableActions.read:
        newActions.push({
          title: "Leer",
          icon: VisibilityIcon,
          action: TableActions.read,
          multiple: false,
          children: null,
        });
        break;
      case TableActions.create:
        newActions.push({
          title: "Crear",
          icon: AddCircleIcon,
          action: TableActions.create,
          multiple: false,
          children: null,
        });
        break;
      case TableActions.update:
        newActions.push({
          title: "Editar",
          icon: EditIcon,
          action: TableActions.update,
          multiple: false,
          children: null,
        });
        break;
      default:
        throw new Error(`Acción desconocida: ${action}`);
    }
  });
  return newActions;
};

export { parseTableActions };
