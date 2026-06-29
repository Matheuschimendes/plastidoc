import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/app/components/ui/sonner";
import { DescriptionProvider } from "./providers/DescriptionProvider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlastiDoc",
  description: "Sistema de descrições cirúrgicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("font-sans", geist.variable)}>
      <body className={inter.className}>
        <DescriptionProvider>{children}</DescriptionProvider>
        <Toaster richColors position="top-right" expand={false} closeButton />
      </body>
    </html>
  );
}
