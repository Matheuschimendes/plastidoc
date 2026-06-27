interface StepperProps {
  steps: string[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex items-start justify-between gap-3">
      {steps.map((step, index) => (
        <div key={step} className="flex flex-1 flex-col items-center">
          <div className="flex w-full items-center">
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
                index <= currentStep
                  ? "border-[var(--brand)] bg-[var(--brand)] text-white"
                  : "border-[var(--border)] bg-white text-[var(--muted)]"
              }`}
            >
              {index + 1}
            </div>

            {index < steps.length - 1 && (
              <div className="mx-2 h-px flex-1 bg-[var(--border)]" />
            )}
          </div>

          <span
            className={`mt-2 text-center text-[11px] font-semibold ${
              index === currentStep
                ? "text-[var(--primary-dark)]"
                : "text-[var(--muted)]"
            }`}
          >
            {step}
          </span>
        </div>
      ))}
    </div>
  );
}