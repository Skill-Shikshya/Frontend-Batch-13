import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./component/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminLayout from "./component/AdminLayout";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            index: true,
            element: <h1>About all of us</h1>,
          },
          {
            path: "me",
            element: <>I am me</>,
          },
          {
            path: "skillshikshya",
            element: <>I am skillshikshya</>,
          },
          {
            path: "students",
            element: <>I am student</>,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Contact />,
      },
      {
        path: "*",
        element: <>404 not found</>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, element: <>Admin main</> },
      { path: "about", element: <>Admin about</> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
