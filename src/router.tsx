import { QueryClientProvider } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { queryClient, trpc } from "@/lib/trpc";

export const router = createRouter({
  routeTree,
  scrollRestoration: true,
  defaultPreload: "intent",
  context: {
    trpc,
    queryClient,
  },
  Wrap: ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  ),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
