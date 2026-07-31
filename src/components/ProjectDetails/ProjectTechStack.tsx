import { Code2 } from "lucide-react";
import { TechBadge } from "./TechBadge";

interface ProjectTechStackProps {
  techStack: string[];
}

export const ProjectTechStack = ({ techStack }: ProjectTechStackProps) => {
  return (
    <div className="space-y-4 md:space-y-6">
      <h3 className="text-lg md:text-xl font-semibold text-white/90 mt-[3rem] md:mt-0 flex items-center gap-2 md:gap-3">
        <Code2 className="w-4 h-4 md:w-5 md:h-5 text-[#cbacf9]" />
        Tecnologias Utilizadas
      </h3>
      {techStack.length > 0 ? (
        <div className="flex flex-wrap gap-2 md:gap-3">
          {techStack.map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
        </div>
      ) : (
        <p className="text-sm md:text-base text-gray-400 opacity-50">
          Nenhuma tecnologia adicionada.
        </p>
      )}
    </div>
  );
};
