import React from 'react';
import { ShieldCheck, Cpu, Eye, Zap, Layers, Activity } from 'lucide-react';

export default function TechnologySuite({ onOpenBooking }) {
  const technologies = [
    {
      icon: Eye,
      title: 'Carl Zeiss High-Resolution Optical Suite',
      desc: 'Up to 20x surgical stereoscopic magnification, enabling ultra-precise vessel micro-anastomoses of 0.8mm to 1.5mm caliber.',
    },
    {
      icon: Cpu,
      title: 'Virtual 3D CAD/CAM Surgical Planning',
      desc: 'Patient-specific 3D anatomical reconstruction and customized titanium cutting guides for exact bone angle matching in jaw and facial restorations.',
    },
    {
      icon: Activity,
      title: 'High-Frequency Micro-Doppler Perfusion',
      desc: 'Continuous real-time acoustic velocity verification ensuring robust blood flow across newly connected microvascular pedicles.',
    },
    {
      icon: Zap,
      title: 'Ultrasonic Piezo Bone Scalpel',
      desc: 'Selective ultrasonic cutting of bony structures in rhinoplasty and facial surgery without thermal or mechanical injury to adjacent soft tissue.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 text-[#1f1b16] relative border-b border-[#eedfcb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <span className="w-10 h-[1px] bg-[#c9a25a]"></span>
            <span className="text-[11px] font-semibold tracking-[4px] uppercase text-[#b8924e]">
              TECHNOLOGY &amp; RIGOR
            </span>
            <span className="w-10 h-[1px] bg-[#c9a25a]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.8rem] font-normal text-[#1f1b16] leading-[1.12] mb-5">
            Surgical Precision Suite &amp; <em className="italic font-normal text-[#b8924e]">Infrastructure</em>
          </h2>

          <p className="text-base text-[#5c544b] font-light leading-[1.85]">
            World-class surgical outcomes require world-class instrumentation. Dr. Mulay operates within state-of-the-art accredited suites designed for sub-millimeter precision.
          </p>
        </div>

        {/* 4-Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {technologies.map((tech, idx) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#eedfcb] p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="w-12 h-12 rounded-full border border-[#c9a25a] bg-[#fbf8f2] flex items-center justify-center text-[#b8924e] mb-6 group-hover:bg-[#c9a25a] group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#1f1b16] mb-3 leading-snug">
                    {tech.title}
                  </h3>

                  <p className="text-sm text-[#5c544b] font-light leading-[1.75]">
                    {tech.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#eedfcb]/60 flex items-center space-x-2 text-[11px] font-semibold uppercase tracking-wider text-[#b8924e]">
                  <ShieldCheck className="w-4 h-4 text-[#c9a25a]" />
                  <span>Clinical Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
