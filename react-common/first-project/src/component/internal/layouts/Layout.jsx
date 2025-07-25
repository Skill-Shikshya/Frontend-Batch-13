import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <main className="p-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
