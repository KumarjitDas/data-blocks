import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "@/components/layouts/app-sidebar";
import { Outlet } from "@remix-run/react";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main>
        <SidebarTrigger />

        <div className="min-h-screen flex flex-col bg-gray-900 text-white">
          <header className="p-4 bg-gray-800 border-b border-gray-700">
            <nav>My Global Navbar lala</nav>
          </header>

          <main className="flex-1 p-8">
            <Outlet />
          </main>

          <footer className="p-4 text-center bg-gray-800 text-gray-400">
            Global Footer
          </footer>
        </div>
      </main>
    </SidebarProvider>
  );
}
