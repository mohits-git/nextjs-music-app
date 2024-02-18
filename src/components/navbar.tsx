"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={'/home'}>
          <MenuItem setActive={setActive} active={active} item="Home"/>
        </Link>
        <Link href={'/about'}>
          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">All courses</HoveredLink>
              <HoveredLink href="/courses">Music App with Next</HoveredLink>
              <HoveredLink href="/courses">Next Auth App</HoveredLink>
              <HoveredLink href="/courses">React</HoveredLink>
              <HoveredLink href="/courses">Music app</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={'/contact'}>
          <MenuItem setActive={setActive} active={active} item="Contact"> 
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/contact">Music App with Next</HoveredLink>
              <HoveredLink href="/contact">Next Auth App</HoveredLink>
              <HoveredLink href="/contact">React</HoveredLink>
              <HoveredLink href="/contact">Music app</HoveredLink>
            </div>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

