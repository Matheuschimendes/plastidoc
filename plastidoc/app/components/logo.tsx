export function Logo() {
  return (
    <div className="mb-10 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand)] text-xl">
          ♧
        </div>

        <div>
          <h1 className="text-lg font-bold">PlastiDoc</h1>
          <p className="text-xs text-white/60">Painel médico</p>
        </div>
      </div>
  );
}