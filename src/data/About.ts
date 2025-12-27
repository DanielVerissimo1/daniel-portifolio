import { Heart, Code, Globe } from 'lucide-react';

export interface StatData {
  icon: React.ElementType;
  color: string;
  label: string;
  description: string;
  animation: string;
}

export const statsData: StatData[] = [
  {
    icon: Heart,
    color: "from-[#6366f1] to-[#a855f7]",
    label: "Paixão",
    description: "Gerar valor por meio da tecnologia, explorando ideias, lendo livros, fazendo pesquisas e criando interfaces que conectam e inspiram.",
    animation: "fade-right"
  },
  {
    icon: Code,
    color: "from-[#a855f7] to-[#6366f1]",
    label: "Metodologia",
    description: "Prática de metodologias ágeis, como Scrum e Kanban, com foco em entregas contínuas e eficientes, priorizando código limpo e de fácil manutenção.", 
    animation: "fade-up"
  },
  {
    icon: Globe,
    color: "from-[#6366f1] to-[#a855f7]",
    label: "Localização",
    description: "Atualmente moro em Amontada-CE",
    animation: "fade-left"
  },
];