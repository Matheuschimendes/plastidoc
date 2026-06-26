import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import Link from "next/link";

export default function TwoFactorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] p-6">
      <section className="relative flex min-h-[620px] w-full max-w-3xl items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
        <Link
          href="/login"
          className="absolute left-8 top-8 text-2xl text-[var(--primary-dark)]"
        >
          ←
        </Link>

        <div className="w-full max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-light)] text-3xl text-[var(--brand)]">
            ⛨
          </div>

          <h1 className="text-2xl font-bold text-[var(--foreground)]">
            Verificação em duas etapas
          </h1>

          <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[var(--muted)]">
            Abra seu aplicativo autenticador e escaneie o QR Code abaixo ou
            insira o código de verificação.
          </p>

          <div className="mx-auto mt-8 flex h-40 w-40 items-center justify-center rounded-2xl border border-[var(--border)] bg-white">
            <div className="grid h-32 w-32 grid-cols-5 gap-1">
              {Array.from({ length: 25 }).map((_, index) => (
                <span
                  key={index}
                  className={`rounded-sm ${
                    index % 2 === 0 || index % 7 === 0
                      ? "bg-black"
                      : "bg-gray-100"
                  }`}
                />
              ))}
            </div>
          </div>

          <form className="mt-8 space-y-5 text-left">
            <div>
              <Label className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                Código de verificação
              </Label>

              <Input
                type="text"
                placeholder="123 456"
                maxLength={7}
                className="h-12 rounded-xl border-[var(--input-border)] px-4 text-center text-sm tracking-[0.4em] focus-visible:border-[var(--brand)] focus-visible:ring-0"
              />
            </div>

            <Button
              type="button"
              className="h-12 w-full rounded-xl bg-[var(--brand)] font-semibold text-white hover:bg-[var(--brand-hover)]"
            >
              Verificar
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-[var(--muted)]">
            Não consegue acessar?
          </p>

          <button className="mt-1 text-sm font-semibold text-[var(--brand)]">
            Use um código de recuperação
          </button>
        </div>
      </section>
    </main>
  );
}