import { DataTable } from "@/components/ui/data-table";

const Incidents = () => {
  const columns = [
    {
      accessorKey: "user",
      header: "User",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "started_at",
      header: "Started At",
    },
    {
      accessorKey: "ended_at",
      header: "Ended At",
    },
  ];

  const data = [
    {
      id: 1,
      user: "Justin Variara",
      date: "06/12/2024",
      started_at: "07:18:05 PM",
      ended_at: "07:30:44 PM",
    },
    {
      id: 2,
      user: "Chris Variara",
      date: "04/12/2024",
      started_at: "04:18:05 PM",
      ended_at: "05:30:44 PM",
    },
    {
      id: 3,
      user: "Patrick Muller",
      date: "05/12/2024",
      started_at: "06:38:05 AM",
      ended_at: "09:33:44 AM",
    },
  ];

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-sm font-semibold md:text-lg text-primary-foreground tracking-wider uppercase">
          Incidents
        </h1>
      </div>
      <div className="w-full mx-auto mt-8 md:mt-20">
        <DataTable
          columns={columns}
          data={data}
          pageSize={10}
          title={{ text: "Incident Reports" }}
        />
      </div>
    </>
  );
};

export default Incidents;
