import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Generated by create next app",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <body>{children}</body>;
}
