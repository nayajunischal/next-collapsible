import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Collapsible",
  description: "An interactive component which expands/collapses a panel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
