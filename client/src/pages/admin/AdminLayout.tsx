import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen lg:flex-row w-full">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-[#F9F9F9]">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
