// app/routes/_index.ts or app/routes/index.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Homepage
  route("signup", "pages/Register.tsx"), // Register page
] satisfies RouteConfig;
