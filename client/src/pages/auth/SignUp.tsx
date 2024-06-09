import MainLayout from "@/components/MainLayout";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const steps = ["Account Info", "Organization Info"];
  return (
    <MainLayout>
      <div className="container relative pt-20 flex flex-col items-center justifty-between lg:px-0">
        {/* Register stepper */}
        <div className="flex justify-between mb-4">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item cursor-pointer ${
                currentStep === i + 1 && "step-active"
              } ${(i + 1 < currentStep || complete) && "step-complete"}`}
              onClick={() => {
                setCurrentStep(i + 1);
              }}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? <Check /> : i + 1}
              </div>
              <p className="text-gray-500 font-semibold">{step}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <h1 className="text-2xl font-bold">Create an account</h1>
          </div>

          {/* form */}
          <div className="grid gap-4">
            {currentStep === 1 && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Max" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Robinson" required />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(xxx) xxx-xxxx"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </>
            )}
            {currentStep === 2 && (
              <>
                <div className="grid gap-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    type="text"
                    placeholder="Fire Department"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Organization Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(xxx) xxx-xxxx"
                    required
                  />
                </div>
              </>
            )}
            <Button
              className="w-full"
              onClick={() => {
                currentStep === steps.length
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev + 1);
              }}
            >
              {currentStep === steps.length ? "Create an account" : "Next"}
            </Button>
          </div>
          <Link
            to="/sign-in"
            className={buttonVariants({
              variant: "link",
              className: "gap-1.5",
            })}
          >
            Already have an account? Sign In
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignUp;
