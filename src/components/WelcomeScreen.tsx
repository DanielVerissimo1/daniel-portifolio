'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FileText } from 'lucide-react';

const specialties = ['Full Stack', 'Mobile', 'Front-End', 'Back-End'];

const HeroBackground = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0 hidden md:block opacity-90"
      style={{
        backgroundImage:
          'linear-gradient(rgba(22, 26, 49, 0.85) 0.6px, transparent 0.6px), linear-gradient(90deg, rgba(22, 26, 49, 0.85) 0.6px, transparent 0.6px)',
        backgroundSize: '110.77px 112.5px',
        WebkitMaskImage:
          'radial-gradient(ellipse 58% 105% at 50% 40%, #000 0%, rgba(0,0,0,.78) 52%, transparent 100%)',
        maskImage:
          'radial-gradient(ellipse 58% 105% at 50% 40%, #000 0%, rgba(0,0,0,.78) 52%, transparent 100%)',
      }}
    />
    <div className="absolute left-0 right-0 top-[112px] hidden h-px bg-[#161a31]/80 md:block" />

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
      className="relative flex min-h-screen min-h-svh w-full items-center justify-center overflow-hidden bg-[#000319] px-4 pb-16 pt-28 sm:px-6 sm:pt-32"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
        <p
          className="mb-[22px] text-xs font-normal uppercase leading-[14.4px] tracking-[3px] text-[#c0c2d3] xl:text-base xl:leading-[19.2px] xl:tracking-[4px]"
          data-aos="fade-up"
        >
          Entre a magia da web e a engenharia dos servidores
        </p>

        <h1
          className="max-w-[1020px] text-[48px] font-bold leading-[48px] tracking-[-1.6px] text-white xl:text-[72px] xl:leading-[72px] xl:tracking-[-3.6px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Todo grande produto começa com uma visão{' '}
          <span
            className={`inline-block w-[5.5em] text-left text-[#cbacf9] motion-safe:transition-all motion-safe:duration-300 ${
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
          className="mt-[30px] max-w-[760px] text-base font-normal leading-[19.2px] text-[#e4ecff] md:text-2xl md:leading-[28.8px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Transformo desafios em aplicações completas, intuitivas e preparadas
          para crescer.
        </p>

        <a
          href="/Daniel Verissimo - Full-Stack.pdf"
          download="Daniel Verissimo - Full-Stack.pdf"
          className="group mt-[30px] flex h-[66px] w-full max-w-[358px] items-center justify-center gap-3 rounded-[14px] border border-white/[0.08] bg-gradient-to-r from-[#161a31] to-[#06091f] px-10 text-lg font-medium tracking-[-0.48px] text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#cbacf9]/40 hover:shadow-[0_12px_40px_rgba(112,76,182,0.22)] sm:w-auto sm:min-w-[220px]"
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
