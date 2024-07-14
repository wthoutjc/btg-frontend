import { RouterProvider } from "react-router-dom";
import { ThemeRegistry } from "./themes";
import router from "./Routes";

function App() {
  return (
    <ThemeRegistry>
      <RouterProvider router={router} />
    </ThemeRegistry>
  );
}

export default App;
