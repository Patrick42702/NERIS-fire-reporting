import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const CompanyLayout = () => {
  return (
    <div className="flex flex-col h-screen lg:flex-row w-full">
      <Header page="admin" />
      <main className="flex flex-1 flex-col gap-4 lg:gap-6 bg-[#F9F9F9]">
        <div className="h-80 bg-primary bg-gradient-to-r from-primary to-red-500 w-full" />
        <div className="p-4 lg:p-8 -mt-[336px] lg:-mt-[344px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default CompanyLayout;
