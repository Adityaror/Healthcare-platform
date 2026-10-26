import React from 'react';
import { motion } from 'framer-motion';
import doctorPortrait from '../assets/NRD09285.JPG.jpeg';
import { 
  Check, ArrowUpRight, Award, ShieldCheck, Stethoscope, 
  GraduationCap, Building2, Sparkles, CheckCircle2, Phone 
} from 'lucide-react';

const luxuryEase = [0.16, 1, 0.3, 1];

// Word-by-Word Masked Reveal Component for Homepage About
function MaskedHeadingReveal({ text, className = "", as = "h2" }) {
  const Tag = as === "h1" ? motion.h1 : as === "h2" ? motion.h2 : motion.h3;

  return (
    <Tag
      key={text}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: luxuryEase }}
      className={className}
    >
      {text}
    </Tag>
  );
}

const slowStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.2,
    },
  },
};


const slowFadeUpVariant = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.25, ease: luxuryEase },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: luxuryEase },
  },
};

export default function MeetDoctor({ onOpenBooking, onNavigate }) {
  const credentials = [
    'MBBS, FCPS, DNB (General Surgery), DNB (Plastic Surgery)',
    'Medical Registration MMC: 2007/04/1104 Verified',
    '13+ Years of Dedicated Clinical & Surgical Experience',
    'Reconstructive Microsurgery & Free Flap Specialist',
    'Maulana Azad Medical College (MAMC), New Delhi Trained',
    'Young Investigator Award — ISBI Congress, Sydney, Australia',
    'International Visiting Scholar — CGM Hospital, Taipei',
  ];

  const subspecialties = [
    { title: 'Oral Cancer & Jaw Reconstruction (Free Flaps)', slug: 'oral-cancer-treatment-in-pune' },
    { title: 'Crush Injury Hand & Trauma Reconstruction', slug: 'hand-reconstruction-surgery' },
    { title: 'Finger & Hand Replantation (Microsurgery)', slug: 'finger-reconstruction-surgery' },
    { title: 'Thumb Reconstruction & Tendon Transfers', slug: 'tendon-transfer-surgery' },
    { title: 'Head, Neck & Breast Cancer Reconstruction (Free Flaps)', slug: 'reconstructive-microsurgery' },
    { title: 'Aesthetic Rhinoplasty & Facial Plastic Surgery', slug: 'rhinoplasty-in-pune' },
    { title: 'Facelift, Double Chin Correction & Buccal Fat Removal', slug: 'facelift-surgery-in-pune' },
    { title: 'Acute Burns, Burn Reconstruction & Contracture Release', slug: 'acute-burn-surgery' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 text-[#1f1b16] relative border-b border-[#eedfcb]">
      
      {/* Subtle Background Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#dfba79]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#c5932b]/8 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Subtitle with Masked Entrance */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f2ebd9] border border-[#eedfcb] text-[#916922] text-[11px] font-bold uppercase tracking-[2px] mb-3 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c5932b]" />
            <span>ABOUT DR. AMIT MULAY</span>
          </motion.div>
          
          <div className="flex justify-center">
            <MaskedHeadingReveal
              text="Best Plastic, Oral, Reconstructive & Cosmetic Surgeon in Pune"
              as="h2"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal text-[#12100d] leading-[1.18] tracking-tight justify-center text-center"
            />
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.3, ease: luxuryEase }}
            className="mt-3 text-xs sm:text-sm text-[#61574a] font-normal leading-relaxed"
          >
            National Board of Examination (NBE) certified surgeon with 13+ years of dedicated excellence in reconstructive microsurgery, free tissue transfers, and refined aesthetic transformations.
          </motion.p>
        </div>

        {/* ============ UNIFIED EDITORIAL DOCTOR HERO CARD (Reference Pinterest UI) ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1, ease: luxuryEase }}
          className="relative bg-white rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] shadow-2xl border border-[#eedfcb] overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-10 group text-left"
        >
          {/* LEFT HALF: Full-Bleed Doctor Portrait */}
          <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[460px] lg:min-h-full overflow-hidden bg-[#eee7dc]">
            <motion.img
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: luxuryEase }}
              src={doctorPortrait}
              alt="Dr. Amit Mulay - Plastic, Oral & Reconstructive Surgeon Pune"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Subtle Gradient Overlay for Mobile Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden pointer-events-none" />

            {/* Floating Specialist Pill on Left Corner */}
            <div className="absolute top-4 left-4 z-20 bg-[#1f1b16]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#dfba79]/50 text-white text-[10px] font-bold tracking-wider flex items-center space-x-1.5 shadow-lg">
              <span className="text-[#dfba79] font-serif font-bold text-xs">13+ Yrs</span>
              <span className="text-[#dfba79]/40">·</span>
              <span className="text-[9px] uppercase tracking-wider text-gray-200">Specialist</span>
            </div>

            {/* Floating Apollo Hospitals Badge on Top Right */}
            <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#eedfcb] text-[#1f1b16] text-[10px] font-semibold tracking-wider flex items-center space-x-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Apollo Hospitals</span>
            </div>

            {/* Mobile-only Doctor Name Overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-20 lg:hidden text-white text-left">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#dfba79] block">
                Senior Consultant Surgeon
              </span>
              <h3 className="font-serif text-lg font-bold text-white">
                Dr. Amit Mulay
              </h3>
            </div>
          </div>

          {/* RIGHT HALF: Clean Editorial Narrative & Large Quote (Exact Reference UI) */}
          <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between text-left bg-white relative">
            
            <div>
              {/* Top Meta: Verified Registration & Alma Mater */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-[1.5px] text-[#916922]">
                  <ShieldCheck className="w-4 h-4 text-[#916922]" />
                  <span>MMC REG NO. 2007/04/1104</span>
                </div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#b8924e] bg-[#fbf8f2] px-2.5 py-1 rounded-full border border-[#eedfcb]">
                  MAMC New Delhi Alumnus
                </div>
              </div>

              {/* Large Soft Quotation Mark Icon (Exact matching the reference UI) */}
              <div className="text-[#dfba79]/35 font-serif text-6xl sm:text-7xl lg:text-8xl leading-none select-none -mb-6 sm:-mb-8 font-light">
                “
              </div>

              {/* Editorial Quote */}
              <blockquote className="font-serif italic text-base sm:text-lg lg:text-xl text-[#1f1b16] font-normal leading-relaxed mb-6 relative z-10">
                Precision in surgery, personal in care. Every surgical plan is customized around the patient’s individual anatomy, functional restoration, and enduring safety.
              </blockquote>

              {/* Editorial Narrative Paragraphs */}
              <div className="space-y-3 text-xs sm:text-sm text-[#5c544b] font-light leading-[1.8]">
                <p>
                  With <strong className="text-[#1f1b16] font-semibold">over 13 years of dedicated experience in the field of Cosmetic, Oral Reconstruction and Reconstructive Surgery</strong>, Dr. Amit Mulay specialises in reconstructive microsurgery, performing complex vascularised free tissue transfers (Free Flaps) with sub-millimeter arterial and venous anastomoses.
                </p>
                <p>
                  Certified by the <strong className="text-[#1f1b16] font-semibold">National Board of Examination (New Delhi)</strong>, he received extensive surgical training at the esteemed <strong className="text-[#1f1b16] font-semibold">Maulana Azad Medical College (MAMC), New Delhi</strong>. He is also honored with the <strong className="text-[#1f1b16] font-semibold">Young Investigator Award at the ISBI Congress (Sydney, Australia)</strong> and served as an <strong className="text-[#1f1b16] font-semibold">International Visiting Scholar at Chang Gung Memorial Hospital (CGMH), Taipei</strong>.
                </p>
              </div>

              {/* 3 Distinctions Badges Row */}
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#fdfbf7] border border-[#eedfcb] text-[11px] font-medium text-[#73685c]">
                  <Award className="w-3.5 h-3.5 text-[#b8924e]" />
                  <span>ISBI Award Winner (Sydney)</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#fdfbf7] border border-[#eedfcb] text-[11px] font-medium text-[#73685c]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#b8924e]" />
                  <span>Taipei CGMH Microsurgery Scholar</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#fdfbf7] border border-[#eedfcb] text-[11px] font-medium text-[#73685c]">
                  <Building2 className="w-3.5 h-3.5 text-[#b8924e]" />
                  <span>Apollo Hospitals Consultant</span>
                </span>
              </div>
            </div>

            {/* Bottom Signature / Sign-Off (Matching reference "— Amelie, 29") */}
            <div className="pt-6 mt-6 border-t border-[#eedfcb]/70 flex flex-col 2xl:flex-row 2xl:items-center justify-between gap-5">
              <div className="min-w-0">
                <div className="font-serif italic text-lg sm:text-xl font-normal text-[#1f1b16]">
                  — Dr. Amit Mulay
                </div>
                <div className="text-xs text-[#8b5e28] font-bold tracking-wide mt-0.5">
                  Senior Consultant Surgeon · Apollo Hospitals, Pune
                </div>
                <div className="text-[11px] text-[#73685c] mt-0.5 leading-snug">
                  MBBS, FCPS, DNB (General Surgery), DNB (Plastic Surgery)
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 bg-[#1f1b16] hover:bg-[#b5936d] text-white text-xs font-bold uppercase tracking-[1.5px] rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer flex-shrink-0"
                >
                  <span>BOOK APPOINTMENT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
                </button>
                <a
                  href="tel:08408051299"
                  className="px-5 py-3 bg-[#fbf8f2] hover:bg-white text-[#1f1b16] text-xs font-bold tracking-wide rounded-full border border-[#eedfcb] transition-all shadow-2xs inline-flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer flex-shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8b5e28] flex-shrink-0" />
                  <span>08408051299</span>
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ============ CLINICAL DISTINCTIONS & SUBSPECIALTIES ROW ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Card 1: Qualifications & Board Certifications */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="p-6 bg-white border border-[#eedfcb] rounded-2xl shadow-xs"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Stethoscope className="w-4 h-4 text-[#916922]" />
              <h4 className="font-serif text-base font-semibold text-[#1f1b16]">
                Qualifications &amp; Board Certifications
              </h4>
            </div>

            <div className="space-y-2">
              {credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2 text-xs text-[#5c544b] hover:text-[#1f1b16] transition-colors"
                >
                  <div className="w-4 h-4 rounded-full border border-[#c9a25a] flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#fdfbf7]">
                    <Check className="w-2.5 h-2.5 text-[#b8924e]" />
                  </div>
                  <span className="leading-tight font-medium">{cred}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Key Surgical Subspecialties & Focus Areas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: luxuryEase }}
            className="p-6 bg-white border border-[#eedfcb] rounded-2xl shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="w-4 h-4 text-[#916922]" />
                <h4 className="font-serif text-base font-semibold text-[#1f1b16]">
                  Key Surgical Subspecialties &amp; Clinical Focus
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {subspecialties.map((spec, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (onNavigate && spec.slug) {
                        onNavigate('/' + spec.slug + '/');
                      }
                    }}
                    className="flex items-start space-x-2 text-xs text-[#5c544b] hover:text-[#916922] transition-colors text-left p-1 rounded-lg hover:bg-[#fbf8f2] cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b5936d] flex-shrink-0 mt-0.5" />
                    <span className="leading-tight font-medium">{spec.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#eedfcb]/60 text-[11px] text-[#73685c]">
              Specialist consultation suites across Apollo Hospitals, Kothrud, PCMC, Deccan &amp; Shivaji Nagar.
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

