import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import AdminLayout from "./component/AdminLayout";
import Layout from "./component/Layout";
import Protected from "./component/Protected";
import { UserContext } from "./context/UserContext";
import About from "./pages/About";
import AboutAdmin from "./pages/admin/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useCart } from "./hooks/useCart";
import Products from "./pages/Products";
import ProductInnerPage from "./pages/ProductInnerPage";
import Chat from "./pages/Chat";

const localLogin = localStorage.getItem("isLogin");
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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:slug",
        element: <ProductInnerPage />,
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
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/cart",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <Protected>
        <AdminLayout />
      </Protected>
    ),
    children: [
      { index: true, element: <>Admin main</> },
      {
        path: "*",
        element: <>404 not found</>,
      },
      {
        path: "about",
        element: (
          <>
            <AboutAdmin />
          </>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <>404 not found</>,
  },
]);
function App() {
  const [isLogin, setIsLogin] = useState(localLogin === "true");
  const { cart, addToCart, removeFromCart } = useCart();
  async function login(username, password, navigate) {
    try {
      let res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
      });
      if (!res.ok) {
        throw new Error(await res.text());
      }
      const data = await res.json();
      console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("isLogin", "true");
      setIsLogin(true);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <UserContext.Provider
      value={{
        isLogin: isLogin,
        setIsLogin: setIsLogin,
        login: login,
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
