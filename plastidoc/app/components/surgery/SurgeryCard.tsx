import Image from "next/image";

interface SurgeryCardProps {
  label: string;
  icon: string;
  active?: boolean;
  onClick: () => void;
}

export function SurgeryCard({
  label,
  icon,
  active,
  onClick,
}: SurgeryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-36 flex-col items-center justify-center rounded-2xl border p-4 text-center transition hover:-translate-y-1 hover:border-[var(--brand)] hover:bg-[var(--brand-light)] hover:shadow-md ${
        active
          ? "border-[var(--brand)] bg-[var(--brand-light)]"
          : "border-[var(--border)] bg-white"
      }`}
    >
      <Image
        src={icon}
        alt={label}
        width={54}
        height={54}
        className="mb-4"
      />

      <span className="text-sm font-bold text-[var(--primary-dark)]">
        {label}
      </span>
    </button>
  );
}