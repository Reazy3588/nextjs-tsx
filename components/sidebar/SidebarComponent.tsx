"use client";

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { MenuList } from "./menu";
import { IconType } from "react-icons"; // Import the type helper

type MenuItem = {
  name: string;
  path: string;
  icon: IconType; // This matches the objects in your MenuList
}

export default function SidebarComponent() {
  // TypeScript will now be happy because MenuList contains Icon components
  const [menuList] = useState<MenuItem[]>(MenuList);

  return (
    <Sidebar aria-label="Default sidebar example">
      <SidebarItems>
        <SidebarItemGroup>
          {menuList.map((item, index) => (
            <SidebarItem 
              key={index} 
              as={Link} 
              href={item.path} 
              icon={item.icon} 
            >
              {item.name}
            </SidebarItem>
          ))}
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}