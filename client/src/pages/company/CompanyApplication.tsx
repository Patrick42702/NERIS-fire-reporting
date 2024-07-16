import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useAppSelector } from "@/hooks";
import { CompanyApplicationValidator } from "@/lib/validations/company";
import { createOrganization } from "@/services/organization";
import { RootState } from "@/store";
import { RegisterOrgInputs, UserInfo } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const CompanyApplication = () => {
  const userState = useAppSelector(
    (state: RootState) => state.user as { userInfo: UserInfo | null }
  );
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof CompanyApplicationValidator>>({
    resolver: zodResolver(CompanyApplicationValidator),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const { mutate: registerOrg, isPending } = useMutation({
    mutationFn: (data: z.infer<typeof CompanyApplicationValidator>) => {
      const { name, phone } = data;
      if (!userState.userInfo) {
        throw new Error("User info is not available");
      }
      return createOrganization({
        name,
        phone,
        userId: userState.userInfo.user_id,
      });
    },
    onSuccess: (data) => {
      // TODO: Toast
      toast({
        title: "Applied for an organization",
        description: "Hang on tight while we verify the organization",
      });
      navigate("/");
    },
    onError: (err) => {
      console.error(err.message);
      toast({
        variant: "destructive",
        title: "Error creating organization, please try again.",
        description: err.message,
      });
    },
  });

  const onSubmit = async (
    data: z.infer<typeof CompanyApplicationValidator>
  ) => {
    const { name, phone } = data;

    registerOrg({ name, phone });
  };
  return (
    <MainLayout>
      <div className="h-80 bg-primary bg-gradient-to-r from-primary to-red-500 w-full" />
      <div className="container relative pt-14 flex -mt-80 flex-col items-center justify-center lg:px-0">
        <h1 className="text-white mb-10 text-xl md:text-2xl lg:text-3xl font-semibold">
          Apply for an Organization
        </h1>
        <div className="bg-white relative flex flex-col items-center justifty-between p-4 lg:p-6 rounded-md drop-shadow">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col items-center space-y-2 text-center">
              <h1 className="text-2xl font-bold text-primary">Apply</h1>
              <p className="text-muted-foreground text-sm">
                When applying for an organization, your email will be contacted
                and be setup as the Admin upon creation.
              </p>
            </div>

            {/* form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="xxx-xxx-xxxx" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-full" disabled={isPending ? true : false}>
                  Apply{" "}
                  {isPending && (
                    <Loader2 className="animate-spin ml-1.5 w-5 h-5" />
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CompanyApplication;
