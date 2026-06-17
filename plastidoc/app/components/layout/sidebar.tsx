import Link from "next/link";
import { FileText, History, Settings, Users, LayoutDashboard } from "lucide-react";
import { Logo } from "../logo";

export function Sidebar() {
  return (
    <aside className="min-h-screen w-72 bg-[var(--primary-dark)] p-6 text-white">
      <Logo />
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