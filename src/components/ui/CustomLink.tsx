"use client";

import { cn } from "@/lib/cn";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

interface Props extends LinkProps {
  bgColor?: "purple" | "orange" | "green";
}

export default function CustomLink({
  children,
  bgColor = "purple",
  ...props
}: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        "relative w-fit group transition duration-300 border-b-4 border-transparent hover:border-black",
        "before:content-[''] before:absolute before:w-3/4 before:translate-x-[-50%] before:left-[50%] before:h-1 before:transition before:delay-200 before:duration-300 before:transparent before:-bottom-1 before:hover:translate-y-1 ",
        bgColor === "purple" && "before:hover:bg-purple-300",
        bgColor === "orange" && "before:hover:bg-orange-300",
        bgColor === "green" && "before:hover:bg-green-300"
      )}
    >
      <Link {...props}>
        <div
          className={cn(
            "transition group-hover:-translate-y-1 duration-300 w-fit",
            bgColor === "purple" && "group-hover:bg-purple-200",
            bgColor === "orange" && "group-hover:bg-orange-200",
            bgColor === "green" && "group-hover:bg-green-200"
          )}
        >
          {children}
        </div>
      </Link>
    </div>
  );
}
