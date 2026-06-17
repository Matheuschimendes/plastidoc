export function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-[var(--border)] bg-white px-8">
      <div>
        <h2 className="text-xl font-bold text-[var(--primary-dark)]">
          Painel
        </h2>
        <p className="text-sm text-[var(--muted)]">
          Gerencie suas descrições cirúrgicas
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-semibold text-[var(--foreground)]">
            Dr. Administrador
          </p>
          <p className="text-xs text-[var(--muted)]">Admin</p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-light)] text-sm font-bold text-[var(--brand)]">
          DA
        </div>
      </div>
    </header>
  );
}