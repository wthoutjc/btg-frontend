import { Route, Routes } from "react-router-dom";

// Components
import { Funds, HandleTransaction, Transactions, User } from "./components";
import { ModeTransaction } from "./libs/enums";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Transactions />} />
      <Route path="/me" element={<User />} />
      <Route path="/funds" element={<Funds />} />
      <Route
        path="/subscribe"
        element={<HandleTransaction mode={ModeTransaction.SUBSCRIBE} />}
      />
      <Route
        path="/unsubscribe"
        element={<HandleTransaction mode={ModeTransaction.UNSUBSCRIBE} />}
      />
    </Routes>
  );
}

export default App;
