import { ExternalLink, Github } from "lucide-react";
import Swal from "sweetalert2";

interface ProjectActionsProps {
  liveLink: string;
  githubLink?: string;
}

const handleGithubClick = (githubLink?: string) => {
  if (githubLink === "Private") {
    Swal.fire({
      icon: "info",
      title: "Source Code Privado",
      text: "Desculpe, o código-fonte deste projeto é privado.",
      confirmButtonText: "Entendi",
      confirmButtonColor: "#cbacf9",
      background: "#000319",
      color: "#ffffff",
    });
    return false;
  }
  return true;
};

export const ProjectActions = ({ liveLink, githubLink }: ProjectActionsProps) => {
  return (
    <div className="flex flex-wrap gap-3 md:gap-4">
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-[#cbacf9] text-[#000319] rounded-xl transition-all duration-300 border border-[#cbacf9] hover:bg-[#d8c1fa] backdrop-blur-xl overflow-hidden text-sm md:text-base"
      >
        <ExternalLink className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
        <span className="relative font-medium">Ver Demo</span>
      </a>

      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-[#cbacf9]/10 text-[#cbacf9] rounded-xl transition-all duration-300 border border-[#cbacf9]/25 hover:bg-[#cbacf9]/15 hover:border-[#cbacf9]/50 backdrop-blur-xl overflow-hidden text-sm md:text-base"
        onClick={(e) => !handleGithubClick(githubLink) && e.preventDefault()}
      >
        <Github className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
        <span className="relative font-medium">Github</span>
      </a>
    </div>
  );
};
