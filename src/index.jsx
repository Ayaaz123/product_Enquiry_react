import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import ProductInquiry from "./ProductInquiry";
import './index.css';


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/inquiry", element: <ProductInquiry /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


