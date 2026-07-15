import { Cloud, Code2, Database, Server, Sparkles, Wrench } from "lucide-react";

export const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#skills", label: "Skills" },
  { href: "#estudos", label: "Estudos" }
];

export const links = {
  whatsapp: "https://wa.me/12991140590",
  github: "https://github.com/Vitorram",
  linkedin: "https://www.linkedin.com/in/vitor-ramos-menezes-a584291b0",
  email: "mailto:vitorramosmeneses11@gmail.com",
  cv: "/documents/curriculo.pdf"
};

export const highlights = [
  { label: "Formação", value: "ADS no IFSP Caraguatatuba" },
  { label: "Experiência", value: "Estágio em TI na Prefeitura de Caraguatatuba" },
  { label: "Foco", value: "React, Next.js, APIs e automações" },
  { label: "Localização", value: "Caraguatatuba, SP" }
];

export const projects = [
  {
    title: "Portfólio Pessoal",
    description: "Site pessoal reconstruído com foco em performance, leitura clara e apresentação objetiva da trajetória.",
    image: "/images/portfolio.png",
    video: "/videos/portifolio.mp4",
    tags: ["Next.js", "Tailwind", "React"],
    href: "https://github.com/Vitorram/Portfolio"
  },
  {
    title: "Projeto prefeitura de Caragutatuba, Hackathon IFSP - 2026",
    description: "API REST para controle de equipamentos, mapeamento de fluxo e análise de dados, para relatórios.",
    image: "/images/dashboard.png",
    video: "/videos/dashboard.mp4",
    tags: ["Node.js", "Express", "MySQL"],
    href: "https://github.com/Vitorram/Back-end-Hackthon"
  },
  {
    title: "JEEP CLUBE TAMOIOS",
    description: "Aplicação web para gerenciamento de membros, eventos e comunicação do clube de jipeiros.",
    image: "/images/jeep.png",
    video: "/videos/jeep.mp4",
    tags: ["Python", "FastAPI", "Gemini API"],
    href: "https://github.com/Jeep-Club/front-end-web-application"
  }
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Python", "FastAPI", "Node.js", "Express", "REST APIs"]
  },
  {
    title: "Dados",
    icon: Database,
    skills: ["MySQL", "Prisma ORM", "openpyxl", "Modelagem básica"]
  },
  {
    title: "Ferramentas",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "VS Code", "Terminal"]
  }
];

export const certificates = [
  {
    title: "AWS Cloud Foundation",
    school: "AWS Academy",
    hours: "Cloud",
    detail: "Fundamentos de computação em nuvem, serviços AWS, segurança e arquitetura básica.",
    icon: Cloud
  },
  {
    title: "Inglês Intermediário",
    school: "Udemy",
    hours: "60h",
    detail: "Leitura técnica e comunicação em evolução.",
    icon: Sparkles
  },
  {
    title: "React Native Intro",
    school: "Rocketseat",
    hours: "10h",
    detail: "Fundamentos mobile, componentes e navegação.",
    icon: Code2
  }
];
