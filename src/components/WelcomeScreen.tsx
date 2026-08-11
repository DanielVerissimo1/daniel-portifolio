'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FileText } from 'lucide-react';

const specialties = ['Full Stack', 'Mobile', 'Front-End', 'Back-End'];

const HeroBackground = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-[-87px] top-0 h-[287px] w-[380px] md:left-[-233px] md:h-[608px] md:w-[805px]">
      <div className="absolute -left-28 -top-28 h-8 w-[620px] rotate-45 bg-gradient-to-r from-transparent via-white/20 to-white/5 blur-[40px]" />
      <div className="absolute -left-2 -top-24 h-8 w-[620px] rotate-45 bg-gradient-to-r from-transparent via-white/30 to-white/10 blur-[40px]" />
      <div className="absolute left-20 -top-40 h-8 w-[620px] rotate-45 bg-gradient-to-r from-transparent via-slate-100/30 to-white/10 blur-[40px]" />
    </div>

    <div className="absolute right-[-233px] top-0 hidden h-[608px] w-[805px] -scale-x-100 md:block">
      <div className="absolute -left-28 -top-28 h-8 w-[620px] rotate-45 bg-gradient-to-r from-transparent via-white/20 to-white/5 blur-[40px]" />
      <div className="absolute -left-2 -top-24 h-8 w-[620px] rotate-45 bg-gradient-to-r from-transparent via-white/30 to-white/10 blur-[40px]" />
      <div className="absolute left-20 -top-40 h-8 w-[620px] rotate-45 bg-gradient-to-r from-transparent via-slate-100/30 to-white/10 blur-[40px]" />
    </div>

  </div>
);

const HeroSection = () => {
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [isSpecialtyVisible, setIsSpecialtyVisible] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quad',
      once: true,
      offset: 40,
    });
  }, []);

  useEffect(() => {
    const hideTimeout = window.setTimeout(() => {
      setIsSpecialtyVisible(false);
    }, 2100);

    const changeTimeout = window.setTimeout(() => {
      setSpecialtyIndex((currentIndex) => (currentIndex + 1) % specialties.length);
      setIsSpecialtyVisible(true);
    }, 2500);

    return () => {
      window.clearTimeout(hideTimeout);
      window.clearTimeout(changeTimeout);
    };
  }, [specialtyIndex]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen min-h-svh w-full items-center justify-center overflow-hidden bg-[#000319] px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28 md:px-10 md:pb-20 md:pt-32"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
        <p
          className="mb-4 max-w-[290px] text-[10px] font-normal uppercase leading-5 tracking-[2px] text-[#c0c2d3] sm:mb-5 sm:max-w-lg sm:text-xs sm:tracking-[3px] md:max-w-2xl md:text-sm xl:text-base xl:leading-[19.2px] xl:tracking-[4px]"
          data-aos="fade-up"
        >
          Entre a magia da web e a engenharia dos servidores
        </p>

        <h1
          className="max-w-[1020px] text-[36px] font-bold leading-[40px] tracking-[-1.2px] text-white min-[390px]:text-[40px] min-[390px]:leading-[44px] sm:text-[48px] sm:leading-[52px] sm:tracking-[-1.6px] md:text-[56px] md:leading-[60px] lg:text-[64px] lg:leading-[66px] xl:text-[72px] xl:leading-[72px] xl:tracking-[-3.6px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Todo grande produto começa com uma visão{' '}
          <span
            className={`mt-2 block h-[1.1em] w-full text-center text-[#cbacf9] motion-safe:transition-all motion-safe:duration-300 lg:mt-0 lg:inline-block lg:w-[5.5em] lg:text-left ${
              isSpecialtyVisible
                ? 'translate-y-0 opacity-100 blur-0'
                : '-translate-y-2 opacity-0 blur-sm'
            }`}
            aria-live="polite"
          >
            {specialties[specialtyIndex]}
          </span>
        </h1>

        <p
          className="mt-6 max-w-[680px] text-sm font-normal leading-6 text-[#e4ecff] sm:mt-7 sm:text-lg sm:leading-7 md:max-w-[760px] md:text-xl md:leading-8 lg:mt-[30px] lg:text-2xl lg:leading-[28.8px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Transformo desafios em aplicações completas, intuitivas e preparadas
          para crescer.
        </p>

        <a
          href="/Daniel Verissimo - Full-Stack.pdf"
          download="Daniel Verissimo - Full-Stack.pdf"
          className="group mt-7 flex h-14 w-full max-w-[320px] items-center justify-center gap-3 rounded-[14px] border border-white/[0.08] bg-gradient-to-r from-[#161a31] to-[#06091f] px-6 text-base font-medium tracking-[-0.48px] text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#cbacf9]/40 hover:shadow-[0_12px_40px_rgba(112,76,182,0.22)] sm:mt-[30px] sm:h-[66px] sm:w-auto sm:min-w-[220px] sm:px-10 sm:text-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Baixar currículo
          <FileText
            className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
