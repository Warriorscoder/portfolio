"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={'/'} className="cursor-pointer">
                <MenuItem setActive={setActive} active={active} item="Home">
                </MenuItem>
                </Link>
                <Link href={'projects'} className="cursor-pointer">
                <MenuItem setActive={setActive} active={active} item="Projects">
                </MenuItem>
                </Link>
                <Link href={'/#contact'} className="cursor-pointer">
                <MenuItem setActive={setActive} active={active} item="Contact Us">
                </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar
