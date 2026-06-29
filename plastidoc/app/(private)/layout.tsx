// app/(private)/layout.tsx

import { DescriptionProvider } from "@/app/providers/DescriptionProvider";
import { Header } from "../components/layout/header";
import { Sidebar } from "../components/layout/sidebar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DescriptionProvider>
      <div className="flex min-h-screen bg-[var(--background)]">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <Header />

          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </div>
    </DescriptionProvider>
  );
}