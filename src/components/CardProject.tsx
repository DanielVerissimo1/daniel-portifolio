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
      <div className="relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20 hover:border-purple-500/30">
        {/* Efeito de gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
    
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
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
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
                      className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r  from-blue-500/20 to-purple-500/20 text-blue-200 rounded-md"
        
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
                  className="inline-flex items-center space-x-2 text-blue-100 hover:text-blue-200 "
                >
                  <span className="text-md font-medium">Ver No Ar</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-gray-500 text-sm px-3 py-1.5">Demo Not Available</span>
              )}

              <Link
                href={`/project/${toSlug(Title)}`}
                className="flex items-center space-x-2 text-blue-100 hover:text-blue-300 transition-colors duration-200 px-3 py-1.5 rounded-lg bg-blue-100/10 hover:bg-blue-200/20 "
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