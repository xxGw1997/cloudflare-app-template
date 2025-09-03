import { t } from "@worker/trpc/trpc-instance";
import { exampleTableDataRouter } from "./routes/example-table-data";

export const appRouter = t.router({
  exampleTableData: exampleTableDataRouter,
});

export type AppRouter = typeof appRouter;
