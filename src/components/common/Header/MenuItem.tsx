import { NavLink } from "react-router-dom";
import { propsMenuItem } from "./types";

const MenuItem = ({ link, content }: propsMenuItem) => {
  return (
    <NavLink
      to={link}
      className={({ isActive, isPending }) =>
        `hover:text-primary transition-all duration-200 ease-in-out ${
          isPending ? "pending" : isActive ? "text-primary" : ""
        }`
      }
    >
      {content}
    </NavLink>
  );
};

export default MenuItem;
