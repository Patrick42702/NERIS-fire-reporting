import AddUserModal from "@/components/AddUserModal";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { MoreHorizontal, PlusCircle } from "lucide-react";

const CompanyAdminTab = () => {
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
      accessorKey: "role",
      header: "Role",
      cell: ({ row }: any) => {
        const user = row.original;

        return (
          <div className="min-w-[115px]">
            <div
              className={cn(
                "flex w-fit items-center gap-2 rounded-full px-4 py-2",
                {
                  "bg-red-600": user.role === "admin",
                  "bg-blue-600": user.role === "moderator",
                  "bg-orange-600": user.role === "member",
                }
              )}
            >
              <p className="text-[12px] leading-[14px] font-semibold capitalize text-primary-foreground">
                {user.role}
              </p>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }: any) => {
        const user = row.original;

        return (
          <div>
            <p className="leading-[14px] font-medium capitalize text-foreground">
              {user.status}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: "action",
      header: "Actions",
      id: "actions",
      cell: ({ row }: any) => {
        const user = row.original;

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
              <DropdownMenuItem>Edit Role</DropdownMenuItem>
              <DropdownMenuItem>View Status History</DropdownMenuItem>
              <DropdownMenuItem>Remove</DropdownMenuItem>
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
      role: "admin",
      status: "active",
    },
    {
      id: 2,
      user: "Chris Variara",
      email: "cvariara@gmail.com",
      role: "member",
      status: "inactive",
    },
    {
      id: 3,
      user: "Patrick Muller",
      email: "patrick42702@yahoo.com",
      role: "moderator",
      status: "active",
    },
  ];
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-sm font-semibold md:text-lg text-primary-foreground tracking-wider uppercase">
          Admin
        </h1>
      </div>
      <div className="w-full mx-auto mt-8 md:mt-20">
        <AddUserModal />
        <DataTable
          columns={columns}
          data={data}
          pageSize={10}
          filter="email"
          title={{ text: "Manage Users" }}
        />
      </div>
    </>
  );
};

export default CompanyAdminTab;
