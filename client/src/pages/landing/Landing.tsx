import MainLayout from "@/components/MainLayout";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <MainLayout>
      <Link to="/admin" className={buttonVariants()}>
        Admin
      </Link>
    </MainLayout>
  );
};

export default Landing;
