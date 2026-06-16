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
      confirmButtonColor: "#3085d6",
      background: "#030014",
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
        className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-300 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
      >
        <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-blue-600/10 to-purple-600/10 transition-transform duration-300 group-hover:translate-y-[0%] w-full" />
        <ExternalLink className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
        <span className="relative font-medium">Ver Demo</span>
      </a>

      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
        onClick={(e) => !handleGithubClick(githubLink) && e.preventDefault()}
      >
        <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-purple-600/10 to-pink-600/10 transition-transform duration-300 group-hover:translate-y-[0%] w-full" />
        <Github className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
        <span className="relative font-medium">Github</span>
      </a>
    </div>
  );
};
