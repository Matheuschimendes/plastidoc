"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ClipboardList,
  FileText,
  History,
  LayoutDashboard,
  LogOut,
  Settings,
  ShieldCheck,
  Stethoscope,
  UserCircle,
  Users,
} from "lucide-react";

import { Logo } from "../logo";

const mainMenu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Nova descrição",
    href: "/descriptions/new",
    icon: FileText,
  },
  {
    title: "Minhas descrições",
    href: "/descriptions",
    icon: History,
  },
];

const adminMenu = [
  {
    title: "Cirurgias",
    href: "/admin/surgeries",
    icon: Stethoscope,
  },
  {
    title: "Perguntas",
    href: "/admin/questions",
    icon: ClipboardList,
  },
  {
    title: "Médicos",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Configurações",
    href: "/admin/settings",
    icon: Settings,
  },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-72 shrink-0 flex-col overflow-hidden bg-[var(--primary-dark)] text-white">
      <div className="border-b border-white/10 px-6 py-6">
        <Logo />
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand)]">
              <ShieldCheck size={22} />
            </div>

            <div>
              <p className="text-sm font-semibold">Acesso seguro</p>
              <p className="text-xs text-white/55">2FA ativo</p>
            </div>
          </div>
        </div>

        <SidebarSection title="Sistema">
          {mainMenu.map((item) => (
            <SidebarItem
              key={item.href}
              {...item}
              active={isActive(pathname, item.href)}
            />
          ))}
        </SidebarSection>

        <div className="my-8 border-t border-white/10" />

        <SidebarSection title="Administração">
          {adminMenu.map((item) => (
            <SidebarItem
              key={item.href}
              {...item}
              active={isActive(pathname, item.href)}
            />
          ))}
        </SidebarSection>
      </div>

      <div className="border-t border-white/10 p-4">
        <Link
          href="/profile"
          className="mb-3 flex items-center gap-3 rounded-2xl bg-white/[0.06] p-3 transition hover:bg-white/10"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
            <UserCircle size={26} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">Dr. Gabriel</p>
            <p className="truncate text-xs text-white/55">
              gabriel@email.com
            </p>
          </div>
        </Link>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white/70 transition hover:border-red-400/40 hover:bg-red-500 hover:text-white">
          <LogOut size={18} />
          Sair
        </button>
      </div>
    </aside>
  );
}

function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span className="mb-3 block px-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
        {title}
      </span>

      <nav className="space-y-1.5">{children}</nav>
    </div>
  );
}

function SidebarItem({
  title,
  href,
  icon: Icon,
  active,
}: {
  title: string;
  href: string;
  icon: React.ElementType;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
        active
          ? "bg-white text-[var(--primary-dark)] shadow-lg"
          : "text-white/70 hover:bg-white/10 hover:text-white"
      }`}
    >
      {active && (
        <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-[var(--brand)]" />
      )}

      <Icon
        size={18}
        className={
          active
            ? "text-[var(--brand)]"
            : "text-white/60 group-hover:text-white"
        }
      />

      <span>{title}</span>
    </Link>
  );
}