import type { Metadata } from "next";
import "./globals.css";
import SidebarLayout from "@/components/Layout"; // rename the sidebar layout component

export const metadata: Metadata = {
  title: "Budget Management",
  description: "Smart finance tracking app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  );
}
