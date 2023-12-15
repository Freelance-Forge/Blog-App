import type { Metadata } from "next";
import { Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Blog App",
  description:
    "BlogApp offers an intuitive writing experience for tech enthusiasts, facilitating seamless content creation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
