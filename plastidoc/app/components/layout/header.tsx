import { Bell, Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-[var(--border)] bg-[var(--background)]/80 px-8 backdrop-blur-xl">
      <div>
        <p className="text-sm text-[var(--muted)]">Bem-vindo de volta</p>
        <h1 className="text-xl font-bold text-[var(--primary-dark)]">
          PlastiDoc
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden h-11 w-80 items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-4 md:flex">
          <Search size={18} className="text-[var(--muted)]" />
          <input
            placeholder="Pesquisar..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-white text-[var(--muted)]">
          <Bell size={18} />
        </button>

        <div className="h-11 w-11 rounded-full bg-[var(--brand-light)]" />
      </div>
    </header>
  );
}