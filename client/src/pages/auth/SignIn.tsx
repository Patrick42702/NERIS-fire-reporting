import MainLayout from "@/components/MainLayout";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { LoginUserInputs } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { RootState } from "@/store";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/user";
import { userActions } from "@/store/reducers/userReducer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ email, password }: LoginUserInputs) => {
      return login({ email, password });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));

      // Save in local storage
      // localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (err) => {
      console.error(err.message);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (userState.userInfo) {
      navigate("/");
    }
  }, [userState.userInfo]);

  const onSubmit: SubmitHandler<LoginUserInputs> = async (data) => {
    const { email, password } = data;

    mutate({ email, password });
  };

  return (
    <MainLayout>
      <div className="h-80 bg-primary bg-gradient-to-r from-primary to-red-500 w-full" />
      <div className="container relative pt-14 flex -mt-80 flex-col items-center justifty-between lg:px-0">
        <h1 className="text-white mb-10 text-xl md:text-2xl lg:text-3xl font-semibold">
          Welcome to App Name
        </h1>
        <div className="bg-white relative flex flex-col items-center justifty-between p-4 lg:p-6 rounded-md drop-shadow">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col items-center space-y-2 text-center">
              <h1 className="text-2xl font-bold text-primary">Sign in</h1>
            </div>

            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-slate-600">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required.",
                    },
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  className="bg-gray-50 drop-shadow-sm"
                />
                {errors.email?.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-slate-600">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required.",
                    },
                    minLength: {
                      value: 6,
                      message: "Password length must be at least 6 characters.",
                    },
                  })}
                  className="bg-gray-50 drop-shadow-sm"
                />
                {errors.password?.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <Button className="w-full">Sign in</Button>
            </form>
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
      </div>
    </MainLayout>
  );
};

export default SignIn;
