import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, UserCheck, Star, Award } from 'lucide-react';
import { siteData } from '../../config/siteData';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  UserCheck,
  Star,
  Award
};

gsap.registerPlugin(ScrollTrigger);

export const Trust: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.trust-card', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Engineers, Not Salespeople.
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            We guarantee respectful on-site behavior, transparent pricing, and industry-leading expertise. No jargon, just honest advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.trust.guarantees.map((guarantee, index) => {
            const Icon = iconMap[guarantee.icon] || ShieldCheck;
            const colors = [
              'text-emerald-700 bg-emerald-100',
              'text-orange-600 bg-orange-100',
              'text-blue-600 bg-blue-100',
              'text-purple-600 bg-purple-100'
            ];
            const colorClass = colors[index % colors.length];

            return (
              <div key={index} className="trust-card bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
                <div className="w-12 h-12 bg-brand-primary-100 rounded-xl flex items-center justify-center mb-6 text-brand-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-stone-900">{guarantee.title}</h3>
                <p className="text-stone-600">
                  {guarantee.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
