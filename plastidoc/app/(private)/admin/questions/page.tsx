import {
  Edit,
  FileQuestion,
  GripVertical,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const questions = [
  {
    id: "1",
    order: 1,
    surgery: "Mamoplastia de aumento",
    title: "Tipo de cirurgia",
    type: "Seleção única",
    status: "Ativa",
  },
  {
    id: "2",
    order: 2,
    surgery: "Mamoplastia de aumento",
    title: "Técnica utilizada",
    type: "Seleção única",
    status: "Ativa",
  },
  {
    id: "3",
    order: 3,
    surgery: "Mamoplastia de aumento",
    title: "Solução aplicada",
    type: "Seleção única",
    status: "Ativa",
  },
  {
    id: "4",
    order: 4,
    surgery: "Mamoplastia de aumento",
    title: "Observações finais",
    type: "Texto livre",
    status: "Ativa",
  },
];

export default function AdminQuestionsPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[var(--primary-dark)]">
            Perguntas
          </h1>

          <p className="mt-2 text-[var(--muted)]">
            Configure as etapas e perguntas do fluxo de descrição.
          </p>
        </div>

        <Button className="rounded-xl bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)]">
          <Plus size={16} className="mr-2" />
          Nova pergunta
        </Button>
      </header>

      <Card className="rounded-2xl border-[var(--border)] bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-[var(--primary-dark)]">
            Perguntas cadastradas
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="mb-6 grid gap-4 md:grid-cols-[1fr_220px]">
            <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-4">
              <Search size={18} className="text-[var(--muted)]" />

              <Input
                placeholder="Buscar pergunta..."
                className="border-0 shadow-none focus-visible:ring-0"
              />
            </div>

            <button className="flex h-12 items-center justify-between rounded-xl border border-[var(--border)] bg-white px-4 text-sm font-semibold text-[var(--primary-dark)]">
              Mamoplastia
              <span className="text-[var(--muted)]">⌄</span>
            </button>
          </div>

          <div className="space-y-3">
            {questions.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] p-5 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-4">
                  <GripVertical size={18} className="text-[var(--muted)]" />

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-light)]">
                    <FileQuestion size={22} className="text-[var(--brand)]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-[var(--primary-dark)]">
                      {item.order}. {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {item.surgery} • {item.type}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
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