import React from 'react';
import { Building2, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

export default function HospitalAffiliations() {
  const affiliations = [
    {
      name: "Apollo Hospitals",
      location: "Pune & Regional Network",
      role: "Senior Consultant Plastic, Oral & Reconstructive Surgeon",
      badge: "JCI & NABH",
      details: "World-class operating theaters and microsurgical suites for advanced reconstructive oncology, aesthetic procedures, and trauma salvage.",
    },
    {
      name: "TGH Onco-Life Cancer Centre",
      location: "Pune & PCMC Region",
      role: "Director of Plastic, Oral & Reconstructive Surgery",
      badge: "Director & Head",
      details: "Dedicated Onco-Reconstructive, Oral Cancer Restoration & Vascularised Free Tissue Transfer (Free Flap) surgical center.",
    },
    {
      name: "KEM & Jehangir Hospital",
      location: "Central Pune",
      role: "Panel Consultant Plastic Surgeon",
      badge: "NABH Standard",
      details: "Panel consultant for multidisciplinary complex trauma, hand surgery, and microsurgical salvage.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 text-[#1f1b16] relative border-b border-[#eedfcb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <span className="w-10 h-[1px] bg-[#c9a25a]"></span>
            <span className="text-[11px] font-semibold tracking-[4px] uppercase text-[#b8924e]">
              ACCREDITED SURGICAL SUITES
            </span>
            <span className="w-10 h-[1px] bg-[#c9a25a]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.8rem] font-normal text-[#1f1b16] leading-[1.12] mb-5">
            Hospital Affiliations &amp; <em className="italic font-normal text-[#b8924e]">Operating Centers</em>
          </h2>

          <p className="text-base text-[#5c544b] font-light leading-[1.85]">
            Surgeries are conducted within NABH-accredited tertiary care hospitals equipped with high-level intensive care units, 24/7 anaesthesiology support, and dedicated microsurgical infrastructure.
          </p>
        </div>

        {/* 3-Grid Hospital Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {affiliations.map((hosp, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#eedfcb] p-7 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-sm bg-[#fbf8f2] border border-[#eedfcb] flex items-center justify-center text-[#b8924e] group-hover:bg-[#c9a25a] group-hover:text-white transition-colors">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#f5efe3] text-[#b8924e]">
                    NABH
                  </span>
                </div>

                <h3 className="font-serif text-lg font-medium text-[#1f1b16] mb-1 group-hover:text-[#b8924e] transition-colors">
                  {hosp.name}
                </h3>

                <div className="flex items-center space-x-1.5 text-xs text-[#8b7e6e] mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#c9a25a]" />
                  <span>{hosp.location}</span>
                </div>

                <p className="text-xs text-[#5c544b] font-light leading-relaxed mb-3">
                  {hosp.details}
                </p>
              </div>

              <div className="pt-4 border-t border-[#eedfcb]/60 text-[11px] font-medium text-[#b8924e]">
                {hosp.role}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
