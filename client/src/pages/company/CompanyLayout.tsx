import Header from "@/components/Header";
import { Outlet, useParams } from "react-router-dom";

const CompanyLayout = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen h-full overflow-hidden">
      <Header page="company" id={id} />
      <main className="flex flex-1 flex-col gap-4 lg:gap-6 bg-[#F9F9F9] overflow-auto ml-0 lg:ml-[300px]">
        <div className="h-80 bg-primary bg-gradient-to-r from-primary to-red-500 w-full" />
        <div className="p-4 lg:p-8 -mt-[336px] lg:-mt-[344px] h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default CompanyLayout;
