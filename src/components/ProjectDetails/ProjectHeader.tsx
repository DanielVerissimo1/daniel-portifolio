import { ArrowLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProjectHeaderProps {
  title: string;
}

export const ProjectHeader = ({ title }: ProjectHeaderProps) => {
  const router = useRouter();

  return (
    <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
      <button
        onClick={() => router.back()}
        className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:text-[#cbacf9] hover:bg-[#cbacf9]/10 transition-all duration-300 border border-white/10 hover:border-[#cbacf9]/30 text-sm md:text-base cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Voltar</span>
      </button>
      <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-white/50">
        <span>Projetos</span>
        <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
        <span className="text-[#cbacf9] truncate">{title}</span>
      </div>
    </div>
  );
};
