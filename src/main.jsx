import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SiteContextProvider } from "./context/SiteContext.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <SiteContextProvider>
        <App />
      </SiteContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
