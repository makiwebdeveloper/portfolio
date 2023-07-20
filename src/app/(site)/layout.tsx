import GoUpButton from "@/components/GoUpButton";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/cn";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maki",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"] });

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={cn("min-h-screen text-xl", inter.className)}>
      <Navbar />
      {children}
      <GoUpButton />
    </body>
  );
}
