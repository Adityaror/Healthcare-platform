import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, ArrowRight, Sparkles, Navigation } from 'lucide-react';

export default function ConsultationSection({ onOpenBooking }) {
  const locations = [
    { name: 'Chinchwad Clinic — Kohinoor Majestic MIDC', href: '#contact' },
    { name: 'Pimpri-Chinchwad (PCMC) Specialist Care', href: '#contact' },
    { name: 'Pune City Consultation Suites', href: '#contact' },
    { name: 'TGH Onco-Life Cancer Centre', href: '#contact' },
  ];

  return (
    <div id="contact">
      {/* ============ LOCATION & CLINICAL NETWORK ============ */}
      <section className="py-20 sm:py-28 text-[#1f1b16] relative border-b border-[#eedfcb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center justify-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#c9a25a]"></span>
            <span className="text-[11px] font-semibold tracking-[4px] uppercase text-[#b8924e]">
              CLINICAL LOCATIONS &amp; VISITING HUBS
            </span>
            <span className="w-8 h-[1px] bg-[#c9a25a]"></span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1f1b16] mb-8">
            Consultation Clinic &amp; <em className="italic font-normal text-[#b8924e]">Hospital Affiliations</em>
          </h3>

          {/* Location Pills Grid */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12">
            {locations.map((loc, idx) => (
              <a
                key={idx}
                href={loc.href}
                className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-full border border-[#eedfcb] bg-white text-xs text-[#5c544b] hover:border-[#c9a25a] hover:bg-[#c9a25a] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
              >
                <span>{loc.name}</span>
                <span className="group-hover:translate-x-1 transition-transform text-[#b8924e] group-hover:text-white">→</span>
              </a>
            ))}
          </div>

          {/* Contact Details Card */}
          <div className="max-w-4xl mx-auto bg-white border border-[#eedfcb] p-8 sm:p-10 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-[#fbf8f2] border border-[#eedfcb] flex items-center justify-center text-[#b8924e] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b7e6e] block">Main Clinic Address</span>
                  <p className="text-xs sm:text-sm text-[#1f1b16] font-medium leading-relaxed mt-1">
                    Shop-30, Ground Floor, Kohinoor Majestic, Behind Kundan Hyundai, Chinchwad, MIDC, Pune, Maharashtra 411019
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-[#fbf8f2] border border-[#eedfcb] flex items-center justify-center text-[#b8924e] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b7e6e] block">Phone &amp; WhatsApp</span>
                  <a href="tel:08408051299" className="text-sm font-bold text-[#1f1b16] hover:text-[#b8924e] transition-colors block mt-1">
                    08408051299
                  </a>
                  <span className="text-[11px] text-[#8b7e6e] block mt-0.5">Mon – Sat: By Consultation</span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-[#fbf8f2] border border-[#eedfcb] flex items-center justify-center text-[#b8924e] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b7e6e] block">Email Inquiries</span>
                  <a href="mailto:dramitmulay@gmail.com" className="text-sm font-medium text-[#1f1b16] hover:text-[#b8924e] transition-colors block mt-1 break-all">
                    dramitmulay@gmail.com
                  </a>
                  <span className="text-[11px] text-[#8b7e6e] block mt-0.5">MMC: 2007/04/1104</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============ FINAL CTA SECTION (From dramitmulay.com) ============ */}
      <section 
        className="py-24 sm:py-32 text-white relative overflow-hidden text-center dark-section"
        style={{ background: 'linear-gradient(135deg, #14110e 0%, #241d15 50%, #14110e 100%)' }}
      >
        {/* Ambient Gold Radial Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(223,186,121,0.15),transparent_60%),radial-gradient(circle_at_70%_50%,rgba(223,186,121,0.1),transparent_50%)] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <span className="w-10 h-[1px] bg-[#dfba79]"></span>
            <span className="text-[11px] font-semibold tracking-[4px] uppercase text-[#dfba79]">
              TAKE THE NEXT STEP
            </span>
            <span className="w-10 h-[1px] bg-[#dfba79]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.12] mb-6">
            Let’s Set Up An Appointment <br />
            For A Meeting With <em className="italic text-[#dfba79]">The Doctor</em>
          </h2>

          <p className="text-base sm:text-lg text-white/75 font-light leading-[1.8] max-w-2xl mx-auto mb-10">
            Schedule a personal consultation directly with Dr. Amit Mulay in Pune or PCMC. An honest, thorough clinical assessment with sub-millimeter surgical precision.
          </p>

          <button
            onClick={onOpenBooking}
            className="px-10 py-5 bg-[#dfba79] hover:bg-white text-[#1f1b16] font-bold text-xs sm:text-sm uppercase tracking-[2px] transition-all duration-300 shadow-2xl hover:shadow-gold cursor-pointer rounded"
          >
            <span>Book Appointment ↗</span>
          </button>

        </div>
      </section>
    </div>
  );
}
