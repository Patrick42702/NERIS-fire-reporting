import MainLayout from "@/components/MainLayout";
import { Check, Star } from "lucide-react";

import homeImage from "../../assets/home.png";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Landing = () => {
  return (
    <MainLayout>
      <div>
        {/* Hero Section */}
        <section className="bg-slate-100">
          <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 ">
            <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
              <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-5xl lg:text-6xl">
                  Your simple and easy-to-use{" "}
                  <span className="bg-primary px-2 text-white">software</span>{" "}
                  for Fire Departments
                </h1>
                <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                  Revolutionize the way you solve your daily problems in an
                  efficient and effective way with the help of{" "}
                  {/* TODO: change App name */}
                  <span className="text-primary font-semibold">App Name</span>
                </p>

                <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                  <div className="space-y-2">
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      Streamline your operation
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      Decrease risk to firefighters
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      Enhance preparedness and assist in safe communities
                    </li>
                  </div>
                </ul>

                <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="flex flex-col justify-between items-center sm:items-start">
                    <div className="flex gap-1">
                      <Star className="h-6 w-6 text-primary fill-primary" />
                      <Star className="h-6 w-6 text-primary fill-primary" />
                      <Star className="h-6 w-6 text-primary fill-primary" />
                      <Star className="h-6 w-6 text-primary fill-primary" />
                      <Star className="h-6 w-6 text-primary fill-primary" />
                    </div>

                    {/* <p>
                      <span className="font-semibold">1.250</span> happy
                      customers
                    </p> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
              <div className="relative md:max-w-xl">
                <img
                  src={homeImage}
                  className="w-64 sm:w-80 lg:w-full select-none hidden sm:block"
                />
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        <section>
          <MaxWidthWrapper>
            <div></div>
          </MaxWidthWrapper>
        </section>
      </div>
    </MainLayout>
  );
};

export default Landing;
