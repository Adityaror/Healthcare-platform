import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ShieldCheck, Clock, CheckCircle2, 
  ArrowLeft, Phone, Sparkles, Stethoscope, Award, ChevronDown, 
  ArrowUpRight, ListOrdered, AlertCircle, HeartPulse,
  UserCheck, Layers, HelpCircle
} from 'lucide-react';

// Quiet Luxury Easing Curve
const luxuryEase = [0.16, 1, 0.3, 1];

// Reliable Animated Heading Component (prevents word clipping / masking bugs)
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

const slowStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const slowFadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.15, ease: luxuryEase },
  },
};

export default function ProcedureDetailPage({ 
  procedure, 
  activeCategory,
  onNavigate, 
  onOpenBooking 
}) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (procedure?.seoTitle) {
      document.title = procedure.seoTitle;
    }
  }, [procedure]);

  const pureTitle = procedure ? (procedure.title || '').split(' in ')[0].split(' In ')[0] : '';

  const overviewTitle = procedure?.overviewTitle || 
    (procedure?.overview && procedure.overview.startsWith('What is ') 
      ? procedure.overview.split('\n\n')[0] 
      : null);

  const displayOverview = procedure?.overviewTitle 
    ? (procedure.overview || procedure.summary)
    : (procedure?.overview && procedure.overview.startsWith('What is ')
        ? procedure.overview.split('\n\n').slice(1).join('\n\n')
        : (procedure?.overview || procedure.summary));

  const categoryTitles = {
    skin: 'Skin Surgeries',
    face: 'Face Surgeries',
    breast: 'Breast Surgeries',
    hand: 'Hand & Finger Surgeries',
    cosmetic: 'Cosmetic Surgeries',
    minor: 'Minor Surgeries',
    diabetic: 'Diabetic Foot',
    reconstructive: 'Hand & Finger Surgeries'
  };

  const displayCategory = (activeCategory && categoryTitles[activeCategory]) || procedure?.category || 'Clinical Procedures';

  // Dynamic Table of Contents items based on authentic page content
  const tocItems = procedure?.sections && procedure.sections.length > 0
    ? procedure.sections.map((sec, idx) => ({
        id: sec.id,
        number: `${idx + 1}`,
        title: sec.title,
        icon: Layers
      }))
    : [
        { id: 'overview', number: '1', title: `What Is ${pureTitle}?`, icon: Layers },
        ...(procedure?.whenDone ? [{ id: 'indications', number: '2', title: `When Is ${pureTitle} Done?`, icon: AlertCircle }] : []),
        ...(procedure?.steps ? [{ id: 'steps', number: '3', title: `${pureTitle} Procedure & Workflow`, icon: ListOrdered }] : []),
        ...(procedure?.aftercare ? [{ id: 'aftercare', number: '4', title: 'Aftercare & Recovery Protocol', icon: Clock }] : []),
        { id: 'why-choose', number: `${(procedure?.aftercare ? 5 : 4)}`, title: `Why Choose Dr. Amit Mulay?`, icon: UserCheck },
        ...(procedure?.faqs && procedure.faqs.length > 0 ? [{ id: 'faqs', number: `${(procedure?.aftercare ? 6 : 5)}`, title: `Frequently Asked Questions (${procedure.faqs.length})`, icon: HelpCircle }] : []),
      ];

  // Set initial active section
  useEffect(() => {
    if (tocItems.length > 0 && !activeSection) {
      setActiveSection(tocItems[0].id);
    }
  }, [tocItems, activeSection]);

  // ScrollSpy to highlight active section in the sticky Table of Contents
  useEffect(() => {
    if (!procedure) return;
    const sectionIds = procedure.sections && procedure.sections.length > 0
      ? procedure.sections.map(s => s.id)
      : ['overview', 'indications', 'steps', 'aftercare', 'why-choose', 'faqs'];
    
    const handleScroll = () => {
      const isMobile = window.innerWidth < 1024;
      const scrollPos = window.scrollY + (isMobile ? 130 : 110);

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset;
          if (scrollPos >= top - 25) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [procedure]);

  if (!procedure) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#fbf8f2]">
        <h2 className="font-serif text-2xl text-[#1f1b16] mb-4">Procedure Not Found</h2>
        <button
          onClick={() => onNavigate('/')}
          className="px-6 py-3 bg-[#1f1b16] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#b5936d] transition-colors cursor-pointer"
        >
          Return to Home
        </button>
      </div>
    );
  }

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleTocClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const isMobile = window.innerWidth < 1024;
      const navOffset = isMobile ? 76 : 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen text-[#1f1b16] selection:bg-[#c9a25a] selection:text-white pb-24 overflow-x-clip">
      
      {/* 1. BREADCRUMBS & TOP NAVIGATION BAR */}
      <div className="bg-white/70 backdrop-blur-md border-b border-[#eedfcb]/70 relative z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between">
            <nav className="flex items-center space-x-2 text-xs text-[#6e6355] truncate">
              <button 
                onClick={() => onNavigate('/')} 
                className="hover:text-[#b5936d] font-medium transition-colors cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <span className="text-[#8c734b] font-medium hidden sm:inline">{displayCategory}</span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 hidden sm:inline flex-shrink-0" />
              <span className="text-[#1f1b16] font-bold truncate">{procedure.title}</span>
            </nav>

            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#1f1b16] hover:text-[#b5936d] transition-all cursor-pointer flex-shrink-0 ml-4 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to Overview</span>
            </button>
          </div>
        </div>
      </div>

      {/* 1.5 SUB-SECTION NAVIGATION FOR DIABETIC FOOT */}
      {procedure?.categorySlug === 'diabetic' && (
        <div className="bg-[#fcfaf6] border-b border-[#eedfcb]/80 py-3 px-4 shadow-2xs">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#8c7456]">
              <span className="w-2 h-2 rounded-full bg-[#dfba79] animate-pulse"></span>
              <span className="uppercase tracking-wider text-[11px]">Diabetic Foot Sub-Sections:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { label: 'Diabetic Foot', path: '/diabetic-foot-treatment-in-pune/' },
                { label: 'Wound Care', path: '/wound-care-treatment-in-pune/' },
                { label: 'VAC Dressing', path: '/vac-dressing-in-pune/' },
              ].map((sub) => {
                const isCurrent = procedure.slug === sub.path.replace(/\//g, '');
                return (
                  <button
                    key={sub.path}
                    onClick={() => onNavigate(sub.path, 'diabetic')}
                    className={`px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-[#1F1B16] text-[#dfba79] font-bold shadow-xs ring-1 ring-[#b5936d]/30'
                        : 'bg-white border border-[#eedfcb] text-[#3d3429] font-medium hover:bg-[#f5ecdd] hover:text-[#12100d]'
                    }`}
                  >
                    {sub.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 2. HERO SECTION */}
      <section className="pt-10 sm:pt-16 pb-12 sm:pb-16 border-b border-[#eedfcb] relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#dfba79]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#c5932b]/8 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Overview, Quick CTAs with Slow Masked Reveal */}
            <motion.div 
              variants={slowStaggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 text-left space-y-5"
            >
              <motion.div variants={slowFadeUpVariant}>
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f2ebd9] border border-[#eedfcb] text-[#916922] text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px] shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#c5932b]" />
                  <span>{displayCategory} · DR. AMIT MULAY</span>
                </div>
              </motion.div>

              {/* Masked Heading Reveal */}
              <MaskedHeadingReveal
                text={procedure.title}
                as="h1"
                className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#12100d] leading-[1.14] tracking-tight"
              />

              {overviewTitle && (
                <motion.h2 
                  variants={slowFadeUpVariant}
                  className="font-serif text-xl sm:text-2xl font-bold text-[#1f1b16] tracking-tight pt-1"
                >
                  {overviewTitle}
                </motion.h2>
              )}

              <motion.p 
                variants={slowFadeUpVariant}
                className="text-sm sm:text-base text-[#3d3429] font-normal leading-relaxed max-w-2xl whitespace-pre-line"
              >
                {displayOverview}
              </motion.p>

              {procedure.categories && procedure.categories.length > 0 && (
                <motion.div variants={slowFadeUpVariant} className="p-4 sm:p-5 bg-white/90 border border-[#eedfcb] rounded-xl space-y-2.5 text-left shadow-2xs">
                  {procedure.categoriesTitle && (
                    <p className="text-xs sm:text-sm font-medium text-[#2c261e] leading-relaxed">
                      {procedure.categoriesTitle}
                    </p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {procedure.categories.map((cat, cIdx) => (
                      <div key={cIdx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#1f1b16] font-semibold bg-[#fbf8f2] px-3 py-2 rounded-lg border border-[#eedfcb]/70">
                        <div className="w-2 h-2 rounded-full bg-[#c5932b] flex-shrink-0"></div>
                        <span>{cat}</span>
                      </div>
                    ))}
                  </div>
                  {procedure.categoriesNote && (
                    <p className="text-xs sm:text-[13px] text-[#5c544b] font-normal pt-2 border-t border-[#eedfcb]/60 leading-relaxed italic">
                      {procedure.categoriesNote}
                    </p>
                  )}
                </motion.div>
              )}

              {/* Quick Feature Badges with Hover Lift */}
              <motion.div variants={slowFadeUpVariant} className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-white border border-[#eedfcb] rounded-xl shadow-2xs text-center flex flex-col items-center justify-center luxury-card-hover group cursor-default">
                  <div className="flex items-center justify-center space-x-1.5 text-[#916922] text-[10px] font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span>Experience</span>
                  </div>
                  <div className="font-serif text-sm font-bold text-[#1f1b16] mt-1 group-hover:text-[#916922] transition-colors">
                    13+ Years Mastery
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Microsurgery &amp; Flaps</div>
                </div>

                <div className="p-3.5 bg-white border border-[#eedfcb] rounded-xl shadow-2xs text-center flex flex-col items-center justify-center luxury-card-hover group cursor-default">
                  <div className="flex items-center justify-center space-x-1.5 text-[#916922] text-[10px] font-bold uppercase tracking-wider">
                    <Award className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span>Certification</span>
                  </div>
                  <div className="font-serif text-sm font-bold text-[#1f1b16] mt-1 group-hover:text-[#916922] transition-colors">
                    DNB General &amp; Plastic Surgery
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">MAMC New Delhi · NBE Certified</div>
                </div>

                <div className="p-3.5 bg-white border border-[#eedfcb] rounded-xl shadow-2xs text-center col-span-2 sm:col-span-1 flex flex-col items-center justify-center luxury-card-hover group cursor-default">
                  <div className="flex items-center justify-center space-x-1.5 text-[#916922] text-[10px] font-bold uppercase tracking-wider">
                    <Stethoscope className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span>Locations</span>
                  </div>
                  <div className="font-serif text-sm font-bold text-[#1f1b16] mt-1 group-hover:text-[#916922] transition-colors">
                    Pune &amp; PCMC Clinics
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Apollo &amp; Premier Hospitals</div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={slowFadeUpVariant} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-2.5 sm:space-y-0 sm:space-x-3.5">
                <motion.button
                  whileHover={{ scale: 1.02, translateY: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenBooking}
                  className="btn-luxury-interact px-7 py-4 bg-[#1f1b16] hover:bg-[#b5936d] text-white font-bold text-xs uppercase tracking-[1.5px] rounded-xl shadow-lg cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>Book Consultation for {pureTitle}</span>
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

            {/* Right Column: High-Res Medical Asset with Reveal & Framing */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: luxuryEase }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#eedfcb] shadow-2xl bg-white group">
                <div className="absolute inset-3 sm:inset-4 border border-[#dfba79]/50 z-20 pointer-events-none rounded-xl transition-all duration-700 group-hover:border-[#c5932b]"></div>
                
                <img
                  src={procedure.image}
                  alt={`${procedure.title} by Dr. Amit Mulay`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-4 left-5 right-5 text-white text-left z-20">
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#dfba79] block mb-0.5">
                    CLINICAL PROCEDURE
                  </span>
                  <span className="text-sm font-serif font-medium drop-shadow-xs">
                    Performed with Sub-Millimeter Surgical Precision
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT BODY WITH QUIET LUXURY ARCHITECTURE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: Rich Clinical Content Sections in Champagne Panels */}
          <div className="lg:col-span-8 space-y-10 text-left">
            
            {/* IN-PAGE CHAPTER NAVIGATION CARD (MOBILE ONLY) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: luxuryEase }}
              className="block lg:hidden p-5 sm:p-6 bg-white border border-[#eedfcb] rounded-2xl shadow-xs text-center space-y-4 relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-1 bg-gradient-to-r from-transparent via-[#c5932b] to-transparent"></div>
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#f5efe3] text-[#916922] text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px]">
                <ListOrdered className="w-3.5 h-3.5 text-[#c5932b]" />
                <span>TABLE OF CONTENTS</span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1f1b16]">
                Quick Chapter Navigation
              </h2>
              
              <div className="flex flex-wrap items-stretch justify-center gap-2.5 sm:gap-3 pt-1 text-left">
                {tocItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleTocClick(e, item.id)}
                      className={`flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                        isActive
                          ? 'bg-[#1f1b16] text-[#dfba79] border-[#1f1b16] shadow-md scale-[1.01]'
                          : 'bg-[#fbf8f2] text-[#3d3429] border-[#eedfcb] hover:border-[#c5932b] hover:text-[#916922] hover:bg-white'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-md text-[11px] font-bold flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive ? 'bg-[#c5932b] text-white' : 'bg-[#eedfcb]/70 text-[#916922]'
                      }`}>
                        {item.number}
                      </span>
                      <span className="truncate">{item.title}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* IF PROCEDURE HAS STRUCTURED SECTIONS (e.g. Burn Reconstruction, Skin Grafting) */}
            {procedure.sections && procedure.sections.length > 0 ? (
              procedure.sections.map((section, idx) => (
                <motion.section
                    key={section.id || idx}
                    id={section.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.85, ease: luxuryEase }}
                    className="scroll-mt-24 sm:scroll-mt-28 p-6 sm:p-8 bg-white border border-[#eedfcb] rounded-2xl shadow-xs space-y-5 relative overflow-hidden"
                  >
                    <div className="flex items-center space-x-2 text-[#916922] text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px]">
                      <Layers className="w-3.5 h-3.5 text-[#c5932b]" />
                      <span>{section.badge || 'CLINICAL PROCEDURE'}</span>
                    </div>

                    <MaskedHeadingReveal
                      text={section.title}
                      as="h2"
                      className="font-serif text-2xl sm:text-3xl font-medium text-[#12100d] border-b border-[#eedfcb] pb-3"
                    />

                    {/* Paragraphs */}
                    {section.paragraphs?.map((p, pIdx) => (
                      <div key={pIdx} className="text-sm sm:text-[15px] text-[#2c261e] leading-[1.82] font-normal">
                        <p>{p}</p>
                      </div>
                    ))}

                    {/* Optional Section Bullets */}
                    {section.bullets && (
                      <ul className="space-y-2 pt-1">
                        {section.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#2c261e]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#c5932b] flex-shrink-0 mt-2"></div>
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Subsections */}
                    {section.subsections && (
                      <div className="space-y-6 pt-3">
                        {section.subsections.map((sub, sIdx) => (
                          <div key={sIdx} className="p-5 bg-[#fbf8f2] border border-[#eedfcb] rounded-xl space-y-3 shadow-2xs">
                            <h3 className="font-serif text-base sm:text-lg font-bold text-[#1f1b16]">
                              {sub.title}
                            </h3>
                            {sub.desc && (
                              <p className="text-xs sm:text-sm text-[#4a4239] leading-relaxed font-normal">
                                {sub.desc}
                              </p>
                            )}
                            {sub.paragraphs && sub.paragraphs.map((p, spIdx) => (
                              <p key={spIdx} className="text-xs sm:text-sm text-[#4a4239] leading-relaxed font-normal">
                                {p}
                              </p>
                            ))}
                            {sub.bullets && (
                              <ul className="space-y-2 pt-1">
                                {sub.bullets.map((b, sbIdx) => (
                                  <li key={sbIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#2c261e]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#c5932b] flex-shrink-0 mt-2"></div>
                                    <span className="leading-relaxed">{b}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {sub.items && (
                              <ul className="space-y-2.5 pt-1">
                                {sub.items.map((it, itIdx) => (
                                  <li key={itIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#2c261e]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#c5932b] flex-shrink-0 mt-2"></div>
                                    <span className="leading-relaxed">
                                      <strong className="text-[#1f1b16] font-bold">{it.label} </strong>
                                      {it.text}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {sub.footer && (
                              <p className="text-xs sm:text-sm text-[#5c544b] font-normal leading-relaxed pt-2 border-t border-[#eedfcb]/60 italic">
                                {sub.footer}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.section>
                ))
            ) : (
              /* STANDARD PROCEDURAL TEMPLATE (e.g. Skin Grafting with FAQs) */
              <>
                {/* 1. OVERVIEW SECTION CARD */}
                <motion.section 
                  id="overview"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.85, ease: luxuryEase }}
                  className="scroll-mt-24 sm:scroll-mt-28 p-6 sm:p-8 bg-white border border-[#eedfcb] rounded-2xl shadow-xs space-y-4 relative overflow-hidden"
                >
                  <div className="flex items-center space-x-2 text-[#916922] text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px]">
                    <Layers className="w-3.5 h-3.5 text-[#c5932b]" />
                    <span>CLINICAL DEFINITION &amp; OVERVIEW</span>
                  </div>

                  <MaskedHeadingReveal
                    text={`What Is ${pureTitle}?`}
                    as="h2"
                    className="font-serif text-2xl sm:text-3xl font-medium text-[#12100d] border-b border-[#eedfcb] pb-3"
                  />

                  <div className="text-sm sm:text-[15px] text-[#2c261e] leading-[1.82] font-normal pt-1">
                    <p>{procedure.overview}</p>
                  </div>
                </motion.section>

                {/* 2. INDICATIONS SECTION CARD */}
                {procedure.whenDone && procedure.whenDone.length > 0 && (
                  <motion.section 
                    id="indications"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.85, ease: luxuryEase }}
                    className="scroll-mt-24 sm:scroll-mt-28 p-6 sm:p-8 bg-white border border-[#eedfcb] rounded-2xl shadow-xs space-y-4"
                  >
                    <div className="flex items-center space-x-2 text-[#916922] text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px]">
                      <AlertCircle className="w-3.5 h-3.5 text-[#c5932b]" />
                      <span>SURGICAL INDICATIONS</span>
                    </div>

                    <MaskedHeadingReveal
                      text={`When Is ${pureTitle} Done?`}
                      as="h2"
                      className="font-serif text-2xl sm:text-3xl font-medium text-[#12100d] border-b border-[#eedfcb] pb-3"
                    />

                    <p className="text-xs sm:text-sm text-[#5c544b] font-normal">
                      It is recommended when tissue integrity is compromised or aesthetic enhancement is indicated due to:
                    </p>

                    <div className="grid grid-cols-1 gap-3 pt-2">
                      {procedure.whenDone.map((ind, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ x: 4, backgroundColor: '#fdfbf7' }}
                          className="p-4 bg-[#fbf8f2] border border-[#eedfcb] rounded-xl flex items-start space-x-3.5 shadow-2xs hover:border-[#c5932b] transition-all text-left group"
                        >
                          <div className="w-5 h-5 rounded-full bg-[#f5efe3] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#c5932b] transition-colors">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a25a] group-hover:text-white transition-colors" />
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-[#1f1b16] leading-snug">
                            {ind}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                )}

                {/* 3. STEP-BY-STEP PROCEDURE WORKFLOW CARD */}
                {procedure.steps && procedure.steps.length > 0 && (
                  <motion.section 
                    id="steps"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.85, ease: luxuryEase }}
                    className="scroll-mt-24 sm:scroll-mt-28 p-6 sm:p-8 bg-white border border-[#eedfcb] rounded-2xl shadow-xs space-y-5"
                  >
                    <div className="flex items-center space-x-2 text-[#916922] text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px]">
                      <ListOrdered className="w-3.5 h-3.5 text-[#c5932b]" />
                      <span>STEP-BY-STEP SURGICAL PROCESS</span>
                    </div>

                    <MaskedHeadingReveal
                      text="Surgical Procedure & Workflow"
                      as="h2"
                      className="font-serif text-2xl sm:text-3xl font-medium text-[#12100d] border-b border-[#eedfcb] pb-3"
                    />

                    <p className="text-xs sm:text-sm text-[#5c544b] font-normal">
                      Dr. Amit Mulay follows strict microsurgical protocols and evidence-based safety standards:
                    </p>

                    <div className="space-y-3.5 pt-2">
                      {procedure.steps.map((step, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ y: -3 }}
                          className="p-5 bg-[#fbf8f2] border border-[#eedfcb] rounded-xl shadow-2xs flex items-start space-x-4 hover:border-[#c5932b] hover:shadow-md transition-all group text-left"
                        >
                          <div className="w-8 h-8 rounded-xl bg-[#1f1b16] text-[#dfba79] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#c5932b] group-hover:text-white transition-colors">
                            {idx + 1}
                          </div>
                          <div className="space-y-1 text-left flex-1">
                            <h4 className="font-serif text-sm sm:text-base font-bold text-[#1f1b16] group-hover:text-[#916922] transition-colors">
                              {step.title}
                            </h4>
                            <p className="text-xs sm:text-[13px] text-[#4a4239] leading-relaxed font-normal">
                              {step.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                )}

                {/* 4. AFTERCARE & RECOVERY PROTOCOL CARD */}
                {procedure.aftercare && procedure.aftercare.length > 0 && (
                  <motion.section 
                    id="aftercare"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.85, ease: luxuryEase }}
                    className="scroll-mt-24 sm:scroll-mt-28 p-6 sm:p-8 bg-white border border-[#eedfcb] rounded-2xl shadow-xs space-y-4"
                  >
                    <div className="flex items-center space-x-2 text-[#916922] text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px]">
                      <Clock className="w-3.5 h-3.5 text-[#c5932b]" />
                      <span>POST-OPERATIVE RECOVERY</span>
                    </div>

                    <MaskedHeadingReveal
                      text="Aftercare & Recovery Steps"
                      as="h2"
                      className="font-serif text-2xl sm:text-3xl font-medium text-[#12100d] border-b border-[#eedfcb] pb-3"
                    />

                    <div className="p-5 sm:p-6 bg-[#f5efe3]/90 border border-[#eedfcb] rounded-xl space-y-3.5">
                      <div className="flex items-center space-x-2 text-[#916922] font-bold text-xs uppercase tracking-wider">
                        <HeartPulse className="w-4 h-4 text-[#c5932b]" />
                        <span>OPTIMAL HEALING PROTOCOL</span>
                      </div>
                      
                      <div className="space-y-2.5">
                        {procedure.aftercare.map((care, i) => (
                          <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-[#2c261e] font-normal">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#c5932b] flex-shrink-0 mt-2"></div>
                            <span className="leading-relaxed">{care}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.section>
                )}

                {/* 5. WHY CHOOSE DR. AMIT MULAY CARD */}
                <motion.section 
                  id="why-choose"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.85, ease: luxuryEase }}
                  className="scroll-mt-24 sm:scroll-mt-28 p-6 sm:p-8 bg-white border border-[#eedfcb] rounded-2xl shadow-xs space-y-4"
                >
                  <div className="flex items-center space-x-2 text-[#916922] text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px]">
                    <UserCheck className="w-3.5 h-3.5 text-[#c5932b]" />
                    <span>SURGICAL EXPERTISE &amp; PATIENT CARE</span>
                  </div>

                  <MaskedHeadingReveal
                    text={`Why Choose Dr. Amit Mulay for ${pureTitle}?`}
                    as="h2"
                    className="font-serif text-2xl sm:text-3xl font-medium text-[#12100d] border-b border-[#eedfcb] pb-3"
                  />

                  <div className="space-y-3 text-sm sm:text-[15px] text-[#2c261e] leading-[1.82] font-normal">
                    <p>
                      Dr. Amit Mulay works individually on each case, investing dedicated time in understanding every patient’s clinical history and anatomical goals. Based on comprehensive diagnostic evaluations, a customized surgical plan is formulated.
                    </p>
                    <p>
                      Equipped with advanced microsurgical instruments, laminar flow surgical environments, and 13+ years of specialized surgical excellence, Dr. Mulay ensures minimal scarring, optimal functional restoration, and enduring aesthetic harmony.
                    </p>
                  </div>
                </motion.section>

                {/* 6. FAQS ACCORDION CARD */}
                {procedure.faqs && procedure.faqs.length > 0 && (
                  <motion.section 
                    id="faqs"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.85, ease: luxuryEase }}
                    className="scroll-mt-24 sm:scroll-mt-28 p-6 sm:p-8 bg-white border border-[#eedfcb] rounded-2xl shadow-xs space-y-5"
                  >
                    <div className="flex items-center justify-between border-b border-[#eedfcb] pb-3">
                      <div>
                        <div className="flex items-center space-x-2 text-[#916922] text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px] mb-1">
                          <HelpCircle className="w-3.5 h-3.5 text-[#c5932b]" />
                          <span>PATIENT CLARIFICATIONS</span>
                        </div>
                        <MaskedHeadingReveal
                          text="Frequently Asked Questions (FAQs)"
                          as="h2"
                          className="font-serif text-2xl sm:text-3xl font-medium text-[#12100d]"
                        />
                      </div>
                      <span className="text-xs text-[#916922] font-bold bg-[#f5efe3] px-3 py-1.5 rounded-full border border-[#eedfcb]">
                        {procedure.faqs.length} Questions
                      </span>
                    </div>

                    <div className="space-y-3 pt-2">
                      {procedure.faqs.map((faq, index) => {
                        const isOpen = openFaqIndex === index;
                        return (
                          <div
                            key={index}
                            className="border border-[#eedfcb] rounded-xl bg-[#fdfbf7] overflow-hidden transition-all shadow-2xs hover:border-[#c5932b]"
                          >
                            <button
                              onClick={() => toggleFaq(index)}
                              className="w-full px-5 py-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-[#1f1b16] hover:bg-[#fbf8f2] transition-colors cursor-pointer"
                            >
                              <span className="pr-4 leading-snug">{faq.q}</span>
                              <ChevronDown
                                className={`w-4 h-4 text-[#916922] flex-shrink-0 transition-transform duration-300 ${
                                  isOpen ? 'rotate-180 text-[#c5932b]' : ''
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.35, ease: luxuryEase }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-5 pb-5 pt-1 text-xs sm:text-[13px] text-[#4a4239] leading-relaxed border-t border-[#eedfcb]/50 bg-white">
                                    <p>{faq.a}</p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </motion.section>
                )}
              </>
            )}

            {/* FINAL BOOKING CTA BANNER (DARK LUXURY) */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.0, ease: luxuryEase }}
              className="p-8 sm:p-10 text-white rounded-2xl shadow-2xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 dark-section border border-[#3d3326] relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #14110e 0%, #241d15 50%, #14110e 100%)' }}
            >
              <div className="space-y-2 relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#dfba79] block">
                  TAKE THE NEXT STEP
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white leading-snug">
                  Let’s Set Up An Appointment<br className="hidden sm:inline" /> For A Meeting With The Doctor
                </h3>
              </div>

              <motion.button
                whileHover={{ scale: 1.04, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="btn-luxury-interact px-8 py-4 bg-[#dfba79] hover:bg-[#c9a25a] text-[#1f1b16] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl cursor-pointer whitespace-nowrap flex-shrink-0 relative z-10"
              >
                Book Appointment ↗
              </motion.button>
            </motion.div>

          </div>

          {/* RIGHT SIDEBAR: Sticky Table of Contents (Centered Vertically in Viewport on Scroll) */}
          <aside className="hidden lg:block lg:col-span-4 self-start sticky top-[max(6.5rem,calc(50vh-180px))] space-y-6">
            
            {/* Table of Contents Sticky Card with Active Section Highlighting & Numbers */}
            <div className="p-6 bg-white border border-[#eedfcb] rounded-2xl shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#dfba79]/10 rounded-bl-full pointer-events-none"></div>
              
              <div className="pb-3 border-b border-[#eedfcb] flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#916922] block mb-0.5">
                    ON THIS PAGE
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#1f1b16]">
                    Table of Contents
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#f5efe3] flex items-center justify-center text-[#916922]">
                  <ListOrdered className="w-3.5 h-3.5" />
                </div>
              </div>

              <nav className="space-y-1.5 text-xs text-left">
                {tocItems.map((item) => {
                  const ItemIcon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleTocClick(e, item.id)}
                      className={`flex items-center space-x-3 p-2.5 rounded-xl transition-all duration-300 group ${
                        isActive
                          ? 'bg-[#f5efe3] text-[#916922] font-bold shadow-2xs border-l-4 border-l-[#c5932b] translate-x-1'
                          : 'text-[#5c544b] hover:text-[#916922] hover:bg-[#fbf8f2] font-medium'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive 
                          ? 'bg-[#c5932b] text-white shadow-2xs' 
                          : 'bg-[#f5efe3] text-[#916922] group-hover:bg-[#c5932b] group-hover:text-white'
                      }`}>
                        <ItemIcon className="w-3 h-3" />
                      </div>
                      <span className="leading-snug flex-1 truncate">
                        {item.number}. {item.title}
                      </span>
                    </a>
                  );
                })}
              </nav>
            </div>

          </aside>

        </div>
      </div>

    </div>
  );
}
