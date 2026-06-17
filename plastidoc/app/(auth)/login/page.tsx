export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] p-6">
      <section className="grid min-h-[680px] w-full max-w-6xl grid-cols-1 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-sm lg:grid-cols-2">
        <div className="relative hidden flex-col justify-center px-24 lg:flex">
          <div className="mb-10 flex items-center gap-4">
            <div className="text-5xl font-light text-[#7C3AED]">♧</div>

            <h1 className="font-serif text-5xl text-[var(--primary-dark)]">
              PlastiDoc
            </h1>
          </div>

          <p className="max-w-xs text-xl leading-relaxed text-[var(--muted)]">
            Descrições cirúrgicas inteligentes para sua prática.
          </p>

          <div className="absolute right-12 top-40 h-[470px] w-[220px]">
            <div className="absolute left-24 top-0 h-[180px] w-[80px] rounded-full border-l border-[var(--primary-dark)]" />
            <div className="absolute left-20 top-[110px] h-[260px] w-[120px] rounded-full border-l border-[var(--primary-dark)]" />
            <div className="absolute left-[72px] top-48 h-[250px] w-[140px] rounded-full border-r border-[var(--primary-dark)]" />
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md rounded-3xl border border-[#EEF0F5] bg-[var(--card)] p-10 shadow-[0_20px_60px_rgba(28,30,90,0.08)]">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Bem-vindo de volta
              </h2>

              <p className="mt-2 text-sm text-[var(--muted)]">
                Faça login para continuar
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                  E-mail
                </label>

                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="h-12 w-full rounded-xl border border-[var(--input-border)] px-4 text-sm outline-none transition focus:border-[var(--brand)]"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold text-[var(--foreground)]">
                    Senha
                  </label>

                  <a
                    href="#"
                    className="text-xs font-medium text-[var(--brand)]"
                  >
                    Esqueci minha senha
                  </a>
                </div>

                <input
                  type="password"
                  placeholder="********"
                  className="h-12 w-full rounded-xl border border-[var(--input-border)] px-4 text-sm outline-none transition focus:border-[var(--brand)]"
                />
              </div>

              <button
                type="button"
                className="h-12 w-full rounded-xl bg-[var(--brand)] font-semibold text-white shadow-sm transition hover:bg-[var(--brand-hover)]"
              >
                Entrar
              </button>

              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-[var(--border)]" />
                <span className="text-sm text-[var(--muted)]">ou</span>
                <div className="h-px flex-1 bg-[var(--border)]" />
              </div>

              <button
                type="button"
                className="h-12 w-full rounded-xl border border-[var(--brand-border)] font-semibold text-[var(--brand)] transition hover:bg-[var(--brand-light)]"
              >
                Entrar com 2FA
              </button>
            </form>

            <p className="mt-10 text-center text-sm leading-relaxed text-[var(--muted)]">
              Segurança e praticidade para <br />
              seu dia a dia cirúrgico.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}