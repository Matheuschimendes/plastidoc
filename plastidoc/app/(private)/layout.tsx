import { Sidebar } from "../components/layout/sidebar";
import { Header } from "../components/layout/header";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen bg-[var(--background)]">
      <Sidebar />

      <section className="flex min-h-screen flex-1 flex-col">
        <Header />

        <div className="flex-1 p-8">
          {children}
        </div>
      </section>
    </main>
  );
}