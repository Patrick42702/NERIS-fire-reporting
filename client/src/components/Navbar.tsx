import { ArrowRight, FireExtinguisher, Lock, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, buttonVariants } from "./ui/button";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const navigate = useNavigate();

  const toggleMenuHandler = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-primary shadow-md">
      <header className="container mx-auto px-5 py-4 flex justify-between items-center">
        <Link to="/">
          {/* TODO: replace with logo */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-transparent bg-clip-text">
              neris
            </h1>
            <h2 className="text-muted-foreground tracking-widest font-semibold">
              FIRE REPORTING
            </h2>
          </div>
        </Link>

        {/* Mobile Nav */}
        <div className="cursor-pointer lg:hidden">
          {!isMenuActive && (
            <Menu className="w-6 h-6" onClick={toggleMenuHandler} />
          )}
        </div>
        {isMenuActive && (
          <div
            className="fixed inset-0 bg-black/80 lg:hidden"
            onClick={toggleMenuHandler}
          />
        )}

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
          <div className="mt-6 flex flex-col gap-y-5">
            <Link
              to="/"
              className="font-medium text-lg md:text-xl text-foreground"
            >
              Home
            </Link>
            <Link
              to="/pricing"
              className="font-medium text-lg md:text-xl text-foreground"
            >
              Pricing
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary" })}
              to="/sign-in"
            >
              Sign in <Lock className="ml-1.5 h-5 w-5" />
            </Link>
            <Link className={buttonVariants()} to="/sign-up">
              Get started <ArrowRight className="ml-1.5 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex gap-x-6 items-center">
          <Link
            to="/"
            className="font-medium text-md md:text-lg text-foreground hover:text-primary transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/pricing"
            className="font-medium text-md md:text-lg text-foreground hover:text-primary transition-all duration-200"
          >
            Pricing
          </Link>
        </div>

        <div className="hidden lg:flex gap-x-4 items-center">
          <Link
            to="/sign-in"
            className="hidden lg:block mt-0 px-4 py-1 sm:px-6 sm:py-2 text-foreground font-semibold transition-all duration-300 hover:text-primary"
          >
            Sign in
          </Link>
          <Link
            to="/sign-up"
            className="hidden lg:flex lg:items-center mt-0 border-2 border-primary px-4 py-1 sm:px-6 sm:py-2 rounded-full text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-white"
          >
            Get started <ArrowRight className="ml-1.5 h-5 w-5" />
          </Link>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
