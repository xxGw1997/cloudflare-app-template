import { t } from "@worker/trpc/trpc-instance";
import { z } from "zod";

import { mockData } from "../mock-data";

export const exampleTableDataRouter = t.router({
  getTableData: t.procedure
    .input(z.object({ tableId: z.string() }))
    .query(async ({ input }) => {
      console.log("🚀===> Fetching table data for table Id:", input.tableId);

      await new Promise((r) => setTimeout(r, 1500));

      return { mockData };
    }),
});
