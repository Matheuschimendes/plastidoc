import Link from "next/link";

const surgeries = [
  {
    name: "Mamoplastia",
    description: "Gere descrições para procedimentos mamários.",
    href: "/descriptions/new/mamoplastia",
  },
  {
    name: "Lipoaspiração",
    description: "Gere descrições para procedimentos de lipoaspiração.",
    href: "/descriptions/new/lipoaspiracao",
  },
];

export default function NewDescriptionPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--primary-dark)]">
          Nova descrição
        </h1>
        <p className="mt-2 text-[var(--muted)]">
          Selecione o procedimento para iniciar o preenchimento.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {surgeries.map((surgery) => (
          <Link
            key={surgery.name}
            href={surgery.href}
            className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-light)] text-2xl text-[var(--brand)]">
              ♧
            </div>

            <h2 className="text-xl font-bold text-[var(--primary-dark)]">
              {surgery.name}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {surgery.description}
            </p>

            <div className="mt-8 text-sm font-semibold text-[var(--brand)]">
              Iniciar descrição →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}