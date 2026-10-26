import React from 'react';
import doctorImage from '../assets/NRD09274.JPG.jpeg';
import { ShieldCheck, Stethoscope, Sparkles, Award, ArrowUpRight, CheckCircle2, Activity, Heart, ChevronRight, Video } from 'lucide-react';

export default function HeroSection({ onOpenBooking, onSelectProcedure }) {
  return (
    <section
      id="home"
      className="relative text-[#1f1b16] pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 overflow-hidden border-b border-[#eedfcb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* ============ LEFT CONTENT COLUMN ============ */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[3.4rem] xl:text-[3.8rem] font-normal text-[#1f1b16] leading-[1.1] tracking-tight">
              Get The Safest <br />
              <em className="italic font-light text-[#b5936d]">
                Cosmetic, Oral &amp; Reconstructive
              </em><br />
              Surgeries<span className="text-[#b5936d]">.</span>
            </h1>

            {/* Subtitle & Verified Badge Row */}
            <div className="flex flex-wrap items-center gap-3.5">
              <p className="text-base sm:text-lg text-[#916922] font-serif italic tracking-wide">
                From The Microsurgery Specialist
              </p>
              
              <div className="inline-flex items-center space-x-2 bg-[#f5efe3] px-3 py-1 rounded-md border border-[#eedfcb] shadow-2xs">
                <Award className="w-3.5 h-3.5 text-[#8b5e28]" />
                <span className="text-xs font-bold text-[#1f1b16]">MMC: 2007/04/1104</span>
                <span className="text-[9px] uppercase tracking-wider text-[#8b5e28] font-bold">· Verified Registration</span>
              </div>
            </div>

            {/* Editorial Lead Paragraph */}
            <p className="text-sm sm:text-base text-[#5c544b] font-light leading-[1.75] max-w-xl">
              <strong className="text-[#1f1b16] font-medium">Dr. Amit Mulay</strong> (MBBS, FCPS, DNB General Surgery, DNB Plastic Surgery) brings <strong className="text-[#1f1b16] font-medium">over 13 years of dedicated experience</strong> in Cosmetic Surgery, Oral Reconstruction and reconstructive microsurgery, performing vascularised and free tissue transfers (Free Flaps) across Pune and PCMC.
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4">
              
              {/* Solid Button */}
              <button
                onClick={() => onOpenBooking && onOpenBooking('In-Clinic')}
                className="px-7 sm:px-8 py-3.5 bg-[#1f1b16] hover:bg-[#b5936d] text-white font-bold text-xs uppercase tracking-[2px] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer rounded-none border border-[#1f1b16] hover:border-[#b5936d] inline-flex items-center space-x-2"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Video Consultation Button */}
              <button
                onClick={() => onOpenBooking && onOpenBooking('Video Consultation')}
                className="px-6 sm:px-7 py-3.5 bg-white hover:bg-[#1f1b16] text-[#1f1b16] hover:text-[#dfba79] font-bold text-xs uppercase tracking-[2px] transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer rounded-none border border-[#1f1b16]/70 hover:border-[#1f1b16] inline-flex items-center space-x-2 group"
              >
                <Video className="w-4 h-4 text-[#b5936d] group-hover:text-[#dfba79] transition-colors" />
                <span>VIDEO CONSULTATION</span>
              </button>

              <a
                href="#specialties"
                className="px-6 py-3.5 bg-transparent hover:bg-[#f5efe3] text-[#1f1b16] font-bold text-xs uppercase tracking-[2px] transition-colors border border-[#eedfcb] inline-flex items-center space-x-1.5"
              >
                <span>EXPLORE TREATMENTS</span>
                <span>↓</span>
              </a>

            </div>

            {/* Video Consultation Live Availability Status */}
            <div className="pt-2 flex items-center space-x-2 text-xs text-[#5c544b]">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span className="font-semibold text-[#1f1b16]">
                Video Consultation Available
              </span>
              <span className="text-[#a89d91]">·</span>
              <span className="text-[11px] text-[#73685c]">For Outstation &amp; International Patients</span>
            </div>

          </div>

          {/* ============ RIGHT IMAGE CARD COLUMN ============ */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">

              {/* Doctor Portrait Rounded Card */}
              <div className="relative rounded-[22px] overflow-hidden shadow-2xl bg-[#eee7dc] aspect-[3.8/5] border border-[#eedfcb]/70">
                <img
                  src={doctorImage}
                  alt="Dr. Amit Mulay - Plastic & Reconstructive Microsurgery Specialist"
                  className="w-full h-full object-cover object-top animate-loop-ui2 origin-center"
                />

                {/* Subtle warm glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3.5 right-3.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-[9px] font-bold tracking-wider uppercase">
                  EXPERTISE · PRECISION · CARE
                </div>
              </div>

              {/* Overlapping Badge: 13+ Years Specialist */}
              <div className="absolute bottom-0 left-0 bg-white px-5 py-2.5 shadow-xl border-t border-r border-[#eedfcb]/80 rounded-tr-xl text-left">
                <div className="font-serif italic text-2xl font-normal text-[#b5936d] leading-none mb-0.5">
                  13<em className="italic text-lg font-light ml-0.5">+ Yrs</em>
                </div>
                <div className="text-[9px] tracking-[1.5px] uppercase text-[#73685c] font-bold">
                  SPECIALIST PLASTIC SURGEON
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ============ OUR SERVICES (4 COMPACT CARDS) ============ */}
        <div className="mt-7 sm:mt-8 pt-5 border-t border-[#eedfcb] text-left">
          
          <div className="mb-3.5 flex items-center space-x-2.5">
            <span className="w-5 h-[2px] bg-[#8b5e28]"></span>
            <span className="font-serif italic text-xs sm:text-sm text-[#1f1b16] font-bold tracking-[2.5px] uppercase">
              OUR SERVICES —
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            
            {/* Card 1: Microvascular Reconstruction */}
            <div className="bg-white border border-[#eedfcb] p-4 sm:p-5 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center flex flex-col justify-between group">
              <div>
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#fdf6ed] border border-[#fae7d0] text-[#c96f1b] flex items-center justify-center">
                    <Activity className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif text-base font-bold text-[#1f1b16] mb-1.5 leading-snug">
                  Microvascular Reconstruction
                </h3>
                <p className="text-[11px] sm:text-xs text-[#5c544b] font-light leading-relaxed mb-3">
                  Free tissue transfer &amp; vascular anastomosis under high-magnification microscopy.
                </p>
              </div>
              <div className="pt-2 border-t border-[#eedfcb]/60">
                <a
                  href="#specialties"
                  className="inline-flex items-center justify-center space-x-1 text-[11px] sm:text-xs font-semibold text-[#1f1b16] group-hover:text-[#c96f1b] transition-colors"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 2: Breast Reconstruction (Clean White card matching others) */}
            <div className="bg-white border border-[#eedfcb] p-4 sm:p-5 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center flex flex-col justify-between group">
              <div>
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#fdf6ed] border border-[#fae7d0] text-[#c96f1b] flex items-center justify-center">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <h3 className="font-serif text-base font-bold text-[#1f1b16] mb-1.5 leading-snug">
                  Breast Reconstruction
                </h3>
                <p className="text-[11px] sm:text-xs text-[#5c544b] font-light leading-relaxed mb-3">
                  Post-cancer oncoplastic restoration with natural anatomical symmetry.
                </p>
              </div>
              <div className="pt-2 border-t border-[#eedfcb]/60">
                <a
                  href="#specialties"
                  className="inline-flex items-center justify-center space-x-1 text-[11px] sm:text-xs font-semibold text-[#1f1b16] group-hover:text-[#c96f1b] transition-colors"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 3: Head & Neck Oncology */}
            <div className="bg-white border border-[#eedfcb] p-4 sm:p-5 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center flex flex-col justify-between group">
              <div>
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#fdf6ed] border border-[#fae7d0] text-[#c96f1b] flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif text-base font-bold text-[#1f1b16] mb-1.5 leading-snug">
                  Head &amp; Neck Oncology
                </h3>
                <p className="text-[11px] sm:text-xs text-[#5c544b] font-light leading-relaxed mb-3">
                  Comprehensive functional &amp; aesthetic restoration following cancer resection.
                </p>
              </div>
              <div className="pt-2 border-t border-[#eedfcb]/60">
                <a
                  href="#specialties"
                  className="inline-flex items-center justify-center space-x-1 text-[11px] sm:text-xs font-semibold text-[#1f1b16] group-hover:text-[#c96f1b] transition-colors"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 4: Hand Trauma & Aesthetics */}
            <div className="bg-white border border-[#eedfcb] p-4 sm:p-5 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center flex flex-col justify-between group">
              <div>
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#fdf6ed] border border-[#fae7d0] text-[#c96f1b] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif text-base font-bold text-[#1f1b16] mb-1.5 leading-snug">
                  Hand Trauma &amp; Aesthetics
                </h3>
                <p className="text-[11px] sm:text-xs text-[#5c544b] font-light leading-relaxed mb-3">
                  Precision microsurgery for extremity salvage and structural rhinoplasty.
                </p>
              </div>
              <div className="pt-2 border-t border-[#eedfcb]/60">
                <a
                  href="#specialties"
                  className="inline-flex items-center justify-center space-x-1 text-[11px] sm:text-xs font-semibold text-[#1f1b16] group-hover:text-[#c96f1b] transition-colors"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 5: Oral Reconstruction */}
            <div className="bg-white border border-[#eedfcb] p-4 sm:p-5 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center flex flex-col justify-between group">
              <div>
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#fdf6ed] border border-[#fae7d0] text-[#c96f1b] flex items-center justify-center">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif text-base font-bold text-[#1f1b16] mb-1.5 leading-snug">
                  Oral Reconstruction
                </h3>
                <p className="text-[11px] sm:text-xs text-[#5c544b] font-light leading-relaxed mb-3">
                  Microvascular jaw &amp; tongue restoration following cancer resection or trauma.
                </p>
              </div>
              <div className="pt-2 border-t border-[#eedfcb]/60">
                <a
                  href="/oral-cancer-treatment-in-pune/"
                  className="inline-flex items-center justify-center space-x-1 text-[11px] sm:text-xs font-semibold text-[#1f1b16] group-hover:text-[#c96f1b] transition-colors"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

