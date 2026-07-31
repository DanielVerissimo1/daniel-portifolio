"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toSlug } from "@/lib/slug";
import { projects, Project } from "@/data/Projetos";
import { ProjectHeader } from "@/components/ProjectDetails/ProjectHeader";
import { ProjectStats } from "@/components/ProjectDetails/ProjectStats";
import { ProjectActions } from "@/components/ProjectDetails/ProjectActions";
import { ProjectTechStack } from "@/components/ProjectDetails/ProjectTechStack";
import { ProjectImage } from "@/components/ProjectDetails/ProjectImage";
import { ProjectFeatures } from "@/components/ProjectDetails/ProjectFeatures";

const ProjectDetails = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedProject = projects.find((p) => toSlug(p.Title) === slug);
    if (selectedProject) {
      setProject(selectedProject);
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#000319] flex items-center justify-center">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-[#cbacf9]/25 border-t-[#cbacf9] rounded-full animate-spin" />
          <h2 className="text-xl md:text-3xl font-bold text-white">
            Carregando Projeto...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000319] px-[2%] sm:px-0 relative overflow-hidden">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
          <ProjectHeader title={project.Title} />

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-6 md:space-y-10 animate-slideInLeft">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
                  {project.Title}
                </h1>
                <div className="relative h-1 w-16 md:w-24">
                  <div className="absolute inset-0 bg-[#cbacf9] rounded-full" />
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-300/90 leading-relaxed">
                {project.Description}
              </p>

              <ProjectStats project={project} />
              <ProjectActions liveLink={project.Link} githubLink={project.Github} />
              <ProjectTechStack techStack={project.TechStack} />
            </div>

            <div className="space-y-6 md:space-y-10 animate-slideInRight">
              <ProjectImage src={project.Img} alt={project.Title} />
              <ProjectFeatures features={project.Features} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn { animation: fadeIn 0.7s ease-out; }
        .animate-slideInLeft { animation: slideInLeft 0.7s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.7s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>
    </div>
  );
};

export default ProjectDetails;
