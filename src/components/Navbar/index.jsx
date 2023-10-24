import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import { NavItem } from "../NavItem";
import { useContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(1);
  const {
    counter,
    updateCategoryPath,
    setSearchValue,
    account,
    signOut,
    isSignIn,
  } = useContext(ShoppingCartContext);

  const firstMenu = [
    { to: "/", link: "Shopi" },
    { to: "/", link: "All" },
    { to: "/electronics", link: "Electronics" },
    { to: "/jewelery", link: "Jewelery" },
    { to: "/men", link: "Men's clothings" },
    { to: "/women", link: "Women's Clothing" },
  ];

  const secondMenu = [
    { to: "/my-orders", link: "My orders" },
    { to: "/my-account", link: "My Account" }
  ];

  const handleLinkClick = index => {
    setActiveLink(index);
  }

  const handleLinkCategory = index => {
    handleLinkClick(index);
    updateCategoryPath(firstMenu[index].to);
    setSearchValue("");
  }

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        {firstMenu.map((menuItem, index) => (
          <NavItem
            key={index}
            to={menuItem.to}
            link={menuItem.link}
            index={index}
            isActive={activeLink === index}
            onSelection={() => handleLinkCategory(index)}
          />
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">{account?.email}</li>
        {isSignIn && secondMenu.map((menuItem, index) => {
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
        <li className="cursor-pointer">
          {!isSignIn 
            ? <Link 
                to="/sign-in"
              >
                Sign in
              </Link> 
            : <Link 
                to="/sign-in" 
                onClick={() => signOut()}
              >
                Sign out
              </Link>
          }
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon className="w-6 h-6"/>
          {counter}
        </li>
      </ul>
    </nav>
  );
}

export { Navbar }