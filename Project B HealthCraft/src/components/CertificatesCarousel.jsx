import React from 'react';
import { Award, ShieldCheck, GraduationCap, Building2 } from 'lucide-react';

export default function CertificatesCarousel() {
  const credentials = [
    {
      title: "DNB General Surgery & DNB Plastic Surgery",
      issuer: "National Board of Examinations (NBE), New Delhi",
      type: "Dual Board Certified Specialist",
      icon: GraduationCap,
      year: "NBE Certified"
    },
    {
      title: "Maulana Azad Medical College (MAMC)",
      issuer: "New Delhi Esteemed Alma Mater",
      type: "Exhaustive Surgical Training",
      icon: Building2,
      year: "New Delhi"
    },
    {
      title: "Young Investigator Award",
      issuer: "ISBI Biennial Congress, Sydney, Australia",
      type: "International Burn & Reconstruction Honor",
      icon: Award,
      year: "Sydney, Australia"
    },
    {
      title: "International Visiting Scholar",
      issuer: "Chang Gung Memorial (CGM) Hospital, Taipei",
      type: "Advanced Microsurgery & Free Flaps",
      icon: Award,
      year: "Taipei Scholar"
    },
    {
      title: "13+ Years Specialist Surgeon",
      issuer: "Pune & Pimpri-Chinchwad Practice",
      type: "Medical Registration Verified",
      icon: ShieldCheck,
      year: "Verified Profile"
    },
    {
      title: "NABH Operating Hospital Network",
      issuer: "Apollo Hospitals, TGH Onco-Life, KEM & Jehangir",
      type: "Senior Consultant Plastic Surgeon",
      icon: ShieldCheck,
      year: "Premier Suites"
    }
  ];

  // Duplicate for seamless infinite loop
  const list = [...credentials, ...credentials];

  return (
    <section id="credentials" className="py-16 border-b border-[#eedfcb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-[11px] font-semibold tracking-[4px] uppercase text-[#b8924e] block mb-2">
          ACADEMIC & SURGICAL CREDENTIALS
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2a2620]">
          Certifications & Clinical <em className="italic text-[#b8924e]">Fellowships</em>
        </h3>
      </div>

      {/* Infinite Scrolling Track with Edge Fade Masks */}
      <div
        className="w-full overflow-hidden relative"
        style={{
          maskImage: 'linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)',
        }}
      >
        <div className="flex space-x-6 w-max animate-[scroll_35s_linear_infinite] hover:[animation-play-state:paused] py-2">
          {list.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="w-72 sm:w-80 p-6 rounded-xl bg-white border border-[#eedfcb] shadow-sm hover:shadow-md hover:border-[#c9a25a] transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#fbf8f2] text-[#c9a25a] border border-[#eedfcb] flex items-center justify-center group-hover:bg-[#c9a25a] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#f5efe3] text-[#b8924e]">
                      {item.year}
                    </span>
                  </div>

                  <h4 className="font-serif text-base font-semibold text-[#2a2620] group-hover:text-[#b8924e] transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5c544b] font-light">
                    {item.issuer}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-gray-100 text-[11px] font-medium text-[#8b7e6e]">
                  {item.type}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
