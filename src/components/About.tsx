'use client';

import React, { useEffect } from 'react';
import { Sparkles, UserCheck, Code} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { statsData } from '../data/About'; 

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
    });
    
    const handleResize = () => AOS.refresh();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  


  return (
    <section 
      id="about" 
      className="relative z-20 py-16 px-[5%] sm:px-[10%] text-white bg-transparent"
    >
      
      <div className="text-center mb-12 px-[5%]">
        <h2 
          className="text-4xl md:text-5xl font-bold text-white"
          data-aos="zoom-in-up"
          data-aos-duration="600"
        >
          Sobre <span className="text-[#cbacf9]">Mim</span>
        </h2>
        <p 
          className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg flex items-center justify-center gap-2"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
          Transformando Ideias Em Soluções Escaláveis
          <Sparkles className="w-5 h-5 text-purple-400" />
        </p>
      </div>

      
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-8 sm:pt-12">
       
        <div className="space-y-6 text-center lg:text-left">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <span className="text-[#cbacf9]">
              Olá, Me Chamo
            </span>
            <span 
              className="block mt-2 text-gray-200"
              data-aos="fade-right"
              data-aos-duration="1300"
            >
              Daniel Verissimo
            </span>
          </h2>

          <p
            className="text-gray-400 text-lg leading-relaxed text-justify pb-4 sm:pb-0"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Sou desenvolvedor Full-Stack movido pela curiosidade e pela vontade de criar experiências digitais marcantes. Do servidor à interface final, acredito que cada linha de código conecta inovação e propósito. Gosto de unir tecnologia e negócios para gerar soluções de valor real. Guiado pela fé em Deus, busco resultados com significado e impacto positivo.
          </p>

          {/* Quote */}
          <div 
            className="relative bg-gradient-to-br from-[#6366f1]/5 via-transparent to-[#a855f7]/5 border border-[#6366f1]/30 rounded-2xl p-4 my-6 backdrop-blur-md shadow-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1700"
          >
            <div className="absolute top-2 right-4 w-16 h-16 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-2 w-12 h-12 bg-gradient-to-r from-[#a855f7]/20 to-[#6366f1]/20 rounded-full blur-lg"></div>
            
            <blockquote className="text-gray-300 italic font-medium text-sm relative z-10 pl-6">
              &ldquo;Aproveitando a IA como uma ferramenta profissional, não como um substituto.&rdquo;
            </blockquote>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a 
              href="#contato" 
              className="group flex w-full items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-gradient-to-r from-[#161a31] to-[#06091f] px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#cbacf9]/40 hover:shadow-[0_12px_40px_rgba(112,76,182,0.22)] sm:w-auto"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Fale Comigo
              <UserCheck className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>

            <a 
              href="#portfolio" 
              className="w-full sm:w-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-[#cbacf9]/50 text-[#cbacf9] font-medium flex items-center justify-center gap-2 hover:bg-[#cbacf9]/10 hover:scale-105 cursor-pointer">
                <Code className="w-5 h-5" /> Ver Projetos
              </button>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
          <div 
            className="relative group" 
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden transform transition-all duration-700 group-hover:scale-105 relative">
                <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
                
                <Image
                  src="/profile/Imagem-daniel03.JPG"
                  alt="Profile"
                  fill
                  className="object-cover object-center transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {statsData.map((stat) => (
          <div 
            key={stat.label} 
            className={`relative group ${stat.label === 'Localização' ? 'md:col-span-2 lg:col-span-1' : ''}`}
            data-aos={stat.animation}
            data-aos-duration="1300"
          >
            <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
              <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="flex items-center justify-start mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm uppercase tracking-wider px-6 text-gray-300 mb-2">
                  {stat.label}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          </div> 
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
