import MainLayout from "@/components/MainLayout";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricingItems = [
    {
      plan: "Free",
      tagline: "Experience the value first, pay later.",
      price: 0,
      features: [
        {
          text: "7 Day Trial",
        },
        {
          text: "Basic Support",
        },
      ],
    },
    {
      plan: "Pro",
      tagline: "Companies looking for a new experience.",
      price: 100,
      features: [
        {
          text: "Priority Support",
        },
        {
          text: "White Glove Onboarding",
        },
      ],
    },
    {
      plan: "Enterprise",
      tagline: "Experience all features, and more!",
      price: "At Request",
      features: [
        {
          text: "Premium Personal Support",
        },
        {
          text: "Personalized Tools",
        },
      ],
    },
  ];

  return (
    <MainLayout>
      <section className="min-h-[calc(100vh-93px)] h-full bg-slate-100">
        <MaxWidthWrapper className="pb-12 pt-10 sm:pb-24 text-center max-w-7xl">
          <div className="mx-auto mb-10 sm:max-w-lg">
            <h1 className="text-5xl font-semibold text-secondary-foreground md:text-7xl">
              Pricing
            </h1>
            <p className="mt-5 text-gray-600 sm:text-lg">
              Whether you&apos;re just trying out our service or need more,
              we&apos;ve got you{" "}
              <span className="bg-primary px-2 text-white">covered</span>.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 transform-gpu overflow-hidden blur-3xl -top-10"
          >
            <div
              style={{
                clipPath:
                  "polygon(88.1% 44.1%, 100% 69.6%, 97.5% 26.9%, 55.5% 20.1%, 90.7% 78%, 72.5% 30.5%, 60.2% 52.4%, 52.4% 68.1%, 47.5% 38.3%, 45.2% 59.5%, 27.5% 76.7%, 0.1% 94.9%, 17.9% 100%, 27.6% 86.8%, 76.1% 97.7%, 85.1% 64.1%)",
              }}
              className="relative left-[calc(50%-11rem)] top-[calc(50%-12rem)] aspect-[1155/678] w-[26.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-red-500 opacity-35 sm:left-[calc(40%-18rem)] sm:w-[64.1875rem]"
            />
          </div>
          <div className="pt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {pricingItems.map(({ features, plan, price, tagline }) => (
              <div
                key={plan}
                className={cn("relative rounded-2xl bg-white shadow-lg", {
                  "border-2 border-primary shadow-primary":
                    plan === "Pro" || plan === "Enterprise",
                  "border border-gray-200": plan === "Free",
                })}
              >
                {plan === "Pro" && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-primary to-red-500 px-4 py-2 text-sm font-medium text-white">
                    Upgrade now
                  </div>
                )}
                {plan === "Enterprise" && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-primary to-red-500 px-4 py-2 text-sm font-medium text-white">
                    Schedule an appointment
                  </div>
                )}

                <div className="p-5">
                  <h3 className="my-3 text-center text-3xl font-bold">
                    {plan}
                  </h3>
                  <p className="text-gray-500">{tagline}</p>
                  {plan === "Enterprise" ? (
                    <p className="my-5 font-semibold text-3xl lg:text-5xl">
                      {price}
                    </p>
                  ) : (
                    <>
                      <p className="my-5 font-semibold text-3xl lg:text-5xl">
                        ${price}
                        <span className="text-gray-400 text-sm ml-1.5 align-top">
                          per month
                        </span>
                      </p>
                    </>
                  )}
                </div>

                <ul className="my-10 space-y-5 px-8">
                  {features.map(({ text }) => (
                    <li key={text} className="flex space-x-5">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-gray-600 font-medium">{text}</p>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200" />

                <div className="p-5">
                  {/* TODO: update link href */}
                  {plan === "Free" ? (
                    <Link
                      to="/"
                      className={buttonVariants({
                        className: "w-full",
                        variant: "secondary",
                      })}
                    >
                      Get Started{" "}
                      <ArrowRight className="w-4 h-4 ml-1.5 lg:w-5 lg:h-5" />
                    </Link>
                  ) : (
                    <Link
                      to="/"
                      className={buttonVariants({
                        className: "w-full",
                      })}
                    >
                      Get Started{" "}
                      <ArrowRight className="w-4 h-4 ml-1.5 lg:w-5 lg:h-5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </MainLayout>
  );
};

export default Pricing;
