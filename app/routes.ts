// app/routes.ts
import type { RouteConfig } from "@react-router/dev/routes";
import { layout, route, index } from "@react-router/dev/routes";

export default [
  // Public site layout
  layout("layouts/Layouts.tsx", [
    index("pages/Home/HomePage.tsx"),
    route("features", "pages/feature/FeaturesPage.tsx"),
    route("support", "pages/support/SupportPage.tsx"),
    route("contact", "pages/contact/ContactCardsPage.tsx"),
  ]),

  // Authentication pages
  route("login", "pages/authentication/Login.tsx"),
  route("signup", "pages/authentication/Register.tsx"),

  layout("layouts/MainLayout.tsx", [
    route("dashboard", "pages/dashboard/Dashboard.tsx"),
    route("ai-assistant", "components/dashboardSection/AIAssistantSection.tsx"),
    // route("study-group", "pages/group/StudyGroup.tsx"),
  ]),
] satisfies RouteConfig;
