import { NavLink, Outlet } from "react-router";
import Logout from "../component/Logout";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { AboutContext } from "../context/AboutContext";

function About() {
  const { cart, setCart } = useContext(UserContext);
  console.log();
  return (
    <AboutContext.Provider>
      <div className="flex gap-10">
        <button
          onClick={() => {
            setCart((prev) => prev + 1);
          }}
        >
          Add to cart {cart}
        </button>
        <aside>
          <ul>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-amber-700 text-amber-600"
                  : ""
              }
              to={"/about/me"}
            >
              <li>Me</li>
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-amber-700 text-amber-600"
                  : ""
              }
              to={"/about/skillshikshya"}
            >
              <li>skillshikshya</li>
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-amber-700 text-amber-600"
                  : ""
              }
              to={"/about/students"}
            >
              <li>students</li>
            </NavLink>
          </ul>
        </aside>
        <div>
          <Outlet />
        </div>
      </div>
    </AboutContext.Provider>
  );
}

export default About;
