import { DataTable } from "@/components/ui/data-table";

const Leaderboard = () => {
  const columns = [
    {
      accessorKey: "rank",
      header: "Rank",
      cell: ({ row }: any) => {
        console.log(row.original);
        if (row.original.rank === 1) {
          return (
            <span className="bg-yellow-500 rounded-full h-8 w-8 flex items-center justify-center text-white">
              {row.original.rank}
            </span>
          );
        }

        if (row.original.rank === 2) {
          return (
            <span className="bg-gray-400 rounded-full h-8 w-8 flex items-center justify-center text-white">
              {row.original.rank}
            </span>
          );
        }

        if (row.original.rank === 3) {
          return (
            <span className="bg-amber-800 rounded-full h-8 w-8 flex items-center justify-center text-white">
              {row.original.rank}
            </span>
          );
        }

        return (
          <span className="rounded-full h-8 w-8 flex items-center justify-center">
            {row.original.rank}
          </span>
        );
      },
    },
    {
      accessorKey: "user",
      header: "User",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "num_of_incidents",
      header: "# of Incidents Reported",
    },
  ];

  const data = [
    {
      id: 1,
      user: "Justin Variara",
      email: "jvariara@gmail.com",
      num_of_incidents: 2,
    },
    {
      id: 2,
      user: "Chris Variara",
      email: "cvariara@gmail.com",
      num_of_incidents: 9,
    },
    {
      id: 3,
      user: "Patrick Muller",
      email: "patrick42702@yahoo.com",
      num_of_incidents: 6,
    },
    {
      id: 4,
      user: "2 Muller",
      email: "patrick42702@yahoo.com",
      num_of_incidents: 16,
    },
    {
      id: 5,
      user: "3 Muller",
      email: "patrick42702@yahoo.com",
      num_of_incidents: 0,
    },
    {
      id: 6,
      user: "4 Muller",
      email: "patrick42702@yahoo.com",
      num_of_incidents: 27,
    },
    {
      id: 7,
      user: "5 Muller",
      email: "patrick42702@yahoo.com",
      num_of_incidents: 16,
    },
  ];

  const sortedData = data
    .sort((a, b) => b.num_of_incidents - a.num_of_incidents)
    .map((item, i) => ({ ...item, rank: i + 1 }));

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-sm font-semibold md:text-lg text-primary-foreground tracking-wider uppercase">
          Leaderboard
        </h1>
      </div>
      <div className="w-full mx-auto mt-8 md:mt-20">
        <DataTable
          columns={columns}
          data={sortedData}
          title="Leaderboard - Incident Reporting"
          filter="email"
          pageSize={5}
        />
      </div>
    </>
  );
};

export default Leaderboard;
