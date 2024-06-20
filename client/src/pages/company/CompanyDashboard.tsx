import { useParams } from "react-router-dom";

const CompanyDashboard = () => {
  const { id } = useParams();

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-sm font-semibold md:text-lg text-primary-foreground tracking-wider uppercase">
          Dashboard
        </h1>
      </div>
      <div className="w-full mx-auto mt-8 md:mt-20">
        <h1 className="text-primary-foreground text-2xl md:text-3xl lg:text-5xl font-semibold">
          Hello Company Name
        </h1>
        {/* grid */}
        <div className="grid md:grid-cols-3 md:grid-rows-3 gap-4 w-full h-fit mt-4 lg:mt-12">
          {/* Company Goals */}
          <div className="border border-gray-200 col-span-3 lg:col-span-3 xl:col-span-2 sm:col-span-3 md:col-span-2 row-span-3 h-full rounded-md shadow-md w-full bg-card">
            <div className="p-4 md:p-6 lg:h-full h-fit w-full flex">
              <div className="flex flex-col w-full h-full gap-y-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-card-foreground">
                  Company Goals
                </h1>

                <div className="flex justify-around items-center flex-col lg:flex-row sm:flex-row md:flex-col">
                  <div className="flex flex-col justify-center items-center w-fit gap-y-4">
                    <div
                      className="radial-progress text-primary font-semibold text-2xl mx-auto md:mx-0 bg-secondary"
                      // @ts-ignore
                      style={{ "--value": 12, "--size": "12rem" }}
                      role="progressbar"
                    >
                      12%
                    </div>
                    <h1 className="text-xl lg:text-2xl text-muted-foreground">
                      <span className="text-primary font-bold">12%</span> total
                      calls today
                    </h1>
                  </div>
                  <div className="flex flex-col justify-center items-center w-fit gap-y-4">
                    <div
                      className="radial-progress text-primary font-semibold text-2xl mx-auto md:mx-0 bg-secondary"
                      // @ts-ignore
                      style={{ "--value": 90, "--size": "12rem" }}
                      role="progressbar"
                    >
                      90%
                    </div>
                    <h1 className="text-xl lg:text-2xl text-muted-foreground">
                      <span className="text-primary font-bold">90%</span> total
                      calls YTD
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Goals */}
          <div className="border border-gray-200 col-span-3 md:col-span-1 row-span-1 h-full rounded-md shadow-md w-full bg-card">
            <div className="p-4 md:p-6 lg:h-full h-fit w-full flex">
              <div className="flex justify-between w-full gap-x-4 md:gap-y-4 lg:gap-y-4 md:flex-col xl:flex-row">
                <div className="flex flex-col gap-y-2">
                  <h2 className="text-muted-foreground uppercase text-sm tracking-tigh font-medium">
                    Personal - Calls Today
                  </h2>
                  <h1 className="text-2xl md:text-3xl font-bold text-primary">
                    2%
                  </h1>
                </div>

                <div
                  className="radial-progress text-primary font-semibold text-lg bg-secondary"
                  // @ts-ignore
                  style={{ "--value": 2, "--size": "4rem" }}
                  role="progressbar"
                >
                  2%
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 col-span-3 md:col-span-1 row-span-1 h-full rounded-md shadow-md w-full bg-card">
            <div className="p-4 md:p-6 lg:h-full h-fit w-full flex">
              <div className="flex justify-between w-full gap-x-4 md:gap-y-4 lg:gap-y-4 md:flex-col xl:flex-row">
                <div className="flex flex-col gap-y-2">
                  <h2 className="text-muted-foreground uppercase text-sm tracking-tigh font-medium">
                    Personal - Calls YTD
                  </h2>
                  <h1 className="text-2xl md:text-3xl font-bold text-primary">
                    36%
                  </h1>
                </div>

                <div
                  className="radial-progress text-primary font-semibold text-lg bg-secondary"
                  // @ts-ignore
                  style={{ "--value": 36, "--size": "4rem" }}
                  role="progressbar"
                >
                  36%
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 col-span-3 md:col-span-1 row-span-1 h-full rounded-md shadow-md w-full bg-card">
            <div className="p-4 md:p-6 lg:h-full h-fit w-full flex">
              <div className="flex justify-between w-full gap-x-4 md:gap-y-4 lg:gap-y-4 md:flex-col xl:flex-row">
                <div className="flex flex-col gap-y-2">
                  <h2 className="text-muted-foreground uppercase text-sm tracking-tigh font-medium">
                    Personal - Calls Last Year
                  </h2>
                  <h1 className="text-2xl md:text-3xl font-bold text-primary">
                    67%
                  </h1>
                </div>

                <div
                  className="radial-progress text-primary font-semibold text-lg bg-secondary"
                  // @ts-ignore
                  style={{ "--value": 67, "--size": "4rem" }}
                  role="progressbar"
                >
                  67%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDashboard;
