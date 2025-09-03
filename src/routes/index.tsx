import { Loader } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { trpc } from "@/lib/trpc";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { data, isError, isLoading } = useQuery(
    trpc.exampleTableData.getTableData.queryOptions({
      tableId: "exampleTableId",
    })
  );

  if (isLoading) return <Loader className="animate-spin" />;

  if (isError) return <div>Something went wrong~</div>;

  if (!data?.mockData) return <div>Empty Data~</div>;

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <ul>
        {data?.mockData.length > 0 &&
          data?.mockData.map((item) => <li key={item.id}>{item.header}</li>)}
      </ul>
    </div>
  );
}
