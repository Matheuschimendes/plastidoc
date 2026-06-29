import Link from "next/link";
import {
  ClipboardList,
  FileQuestion,
  Settings,
  Stethoscope,
  Users,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const adminItems = [
  {
    title: "Cirurgias",
    description: "Cadastre e edite procedimentos disponíveis.",
    href: "/admin/surgeries",
    icon: Stethoscope,
  },
  {
    title: "Perguntas",
    description: "Configure as etapas e perguntas do fluxo.",
    href: "/admin/questions",
    icon: FileQuestion,
  },
  {
    title: "Opções",
    description: "Edite respostas e textos gerados por botão.",
    href: "/admin/options",
    icon: ClipboardList,
  },
  {
    title: "Médicos",
    description: "Gerencie usuários, acessos e permissões.",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Configurações",
    description: "Ajustes gerais do sistema e segurança.",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-[var(--primary-dark)]">
          Administração
        </h1>

        <p className="mt-2 text-[var(--muted)]">
          Gerencie a estrutura do PlastiDoc.
        </p>
      </header>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {adminItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link key={item.href} href={item.href}>
              <Card className="group h-full rounded-2xl border-[var(--border)] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-light)]">
                    <Icon size={22} className="text-[var(--brand)]" />
                  </div>

                  <CardTitle className="text-xl text-[var(--primary-dark)]">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </section>
    </div>
  );
}