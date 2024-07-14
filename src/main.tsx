import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import "animate.css";

// UI Components
import { Alerts, Dialog, Drawer } from "./components/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Alerts />
    <Dialog />
    <Drawer />
    <App />
  </React.StrictMode>
);
