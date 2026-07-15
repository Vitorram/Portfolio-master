"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Maximize2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { links, projects } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

type Project = (typeof projects)[number];

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setPreviewProject(null);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function goToProject(index: number) {
    const track = trackRef.current;
    const nextIndex = Math.max(0, Math.min(index, projects.length - 1));
    const card = track?.children[nextIndex] as HTMLElement | undefined;

    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveProject(nextIndex);
  }

  function updateActiveProject() {
    const track = trackRef.current;
    if (!track) return;

    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    const cards = Array.from(track.children) as HTMLElement[];
    const closest = cards.reduce(
      (best, card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(trackCenter - cardCenter);
        return distance < best.distance ? { index, distance } : best;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY }
    );

    setActiveProject((current) => (current === closest.index ? current : closest.index));
  }

  return (
    <section id="projetos" className="border-y border-line bg-black/20 py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <SectionHeading eyebrow="02 / Projetos" title="Projetos selecionados com foco em clareza e aplicação real." />

          <Link
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mb-10 inline-flex w-fit items-center gap-2 rounded-lg border border-line bg-white/5 px-4 py-2 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
          >
            Ver GitHub
            <ExternalLink size={16} aria-hidden />
          </Link>
        </motion.div>

        <div className="-mt-4 mb-6 flex items-center justify-between gap-4 md:hidden">
          <div className="flex gap-2">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                aria-label={`Ir para ${project.title}`}
                onClick={() => goToProject(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeProject === index ? "w-8 bg-white" : "w-2.5 bg-line hover:bg-muted"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Projeto anterior"
              onClick={() => goToProject(activeProject - 1)}
              disabled={activeProject === 0}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white/5 text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
            >
              <ArrowLeft size={18} aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Próximo projeto"
              onClick={() => goToProject(activeProject + 1)}
              disabled={activeProject === projects.length - 1}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white/5 text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
            >
              <ArrowRight size={18} aria-hidden />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={updateActiveProject}
          className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-3 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group flex w-[86vw] max-w-[400px] shrink-0 snap-start flex-col overflow-hidden rounded-lg border border-line bg-white/[0.04] shadow-sm backdrop-blur transition-colors hover:border-white/50 hover:bg-white/[0.07] hover:shadow-soft md:w-auto md:max-w-none"
            >
              <button
                type="button"
                onClick={() => setPreviewProject(project)}
                className="focus-ring relative block aspect-[16/11] overflow-hidden bg-[#101827] text-left"
                aria-label={`Ver ${project.title} em tamanho maior`}
              >
                <Image
                  src={project.image}
                  alt={`Prévia do projeto ${project.title}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 86vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                {project.video ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={(event) => {
                      event.currentTarget.muted = true;
                      event.currentTarget.volume = 0;
                    }}
                    onVolumeChange={(event) => {
                      event.currentTarget.muted = true;
                      event.currentTarget.volume = 0;
                    }}
                    onError={(event) => {
                      event.currentTarget.remove();
                    }}
                  />
                ) : null}
                <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-ink shadow-sm backdrop-blur">
                  Projeto {String(index + 1).padStart(2, "0")}
                </span>
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#031018] shadow-sm">
                  <Maximize2 size={14} aria-hidden />
                  Ver maior
                </span>
              </button>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-5 font-serif text-2xl leading-tight text-ink">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{project.description}</p>

                <Link
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#031018] transition hover:-translate-y-0.5 hover:bg-white/85"
                >
                  Abrir projeto
                  <ExternalLink size={16} aria-hidden />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {previewProject ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Prévia ampliada de ${previewProject.title}`}
              className="relative w-full max-w-5xl overflow-hidden rounded-xl border border-line bg-[#070a10] shadow-soft"
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
                <div>
                  <h3 className="font-serif text-2xl text-ink">{previewProject.title}</h3>
                  <p className="text-sm text-muted">{previewProject.video ? "Vídeo do projeto" : "Imagem do projeto"}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewProject(null)}
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white/5 text-ink transition hover:bg-white/10"
                  aria-label="Fechar prévia"
                >
                  <X size={18} aria-hidden />
                </button>
              </div>

              <div className="relative aspect-video bg-black">
                {previewProject.video ? (
                  <video
                    className="h-full w-full object-contain"
                    src={previewProject.video}
                    controls
                    autoPlay
                    muted
                    playsInline
                    onLoadedMetadata={(event) => {
                      event.currentTarget.muted = true;
                      event.currentTarget.volume = 0;
                    }}
                    onVolumeChange={(event) => {
                      event.currentTarget.muted = true;
                      event.currentTarget.volume = 0;
                    }}
                  />
                ) : (
                  <Image src={previewProject.image} alt={`Prévia ampliada do projeto ${previewProject.title}`} fill sizes="90vw" className="object-contain" />
                )}
              </div>

              <div className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-2xl text-sm leading-6 text-muted">{previewProject.description}</p>
                <Link
                  href={previewProject.href}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#031018] transition hover:bg-white/85"
                >
                  Abrir projeto
                  <ExternalLink size={16} aria-hidden />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
