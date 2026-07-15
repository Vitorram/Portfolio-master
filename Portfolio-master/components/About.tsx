"use client";

import { motion } from "framer-motion";
import { highlights } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="sobre" className="border-y border-line bg-white/[0.03] py-20">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, ease: "easeOut" }}>
          <SectionHeading eyebrow="01 / Sobre" title="Código com intenção, aprendizado constante e entrega clara." />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-5 text-lg leading-8 text-muted"
          >
            <p>
              Olá! Sou <strong className="font-semibold text-ink">Vitor Ramos</strong>, desenvolvedor full-stack e estudante de Análise e Desenvolvimento de Sistemas no IFSP Caraguatatuba.
            </p>
            <p>
              Minha evolução vem da prática: construir projetos reais, organizar melhor cada entrega e transformar ideias em produtos simples de usar.
            </p>
            <p>
              Hoje atuo como estagiário na área de TI da Prefeitura de Caraguatatuba e busco uma oportunidade como desenvolvedor júnior.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-lg border border-line bg-white/[0.04] p-5 shadow-sm backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{item.label}</p>
                <p className="mt-3 text-base font-medium leading-6 text-ink">{item.value}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
