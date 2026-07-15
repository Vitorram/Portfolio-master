import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { links, navItems } from "@/lib/data";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[#05070b]/85 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between gap-5">
        <Link href="#inicio" className="focus-ring rounded-md font-serif text-2xl text-ink">
          VR.
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-white/5 hover:text-ink">
              {item.label}
            </Link>
          ))}
        </div>

        <ButtonLink href={links.whatsapp} target="_blank" rel="noreferrer" className="px-4">
          <MessageCircle size={18} aria-hidden />
          Contato
        </ButtonLink>
      </nav>
    </header>
  );
}
