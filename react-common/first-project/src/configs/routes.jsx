import { createBrowserRouter } from "react-router";
import Home from "../pages/(main-pages)/home";
import Layout from "../component/internal/layouts/Layout";
import AdminLayout from "../component/internal/layouts/AdminLayout";
import Loginpage from "../pages/(auth-pages)/login";

export const router = createBrowserRouter([
  { Component: Layout, children: [{ path: "/", element: <Home /> }] },
  { path: "admin", Component: AdminLayout, children: [{}] },
  { path: "login", element: <Loginpage /> },
]);
