import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import { SplitText } from '../ui/SplitText';
import { siteData } from '../../config/siteData';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.hero-image', {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
      delay: 0.5
    });

    gsap.from('.hero-badge', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 1,
      stagger: 0.2
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-transparent z-10" />
        <img
          src={siteData.hero.backgroundImage}
          alt={`Premium Heat Pump Installation by ${siteData.company.name}`}
          className="hero-image w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto text-center space-y-8">
        <div className="flex justify-center gap-4 mb-8">
          {siteData.hero.accreditations.map((accreditation, index) => (
            <span key={index} className="hero-badge px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 text-sm font-medium text-stone-600 shadow-sm">
              {accreditation}
            </span>
          ))}
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-stone-900 leading-[0.9]">
          <SplitText delay={0.2}>Kent Heating,</SplitText>
          <br />
          <SplitText delay={0.4} className="text-brand-primary">Done Right.</SplitText>
        </h1>

        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-stone-600 font-light leading-relaxed mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          {siteData.hero.subtitle || "Future-proof your home with ultra-efficient heat pumps. A local, family-run team of specialist engineers—no pushy salespeople."}
        </p>

        <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <button className="px-8 py-4 bg-brand-primary text-white rounded-full font-medium hover:bg-brand-primary-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
            Get a Free Quote
          </button>
          <button className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-medium hover:bg-stone-50 transition-colors duration-200 shadow-sm hover:shadow-md">
            See Our Work
          </button>
        </div>

        <div className="mt-12 py-4 px-6 flex flex-wrap justify-center items-center gap-6 opacity-0 animate-fade-in-up bg-white/30 backdrop-blur-xl rounded-full border border-white/20 shadow-sm" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
          <span className="text-xs font-bold text-stone-700 uppercase tracking-widest mr-2">Partnered With</span>
          {siteData.hero.partners.map((partner, index) => (
            <span key={index} className="text-lg font-black text-stone-800 tracking-wider opacity-80">{partner}</span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ArrowDown className="w-6 h-6 text-stone-400" />
      </div>
    </section>
  );
};
