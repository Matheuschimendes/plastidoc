import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl text-primary">♧</div>

            <h1 className="font-serif text-2xl text-primary-dark">PlastiDoc</h1>
          </div>

          <Link
            href="/login"
            className="rounded-xl bg-primary px-5 py-3 font-medium text-white transition-all duration-200 hover:bg-primary-hover"
          >
            Entrar
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-purple-50 px-4 py-2 text-sm text-primary">
              Plataforma para Cirurgiões Plásticos
            </span>

            <h2 className="mt-8 text-6xl font-bold leading-tight text-primary-dark">
              Descrições cirúrgicas em minutos.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-muted">
              Padronize seus registros cirúrgicos, reduza o tempo de
              preenchimento e mantenha um histórico organizado de todos os
              procedimentos.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/login"
                className="rounded-xl bg-primary px-6 py-4 font-semibold text-white transition-all duration-200 hover:bg-primary-hover"
              >
                Acessar Sistema
              </Link>

              <button className="rounded-xl border border-border px-6 py-4 font-medium text-primary-dark transition-all duration-200 hover:bg-slate-50">
                Saiba Mais
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg rounded-[var(--radius-xl)] bg-card p-8 shadow-[var(--shadow-lg)]">
              <div className="mb-6 h-4 w-40 rounded bg-border" />

              <div className="mb-4 h-16 rounded-xl bg-purple-50" />

              <div className="mb-4 h-16 rounded-xl bg-purple-50" />

              <div className="h-16 rounded-xl bg-primary" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
