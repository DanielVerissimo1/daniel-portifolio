import { Code2, Layers } from "lucide-react";
import { Project } from "@/data/Projetos";

export const ProjectStats = ({ project }: { project: Project }) => {
  const techStackCount = project?.TechStack?.length || 0;
  const featuresCount = project?.Features?.length || 0;

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-white/[0.06] 
    rounded-xl overflow-hidden relative">
     
      <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-[#cbacf9]/20 transition-all duration-300 hover:scale-105 hover:border-[#cbacf9]/50">
        <div className="bg-[#cbacf9]/15 p-1.5 md:p-2 rounded-full">
          <Code2 className="text-[#cbacf9] w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-white">{techStackCount}</div>
          <div className="text-[10px] md:text-xs text-gray-400">Total Tecnologias</div>
        </div>
      </div>

      <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-[#cbacf9]/20 transition-all duration-300 hover:scale-105 hover:border-[#cbacf9]/50">
        <div className="bg-[#cbacf9]/15 p-1.5 md:p-2 rounded-full">
          <Layers className="text-[#cbacf9] w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-white">{featuresCount}</div>
          <div className="text-[10px] md:text-xs text-gray-400">Recursos Principais</div>
        </div>
      </div>
    </div>
  );
};
