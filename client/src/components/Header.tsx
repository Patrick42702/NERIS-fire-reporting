import {
  Activity,
  ClipboardPlus,
  FireExtinguisher,
  LayoutDashboardIcon,
  Menu,
  Siren,
  Trophy,
  Wrench,
  X,
} from "lucide-react";

import { ADMIN_NAV_LINKS } from "@/utils";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "../pages/admin/components/NavItem";

interface HeaderProps {
  page: "admin" | "company";
  id?: String | undefined;
}

const Header = ({ page, id }: HeaderProps) => {
  const [activeNavItem, setActiveNavItem] = useState("dashboard");
  const [isMenuActive, setIsMenuActive] = useState(false);
  const windowSize = useWindowSize();

  const COMPANY_NAV_LINKS = [
    {
      name: "dashboard",
      title: "Dashboard",
      icon: LayoutDashboardIcon,
      link: `/company/${id}`,
    },
    {
      name: "activity",
      title: "Activity",
      icon: Activity,
      link: `/company/${id}/activity`
    },
    {
      name: "incidents",
      title: "Incidents",
      icon: Siren,
      link: `/company/${id}/incidents`,
    },
    {
      name: "leaderboard",
      title: "Leaderboard",
      icon: Trophy,
      link: `/company/${id}/leaderboard`,
    },
  ];

  const toggleMenuHandler = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  useEffect(() => {
    if (windowSize.width && windowSize.width < 1024) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  }, [windowSize.width]);

  return (
    <header className="flex static lg:fixed z-50 w-full items-center justify-between p-4 h-full lg:h-screen lg:max-w-[300px] lg:flex-col lg:items-start lg:justify-start lg:p-0">
      {/* logo */}
      <Link to="/" className="flex items-center gap-2 font-semibold lg:hidden">
        <FireExtinguisher className="h-9 w-9" />
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-transparent bg-clip-text">
            neris
          </h1>
          <h2 className="text-muted-foreground tracking-widest text-xs lg:text-sm font-semibold">
            FIRE REPORTING
          </h2>
        </div>
      </Link>
      {/* menu burger icon */}
      <div className="cursor-pointer lg:hidden">
        {!isMenuActive && (
          <Menu className="w-6 h-6" onClick={toggleMenuHandler} />
        )}
      </div>
      {/* sidebar container */}
      <div
        className={`fixed inset-0 transform lg:static lg:h-full lg:w-full ${
          isMenuActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* underlay */}
        {isMenuActive && (
          <div
            className="fixed inset-0 bg-black/80 lg:hidden"
            onClick={toggleMenuHandler}
          />
        )}
        {/* sidebar */}
        <div
          className={`fixed top-0 bottom-0 left-0 z-50 w-3/4 transform transition-transform duration-500 ease-in-out bg-white p-4 lg:h-screen lg:w-full lg:p-6 ${
            isMenuActive ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <FireExtinguisher className="h-9 w-9" />
              <div className="flex flex-col">
                <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-transparent bg-clip-text">
                  neris
                </h1>
                <h2 className="text-muted-foreground tracking-widest text-xs lg:text-sm font-semibold">
                  FIRE REPORTING
                </h2>
              </div>
            </Link>

            <X
              className="w-6 h-6 lg:hidden cursor-pointer"
              onClick={toggleMenuHandler}
            />
          </div>

          <div className="mt-6 h-0.5 w-full bg-primary" />
          {/* menu items */}
          <div className="mt-6 flex flex-col gap-y-[0.563rem]">
            {page === "admin"
              ? ADMIN_NAV_LINKS.map((item) => (
                  <NavItem
                    key={item.name}
                    title={item.title}
                    name={item.name}
                    link={item.link}
                    Icon={item.icon}
                    activeNavItem={activeNavItem}
                    setActiveNavItem={setActiveNavItem}
                  />
                ))
              : COMPANY_NAV_LINKS.map((item) => (
                  <NavItem
                    key={item.name}
                    title={item.title}
                    name={item.name}
                    link={item.link}
                    Icon={item.icon}
                    activeNavItem={activeNavItem}
                    setActiveNavItem={setActiveNavItem}
                  />
                ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
