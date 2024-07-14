import { TableActions } from "..";
type TableActionType = keyof typeof TableActions;

export interface TableAction {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<Record<string, never>, "svg">> & {
    muiName: string;
  };
  action: TableActionType;
  multiple: boolean;
  children: ReactNode | null;
}
