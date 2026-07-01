import { Edit, Plus, Search, Stethoscope, Trash2 } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const surgeries = [
  {
    id: "1",
    name: "Mamoplastia de aumento",
    status: "Ativa",
    questions: 8,
  },
  {
    id: "2",
    name: "Mamoplastia redutora",
    status: "Ativa",
    questions: 8,
  },
  {
    id: "3",
    name: "Lipoaspiração",
    status: "Ativa",
    questions: 8,
  },
  {
    id: "4",
    name: "Abdominoplastia",
    status: "Rascunho",
    questions: 0,
  },
];

export default function AdminSurgeriesPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[var(--primary-dark)]">
            Cirurgias
          </h1>

          <p className="mt-2 text-[var(--muted)]">
            Cadastre e edite os procedimentos disponíveis no fluxo.
          </p>
        </div>

        <Button className="rounded-xl bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)]">
          <Plus size={16} className="mr-2" />
          Nova cirurgia
        </Button>
      </header>

      <Card className="rounded-2xl border-[var(--border)] bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-[var(--primary-dark)]">
            Procedimentos cadastrados
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="mb-6 flex max-w-md items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-4">
            <Search size={18} className="text-[var(--muted)]" />
            <Input
              placeholder="Buscar cirurgia..."
              className="border-0 shadow-none focus-visible:ring-0"
            />
          </div>

          <div className="space-y-3">
            {surgeries.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] p-5 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-light)]">
                    <Stethoscope size={22} className="text-[var(--brand)]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-[var(--primary-dark)]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {item.questions} perguntas configuradas
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.status === "Ativa"
                        ? "bg-green-100 text-green-700"
                        : "bg-purple-100 text-[var(--brand)]"
                    }`}
                  >
                    {item.status}
                  </span>

                  <Button variant="outline" size="icon" className="rounded-xl">
                    <Edit size={16} />
                  </Button>

                  <Button variant="outline" size="icon" className="rounded-xl">
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}