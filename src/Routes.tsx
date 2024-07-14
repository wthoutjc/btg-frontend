import { createBrowserRouter } from "react-router-dom";
import { Funds, Transactions, User } from "./components";
import { HandleTransaction } from "./components/transactions/HandleTransaction";
import { ModeTransaction } from "./libs/enums";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Transactions />,
  },
  {
    path: "/me",
    element: <User />,
  },
  {
    path: "funds",
    element: <Funds />,
  },
  {
    path: "/subscribe",
    element: <HandleTransaction mode={ModeTransaction.SUBSCRIBE} />,
  },
  {
    path: "/unsubscribe",
    element: <HandleTransaction mode={ModeTransaction.UNSUBSCRIBE} />,
  },
]);

export default router;
