"use client";
import React, { useState, useEffect } from "react"; // 1. Added useEffect
import "@/app/globals.css";
import SidebarComponent from "../../components/sidebar/SidebarComponent";
import { MenuIcon } from "../../components/icons/FontAwsome";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isShowSidebar, setIsShowSidebar] = useState<boolean>(false);
  // console.log(isShowSidebar)
  // 2. Add a mounted state
  const [mounted, setMounted] = useState(false);
  

  // 3. Set mounted to true only after the component reaches the browser
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen relative">
          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsShowSidebar(!isShowSidebar)}
            className="fixed bottom-6 left-6 z-[60] lg:hidden p-3 bg-white text-gray-800 rounded-full shadow-lg border border-gray-200"
          >
            <MenuIcon className="h-6 w-6" color="currentColor" />
          </button>

          {/* Sidebar */}
          <aside 
            className={`fixed inset-y-0 left-0 z-50 bg-white transition-transform duration-300 transform 
              ${isShowSidebar ? "translate-x-0" : "-translate-x-full"} 
              lg:translate-x-0 lg:static lg:block w-64 border-r`}
          >
            {/* 4. Only render the SidebarComponent once mounted is true */}
            {mounted && <SidebarComponent />}
          </aside>

          {/* Main content */}
          <main className="flex-1 bg-gray-50 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );

}
