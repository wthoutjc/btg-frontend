// Icons
import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import BorderColorIcon from "@mui/icons-material/BorderColor";

interface DrawerData {
  title: string;
  path: string;
  icon: JSX.Element;
  nested?: DrawerData[];
}

const drawerData: DrawerData[] = [
  {
    title: "Inicio",
    path: "/",
    icon: <HomeIcon fontSize="small" />,
  },
  {
    title: "Clientes",
    path: "/clientes",
    icon: <GroupIcon fontSize="small" />,
  },
  {
    title: "Empresas",
    path: "/empresas",
    icon: <StoreIcon fontSize="small" />,
  },
  {
    title: "Semiautomático",
    path: "/semi-automatico",
    icon: <PrecisionManufacturingIcon fontSize="small" />,
    nested: [
      {
        title: "Clientes",
        path: "/semi-automatico/clientes",
        icon: <ContactEmergencyIcon fontSize="small" />,
      },
      {
        title: "Items",
        path: "/semi-automatico/items",
        icon: <DocumentScannerIcon fontSize="small" />,
      },
    ],
  },
  {
    title: "Manual",
    path: "/manual",
    icon: <BorderColorIcon fontSize="small" />,
  },
];

export { drawerData };
