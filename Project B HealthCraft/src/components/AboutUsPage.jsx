import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, ShieldCheck, Stethoscope, GraduationCap, 
  Sparkles, CheckCircle2, Phone, ArrowUpRight, ArrowLeft, 
  ChevronRight, Play, HeartPulse, Eye, BriefcaseMedical
} from 'lucide-react';
import doctorPortrait from '../assets/NRD09285.JPG.jpeg';

// Fluid Cinematic Easing Curve for Quiet Luxury Feel
const luxuryEase = [0.16, 1, 0.3, 1];

// Word-by-Word Masked Reveal Component
function MaskedHeadingReveal({ text, className = "", as = "h1" }) {
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

// Slow Staggered Container for Narrative Text & Cards
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

export default function AboutUsPage({ onNavigate, onOpenBooking }) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Best Plastic Surgeon in Pune | Best Cosmetic Surgeon in Pune | Dr. Amit Mulay';
  }, []);

  const specialistSurgeries = [
    { title: 'Crush Injury Hand', slug: 'hand-reconstruction-surgery' },
    { title: 'Finger & Hand Replantation', slug: 'finger-reconstruction-surgery' },
    { title: 'Thumb Reconstruction', slug: 'hand-reconstruction-surgery' },
    { title: 'Toe and Hand Transfer', slug: 'tendon-transfer-surgery' },
    { title: 'Face Lift', slug: 'facelift-surgery-in-pune' },
    { title: 'Double Chin Correction', slug: 'double-chin-correction-in-pune' },
    { title: 'Hair Transplant', slug: 'cosmetic' },
    { title: 'Nose / Rhinoplasty', slug: 'rhinoplasty-in-pune' },
    { title: 'Paediatric Burns etc.', slug: 'acute-burn-surgery' },
  ];

  const specialtyPillars = [
    {
      title: 'Reconstructive Microsurgery',
      icon: HeartPulse,
      desc: 'Sub-millimeter vascularised free tissue transfers (Free Flaps) for head, neck, limb trauma, and cancer defects.',
    },
    {
      title: 'Hand Surgery',
      icon: Eye,
      desc: 'Precision micro-nerve anastomosis, tendon transfers, crush injury salvage, and digit replantation.',
    },
    {
      title: 'Rhinoplasty Surgery',
      icon: Stethoscope,
      desc: 'Structural aesthetic sculpting and septal airflow correction for natural facial harmony.',
    },
    {
      title: 'Breast Augmentation Surgeries',
      icon: BriefcaseMedical,
      desc: 'US-FDA approved cohesive silicone implants, composite fat transfer, reduction mammaplasty, and flap reconstruction.',
    },
  ];

  const clinicalPhilosophy = [
    {
      badge: 'BOARD CERTIFIED SURGEON',
      title: 'Dr. Amit Mulay',
      subtitle: 'MBBS, FCPS, DNB (General Surgery), DNB (Plastic Surgery)',
      reg: 'MMC Reg No. - 2007/04/1104',
      desc: 'Certified by the National Board of Examination (New Delhi) with 13+ years of clinical excellence.',
    },
    {
      badge: 'GLOBAL FELLOWSHIP',
      title: 'Professional Experience',
      subtitle: 'Reconstructive Microsurgery & Aesthetics',
      reg: 'MAMC New Delhi & CGMH Taipei Scholar',
      desc: 'Specialized in Reconstructive Microsurgery, Hand Surgery, Trauma Surgery and Cosmetic Surgery.',
    },
    {
      badge: 'CLINICAL COMMITMENT',
      title: 'Subtle Care',
      subtitle: 'Minimizing Complications & Scarring',
      reg: 'ISBI Young Investigator Awardee',
      desc: 'As with any complex surgery, experience and finesse in performing procedures greatly contributes to reduction in complications.',
    },
  ];

  const videos = [
    {
      title: 'Rhinoplasty - Its Purpose, Risks & Recovery',
      embedUrl: 'https://www.youtube.com/embed/CPRddb96yjc',
      desc: 'Dr. Amit Mulay explains the purpose, structural techniques, safety, and recovery timeline of rhinoplasty surgery.',
    },
    {
      title: 'Facial Scars and How to Get Rid of Them',
      embedUrl: 'https://www.youtube.com/embed/YROYoJ0sr00',
      desc: 'Comprehensive overview of scar revision methods, laser therapy, and surgical re-alignment for facial trauma.',
    },
    {
      title: 'Gynaecomastia - Causes, Symptoms and Treatment',
      embedUrl: 'https://www.youtube.com/embed/x79GVmN_jUI',
      desc: 'Understanding male breast enlargement, glandular excision, and micro-liposuction for athletic contouring.',
    },
    {
      title: 'Pilonidal Sinus and Cyst Explained',
      embedUrl: 'https://www.youtube.com/embed/YROYoJ0sr00',
      desc: 'Diagnosis, flap reconstruction, and modern surgical techniques for recurrent pilonidal sinus.',
    },
    {
      title: 'Plastic, Reconstructive and Cosmetic Surgery - An Overview',
      embedUrl: 'https://www.youtube.com/embed/7PSAgsT22Wc',
      desc: 'Demystifying the distinction between reconstructive microsurgery and aesthetic enhancements.',
    },
  ];

  return (
    <div className="min-h-screen text-[#1f1b16] selection:bg-[#c9a25a] selection:text-white pb-20 overflow-x-clip">
      
      {/* 1. BREADCRUMBS BAR */}
      <div className="bg-white/70 backdrop-blur-md border-b border-[#eedfcb]/70 relative z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between">
            <nav className="flex items-center space-x-2 text-xs text-[#6e6355]">
              <button 
                onClick={() => onNavigate('/')} 
                className="hover:text-[#b5936d] font-medium transition-colors cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
              <span className="text-[#1f1b16] font-bold">About Dr. Amit Mulay</span>
            </nav>

            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#1f1b16] hover:text-[#b5936d] transition-all cursor-pointer ml-4 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HERO & CLINICAL NARRATIVE SECTION */}
      <section className="pt-10 sm:pt-16 pb-14 sm:pb-20 border-b border-[#eedfcb] relative">
        
        {/* Subtle Ambient Light Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#dfba79]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#c5932b]/8 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Doctor Portrait & Credential Highlights with Reveal (Sticky on scroll) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: luxuryEase }}
              className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start space-y-4"
            >
              {/* Doctor Portrait Card with Image Reveal & Glow */}
              <div className="relative aspect-[3.6/4.6] bg-gradient-to-tr from-[#f5efe3] to-[#f8efdd] shadow-2xl overflow-hidden border border-[#eedfcb] rounded-2xl group">
                {/* Gold Framing Inner Border */}
                <div className="absolute inset-3 sm:inset-4 border border-[#dfba79]/60 z-20 pointer-events-none rounded-xl transition-all duration-700 group-hover:border-[#c5932b] group-hover:inset-3.5"></div>
                
                {/* Subtle Image Reveal & Ken Burns on Hover */}
                <motion.img
                  initial={{ scale: 1.08, filter: 'blur(4px)', opacity: 0 }}
                  animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
                  transition={{ duration: 1.1, ease: luxuryEase }}
                  src={doctorPortrait}
                  alt="Dr. Amit Mulay - Cosmetic & Plastic Surgeon in Pune"
                  className="w-full h-full object-cover object-top relative z-10 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                
                {/* Subtle Lighting Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b16]/40 via-transparent to-transparent z-15 pointer-events-none"></div>

                {/* Floating Glassmorphic Surgeon Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: luxuryEase }}
                  className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 border border-[#eedfcb] shadow-xl rounded-xl text-left transition-transform duration-300 group-hover:translate-y-[-2px]"
                >
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#916922] block flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5932b] animate-ping"></span>
                    CONSULTANT SURGEON
                  </span>
                  <strong className="font-serif text-sm sm:text-base text-[#1f1b16] block leading-snug">
                    Dr. Amit Mulay
                  </strong>
                  <span className="text-[10px] text-gray-600 font-medium">
                    MBBS, FCPS, DNB (General Surgery), DNB (Plastic Surgery)
                  </span>
                </motion.div>
              </div>

              {/* Quick Credentials Summary Cards with Hover Lift */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 gap-3"
              >
                <motion.div 
                  variants={fadeUpVariant}
                  className="p-3.5 bg-white border border-[#eedfcb] rounded-xl shadow-xs text-left luxury-card-hover group cursor-default"
                >
                  <div className="flex items-center space-x-2 text-[#916922] mb-1">
                    <Award className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">ISBI AWARD</span>
                  </div>
                  <div className="font-serif text-sm sm:text-base font-bold text-[#1f1b16] group-hover:text-[#916922] transition-colors">
                    Young Investigator
                  </div>
                  <div className="text-[11px] text-gray-500">Sydney, Australia</div>
                </motion.div>

                <motion.div 
                  variants={fadeUpVariant}
                  className="p-3.5 bg-white border border-[#eedfcb] rounded-xl shadow-xs text-left luxury-card-hover group cursor-default"
                >
                  <div className="flex items-center space-x-2 text-[#916922] mb-1">
                    <GraduationCap className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">MAMC &amp; CGMH</span>
                  </div>
                  <div className="font-serif text-sm sm:text-base font-bold text-[#1f1b16] group-hover:text-[#916922] transition-colors">
                    Global Scholar
                  </div>
                  <div className="text-[11px] text-gray-500">Taipei &amp; New Delhi</div>
                </motion.div>
              </motion.div>

              {/* Verified Medical Registration */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6, ease: luxuryEase }}
                className="p-3 bg-white border border-[#eedfcb] rounded-xl text-xs text-[#6e6355] flex items-center justify-between shadow-2xs hover:border-[#c5932b] transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#916922]" />
                  <span className="font-medium">MMC Registration:</span>
                </div>
                <span className="font-bold text-[#1f1b16] bg-[#f5efe3] px-2.5 py-1 rounded font-mono border border-[#eedfcb]/60">2007/04/1104</span>
              </motion.div>
            </motion.div>

            {/* Right Column: Masked Entrance Headings & Narrative */}
            <motion.div 
              variants={slowStaggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              
              {/* Badge with subtle shine */}
              <motion.div variants={slowFadeUpVariant}>
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f2ebd9] border border-[#eedfcb] text-[#916922] text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px] shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#c5932b]" />
                  <span>ABOUT THE SURGEON · PUNE &amp; PCMC</span>
                </div>
              </motion.div>

              {/* SLOW WORD-BY-WORD MASKED TEXT REVEAL H1 TAG (EXACT FROM REFERENCE SITE) */}
              <MaskedHeadingReveal 
                text="Dr. Amit Mulay- Cosmetic Surgeon in Pune"
                as="h1"
                className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-[#12100d] leading-[1.16] tracking-tight"
              />

              {/* Verbatim Paragraphs 1, 2, 3 with Slow Staggered Entrance */}
              <div className="space-y-4 text-sm sm:text-[15px] text-[#2c261e] leading-[1.82] font-normal">
                <motion.p variants={slowFadeUpVariant}>
                  With <strong className="text-black font-semibold">over 13 years of experience in the field of Cosmetic Surgery and its subspecialties</strong>, he specialises in reconstructive microsurgery and has been performing vascularised/free tissue transfers (Free Flaps).
                </motion.p>

                <motion.p variants={slowFadeUpVariant}>
                  Bestowed with the <strong className="text-black font-semibold">Young Investigator Award at the International Society of Burn Injuries (ISBI) from Australia</strong>, he is a well-known plastic surgeon in Pune &amp; PCMC with a keen interest in the head, neck, and breast cancer reconstruction, hand surgery, reconstruction of upper and lower limb trauma and cosmetic surgery for facial scars, breast, and nose.
                </motion.p>

                <motion.p variants={slowFadeUpVariant}>
                  He is a renowned consultant performing successful surgeries in various hospitals across Pune and PCMC. He has been an <strong className="text-black font-semibold">international visiting scholar at the CGM Hospital, Taipei</strong>.
                </motion.p>
              </div>

              {/* Exact Specialist Surgeries Section (10-Item List with Interactive Cards) */}
              <motion.div 
                variants={slowFadeUpVariant}
                className="p-6 bg-white border border-[#eedfcb] rounded-2xl shadow-xs space-y-4 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#dfba79]/10 rounded-bl-full pointer-events-none"></div>
                
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#1f1b16] border-b border-[#eedfcb] pb-2 flex items-center justify-between">
                  <span>Dr. Amit is a specialist in following Surgeries:</span>
                  <span className="text-[11px] font-sans font-normal text-gray-400">10 Procedures</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {specialistSurgeries.map((surgery, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ x: 4, backgroundColor: '#fdfbf7' }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onNavigate('/' + surgery.slug + '/')}
                      className="flex items-center space-x-2.5 text-xs sm:text-[13px] font-medium text-[#4a4239] hover:text-[#916922] transition-all text-left group p-2 rounded-xl border border-transparent hover:border-[#eedfcb] cursor-pointer"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#f5efe3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c5932b] group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a25a] group-hover:text-white transition-colors" />
                      </div>
                      <span className="leading-tight font-medium">{surgery.title}</span>
                      <ArrowUpRight className="w-3 h-3 text-gray-300 group-hover:text-[#916922] opacity-0 group-hover:opacity-100 transition-all ml-auto flex-shrink-0" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Verbatim Paragraphs 4, 5, 6, 7 */}
              <div className="space-y-4 text-sm sm:text-[15px] text-[#2c261e] leading-[1.82] font-normal">
                <motion.p variants={slowFadeUpVariant}>
                  Dr. Amit Mulay is a <strong className="text-black font-semibold">National Board of Examination (New Delhi) certified Plastic, Reconstructive, and Aesthetic surgeon</strong>. He has been trained from the esteemed <strong className="text-black font-semibold">Maulana Azad Medical College, New Delhi</strong>. His exhaustive training, in-depth knowledge, and experience in various subspecialties of Cosmetic Surgery make him a versatile surgeon.
                </motion.p>

                <motion.p variants={slowFadeUpVariant}>
                  At a young age, he had several scientific publications in reputed international journals to his name. He is able to keep his knowledge up to date even in his busy schedule and is a regular face in various local, national, and international scientific events.
                </motion.p>

                {/* Surgeon Quote Banner with Left Border Pulse */}
                <motion.div 
                  variants={slowFadeUpVariant}
                  whileHover={{ scale: 1.01 }}
                  className="italic font-serif text-[#916922] bg-[#f5efe3]/90 p-5 rounded-2xl border-l-4 border-[#c9a25a] shadow-xs relative overflow-hidden"
                >
                  <p className="relative z-10 leading-relaxed text-sm sm:text-[15px]">
                    &#8220;His key attributes are intelligence, professionalism, conscientiousness, creativity, courage, perseverance, and most importantly his dexterity.&#8221;
                  </p>
                </motion.div>

                <motion.p variants={slowFadeUpVariant}>
                  You can consult Dr. Mulay at his specialized clinic chambers and hospitals in Kothrud, Pimpri-Chinchwad, Vishrantwadi, Deccan Gymkhana, and Shivaji Nagar.
                </motion.p>
              </div>

              {/* Interactive Action Buttons */}
              <motion.div variants={slowFadeUpVariant} className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center space-y-2.5 sm:space-y-0 sm:space-x-3.5">
                <motion.button
                  whileHover={{ scale: 1.02, translateY: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenBooking}
                  className="btn-luxury-interact px-7 py-4 bg-[#1f1b16] hover:bg-[#b5936d] text-white font-bold text-xs uppercase tracking-[1.5px] rounded-xl shadow-lg cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>Book Consultation With Dr. Amit Mulay</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02, translateY: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:08408051299"
                  className="btn-luxury-interact px-5 py-4 bg-white hover:bg-[#fbf8f2] text-[#1f1b16] font-bold text-xs border border-[#eedfcb] rounded-xl shadow-xs flex items-center justify-center space-x-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#916922]" />
                  <span>Call: 08408051299</span>
                </motion.a>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. 4 KEY SPECIALTY HIGHLIGHT PILLARS WITH SCROLL TRIGGER */}
      <section className="py-16 sm:py-20 border-b border-[#eedfcb] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#916922] block mb-1">
              CORE PILLARS OF PRACTICE
            </span>
            <div className="flex justify-center">
              <MaskedHeadingReveal
                text="Dedicated Surgical Expertise"
                as="h2"
                className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1f1b16] text-center justify-center"
              />
            </div>
          </div>

          <motion.div 
            variants={slowStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {specialtyPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  variants={slowFadeUpVariant}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="p-6 bg-white/90 backdrop-blur-xs border border-[#eedfcb] rounded-2xl shadow-xs hover:shadow-xl hover:border-[#c5932b] transition-all text-left flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#1f1b16] text-[#dfba79] flex items-center justify-center mb-4 shadow-sm group-hover:bg-[#c5932b] group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#1f1b16] mb-2 leading-snug group-hover:text-[#916922] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#5c544b] leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. 3 CREDENTIAL & PHILOSOPHY CARDS WITH SCROLL TRIGGER */}
      <section className="py-16 sm:py-20 border-b border-[#eedfcb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={slowStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
          >
            {clinicalPhilosophy.map((card, idx) => (
              <motion.div
                key={idx}
                variants={slowFadeUpVariant}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="p-6 bg-white border border-[#eedfcb] rounded-2xl shadow-xs space-y-3 hover:shadow-lg hover:border-[#c5932b] transition-all group"
              >
                <div className="inline-block px-2.5 py-1 bg-[#f2ebd9] text-[#916922] rounded text-[9px] font-bold tracking-wider uppercase group-hover:bg-[#c5932b] group-hover:text-white transition-colors">
                  {card.badge}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1f1b16] group-hover:text-[#916922] transition-colors">
                  {card.title}
                </h3>
                <div className="text-xs font-semibold text-[#b5936d]">
                  {card.subtitle}
                </div>
                <div className="text-[11px] text-gray-500 font-mono">
                  {card.reg}
                </div>
                <p className="text-xs text-[#5c544b] leading-relaxed pt-2 border-t border-gray-100 font-normal">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. LATEST VIDEOS SECTION (EXACT H2 WITH INTERACTIVE THEATER) */}
      <section className="py-16 sm:py-22 border-b border-[#eedfcb] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 text-left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#916922] block mb-1">
                PATIENT EDUCATION &amp; MEDIA JOURNAL
              </span>
              <MaskedHeadingReveal
                text="Latest Videos"
                as="h2"
                className="font-serif text-3xl sm:text-4xl font-normal text-[#1f1b16]"
              />
            </div>
            <p className="text-xs text-[#6e6355] max-w-sm font-normal">
              Watch Dr. Amit Mulay explain procedures, expected recovery, and clinical surgical nuances.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Active Video Player Frame with Smooth Scale */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: luxuryEase }}
              className="lg:col-span-8 bg-black rounded-2xl overflow-hidden shadow-2xl border border-[#eedfcb] aspect-video relative group"
            >
              <iframe
                src={videos[activeVideoIndex].embedUrl}
                title={videos[activeVideoIndex].title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

            {/* Video Selector List with Interactive State */}
            <motion.div 
              variants={slowStaggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-2.5 text-left"
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-2">
                Select Video Topic ({videos.length} Available)
              </span>

              {videos.map((vid, idx) => (
                <motion.button
                  key={idx}
                  variants={slowFadeUpVariant}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveVideoIndex(idx)}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-start space-x-3 ${
                    activeVideoIndex === idx
                      ? 'bg-[#1f1b16] text-white border-[#1f1b16] shadow-md'
                      : 'bg-[#fbf8f2] text-[#2c261e] border-[#eedfcb] hover:border-[#b5936d]'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                    activeVideoIndex === idx ? 'bg-[#dfba79] text-[#1f1b16]' : 'bg-white text-gray-700'
                  }`}>
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <div>
                    <strong className="text-xs font-serif block leading-snug">
                      {vid.title}
                    </strong>
                    <span className={`text-[11px] line-clamp-1 mt-0.5 ${
                      activeVideoIndex === idx ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      {vid.desc}
                    </span>
                  </div>
                </motion.button>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION (EXACT HEADINGS WITH GLOWING CTA) */}
      <section 
        className="py-20 text-white relative overflow-hidden dark-section border-t border-[#3d3326]"
        style={{ background: 'linear-gradient(135deg, #14110e 0%, #241d15 50%, #14110e 100%)' }}
      >
        {/* Glow Spheres */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#dfba79]/12 blur-[100px] pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: luxuryEase }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 relative z-10"
        >
          <div className="inline-flex items-center justify-center">
            <span className="px-4 py-1.5 rounded-full bg-[#dfba79]/20 border border-[#dfba79]/50 text-[#dfba79] text-[11px] font-bold uppercase tracking-[2.5px] shadow-sm">
              MEET AN EXPERT SURGEON
            </span>
          </div>
          <div className="flex justify-center">
            <MaskedHeadingReveal
              text="Just Make An Appointment & You're Done!"
              as="h2"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white justify-center text-center drop-shadow-sm"
            />
          </div>
          <p className="text-sm sm:text-base text-[#f0e8dc] max-w-xl mx-auto leading-relaxed font-normal">
            Consultations available at our specialized clinical center in Chinchwad MIDC, Pune.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.04, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenBooking}
              className="btn-luxury-interact px-8 py-4 bg-[#dfba79] hover:bg-[#c9a25a] text-[#1f1b16] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl cursor-pointer"
            >
              Get an Appointment
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              href="tel:08408051299"
              className="btn-luxury-interact px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-all backdrop-blur-xs"
            >
              Call 08408051299
            </motion.a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

