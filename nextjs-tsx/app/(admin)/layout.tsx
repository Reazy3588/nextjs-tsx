import React from "react";
import "@/app/globals.css";
import SidebarComponent from "../components/sidebar/SidebarComponent";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          {/* Sidebar */}
          <aside className="fixed left-0 top-0 h-screen w-64">
            <SidebarComponent />
          </aside>

          {/* Main content */}
          <main className="ml-64 w-full min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
