import { Link, NavLink } from "react-router";

function Header() {
  return (
    <div className="flex gap-10 justify-center bg-amber-100 p-2">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "bg-amber-700 text-white" : ""
        }
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "bg-amber-700 text-white" : ""
        }
        to="/about"
      >
        About
      </NavLink>

      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "bg-amber-700 text-white" : ""
        }
        to={"/contact"}
      >
        Contact us
      </NavLink>
    </div>
  );
}

export default Header;
