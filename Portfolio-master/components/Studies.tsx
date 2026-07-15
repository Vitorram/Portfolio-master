"use client";

import { motion } from "framer-motion";
import { certificates } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Studies() {
  return (
    <section id="estudos" className="py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <SectionHeading eyebrow="04 / Estudos" title="Base técnica em evolução contínua." />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="border-y border-line"
        >
          {certificates.map((certificate) => {
            const Icon = certificate.icon;
            return (
              <section key={certificate.title} className="grid gap-5 border-b border-line py-7 last:border-b-0 md:grid-cols-[220px_1fr_auto] md:items-center">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white text-[#05070b]">
                    <Icon size={19} aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{certificate.school}</span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl leading-tight text-ink">{certificate.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{certificate.detail}</p>
                </div>

                <span className="w-fit rounded-full border border-line bg-white/[0.04] px-3 py-1 text-xs font-bold text-ink">
                  {certificate.hours}
                </span>
              </section>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
