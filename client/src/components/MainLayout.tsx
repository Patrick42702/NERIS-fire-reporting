import { ReactNode } from "react";
import Navbar from "./Navbar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* TODO: Navbar */}
      <Navbar />
      {children}
      {/* TODO: Footer */}
    </div>
  );
};

export default MainLayout;
