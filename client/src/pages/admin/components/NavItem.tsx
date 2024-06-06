import React, { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  title: string;
  name: string;
  link: string;
  Icon: React.ElementType;
  activeNavItem: string;
  setActiveNavItem: Dispatch<SetStateAction<string>>;
}

const NavItem = ({
  title,
  name,
  link,
  Icon,
  activeNavItem,
  setActiveNavItem,
}: NavItemProps) => {
  return (
    <NavLink
      to={link}
      className={`${
        name === activeNavItem
          ? "font-bold text-primary"
          : "font-semibold text-muted-foreground hover:text-foreground"
      } flex items-center gap-4 p-3 text-lg`}
      onClick={() => setActiveNavItem(name)}
    >
      {<Icon className="w-5 h-5" />}
      {title}
    </NavLink>
  );
};

export default NavItem;
