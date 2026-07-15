"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { links } from "@/lib/data";
import { ButtonLink } from "./ButtonLink";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#03050a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-shell py-16"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Vamos construir algo juntos?</h2>
          <p className="mt-4 text-base leading-7 text-white/70">Aberto a estágios, freelas e projetos colaborativos.</p>
          <ButtonLink href={links.whatsapp} target="_blank" rel="noreferrer" className="mt-7">
            <MessageCircle size={18} aria-hidden />
            Falar no WhatsApp
          </ButtonLink>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/15 pt-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Vitor Ramos</span>
          <div className="flex items-center gap-4">
            <Link href={links.email} className="focus-ring rounded-md p-1 hover:text-accent" aria-label="Enviar email">
              <Mail size={18} aria-hidden />
            </Link>
            <Link href={links.github} target="_blank" rel="noreferrer" className="focus-ring rounded-md p-1 hover:text-accent" aria-label="GitHub">
              <Code2 size={18} aria-hidden />
            </Link>
            <Link href={links.linkedin} target="_blank" rel="noreferrer" className="focus-ring rounded-md p-1 hover:text-accent" aria-label="LinkedIn">
              <BriefcaseBusiness size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
