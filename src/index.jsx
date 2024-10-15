// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ProductInquiry from "./ProductInquiry";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/inquiry" element={<ProductInquiry />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);



