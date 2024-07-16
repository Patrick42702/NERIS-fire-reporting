import MainLayout from "@/components/MainLayout";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
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
import { UserSignInValidator } from "@/lib/validations/user";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ email, password }: z.infer<typeof UserSignInValidator>) => {
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

  const form = useForm<z.infer<typeof UserSignInValidator>>({
    resolver: zodResolver(UserSignInValidator),
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

  const onSubmit = async (data: z.infer<typeof UserSignInValidator>) => {
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full" disabled={isPending ? true : false}>
                  Sign in{" "}
                  {isPending && (
                    <Loader2 className="animate-spin ml-1.5 w-5 h-5" />
                  )}
                </Button>
              </form>
            </Form>
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
