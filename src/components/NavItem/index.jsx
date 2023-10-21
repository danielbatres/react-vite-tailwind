import { NavLink } from "react-router-dom"

const NavItem = (props) => {
  const { 
    to, 
    link, 
    index, 
    isActive, 
    onSelection 
  } = props;

  return (
    <li 
      className={index === 0 ? "font-semibold text-lg" : ""} onClick={() => onSelection()}
    >
      <NavLink
        to={to}
        className={isActive ? "underline underline-offset" : undefined}
      >
        {link}
      </NavLink>
    </li>
  );
}

export { NavItem }
