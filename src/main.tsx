import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '@babel/polyfill';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import "./index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
