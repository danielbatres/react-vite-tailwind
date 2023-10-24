import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context";

const NavItem = (props) => {
  const { 
    to, 
    link, 
    index, 
    isActive, 
    onSelection 
  } = props;

  const {
    isSignIn
  } = useContext(ShoppingCartContext);

  return (
    <li
      className={index === 0 ? "font-semibold text-lg" : ""}
      onClick={() => onSelection()}
    >
      <NavLink
        to={isSignIn ? to : "/sign-in"}
        className={
          isActive && index !== 0 ? "underline underline-offset" : undefined
        }
      >
        {link}
      </NavLink>
    </li>
  );
}

export { NavItem }
