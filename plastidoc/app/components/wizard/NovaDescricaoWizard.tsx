"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Copy, Save } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Textarea } from "@/app/components/ui/textarea";
import { Stepper } from "@/app/components/wizard/Stepper";
import { SurgeryCard } from "@/app/components/surgery/SurgeryCard";
import { useDescription } from "@/app/providers/DescriptionProvider";
import { surgeryOptions } from "@/lib/surgeries";

const steps = [
  "Início",
  "Tipo de cirurgia",
  "Técnica utilizada",
  "Solução aplicada",
  "Materiais",
  "Fechamento",
  "Curativos",
  "Revisão",
];

type Option = {
  id: string;
  label: string;
  text: string;
};

const techniqueOptions: Option[] = [
  {
    id: "subglandular",
    label: "Plano subglandular",
    text: "A prótese foi posicionada em plano subglandular, com dissecção da loja e hemostasia rigorosa.",
  },
  {
    id: "subfascial",
    label: "Plano subfascial",
    text: "A prótese foi posicionada em plano subfascial.",
  },
  {
    id: "dual-plane",
    label: "Dual Plane",
    text: "A prótese foi posicionada em técnica Dual Plane.",
  },
];

const solutionOptions: Option[] = [
  {
    id: "antisseptica",
    label: "Solução antisséptica",
    text: "Foi realizada irrigação com solução antisséptica.",
  },
  {
    id: "adrenalina",
    label: "Solução com adrenalina",
    text: "Foi utilizada solução com adrenalina para infiltração local.",
  },
  {
    id: "klein",
    label: "Solução de Klein",
    text: "Foi realizada infiltração com solução de Klein.",
  },
];

const materialOptions: Option[] = [
  {
    id: "protese",
    label: "Prótese de silicone",
    text: "Foi utilizada prótese de silicone.",
  },
  {
    id: "canula",
    label: "Cânula 4mm",
    text: "Foi utilizada cânula de 4mm.",
  },
  {
    id: "dreno",
    label: "Dreno Portovac",
    text: "Foi utilizado dreno Portovac.",
  },
];

const closureOptions: Option[] = [
  {
    id: "camadas",
    label: "Fechamento em camadas",
    text: "O fechamento foi realizado em camadas.",
  },
  {
    id: "intradermica",
    label: "Sutura intradérmica",
    text: "Foi realizada sutura intradérmica.",
  },
  {
    id: "nylon",
    label: "Nylon",
    text: "A pele foi fechada com fio nylon.",
  },
];

const dressingOptions: Option[] = [
  {
    id: "micropore",
    label: "Micropore",
    text: "Foi aplicado curativo com micropore.",
  },
  {
    id: "compressivo",
    label: "Curativo compressivo",
    text: "Foi realizado curativo compressivo.",
  },
  {
    id: "malha",
    label: "Malha cirúrgica",
    text: "Foi orientado uso de malha cirúrgica.",
  },
];

