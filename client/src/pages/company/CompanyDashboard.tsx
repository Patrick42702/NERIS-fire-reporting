import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { useParams } from "react-router-dom";

const CompanyDashboard = () => {
  const { id } = useParams();

  const columns = [
    {
      accessorKey: "user",
      header: "User",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "company",
      header: "Company",
    },
    {
      accessorKey: "action",
      header: "Actions",
      id: "actions",
      cell: ({ row }: any) => {
        console.log(row.original);

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Accept</DropdownMenuItem>
              <DropdownMenuItem>Deny</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const data = [
    {
      id: 1,
      user: "Justin Variara",
      email: "jvariara@gmail.com",
      company: "Fire Department 1",
    },
    {
      id: 2,
      user: "Chris Variara",
      email: "cvariara@gmail.com",
      company: "Fire Department 2",
    },
    {
      id: 3,
      user: "Patrick Muller",
      email: "patrick42702@yahoo.com",
      company: "Fire Department 3",
    },
  ];
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
      </div>
    </>
  );
};

export default CompanyDashboard;
