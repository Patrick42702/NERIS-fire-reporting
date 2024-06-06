import {
    ClipboardPlus,
    FireExtinguisher,
    LayoutDashboardIcon,
    Menu,
    Siren,
    Wrench,
    X,
} from "lucide-react";

import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavItem from "./NavItem";

const NAV_LINKS = [
  {
    name: "dashboard",
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    link: "/admin",
  },
  {
    name: "incidents",
    title: "Incidents",
    icon: Siren,
    link: "/admin/incidents",
  },
  {
    name: "hydrants",
    title: "Hydrants",
    icon: FireExtinguisher,
    link: "/admin/hydrants",
  },
  {
    name: "maintenance",
    title: "Maintenance",
    icon: Wrench,
    link: "/admin/maintenance",
  },
  {
    name: "reports",
    title: "Reports",
    icon: ClipboardPlus,
    link: "/admin/reports",
  },
];

const Header = () => {
  const [activeNavItem, setActiveNavItem] = useState("dashboard");
  const navigate = useNavigate();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const windowSize = useWindowSize();

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
    <header className="flex h-fit w-full items-center justify-between p-4 lg:h-full lg:max-w-[300px] lg:flex-col lg:items-start lg:justify-start lg:p-0">
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
          className={`fixed top-0 bottom-0 left-0 z-50 w-3/4 transform transition-transform duration-500 ease-in-out bg-white p-4 lg:static lg:h-full lg:w-full lg:p-6 ${
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
            {NAV_LINKS.map((item) => (
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

  //   return (
  //     <>
  //       {/* Sidebar on desktop */}
  //       <header className="hidden border-r bg-muted/40 md:block md:w-[220px] lg:md:w-[280px]">
  //         <div className="flex h-full max-h-screen flex-col gap-2">
  //           <div className="flex h-16 items-center border-b px-2 lg:h-[70px] lg:px-6">
  //             <Link to="/" className="flex items-center gap-2 font-semibold flex-1">
  //               <FireExtinguisher className="h-9 w-9" />
  //               <div className="flex flex-col">
  //                 <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-transparent bg-clip-text">
  //                   neris
  //                 </h1>
  //                 <h2 className="text-muted-foreground tracking-widest text-xs lg:text-sm font-semibold">
  //                   FIRE REPORTING
  //                 </h2>
  //               </div>
  //             </Link>
  //           </div>
  //           <div className="flex-1">
  //             <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
  //               {NAV_LINKS.map((item) => (
  //                 <NavItem
  //                   key={item.name}
  //                   title={item.title}
  //                   name={item.name}
  //                   link={item.link}
  //                   Icon={item.icon}
  //                   activeNavItem={activeNavItem}
  //                   setActiveNavItem={setActiveNavItem}
  //                 />
  //               ))}
  //             </nav>
  //           </div>
  //         </div>
  //       </header>

  //       <div className="flex flex-col w-full">
  //         {/* Header on phone/Desktop */}
  //         <header className="flex h-16 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[70px] lg:px-6">
  //           {/* Hamburger Menu for phone */}
  //           <Sheet>
  //             <SheetTrigger asChild>
  //               <Button
  //                 variant="outline"
  //                 size="icon"
  //                 className="shrink-0 md:hidden"
  //               >
  //                 <Menu className="h-5 w-5" />
  //                 <span className="sr-only">Toggle navigation menu</span>
  //               </Button>
  //             </SheetTrigger>
  //             <SheetContent side="left" className="flex flex-col">
  //               <nav className="grid gap-2 text-lg font-medium">
  //                 <Link
  //                   to="/"
  //                   className="flex items-center gap-2 text-lg font-semibold"
  //                 >
  //                   <FireExtinguisher className="h-10 w-10" />
  //                   <div className="flex flex-col">
  //                     <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-transparent bg-clip-text">
  //                       neris
  //                     </h1>
  //                     <h2 className="text-muted-foreground tracking-widest font-semibold">
  //                       FIRE REPORTING
  //                     </h2>
  //                   </div>
  //                 </Link>
  //                 <div className="h-0.5 w-full bg-primary" aria-hidden={true} />
  //                 {NAV_LINKS.map((item) => (
  //                   <NavItem
  //                     key={item.name}
  //                     title={item.title}
  //                     name={item.name}
  //                     link={item.link}
  //                     Icon={item.icon}
  //                     activeNavItem={activeNavItem}
  //                     setActiveNavItem={setActiveNavItem}
  //                   />
  //                 ))}
  //               </nav>
  //             </SheetContent>
  //           </Sheet>

  //           {/* Icon */}
  //           <DropdownMenu>
  //             <DropdownMenuTrigger asChild>
  //               <Button
  //                 variant="secondary"
  //                 size="icon"
  //                 className="rounded-full ml-auto"
  //               >
  //                 <CircleUser className="h-5 w-5" />
  //                 <span className="sr-only">Toggle user menu</span>
  //               </Button>
  //             </DropdownMenuTrigger>
  //             <DropdownMenuContent align="end">
  //               <DropdownMenuLabel>My Account</DropdownMenuLabel>
  //               <DropdownMenuSeparator />
  //               <DropdownMenuItem>Settings</DropdownMenuItem>
  //               <DropdownMenuItem>Support</DropdownMenuItem>
  //               <DropdownMenuSeparator />
  //               <DropdownMenuItem>Logout</DropdownMenuItem>
  //             </DropdownMenuContent>
  //           </DropdownMenu>
  //         </header>
  //         {/* <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
  //         </main> */}
  //       </div>
  //     </>
  //   );
};

export default Header;
