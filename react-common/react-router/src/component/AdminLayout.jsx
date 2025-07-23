import { NavLink, Outlet } from "react-router";
import Logout from "./Logout";

function AdminLayout() {
  return (
    <div className="flex gap-10">
      <aside className="bg-blue-200">
        <ul>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-amber-700 text-amber-600"
                : ""
            }
            to={"/admin"}
          >
            <li>Dashboard</li>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-amber-700 text-amber-600"
                : ""
            }
            to={"about"}
          >
            <li>About</li>
          </NavLink>
          <Logout />
        </ul>
      </aside>{" "}
      <Outlet />
    </div>
  );
}

export default AdminLayout;
