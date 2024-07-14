export type TableFilterType =
  | "text"
  | "number"
  | "date"
  | "select"
  | "checkbox"
  | "radio"
  | "custom";

interface TableFilterItem {
  value: string;
  label: string;
}

export interface TableFilter {
  width: number;
  title: string;
  placeholder: string;
  type: TableFilterType;
  autoComplete: string;
  icon: OverridableComponent<SvgIconTypeMap<Record<string, never>, "svg">> & {
    muiName: string;
  };
  select: boolean;
  label: string;
  defaultValue: string;
  items?: TableFilterItem[];
}
