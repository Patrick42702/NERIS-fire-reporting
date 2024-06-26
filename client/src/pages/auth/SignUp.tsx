import MainLayout from "@/components/MainLayout";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createOrganization } from "@/services/organization";
import { createUser } from "@/services/user";
import { RootState } from "@/store";
import { userActions } from "@/store/reducers/userReducer";
import { RegisterUserInputs } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
    clearErrors,
  } = useForm<RegisterUserInputs>({
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      phone: undefined,
      password: "",
      confirmPassword: "",
      organization: "",
      organizationPhone: undefined,
    },
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const steps = ["Account Info", "Organization Info"];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);

  const { mutate: registerUser, isPending: isUserPending } = useMutation({
    mutationFn: (data: Partial<RegisterUserInputs>) => {
      return createUser({
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        phone: data.phone,
        password: data.password,
      });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));

      // Save in local storage
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (err) => {
      console.error(err.message);
    },
  });

  const { mutate: registerOrg, isPending: isOrgPending } = useMutation({
    mutationFn: (data: Partial<RegisterUserInputs>) => {
      return createOrganization({
        organization: data.organization,
        organizationPhone: data.organizationPhone,
      });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));

      // Save in local storage
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (err) => {
      console.error(err.message);
    },
  });

  useEffect(() => {
    if (userState.userInfo) {
      navigate("/");
    }
  }, [userState.userInfo]);

  useEffect(() => {
    clearErrors()
  }, [currentStep])

  const onSubmit: SubmitHandler<RegisterUserInputs> = async (data) => {
    const {
      fname,
      lname,
      email,
      phone,
      password,
      organization,
      organizationPhone,
    } = data;

    registerUser({ fname, lname, email, phone, password });

    registerOrg({ organization, organizationPhone });

    // TODO: Link user and org
  };

  const password = watch("password");

  const handleNextStep = async () => {
    if (currentStep === 1) {
      const isValid = await trigger([
        "fname",
        "lname",
        "email",
        "phone",
        "password",
        "confirmPassword",
      ]);
      if (isValid) {
        setCurrentStep((prev) => prev + 1);
        clearErrors(); // Clear all errors
      }
    } else if (currentStep === 2) {
      // Add validation for the second step if necessary
      const isValid = await trigger(["organization", "organizationPhone"]);
      if (isValid) {
        setComplete(true);
      }
    }
  };

  return (
    <MainLayout>
      <div className="h-80 bg-primary bg-gradient-to-r from-primary to-red-500 w-full" />
      <div className="container relative pt-14 flex -mt-80 flex-col items-center justify-between lg:px-0">
        <h1 className="text-white mb-10 text-xl md:text-2xl lg:text-3xl font-semibold">
          Welcome to App Name
        </h1>
        <div className="bg-white relative flex flex-col items-center justify-between p-4 lg:p-6 rounded-md drop-shadow">
          <div className="flex justify-between mb-4">
            {steps?.map((step, i) => (
              <div
                key={i}
                className={`step-item ${
                  currentStep === i + 1 && "step-active"
                } ${(i + 1 < currentStep || complete) && "step-complete"}`}
              >
                <div className="step">
                  {i + 1 < currentStep || complete ? <Check /> : i + 1}
                </div>
                <p className="text-gray-500 font-semibold">{step}</p>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
          >
            <div className="flex flex-col items-center space-y-2 text-center">
              <h1 className="text-2xl font-bold text-primary">
                Create an account
              </h1>
            </div>

            {/* Form */}
            <div className="grid gap-4">
              {currentStep === 1 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="first-name" className="text-slate-600">
                        First name
                      </Label>
                      <Input
                        id="first-name"
                        placeholder="Max"
                        {...register("fname", {
                          minLength: {
                            value: 1,
                            message:
                              "First Name length must be at least 1 character",
                          },
                          required: {
                            value: true,
                            message: "First Name is required.",
                          },
                        })}
                        className="bg-gray-50 drop-shadow-sm-sm"
                      />
                      {errors.fname?.message && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.fname?.message}
                        </p>
                      )}
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="last-name" className="text-slate-600">
                        Last name
                      </Label>
                      <Input
                        id="last-name"
                        placeholder="Robinson"
                        {...register("lname", {
                          minLength: {
                            value: 1,
                            message:
                              "First Name length must be at least 1 character",
                          },
                          required: {
                            value: true,
                            message: "First Name is required.",
                          },
                        })}
                        className="bg-gray-50 drop-shadow-sm"
                      />
                      {errors.lname?.message && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.lname?.message}
                        </p>
                      )}
                    </div>
                  </div>
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
                    <Label htmlFor="phone" className="text-slate-600">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(xxx) xxx-xxxx"
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Phone number is required.",
                        },
                        pattern: {
                          value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                          message: "Please enter a valid phone number.",
                        },
                      })}
                      className="bg-gray-50 drop-shadow-sm"
                    />
                    {errors.phone?.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone?.message}
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
                          message:
                            "Password length must be at least 6 characters.",
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
                  <div className="grid gap-2">
                    <Label
                      htmlFor="confirm-password"
                      className="text-slate-600"
                    >
                      Confirm Password
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      className="bg-gray-50 drop-shadow-sm"
                      {...register("confirmPassword", {
                        required: {
                          value: true,
                          message: "Confirm password is required.",
                        },
                        validate: (value) => {
                          if (value !== password) {
                            return "Password do not match.";
                          }
                        },
                      })}
                    />
                    {errors.confirmPassword?.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.confirmPassword?.message}
                      </p>
                    )}
                  </div>
                </>
              )}
              {currentStep === 2 && (
                <>
                  <div className="grid gap-2">
                    <Label htmlFor="organization" className="text-slate-600">
                      Organization
                    </Label>
                    <Input
                      id="organization"
                      type="text"
                      placeholder="Fire Department"
                      {...register("organization", {
                        minLength: {
                          value: 1,
                          message:
                            "Organization name length must be at least 1 character",
                        },
                        required: {
                          value: true,
                          message: "Organization name is required.",
                        },
                      })}
                      className="bg-gray-50 drop-shadow-sm"
                    />
                    {errors.organization?.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.organization?.message}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="organizationPhone"
                      className="text-slate-600"
                    >
                      Organization Phone
                    </Label>
                    <Input
                      id="organizationPhone"
                      type="tel"
                      placeholder="(xxx) xxx-xxxx"
                      {...register("organizationPhone", {
                        required: {
                          value: true,
                          message: "Organization Phone number is required.",
                        },
                        pattern: {
                          value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                          message: "Please enter a valid phone number.",
                        },
                      })}
                      className="bg-gray-50 drop-shadow-sm"
                    />
                    {errors.organizationPhone?.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.organizationPhone?.message}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>

            <Button
              type={currentStep === steps.length ? "submit" : "button"}
              className="w-full"
              onClick={handleNextStep}
            >
              {currentStep === steps.length ? "Create an account" : "Next"}
            </Button>
          </form>
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
