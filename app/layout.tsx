import React from "react";
import "./globals.css";

export const metadata = {
  title: "Isaac Cilia Attard",
  description:
    "I am a computer science student who is passionate about manifesting order from chaos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden h-screen bg-gradient-to-tr from-[#000000] to-[#2f0785]">
        {children}
      </body>
    </html>
  );
}
