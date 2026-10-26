import React from 'react';

export default function PhilosophyBlock() {
  return (
    <div>
      {/* ============ MISSION & VISION SECTION ============ */}
      <section className="py-20 sm:py-28 text-[#1f1b16] relative overflow-hidden border-b border-[#eedfcb]">
        
        {/* Giant Watermark Text */}
        <div className="absolute top-16 right-[-20px] sm:right-[-40px] font-serif text-[10rem] sm:text-[16rem] italic text-[#dfba79]/10 leading-none pointer-events-none select-none font-normal">
          Care
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Mission Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center justify-center space-x-3 mb-4">
              <span className="w-10 h-[1px] bg-[#c9a25a]"></span>
              <span className="text-[11px] font-semibold tracking-[4px] uppercase text-[#b8924e]">
                MISSION · VISION · PHILOSOPHY
              </span>
              <span className="w-10 h-[1px] bg-[#c9a25a]"></span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.8rem] font-normal text-[#1f1b16] leading-[1.15] mb-5">
              Precision in Surgery. <em className="italic font-normal text-[#b8924e]">Personal in Care.</em>
            </h2>

            <p className="text-base text-[#5c544b] font-light leading-[1.85]">
              The clinical mission is straightforward — give every patient an honest anatomical assessment, recommend only what genuinely serves their long-term health, and deliver results that look refined, harmonious, and naturally restored.
            </p>
          </div>

          {/* 2 Belief Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white p-8 sm:p-12 relative shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 border border-[#eedfcb] rounded-lg group text-left">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#c9a25a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="font-serif italic text-4xl sm:text-5xl text-[#dfba79] group-hover:text-[#b8924e] transition-colors mb-4 font-normal">
                i.
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1f1b16] mb-3">
                Results should look like <em className="italic text-[#b8924e]">you</em>, organically restored
              </h3>
              <p className="text-sm sm:text-base text-[#5c544b] font-light leading-[1.8]">
                Not an altered person, not a frozen expression, not a result that advertises surgery. The finest reconstructive and aesthetic outcomes are the ones where anatomy is so seamlessly restored that people only perceive vitality, symmetry, and poise.
              </p>
            </div>

            <div className="bg-white p-8 sm:p-12 relative shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 border border-[#eedfcb] rounded-lg group text-left">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#c9a25a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="font-serif italic text-4xl sm:text-5xl text-[#dfba79] group-hover:text-[#b8924e] transition-colors mb-4 font-normal">
                ii.
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1f1b16] mb-3">
                Patients deserve <em className="italic text-[#b8924e]">the truth</em> before the treatment
              </h3>
              <p className="text-sm sm:text-base text-[#5c544b] font-light leading-[1.8]">
                What is surgically achievable, what recovery truly demands, how incisions mature over time, and how reconstructive tissue will perform over decades. Every patient receives complete clarity before any operative step is taken.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
