import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-primary">
      <header className="container mx-auto px-5 py-4 flex justify-between items-center">
        <Link to="/">
          {/* TODO: replace with logo */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-transparent bg-clip-text">neris</h1>
            <h2 className="text-muted-foreground tracking-widest font-semibold">
              FIRE REPORTING
            </h2>
          </div>
        </Link>

        <button
          onClick={() => navigate("/sign-in")}
          className="mt-0 border-2 border-primary px-4 py-1 sm:px-6 sm:py-2 rounded-full text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-white"
        >
          Sign in
        </button>
      </header>
    </section>
  );
};

export default Navbar;
