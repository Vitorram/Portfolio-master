import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ children, className = "", variant = "primary", ...props }: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-white text-[#031018] hover:-translate-y-0.5 hover:bg-white/85"
      : "border border-line bg-white/5 text-ink hover:-translate-y-0.5 hover:border-white hover:bg-white/10";

  return (
    <Link
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold shadow-sm ${styles} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
