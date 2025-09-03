import { Hono } from "hono";

export const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => {
  console.log("API request received");
  return c.json({
    name: "Cloudflare by Hono",
  });
});
