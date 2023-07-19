"use client";

import Link from "next/link";
import CustomLink from "./ui/CustomLink";
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function scrollListener() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <nav
      className={cn(
        "px-16 py-4 flex justify-end fixed top-0 z-[100] bg-white w-full",
        scrollY > 50 && "border-b-2 border-slate-600"
      )}
    >
      <ul className="flex items-center gap-10">
        <li>
          <CustomLink bgColor="orange" href="#about">
            About me
          </CustomLink>
        </li>
        <li>
          <CustomLink href="#projects">Projects</CustomLink>
        </li>
        <li>
          <Link href="#contacts">
            <Button bgColor="green">Contacts</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
