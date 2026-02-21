import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Volume2, Smartphone, Leaf } from 'lucide-react';
import { siteData } from '../../config/siteData';

gsap.registerPlugin(ScrollTrigger);

export const ProductShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // The image wrapper uses Tailwind's 'sticky top-0' for a native sticky effect,
    // so we don't need GSAP ScrollTrigger to pin it here.

    // Feature text animations
    gsap.utils.toArray('.feature-text').forEach((text: any) => {
      gsap.from(text, {
        opacity: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: text,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          toggleActions: 'play reverse play reverse'
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-stone-900 text-white py-24 min-h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-transparent to-stone-900 z-10" />
        <img
          ref={imageRef}
          src={siteData.productShowcase.backgroundImage}
          alt={`Premium Heat Pump Engineering by ${siteData.company.name}`}
          className="w-full h-full object-cover opacity-60 scale-110"
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 space-y-[80vh] pt-[50vh] pb-[50vh]">
        <div className="feature-text text-center space-y-6 backdrop-blur-md bg-stone-900/40 p-12 rounded-3xl border border-white/10">
          <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto text-brand-primary mb-6">
            <Zap className="w-8 h-8" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Up to 400% Efficiency</h2>
          <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
            For every 1kW of electricity used, get up to 4kW of heat. That's up to 4x more efficient than your gas boiler.
          </p>
        </div>

        <div className="feature-text text-center space-y-6 backdrop-blur-md bg-stone-900/40 p-12 rounded-3xl border border-white/10">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto text-blue-400 mb-6">
            <Volume2 className="w-8 h-8" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Acoustically Optimised</h2>
          <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
            Modern units are engineered for minimal noise disruption. Positioned respectfully away from living spaces for total peace of mind.
          </p>
        </div>

        <div className="feature-text text-center space-y-6 backdrop-blur-md bg-stone-900/40 p-12 rounded-3xl border border-white/10">
          <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto text-orange-400 mb-6">
            <Smartphone className="w-8 h-8" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Smart Control</h2>
          <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
            Control your home's climate from anywhere using your smartphone. Set schedules and monitor your system easily.
          </p>
        </div>

        <div className="feature-text text-center space-y-6 backdrop-blur-md bg-stone-900/40 p-12 rounded-3xl border border-white/10">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-400 mb-6">
            <Leaf className="w-8 h-8" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Zero Carbon On-Site</h2>
          <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
            Eliminate gas combustion from your home. Future-proof your property value.
          </p>
        </div>
      </div>
    </section>
  );
};
