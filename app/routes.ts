// app/routes/_index.ts or app/routes/index.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Homepage
  route("signup", "pages/Authentication/Register.tsx"), // Register page
  route("login", "pages/Authentication/Login.tsx"),
  // route("features", "components/Section/Features.tsx"),
] satisfies RouteConfig;
