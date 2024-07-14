import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import "animate.css";
import { ThemeRegistry } from "./themes";

// UI Components
import { Alerts, Dialog, Drawer, Layout } from "./components/index.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeRegistry>
      <BrowserRouter>
        <Alerts />
        <Dialog />
        <Drawer />
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </ThemeRegistry>
  </React.StrictMode>
);
