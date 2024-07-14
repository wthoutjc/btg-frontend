// Icons
import AssessmentIcon from "@mui/icons-material/Assessment";
import ArticleIcon from "@mui/icons-material/Article";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

interface DrawerData {
  title: string;
  path: string;
  icon: JSX.Element;
  nested?: DrawerData[];
}

const drawerData: DrawerData[] = [
  {
    title: "Transacciones",
    path: "/",
    icon: <AssessmentIcon fontSize="small" />,
  },
  {
    title: "Fondos",
    path: "/funds",
    icon: <ArticleIcon fontSize="small" />,
  },
  {
    title: "Suscribirse",
    path: "/subscribe",
    icon: <SubscriptionsIcon fontSize="small" />,
  },
  {
    title: "Cancelar suscripción",
    path: "/unsubscribe",
    icon: <UnsubscribeIcon fontSize="small" />,
  },
  {
    title: "Cuenta",
    path: "/me",
    icon: <PersonPinIcon fontSize="small" />,
  },
];

export { drawerData };
