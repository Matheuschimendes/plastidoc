import Link from "next/link";
import {
  Activity,
  Clock,
  FilePlus2,
  FileText,
  History,
  Settings,
  Stethoscope,
  UserRound,
} from "lucide-react";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const stats = [
  {
    title: "Descrições hoje",
    value: "12",
    icon: FileText,
  },
  {
    title: "Rascunhos",
    value: "4",
    icon: Clock,
  },
  {
    title: "Cirurgias",
    value: "2",
    icon: Stethoscope,
  },
  {
    title: "Médicos",
    value: "6",
    icon: UserRound,
  },
];

const actions = [
  {
    title: "Nova descrição",
    description: "Inicie uma descrição cirúrgica.",
    href: "/nova-descricao",
    icon: FilePlus2,
  },
  {
    title: "Histórico",
    description: "Consulte descrições geradas.",
    href: "/historico",
    icon: History,
  },
  {
    title: "Administração",
    description: "Configure cirurgias e perguntas.",
    href: "/admin",
    icon: Settings,
  },
];

const recentDescriptions = [
  {
    surgery: "Mamoplastia",
    doctor: "Dr. Gabriel",
    date: "Hoje, 14:30",
    status: "Finalizada",
  },
  {
    surgery: "Lipoaspiração",
    doctor: "Dr. Gabriel",
    date: "Hoje, 10:15",
    status: "Rascunho",
  },
  {
    surgery: "Mamoplastia",
    doctor: "Dr. Gabriel",
    date: "Ontem, 16:40",
    status: "Finalizada",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-[var(--muted)]">Bem-vindo de volta</p>

          <h1 className="mt-1 text-3xl font-bold text-[var(--primary-dark)]">
            Dashboard
          </h1>

          <p className="mt-2 text-[var(--muted)]">
            Visão geral das suas descrições cirúrgicas.
          </p>
        </div>

        <Button
          asChild
          className="h-12 rounded-xl bg-[var(--brand)] px-6 font-semibold text-white hover:bg-[var(--brand-hover)]"
        >
          <Link href="/nova-descricao">Nova descrição</Link>
        </Button>
      </header>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              className="rounded-2xl border-[var(--border)] bg-white shadow-sm"
            >
              <CardContent className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-light)]">
                  <Icon className="text-[var(--brand)]" size={22} />
                </div>

                <p className="text-3xl font-bold text-[var(--primary-dark)]">
                  {item.value}
                </p>

                <p className="mt-2 text-sm text-[var(--muted)]">
                  {item.title}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_420px]">
        <Card className="rounded-2xl border-[var(--border)] bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-[var(--primary-dark)]">
              Ações rápidas
            </CardTitle>
          </CardHeader>

          <CardContent className="grid gap-4 md:grid-cols-3">
            {actions.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-2xl border border-[var(--border)] p-5 transition hover:border-[var(--brand)] hover:bg-[var(--brand-light)]"
                >
                  <Icon className="mb-4 text-[var(--brand)]" size={24} />

                  <h3 className="font-semibold text-[var(--primary-dark)]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-[var(--border)] bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-[var(--primary-dark)]">
              Atividade recente
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <Activity className="mt-1 text-[var(--brand)]" size={18} />
              <div>
                <p className="text-sm font-semibold text-[var(--primary-dark)]">
                  Nova descrição criada
                </p>
                <p className="text-xs text-[var(--muted)]">
                  Mamoplastia — há 20 minutos
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Activity className="mt-1 text-[var(--brand)]" size={18} />
              <div>
                <p className="text-sm font-semibold text-[var(--primary-dark)]">
                  Rascunho salvo
                </p>
                <p className="text-xs text-[var(--muted)]">
                  Lipoaspiração — há 2 horas
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Activity className="mt-1 text-[var(--brand)]" size={18} />
              <div>
                <p className="text-sm font-semibold text-[var(--primary-dark)]">
                  Perfil atualizado
                </p>
                <p className="text-xs text-[var(--muted)]">
                  Hoje às 09:12
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Card className="rounded-2xl border-[var(--border)] bg-white shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl text-[var(--primary-dark)]">
            Descrições recentes
          </CardTitle>

          <Link
            href="/historico"
            className="text-sm font-semibold text-[var(--brand)]"
          >
            Ver histórico
          </Link>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            {recentDescriptions.map((item) => (
              <div
                key={`${item.surgery}-${item.date}`}
                className="flex flex-col gap-3 rounded-2xl border border-[var(--border)] p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="font-semibold text-[var(--primary-dark)]">
                    {item.surgery}
                  </h3>

                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {item.doctor} • {item.date}
                  </p>
                </div>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    item.status === "Finalizada"
                      ? "bg-green-100 text-green-700"
                      : "bg-purple-100 text-[var(--brand)]"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--brand-light)] p-5">
        <p className="text-sm leading-6 text-[var(--muted)]">
          Privacidade ativa: este dashboard exibe somente dados vinculados ao
          médico logado. O administrador terá acesso separado para gerenciar
          médicos, cirurgias, perguntas e opções.
        </p>
      </div>
    </div>
  );
}