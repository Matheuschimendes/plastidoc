import { Calendar, MoreHorizontal, Search } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

const descriptions = [
  {
    id: "1",
    title: "Mamoplastia de aumento",
    date: "20/04/2024 • 14:30",
    status: "Finalizada",
  },
  {
    id: "2",
    title: "Lipoaspiração HD",
    date: "18/04/2024 • 10:15",
    status: "Finalizada",
  },
  {
    id: "3",
    title: "Abdominoplastia",
    date: "15/04/2024 • 16:45",
    status: "Rascunho",
  },
];

export default function DescriptionsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--primary-dark)]">
          Minhas descrições
        </h1>

        <p className="mt-2 text-[var(--muted)]">
          Consulte descrições criadas somente pelo médico logado.
        </p>
      </div>

      <div className="mb-5 grid gap-4 md:grid-cols-[1fr_220px_220px]">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
          />

          <Input
            placeholder="Buscar descrição..."
            className="h-12 rounded-xl border-[var(--border)] pl-11"
          />
        </div>

        <button className="flex h-12 items-center justify-between rounded-xl border border-[var(--border)] bg-white px-4 text-sm font-semibold text-[var(--primary-dark)]">
          Todos os status
          <span className="text-[var(--muted)]">⌄</span>
        </button>

        <button className="flex h-12 items-center justify-between rounded-xl border border-[var(--border)] bg-white px-4 text-sm font-semibold text-[var(--primary-dark)]">
          <span className="flex items-center gap-2">
            <Calendar size={16} />
            Mais recente
          </span>
          <span className="text-[var(--muted)]">⌄</span>
        </button>
      </div>

      <div className="space-y-4">
        {descriptions.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-white px-6 py-5 shadow-sm"
          >
            <div>
              <h3 className="font-bold text-[var(--primary-dark)]">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-[var(--muted)]">
                {item.date}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <span
                className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                  item.status === "Finalizada"
                    ? "bg-green-100 text-green-700"
                    : "bg-purple-100 text-[var(--brand)]"
                }`}
              >
                {item.status}
              </span>

              <Button variant="ghost" size="icon">
                <MoreHorizontal size={20} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}