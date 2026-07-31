import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { toSlug } from '@/lib/slug';

interface CardProjectProps {
  Img: string;
  Title: string;
  Description: string;
  Link?: string;
  id?: string;
  stacks?: string[];
}

const CardProject: React.FC<CardProjectProps> = ({ Img, Title, Description, Link: ProjectLink, stacks }) => {

  return (
    <div className="group relative w-full h-full">
      <div className="relative h-full overflow-hidden rounded-xl bg-[#06091f]/90 backdrop-blur-lg border border-white/10 shadow-lg transition-all duration-300 hover:shadow-[0_12px_35px_rgba(203,172,249,0.08)] hover:border-[#cbacf9]/30">
        <div className="absolute inset-0 bg-[#cbacf9]/[0.025] opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
    
        {/* Conteúdo principal */}
        <div className="relative h-full flex flex-col p-5 z-10">
          {/* Imagem do projeto */}
          <div className="relative overflow-hidden rounded-lg aspect-video">
            <Image
              src={Img}
              alt={Title}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
        
          <div className="mt-4 space-y-3 flex-1 flex flex-col">
            <h3 className="text-xl font-semibold text-white group-hover:text-[#cbacf9] transition-colors">
              {Title}
            </h3>
            
            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-3 flex-1">
              {Description}
            </p>
             {/* tecnologias dos card*/}
            {stacks && stacks.length > 0 && (
              <div>
                <div className="flex flex-wrap gap-1.5">
                  {stacks.map((stack, index) => (
                    <span
                      key={index} 
                      className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-[#161a31] to-[#06091f] text-white border border-white/[0.08] rounded-md transition-colors duration-300 hover:border-[#cbacf9]/40"
        
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            )}
          
            
            {/* Botões de ação */}
            <div className="pt-4 flex items-center justify-between gap-2">
              {ProjectLink ? (
                <a
                  href={ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-white/80 hover:text-[#cbacf9] transition-colors"
                >
                  <span className="text-md font-medium">Ver No Ar</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-gray-500 text-sm px-3 py-1.5">Demo Not Available</span>
              )}

              <Link
                href={`/project/${toSlug(Title)}`}
                className="flex items-center space-x-2 text-[#cbacf9] hover:text-[#000319] transition-colors duration-200 px-3 py-1.5 rounded-lg border border-[#cbacf9]/20 bg-[#cbacf9]/10 hover:bg-[#cbacf9]"
              >
                <span className="text-md font-medium">Detalhes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
