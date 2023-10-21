import { NavItem } from "../NavItem";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(1);

  const firstMenu = [
    { to: "/", link: "Shopi" },
    { to: "/", link: "All" },
    { to: "/clothes", link: "Clothes" },
    { to: "/electronics", link: "Electronics" },
    { to: "/furnitures", link: "Furnitures" },
    { to: "/toys", link: "Toys" },
    { to: "/others", link: "Others" },
  ];

  const secondMenu = [
    { to: "/my-orders", link: "My orders" },
    { to: "/my-account", link: "My Account" },
    { to: "/sign-in", link: "Sign In" },
  ];

  const handleLinkClick = index => {
    setActiveLink(index);
  }

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        {firstMenu.map((menuItem, index) => (
          <NavItem
            key={index}
            to={menuItem.to}
            link={menuItem.link}
            index={index}
            isActive={activeLink === index}
            onSelection={() => handleLinkClick(index)}
          />
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">batres@email.com</li>
        {secondMenu.map((menuItem, index) => {
          let newIndex = index + firstMenu.length;

          return (
            <NavItem 
              key={newIndex}
              to={menuItem.to}
              link={menuItem.link}
              index={newIndex}
              isActive={activeLink === (newIndex)}
              onSelection={() => handleLinkClick(newIndex)}
            />
          )
        })}
      </ul>
    </nav>
  );
}

export { Navbar }