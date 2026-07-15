"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-black/20 py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <SectionHeading eyebrow="03 / Skills" title="Stack enxuta para construir produto, API e automação." />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="divide-y divide-line border-y border-line"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <section key={group.title} className="grid gap-5 py-7 md:grid-cols-[220px_1fr] md:items-start">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white text-[#05070b]">
                    <Icon size={19} aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">{group.title}</h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="rounded-full border border-line bg-white/[0.04] px-4 py-2 text-sm font-medium text-muted transition hover:border-white/45 hover:bg-white/[0.08] hover:text-ink">
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
