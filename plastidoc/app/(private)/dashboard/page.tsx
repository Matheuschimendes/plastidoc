import { FileText, History, Settings, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--primary-dark)]">
          Dashboard
        </h1>
        <p className="mt-2 text-[var(--muted)]">
          Visão geral do sistema PlastiDoc.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <FileText className="mb-4 text-[var(--brand)]" />
          <h3 className="font-semibold text-[var(--primary-dark)]">
            Nova descrição
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Inicie uma nova descrição cirúrgica.
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <History className="mb-4 text-[var(--brand)]" />
          <h3 className="font-semibold text-[var(--primary-dark)]">
            Histórico
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Consulte descrições já geradas.
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <Users className="mb-4 text-[var(--brand)]" />
          <h3 className="font-semibold text-[var(--primary-dark)]">
            Médicos
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Gerencie usuários do sistema.
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
          <Settings className="mb-4 text-[var(--brand)]" />
          <h3 className="font-semibold text-[var(--primary-dark)]">
            Administração
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Configure cirurgias, perguntas e opções.
          </p>
        </div>
      </div>
    </div>
  );
}