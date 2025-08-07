import { useContext } from "react";
import { Link, NavLink, useSearchParams } from "react-router";
import { UserContext } from "../context/UserContext";

function Header() {
  const { cart } = useContext(UserContext);
  const [searchParams] = useSearchParams();

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
      {cart}
      selected category= {searchParams.get("category")}
    </div>
  );
}

export default Header;
