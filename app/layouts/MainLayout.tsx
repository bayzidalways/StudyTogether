// src/layout/MainLayout.tsx
import Sidebar from "~/components/dashboardSection/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "~/components/dashboardSection/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar
              user={{
                  name: "",
                  email: "",
                  avatarUrl: "",
              }}
              onFilterToggle={function (): void {
                  throw new Error("Function not implemented.");
              } } onLogout={function (): void {
                  throw new Error("Function not implemented.");
              } }      />
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
}
