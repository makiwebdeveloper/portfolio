"use client";

import { cn } from "@/lib/cn";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

export default function CustomLink({
  children,
  ...props
}: PropsWithChildren<LinkProps>) {
  return (
    <div
      className={cn(
        "relative w-fit group transition duration-300 border-b-4 border-transparent hover:border-black",
        "before:content-[''] before:absolute before:w-3/4 before:translate-x-[-50%] before:left-[50%] before:h-1 before:transition before:delay-200 before:duration-300 before:transparent before:hover:bg-purple-300 before:-bottom-1 before:hover:translate-y-1 "
      )}
    >
      <Link {...props}>
        <div
          className={cn(
            "transition group-hover:-translate-y-1 duration-300 w-fit"
          )}
        >
          {children}
        </div>
      </Link>
    </div>
  );
}
