"use client";

import { useEffect, useState } from "react";
import Button from "./ui/Button";
import { cn } from "@/lib/cn";

export default function GoUpButton() {
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

  function goUp() {
    window.scrollTo(0, 0);
  }

  return (
    <Button
      rounded="full"
      className={cn("fixed hidden bottom-10 right-10", scrollY > 50 && "block")}
      onClick={goUp}
    >
      Up!
    </Button>
  );
}
