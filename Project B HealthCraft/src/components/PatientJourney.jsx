import React from 'react';
import { Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function PatientJourney({ onOpenBooking }) {
  const steps = [
    {
      num: '01',
      title: 'Initial Consultation & Anatomical Evaluation',
      subtitle: 'Listening, Assessment & Candid Goal Alignment',
      desc: 'Every surgical journey begins with a comprehensive 45-minute clinical consultation directly with Dr. Amit Mulay. We examine structural anatomy, discuss medical history, assess skin elasticity, and align on honest, achievable outcomes.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    },
    {
      num: '02',
      title: '3D Virtual Planning & Patient-Specific Modeling',
      subtitle: 'Microvascular Mapping & CAD/CAM Surgical Guides',
      desc: 'Using high-resolution CT angiograms and virtual surgical CAD/CAM modeling, we simulate tissue flap harvesting and custom cutting guides down to fractions of a millimeter before stepping into the operating theater.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80',
    },
    {
      num: '03',
      title: 'Precision Microvascular & Aesthetic Execution',
      subtitle: '20x Optical Magnification & Multi-Layer Closures',
      desc: 'Surgeries are performed in premier accredited tertiary hospitals using Carl Zeiss operating microscopes, 9-0 to 10-0 micro-sutures, and tension-free anatomical layered closures for minimal scar visibility.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80',
    },
    {
      num: '04',
      title: 'Concierge Post-Operative Recovery Continuum',
      subtitle: 'Continuous Flap Monitoring & Long-Term Scar Therapy',
      desc: 'Close post-operative monitoring ensures prompt vascular recovery, accompanied by individualized scar maturation therapies, lymphatic drainage guidance, and multi-year clinical follow-ups.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="py-24 sm:py-32 text-[#1f1b16] relative border-b border-[#eedfcb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <span className="w-10 h-[1px] bg-[#c9a25a]"></span>
            <span className="text-[11px] font-semibold tracking-[4px] uppercase text-[#b8924e]">
              THE PATIENT CONTINUUM
            </span>
            <span className="w-10 h-[1px] bg-[#c9a25a]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.8rem] font-normal text-[#1f1b16] leading-[1.12] mb-5">
            Your Four-Step <em className="italic font-normal text-[#b8924e]">Surgical Journey</em>
          </h2>

          <p className="text-base text-[#5c544b] font-light leading-[1.85]">
            From your very first confidential conversation through surgical execution and full healing, experience quiet luxury, clinical rigor, and continuous support.
          </p>
        </div>

        {/* Step Cards List (.dmk-step-card style) */}
        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-[#eedfcb] p-6 sm:p-8 pl-6 sm:pl-24 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 text-left group"
            >
              {/* Step Circle Badge */}
              <div className="sm:absolute sm:left-6 sm:top-8 w-12 h-12 rounded-full border-2 border-[#c9a25a] bg-[#fbf8f2] text-[#b8924e] font-serif font-bold text-lg flex items-center justify-center mb-4 sm:mb-0 group-hover:bg-[#c9a25a] group-hover:text-white transition-colors">
                {step.num}
              </div>

              {/* Flex Container */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                {/* Image */}
                <div className="w-full md:w-64 h-40 rounded-sm overflow-hidden bg-[#fdfbf7] p-2 border border-[#eedfcb]/60 flex-shrink-0">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#b8924e]">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1f1b16]">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5c544b] font-light leading-[1.8]">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-[#1f1b16] hover:bg-[#c9a25a] text-white hover:text-[#1f1b16] font-medium text-xs uppercase tracking-[2px] border border-[#1f1b16] hover:border-[#c9a25a] transition-all duration-300 shadow-md cursor-pointer"
          >
            <span>Begin Your Personal Consultation</span>
          </button>
        </div>

      </div>
    </section>
  );
}
