"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MenuList } from "./Menu";

type MenuItem = {
  name: string;
  path: string;
  active: boolean;
};

export default function NavbarComponent() {
  const pathname = usePathname();

  const [menu, setMenu] = useState<MenuItem[]>(() =>
    MenuList.map((item) => ({
      ...item,
      active: false,
    }))
  );

  useEffect(() => {
    setMenu((prevMenu) =>
      prevMenu.map((item) => ({
        ...item,
        active:
          item.path === "/"
            ? pathname === "/"
            : pathname.startsWith(item.path),
      }))
    );
  }, [pathname]);
  

  return (
    <div className="fixed top-4 left-1/2 z-50 w-[95%] -translate-x-1/2 max-w-6xl">
      {/* Decorative Glow behind the nav - Changed to Red/Yellow */}
      <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 opacity-25 blur-xl transition-all duration-1000 group-hover:opacity-50"></div>
      <Navbar 
        fluid 
        className="relative rounded-[1.5rem] border border-white/10 bg-black/85 px-6 py-4 backdrop-blur-2xl"
      >
        <NavbarBrand as={Link} href="/" className="flex items-center gap-2">
          {/* Logo Box - Red to Yellow Gradient */}
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-red-600 to-yellow-400 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            <span className="text-xl font-bold text-white">TL</span>
          </div>
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-2xl font-black tracking-tighter text-transparent">
            TL <span className="text-red-500">EXPRESS</span>
          </span>
        </NavbarBrand>

        <div className="flex md:order-2">
          {/* Button - Red to Yellow Gradient */}
          <button className="hidden md:block rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-2 text-sm font-bold text-white transition-all hover:scale-105 hover:from-red-500 hover:to-yellow-500 hover:shadow-[0_0_20px_rgba(234,88,12,0.6)] active:scale-95">
            Sing in
          </button>
          <NavbarToggle className="ml-2 text-gray-400 hover:text-white" />
        </div>

        <NavbarCollapse>
  {menu.map((item) => (
    <NavbarLink
      key={item.path}
      as={Link}
      href={item.path}
      active={item.active}
      className={`
        group relative px-4 py-2 text-base font-semibold transition-all duration-300
        ${
          item.active
            ? "text-yellow-400" 
            : "text-gray-400 hover:text-white"
        }
      `}
    >
      <span className="relative z-10">{item.name}</span>
      
      {/* Animated Hover Background */}
      <div className={`
        absolute inset-0 -z-0 rounded-lg bg-white/5 opacity-0 transition-all duration-300 group-hover:opacity-100
        ${item.active ? "opacity-100 scale-105" : "scale-90 group-hover:scale-100"}
      `} />

      {/* FIXED: Active Underline Glow */}
      {item.active && (
        <div className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-10/12 bg-gradient-to-r from-red-500 to-yellow-400 shadow-[0_0_12px_#facc15] transition-all duration-300" />
      )}
    </NavbarLink>
  ))}
</NavbarCollapse>
      </Navbar>
    </div>
  );
}