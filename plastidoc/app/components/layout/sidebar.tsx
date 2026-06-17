import Link from "next/link";
import { FileText, History, Settings, Users, LayoutDashboard } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="min-h-screen w-72 bg-[var(--primary-dark)] p-6 text-white">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand)] text-xl">
          ♧
        </div>

        <div>
          <h1 className="text-lg font-bold">PlastiDoc</h1>
          <p className="text-xs text-white/60">Painel médico</p>
        </div>
      </div>

      <nav className="space-y-2">
        <Link href="/dashboard" className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm">
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link href="/descriptions/new" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/10">
          <FileText size={18} />
          Nova descrição
        </Link>

        <Link href="/historico" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/10">
          <History size={18} />
          Histórico
        </Link>

        <Link href="/admin" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/10">
          <Settings size={18} />
          Administração
        </Link>

        <Link href="/admin/users" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/10">
          <Users size={18} />
          Médicos
        </Link>
      </nav>
    </aside>
  );
}