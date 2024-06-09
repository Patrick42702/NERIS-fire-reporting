import MainLayout from "@/components/MainLayout";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <MainLayout>
      <div className="container relative pt-20 flex flex-col items-center justifty-between lg:px-0">
        {/* Register stepper */}
        <div className="flex justify-between mb-4"></div>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <h1 className="text-2xl font-bold">Sign in</h1>
          </div>

          {/* form */}
          <div className="grid gap-4">
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
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full">Sign in</Button>
          </div>
          <Link
            to="/sign-up"
            className={buttonVariants({
              variant: "link",
              className: "gap-1.5",
            })}
          >
            Don't have an account? Create an account
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignIn;
