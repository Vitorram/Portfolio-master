"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Download, MessageCircle } from "lucide-react";
import Image from "next/image";
import { links } from "@/lib/data";
import { ButtonLink } from "./ButtonLink";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export function Hero() {
  return (
    <section id="inicio" className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
      <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }}>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-2 text-sm font-medium text-muted shadow-sm backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.14)]" />
          Disponível para projetos
        </motion.p>

        <motion.h1 variants={fadeUp} transition={{ duration: 0.65, ease: "easeOut" }} className="mt-7 max-w-3xl font-serif text-6xl leading-[0.96] text-ink sm:text-7xl lg:text-8xl">
          Vitor Ramos
        </motion.h1>

        <motion.p variants={fadeUp} transition={{ duration: 0.65, ease: "easeOut" }} className="mt-6 max-w-2xl text-xl leading-8 text-muted">
          Desenvolvedor full-stack que constrói interfaces limpas, APIs organizadas e automações úteis para problemas reais.
        </motion.p>

        <motion.div variants={fadeUp} transition={{ duration: 0.65, ease: "easeOut" }} className="mt-9 flex flex-wrap items-center gap-3">
          <ButtonLink href={links.cv} download>
            <Download size={18} aria-hidden />
            Baixar CV
          </ButtonLink>
          <ButtonLink href={links.whatsapp} target="_blank" rel="noreferrer" variant="secondary">
            <MessageCircle size={18} aria-hidden />
            Conversar
          </ButtonLink>
          <ButtonLink href={links.github} target="_blank" rel="noreferrer" variant="secondary" aria-label="GitHub de Vitor Ramos">
            <Code2 size={18} aria-hidden />
          </ButtonLink>
          <ButtonLink href={links.linkedin} target="_blank" rel="noreferrer" variant="secondary" aria-label="LinkedIn de Vitor Ramos">
            <BriefcaseBusiness size={18} aria-hidden />
          </ButtonLink>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
        className="mx-auto w-full max-w-[360px] lg:mr-0"
      >
        <motion.div
          whileHover={{ scale: 1.025, rotate: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="relative aspect-square overflow-hidden rounded-full border-[10px] border-[#111827] bg-[#111827] shadow-soft ring-1 ring-white/25"
        >
          <Image src="/images/profile.jpg" alt="Vitor Ramos" fill priority sizes="(min-width: 1024px) 360px, 80vw" className="object-cover object-center" />
        </motion.div>
      </motion.div>
    </section>
  );
}
