import { QueryClient } from "@tanstack/react-query";

import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";

import type { AppRouter } from "@worker/trpc/router";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "/trpc",
    }),
  ],
});

export const trpc = createTRPCOptionsProxy<AppRouter>({
  queryClient,
  client: trpcClient,
});
