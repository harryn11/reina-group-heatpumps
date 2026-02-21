import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardCheck, PenTool, Wrench, HeartHandshake } from 'lucide-react';
import { siteData } from '../../config/siteData';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck,
  PenTool,
  Wrench,
  HeartHandshake
};

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const steps = gsap.utils.toArray('.process-step');

    steps.forEach((step: any, i) => {
      gsap.from(step, {
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,
        duration: 1,
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    gsap.from('.process-line', {
      height: 0,
      duration: 1.5,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Our Process
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            From the first survey to the final handover, we handle everything with precision and care.
          </p>
        </div>

        <div className="relative">
          {/* Center Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-stone-200 rounded-full overflow-hidden">
            <div className="process-line w-full bg-brand-primary h-full origin-top" />
          </div>

          <div className="space-y-12 md:space-y-24">
            {siteData.process.steps.map((step, index) => {
              const Icon = iconMap[step.icon] || ClipboardCheck;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`process-step flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 text-center md:text-left">
                    <div className={`hidden md:block ${isEven ? 'text-right' : 'text-left'}`}>
                      <h3 className="text-2xl font-bold text-stone-900 mb-2">{step.title}</h3>
                      <p className="text-stone-600 leading-relaxed">{step.description}</p>
                    </div>
                    {/* Mobile only text */}
                    <div className="md:hidden">
                      <h3 className="text-2xl font-bold text-stone-900 mb-2">{step.title}</h3>
                      <p className="text-stone-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className={`relative z-10 flex-shrink-0`}>
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-4 border-brand-primary-50 rounded-full flex items-center justify-center shadow-sm text-brand-primary">
                      <Icon className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
