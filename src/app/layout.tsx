import type { Metadata } from "next";
import { Jost, Barlow } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const jost = Jost({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Woodora Kitchens | Modular Kitchen Studio",
  description:
    "Woodora Kitchens designs, builds and fits modular kitchens for real homes. Visit our studio for a free design consultation and a fixed quote.",
  keywords: [
    "modular kitchen",
    "kitchen design",
    "kitchen installation",
    "kitchen remodeling",
    "Woodora Kitchens",
  ],
  authors: [{ name: "Woodora Kitchens" }],
  openGraph: {
    title: "Woodora Kitchens | Modular Kitchen Studio",
    description:
      "We design, build and fit modular kitchens for real homes and real budgets.",
    siteName: "Woodora Kitchens",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jost.variable} ${barlow.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