export function NovaDescricaoWizard() {
  const [step, setStep] = useState(0);

  const {
    data,
    updateField,
    generateDescription,
    createDescriptionPayload,
  } = useDescription();

  const {
    selectedSurgery,
    selectedTechnique,
    selectedSolution,
    selectedMaterial,
    selectedClosure,
    selectedDressing,
    observations,
  } = data;

  const selectedSurgeryText =
    surgeryOptions.find((item) => item.id === selectedSurgery)?.text ?? "";

  const selectedTechniqueText =
    techniqueOptions.find((item) => item.id === selectedTechnique)?.text ?? "";

  const selectedSolutionText =
    solutionOptions.find((item) => item.id === selectedSolution)?.text ?? "";

  const selectedMaterialText =
    materialOptions.find((item) => item.id === selectedMaterial)?.text ?? "";

  const selectedClosureText =
    closureOptions.find((item) => item.id === selectedClosure)?.text ?? "";

  const selectedDressingText =
    dressingOptions.find((item) => item.id === selectedDressing)?.text ?? "";

  const preview = useMemo(() => {
    return generateDescription([
      selectedSurgeryText,
      selectedTechniqueText,
      selectedSolutionText,
      selectedMaterialText,
      selectedClosureText,
      selectedDressingText,
      observations,
    ]);
  }, [
    generateDescription,
    selectedSurgeryText,
    selectedTechniqueText,
    selectedSolutionText,
    selectedMaterialText,
    selectedClosureText,
    selectedDressingText,
    observations,
  ]);

  const canGoNext =
    step === 0 ||
    (step === 1 && selectedSurgery) ||
    (step === 2 && selectedTechnique) ||
    (step === 3 && selectedSolution) ||
    (step === 4 && selectedMaterial) ||
    (step === 5 && selectedClosure) ||
    (step === 6 && selectedDressing) ||
    step === 7;

  function nextStep() {
    if (!canGoNext) {
      toast.error("Seleção obrigatória", {
        description: "Escolha uma opção antes de continuar.",
      });

      return;
    }

    if (step < steps.length - 1) {
      setStep((current) => current + 1);
    }
  }

  function previousStep() {
    if (step > 0) {
      setStep((current) => current - 1);
    }
  }

  async function copyText() {
    if (!preview) return;

    await navigator.clipboard.writeText(preview);

    toast.success("Texto copiado", {
      description: "A descrição foi copiada para a área de transferência.",
    });
  }

  function handleSave(status: "Rascunho" | "Finalizada") {
    const generatedDescription = createDescriptionPayload(status, preview);

    console.log("Descrição gerada:", generatedDescription);

    if (status === "Rascunho") {
      toast.success("Rascunho salvo", {
        description: "Você poderá continuar esta descrição posteriormente.",
      });

      return;
    }

    toast.success("Descrição finalizada", {
      description: "A descrição foi gerada com sucesso.",
    });
  }

  function renderOptionList(
    options: Option[],
    selected: string,
    onSelect: (value: string) => void,
  ) {
    return (
      <div className="space-y-3">
        {options.map((option) => {
          const active = selected === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              className={`w-full rounded-2xl border p-5 text-left transition hover:border-[var(--brand)] hover:bg-[var(--brand-light)] ${
                active
                  ? "border-[var(--brand)] bg-[var(--brand-light)]"
                  : "border-[var(--border)] bg-white"
              }`}
            >
              <h3 className="font-bold text-[var(--primary-dark)]">
                {option.label}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {option.text}
              </p>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <section className="w-full rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
      <Stepper steps={steps} currentStep={step} />

      {step === 0 && (
        <div className="flex min-h-[420px] flex-col justify-center">
          <div className="mb-16 text-center">
            <h1 className="text-2xl font-bold text-[var(--primary-dark)]">
              Nova descrição cirúrgica
            </h1>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Preencha os passos para gerar sua descrição
            </p>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="mt-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[var(--primary-dark)]">
              1. Tipo de cirurgia
            </h2>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Selecione o tipo de cirurgia realizada
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
            {surgeryOptions.map((item) => (
              <SurgeryCard
                key={item.id}
                label={item.label}
                icon={item.icon}
                active={selectedSurgery === item.id}
                onClick={() => updateField("selectedSurgery", item.id)}
              />
            ))}
          </div>
        </div>
      )}

      {step >= 2 && step <= 7 && (
        <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_380px]">
          <Card className="rounded-2xl border-[var(--border)] shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-[var(--primary-dark)]">
                {step}. {steps[step]}
              </h2>

              <p className="mt-2 text-sm text-[var(--muted)]">
                {step === 7
                  ? "Revise a descrição antes de salvar."
                  : "Selecione uma opção para continuar."}
              </p>

              <div className="mt-6">
                {step === 2 &&
                  renderOptionList(
                    techniqueOptions,
                    selectedTechnique,
                    (value) => updateField("selectedTechnique", value),
                  )}

                {step === 3 &&
                  renderOptionList(solutionOptions, selectedSolution, (value) =>
                    updateField("selectedSolution", value),
                  )}

                {step === 4 &&
                  renderOptionList(materialOptions, selectedMaterial, (value) =>
                    updateField("selectedMaterial", value),
                  )}

                {step === 5 &&
                  renderOptionList(closureOptions, selectedClosure, (value) =>
                    updateField("selectedClosure", value),
                  )}

                {step === 6 &&
                  renderOptionList(dressingOptions, selectedDressing, (value) =>
                    updateField("selectedDressing", value),
                  )}

                {step === 7 && (
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Adicione observações finais, se necessário..."
                      value={observations}
                      onChange={(event) =>
                        updateField("observations", event.target.value)
                      }
                      className="min-h-32 rounded-2xl border-[var(--border)]"
                    />

                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--brand-light)] p-5">
                      <p className="whitespace-pre-line text-sm leading-7 text-[var(--muted)]">
                        {preview || "Nenhuma descrição gerada ainda."}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-[var(--border)] shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-bold text-[var(--primary-dark)]">
                Prévia da descrição
              </h3>

              <p className="mt-6 min-h-[280px] whitespace-pre-line text-sm leading-7 text-[var(--muted)]">
                {preview ||
                  "A descrição será montada conforme as opções forem selecionadas."}
              </p>

              <Button
                type="button"
                variant="outline"
                onClick={copyText}
                disabled={!preview}
                className="mt-6 w-full rounded-xl border-[var(--brand-border)] text-[var(--brand)]"
              >
                <Copy size={16} className="mr-2" />
                Copiar descrição
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-6">
        <Button
          type="button"
          variant="outline"
          onClick={previousStep}
          disabled={step === 0}
          className="rounded-xl"
        >
          <ArrowLeft size={16} className="mr-2" />
          Voltar
        </Button>

        {step < steps.length - 1 ? (
          <Button
            type="button"
            onClick={nextStep}
            disabled={!canGoNext}
            className="rounded-xl bg-[var(--brand)] px-8 text-white hover:bg-[var(--brand-hover)]"
          >
            Próximo
            <ArrowRight size={16} className="ml-2" />
          </Button>
        ) : (
          <div className="flex flex-col gap-3 md:flex-row">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleSave("Rascunho")}
              disabled={!preview}
              className="rounded-xl border-[var(--brand-border)] text-[var(--brand)]"
            >
              <Save size={16} className="mr-2" />
              Salvar rascunho
            </Button>

            <Button
              type="button"
              onClick={() => handleSave("Finalizada")}
              disabled={!preview}
              className="rounded-xl bg-[var(--brand)] px-8 text-white hover:bg-[var(--brand-hover)]"
            >
              Finalizar descrição
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}