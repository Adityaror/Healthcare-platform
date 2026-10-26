import React, { useState } from 'react';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import logoImg from '../assets/Dr. Amit Mulay Logo.png';
import { getProcedureBySlug } from '../data/proceduresData';

export default function Navbar({ onOpenBooking, onOpenThemeStudio, onNavigate, currentPath = '/', activeCategory = null }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [openMobileCategory, setOpenMobileCategory] = useState(null);

  const toggleMobileCategory = (catKey) => {
    setOpenMobileCategory(prev => prev === catKey ? null : catKey);
  };

  const cleanPath = (currentPath || '/').toLowerCase().replace(/^\/+|\/+$/g, '');
  const matchedProc = getProcedureBySlug(cleanPath);
  const defaultCategory = matchedProc ? matchedProc.categorySlug : null;

  // Use explicit activeCategory context from navigation if available; otherwise use default category
  const effectiveCategory = activeCategory || defaultCategory;

  const isHomeActive = cleanPath === '';
  const isAboutActive = cleanPath === 'about-us' || cleanPath === 'about' || cleanPath === 'dr-amit-mulay';

  // Category active states
  const isSkinActive = effectiveCategory === 'skin';
  const isFaceActive = effectiveCategory === 'face';
  const isBreastActive = effectiveCategory === 'breast';
  const isHandActive = effectiveCategory === 'hand';
  const isCosmeticActive = effectiveCategory === 'cosmetic';
  const isMinorActive = effectiveCategory === 'minor';
  const isDiabeticActive = effectiveCategory === 'diabetic';
  const isBlogActive = cleanPath === 'blog' || cleanPath.startsWith('blog/') || cleanPath.includes('blog');
  const isContactActive = cleanPath === 'contact-us' || cleanPath === 'contact';

  const surgeryCategories = [
    {
      key: 'skin',
      name: 'Skin Surgeries',
      isActive: isSkinActive,
      links: [
        { label: 'Skin Grafting', path: '/skin-grafting-in-pune/' },
        { label: 'Reconstruction Surgery for Burns', path: '/reconstruction-surgery-for-burns-pune/' },
        { label: 'Acute Burn Surgery', path: '/acute-burn-surgery/' },
      ]
    },
    {
      key: 'face',
      name: 'Face Surgeries',
      isActive: isFaceActive,
      links: [
        { label: 'Rhinoplasty (Nose Surgery)', path: '/rhinoplasty-in-pune/' },
        { label: 'Flap Surgery & Microsurgery', path: '/flap-surgery-in-pune/' },
        { label: 'Facelift Surgery', path: '/facelift-surgery-in-pune/' },
        { label: 'Facial Reconstruction', path: '/facial-reconstruction-in-pune/' },
        { label: 'Nerve Reconstruction', path: '/nerve-reconstruction-surgery/' },
        { label: 'Nerve Palsy treatment', path: '/bells-palsy-treatment-pune/' },
        { label: 'Oral Cancer Reconstruction', path: '/oral-cancer-treatment-in-pune/' },
        { label: 'Chin Augmentation', path: '/chin-augmentation-in-pune/' },
        { label: 'Dimple Creation', path: '/dimple-creation-in-pune/' },
      ]
    },
    {
      key: 'breast',
      name: 'Breast Surgeries',
      isActive: isBreastActive,
      links: [
        { label: 'Keloid Treatment', path: '/keloid-treatment-in-pune/' },
        { label: 'Breast Reconstruction', path: '/skin-flaps-for-breast-reconstruction/' },
        { label: 'Breast Augmentation', path: '/breast-augmentation-in-pune/' },
        { label: 'Chest Reconstruction', path: '/chest-reconstruction-surgery-in-pune/' },
      ]
    },
    {
      key: 'hand',
      name: 'Hand & Finger Surgeries',
      isActive: isHandActive,
      links: [
        { label: 'Hand Surgeries', path: '/hand-reconstruction-surgery/' },
        { label: 'Finger Reconstruction', path: '/finger-reconstruction-in-pune/' },
        { label: 'Tendon Transfer', path: '/tendon-transfer-pune/' },
        { label: 'Hand Tumour', path: '/hand-tumour-surgery-in-pune/' },
      ]
    },
    {
      key: 'cosmetic',
      name: 'Cosmetic Surgeries',
      isActive: isCosmeticActive,
      links: [
        { label: 'Mommy Makeover', path: '/mommy-makeover-in-pune/' },
        { label: 'Breast Augmentation', path: '/breast-augmentation-in-pune/' },
        { label: 'Body Contouring', path: '/body-contouring-treatment-in-pune/' },
        { label: 'Arm liposuction in Pune', path: '/arm-liposuction-in-pune/' },
        { label: 'Butt Lift', path: '/buttock-lift-in-pune/' },
        { label: 'Breast Reduction Surgery', path: '/breast-reduction-surgery-in-pune/' },
        { label: 'Mastopexy (Breast Lift)', path: '/mastopexy-in-pune/' },
        { label: 'Buccal Fat Pad Removal', path: '/buccal-fat-pad-removal-in-pune/' },
        { label: 'Double Chin correction', path: '/double-chin-correction-in-pune/' },
        { label: 'Vaginoplasty', path: '/vaginoplasty-surgery-in-pune/' },
        { label: 'Hymenoplasty Surgery', path: '/hymenoplasty-surgery-in-pune/' },
        { label: 'Abdominoplasty (Tummy Tuck)', path: '/tummy-tuck-in-pune/' },
        { label: 'Liposuction', path: '/liposuction-in-pune/' },
        { label: 'Gynecomastia', path: '/gynecomastia-treatment-in-pune/' },
      ]
    },
    {
      key: 'minor',
      name: 'Minor Surgeries',
      isActive: isMinorActive,
      links: [
        { label: 'Lipoma Removal', path: '/lipoma-removal-in-pune/' },
        { label: 'Sebaceous Cyst Removal', path: '/sebaceous-cyst-removal-in-pune/' },
        { label: 'Ear Lobe Repair', path: '/ear-lobe-repair-in-pune/' },
        { label: 'Facial Wound Repair', path: '/facial-wound-repair-in-pune/' },
        { label: 'Toenail Excision for Paronychia and Ingrown Toenail', path: '/toe-nail-excition-paronychia-in-pune/' },
        { label: 'Warts Removal', path: '/warts-removal-in-pune/' },
        { label: 'Scar Revision', path: '/scar-revision-in-pune/' },
      ]
    },
    {
      key: 'diabetic',
      name: 'Diabetic Foot',
      isActive: isDiabeticActive,
      links: [
        { label: 'Diabetic Foot', path: '/diabetic-foot-treatment-in-pune/' },
        { label: 'Wound Care', path: '/wound-care-treatment-in-pune/' },
        { label: 'VAC Dressing', path: '/vac-dressing-in-pune/' },
      ]
    },
  ];

  const activePillClass = "bg-[#1F1B16] text-[#dfba79] px-2 xl:px-2.5 py-1 rounded-full text-[10.5px] xl:text-[11.5px] font-bold transition-all shadow-2xs whitespace-nowrap flex-shrink-0 cursor-pointer";
  const inactiveLinkClass = "px-1.5 xl:px-2 py-1 rounded-md text-[#1F1B16] hover:text-[#b5936d] hover:bg-[#fbf8f2] transition-colors whitespace-nowrap flex-shrink-0 cursor-pointer font-medium text-[10.5px] xl:text-[11.5px]";

  const handleLinkClick = (e, path, category = null) => {
    e.preventDefault();
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(path, category);
    }
  };

  return (
    <>
      {/* 1. Floating Bottom Left "Call Now" Pill Button */}
      <a
        href="tel:08408051299"
        className="fixed bottom-6 left-6 z-40 bg-[#DFBA79] hover:bg-[#c9a25a] text-[#1F1B16] font-semibold text-xs px-5 py-3 rounded-full shadow-xl flex items-center space-x-2 transition-all hover:scale-105"
      >
        <Phone className="w-3.5 h-3.5 fill-current" />
        <span className="tracking-wide">Call Now</span>
      </a>

      {/* 2. Floating Bottom Right Trigger (WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center">

        {/* WhatsApp Green Button */}
        <a
          href="https://wa.me/918408051299"
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
          title="Chat on WhatsApp"
          aria-label="WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
          </svg>
        </a>
      </div>

      {/* 3. HEADER BAR */}
      <header className="bg-white/85 backdrop-blur-md border-b border-[#eedfcb]/70 sticky top-0 z-50 shadow-xs w-full">
        <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-5 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-[66px] gap-2">

            {/* LEFT BOX: Logo on Left Side */}
            <div className="flex-shrink-0 min-w-max flex items-center mr-2 xl:mr-4">
              <a 
                href="/" 
                onClick={(e) => handleLinkClick(e, '/')}
                className="flex items-center space-x-2 sm:space-x-2.5 group min-w-max cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full overflow-hidden bg-black p-0.5 border border-[#b5936d]/40 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <img
                    src={logoImg}
                    alt="Dr. Amit Mulay Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col text-left min-w-max">
                  <span className="font-cinzel text-xs sm:text-sm lg:text-[14px] xl:text-[15px] font-bold text-[#b5936d] tracking-wide leading-none whitespace-nowrap group-hover:text-[#8b6d4b] transition-colors">
                    Dr. Amit Mulay
                  </span>
                  <span className="hidden sm:block text-[7.5px] lg:text-[8.5px] font-sans font-bold uppercase tracking-[1.5px] text-[#1F1B16] mt-0.5 whitespace-nowrap">
                    PLASTIC SURGEON
                  </span>
                </div>
              </a>
            </div>

            {/* CENTER BOX: Desktop Navigation Links with Dynamic Active Highlights */}
            <nav className="hidden xl:flex flex-1 justify-center items-center space-x-1 xl:space-x-1.5 2xl:space-x-2.5 text-[11px] 2xl:text-[12.5px] font-medium text-[#1F1B16] min-w-0">
              
              {/* Home */}
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                className={isHomeActive ? activePillClass : inactiveLinkClass}
              >
                Home
              </a>

              {/* About */}
              <a
                href="/about-us/"
                onClick={(e) => handleLinkClick(e, '/about-us/')}
                className={isAboutActive ? activePillClass : inactiveLinkClass}
              >
                About
              </a>

              {/* 1. SKIN DROPDOWN */}
              <div
                className="relative group py-2 flex-shrink-0"
                onMouseEnter={() => setOpenDropdown('skin')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center space-x-0.5 ${isSkinActive ? activePillClass : inactiveLinkClass}`}
                >
                  <span>Skin</span>
                  <ChevronDown className={`w-3 h-3 ${isSkinActive ? 'text-[#dfba79]' : 'text-gray-500'} group-hover:rotate-180 transition-transform`} />
                </button>

                {openDropdown === 'skin' && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-[#eedfcb] shadow-2xl py-2 rounded-lg text-xs font-medium normal-case tracking-normal animate-fadeIn text-left z-50">
                    <a href="/skin-grafting-in-pune/" onClick={(e) => handleLinkClick(e, '/skin-grafting-in-pune/', 'skin')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Skin Grafting</a>
                    <a href="/reconstruction-surgery-for-burns-pune/" onClick={(e) => handleLinkClick(e, '/reconstruction-surgery-for-burns-pune/', 'skin')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Reconstruction Surgery for Burns</a>
                    <a href="/acute-burn-surgery/" onClick={(e) => handleLinkClick(e, '/acute-burn-surgery/', 'skin')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Acute Burn Surgery</a>
                  </div>
                )}
              </div>

              {/* 2. FACE DROPDOWN */}
              <div
                className="relative group py-2 flex-shrink-0"
                onMouseEnter={() => setOpenDropdown('face')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center space-x-0.5 ${isFaceActive ? activePillClass : inactiveLinkClass}`}
                >
                  <span>Face</span>
                  <ChevronDown className={`w-3 h-3 ${isFaceActive ? 'text-[#dfba79]' : 'text-gray-500'} group-hover:rotate-180 transition-transform`} />
                </button>

                {openDropdown === 'face' && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-[#eedfcb] shadow-2xl py-2 rounded-lg text-xs font-medium normal-case tracking-normal animate-fadeIn text-left z-50">
                    <a href="/rhinoplasty-in-pune/" onClick={(e) => handleLinkClick(e, '/rhinoplasty-in-pune/', 'face')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Rhinoplasty (Nose Surgery)</a>
                    <a href="/flap-surgery-in-pune/" onClick={(e) => handleLinkClick(e, '/flap-surgery-in-pune/', 'face')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Flap Surgery &amp; Microsurgery</a>
                    <a href="/facelift-surgery-in-pune/" onClick={(e) => handleLinkClick(e, '/facelift-surgery-in-pune/', 'face')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Facelift Surgery</a>
                    <a href="/facial-reconstruction-in-pune/" onClick={(e) => handleLinkClick(e, '/facial-reconstruction-in-pune/', 'face')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Facial Reconstruction</a>
                    <a href="/nerve-reconstruction-surgery/" onClick={(e) => handleLinkClick(e, '/nerve-reconstruction-surgery/', 'face')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Nerve Reconstruction</a>
                    <a href="/bells-palsy-treatment-pune/" onClick={(e) => handleLinkClick(e, '/bells-palsy-treatment-pune/', 'face')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Nerve Palsy treatment</a>
                    <a href="/oral-cancer-treatment-in-pune/" onClick={(e) => handleLinkClick(e, '/oral-cancer-treatment-in-pune/', 'face')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Oral Cancer Reconstruction</a>
                    <a href="/chin-augmentation-in-pune/" onClick={(e) => handleLinkClick(e, '/chin-augmentation-in-pune/', 'face')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Chin Augmentation</a>
                    <a href="/dimple-creation-in-pune/" onClick={(e) => handleLinkClick(e, '/dimple-creation-in-pune/', 'face')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Dimple Creation</a>
                  </div>
                )}
              </div>

              {/* 3. BREAST DROPDOWN */}
              <div
                className="relative group py-2 flex-shrink-0"
                onMouseEnter={() => setOpenDropdown('breast')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center space-x-0.5 ${isBreastActive ? activePillClass : inactiveLinkClass}`}
                >
                  <span>Breast</span>
                  <ChevronDown className={`w-3 h-3 ${isBreastActive ? 'text-[#dfba79]' : 'text-gray-500'} group-hover:rotate-180 transition-transform`} />
                </button>

                {openDropdown === 'breast' && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-[#eedfcb] shadow-2xl py-2 rounded-lg text-xs font-medium normal-case tracking-normal animate-fadeIn text-left z-50">
                    <a href="/keloid-treatment-in-pune/" onClick={(e) => handleLinkClick(e, '/keloid-treatment-in-pune/', 'breast')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Keloid Treatment</a>
                    <a href="/skin-flaps-for-breast-reconstruction/" onClick={(e) => handleLinkClick(e, '/skin-flaps-for-breast-reconstruction/', 'breast')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Breast Reconstruction</a>
                    <a href="/breast-augmentation-in-pune/" onClick={(e) => handleLinkClick(e, '/breast-augmentation-in-pune/', 'breast')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Breast Augmentation</a>
                    <a href="/chest-reconstruction-surgery-in-pune/" onClick={(e) => handleLinkClick(e, '/chest-reconstruction-surgery-in-pune/', 'breast')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Chest Reconstruction</a>
                  </div>
                )}
              </div>

              {/* 4. HAND & FINGER DROPDOWN */}
              <div
                className="relative group py-2 flex-shrink-0"
                onMouseEnter={() => setOpenDropdown('hand')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center space-x-0.5 ${isHandActive ? activePillClass : inactiveLinkClass}`}
                >
                  <span>Hand &amp; Finger</span>
                  <ChevronDown className={`w-3 h-3 ${isHandActive ? 'text-[#dfba79]' : 'text-gray-500'} group-hover:rotate-180 transition-transform`} />
                </button>

                {openDropdown === 'hand' && (
                  <div className="absolute top-full left-0 w-60 bg-white border border-[#eedfcb] shadow-2xl py-2 rounded-lg text-xs font-medium normal-case tracking-normal animate-fadeIn text-left z-50">
                    <a href="/hand-reconstruction-surgery/" onClick={(e) => handleLinkClick(e, '/hand-reconstruction-surgery/', 'hand')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Hand Surgeries</a>
                    <a href="/finger-reconstruction-in-pune/" onClick={(e) => handleLinkClick(e, '/finger-reconstruction-in-pune/', 'hand')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Finger Reconstruction</a>
                    <a href="/tendon-transfer-pune/" onClick={(e) => handleLinkClick(e, '/tendon-transfer-pune/', 'hand')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Tendon Transfer</a>
                    <a href="/hand-tumour-surgery-in-pune/" onClick={(e) => handleLinkClick(e, '/hand-tumour-surgery-in-pune/', 'hand')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Hand Tumour</a>
                  </div>
                )}
              </div>

              {/* 5. COSMETIC SURGERIES DROPDOWN */}
              <div
                className="relative group py-2 flex-shrink-0"
                onMouseEnter={() => setOpenDropdown('cosmetic')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center space-x-0.5 ${isCosmeticActive ? activePillClass : inactiveLinkClass}`}
                >
                  <span>Cosmetic Surgeries</span>
                  <ChevronDown className={`w-3 h-3 ${isCosmeticActive ? 'text-[#dfba79]' : 'text-gray-500'} group-hover:rotate-180 transition-transform`} />
                </button>

                {openDropdown === 'cosmetic' && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-[#eedfcb] shadow-2xl py-2 rounded-lg text-xs font-medium normal-case tracking-normal animate-fadeIn text-left z-50 max-h-96 overflow-y-auto">
                    <a href="/mommy-makeover-in-pune/" onClick={(e) => handleLinkClick(e, '/mommy-makeover-in-pune/', 'cosmetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Mommy Makeover</a>
                    <a href="/breast-augmentation-in-pune/" onClick={(e) => handleLinkClick(e, '/breast-augmentation-in-pune/', 'cosmetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Breast Augmentation</a>
                    <a href="/body-contouring-treatment-in-pune/" onClick={(e) => handleLinkClick(e, '/body-contouring-treatment-in-pune/', 'cosmetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Body Contouring</a>
                    <a href="/arm-liposuction-in-pune/" onClick={(e) => handleLinkClick(e, '/arm-liposuction-in-pune/', 'cosmetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Arm liposuction in Pune</a>
                    <a href="/buttock-lift-in-pune/" onClick={(e) => handleLinkClick(e, '/buttock-lift-in-pune/', 'cosmetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Butt Lift</a>
                    <a href="/breast-reduction-surgery-in-pune/" onClick={(e) => handleLinkClick(e, '/breast-reduction-surgery-in-pune/', 'cosmetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Breast Reduction Surgery</a>
                    <a href="/mastopexy-in-pune/" onClick={(e) => handleLinkClick(e, '/mastopexy-in-pune/', 'cosmetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Mastopexy (Breast Lift)</a>
                    <a href="/buccal-fat-pad-removal-in-pune/" onClick={(e) => handleLinkClick(e, '/buccal-fat-pad-removal-in-pune/', 'cosmetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Buccal Fat Pad Removal</a>
                    <a href="/double-chin-correction-in-pune/" onClick={(e) => handleLinkClick(e, '/double-chin-correction-in-pune/', 'cosmetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Double Chin correction</a>
                    <a href="/vaginoplasty-surgery-in-pune/" onClick={(e) => handleLinkClick(e, '/vaginoplasty-surgery-in-pune/', 'cosmetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Vaginoplasty</a>
                    <a href="/hymenoplasty-surgery-in-pune/" onClick={(e) => handleLinkClick(e, '/hymenoplasty-surgery-in-pune/', 'cosmetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Hymenoplasty Surgery</a>
                    <a href="/tummy-tuck-in-pune/" onClick={(e) => handleLinkClick(e, '/tummy-tuck-in-pune/', 'cosmetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Abdominoplasty (Tummy Tuck)</a>
                    <a href="/liposuction-in-pune/" onClick={(e) => handleLinkClick(e, '/liposuction-in-pune/', 'cosmetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Liposuction</a>
                    <a href="/gynecomastia-treatment-in-pune/" onClick={(e) => handleLinkClick(e, '/gynecomastia-treatment-in-pune/', 'cosmetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Gynecomastia</a>
                  </div>
                )}
              </div>

              {/* 6. MINOR SURGERIES DROPDOWN */}
              <div
                className="relative group py-2 flex-shrink-0"
                onMouseEnter={() => setOpenDropdown('minor')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center space-x-0.5 ${isMinorActive ? activePillClass : inactiveLinkClass}`}
                >
                  <span>Minor Surgeries</span>
                  <ChevronDown className={`w-3 h-3 ${isMinorActive ? 'text-[#dfba79]' : 'text-gray-500'} group-hover:rotate-180 transition-transform`} />
                </button>

                {openDropdown === 'minor' && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-[#eedfcb] shadow-2xl py-2 rounded-lg text-xs font-medium normal-case tracking-normal animate-fadeIn text-left z-50 max-h-96 overflow-y-auto">
                    <a href="/lipoma-removal-in-pune/" onClick={(e) => handleLinkClick(e, '/lipoma-removal-in-pune/', 'minor')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Lipoma Removal</a>
                    <a href="/sebaceous-cyst-removal-in-pune/" onClick={(e) => handleLinkClick(e, '/sebaceous-cyst-removal-in-pune/', 'minor')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Sebaceous Cyst Removal</a>
                    <a href="/ear-lobe-repair-in-pune/" onClick={(e) => handleLinkClick(e, '/ear-lobe-repair-in-pune/', 'minor')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Ear Lobe Repair</a>
                    <a href="/facial-wound-repair-in-pune/" onClick={(e) => handleLinkClick(e, '/facial-wound-repair-in-pune/', 'minor')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Facial Wound Repair</a>
                    <a href="/toe-nail-excition-paronychia-in-pune/" onClick={(e) => handleLinkClick(e, '/toe-nail-excition-paronychia-in-pune/', 'minor')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Toenail Excision for Paronychia and Ingrown Toenail</a>
                    <a href="/warts-removal-in-pune/" onClick={(e) => handleLinkClick(e, '/warts-removal-in-pune/', 'minor')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Warts Removal</a>
                    <a href="/scar-revision-in-pune/" onClick={(e) => handleLinkClick(e, '/scar-revision-in-pune/', 'minor')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Scar Revision</a>
                  </div>
                )}
              </div>

              {/* 7. DIABETIC FOOT DROPDOWN */}
              <div
                className="relative group py-2 flex-shrink-0"
                onMouseEnter={() => setOpenDropdown('diabetic')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center space-x-0.5 ${isDiabeticActive ? activePillClass : inactiveLinkClass}`}
                >
                  <span>Diabetic Foot</span>
                  <ChevronDown className={`w-3 h-3 ${isDiabeticActive ? 'text-[#dfba79]' : 'text-gray-500'} group-hover:rotate-180 transition-transform`} />
                </button>

                {openDropdown === 'diabetic' && (
                  <div className="absolute top-full left-0 w-60 bg-white border border-[#eedfcb] shadow-2xl py-2 rounded-lg text-xs font-medium normal-case tracking-normal animate-fadeIn text-left z-50">
                    <a href="/diabetic-foot-treatment-in-pune/" onClick={(e) => handleLinkClick(e, '/diabetic-foot-treatment-in-pune/', 'diabetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Diabetic Foot</a>
                    <a href="/wound-care-treatment-in-pune/" onClick={(e) => handleLinkClick(e, '/wound-care-treatment-in-pune/', 'diabetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">Wound Care</a>
                    <a href="/vac-dressing-in-pune/" onClick={(e) => handleLinkClick(e, '/vac-dressing-in-pune/', 'diabetic')} className="block px-4 py-2 hover:bg-[#fbf8f2] hover:text-[#b5936d] text-gray-800 transition-colors">VAC Dressing</a>
                  </div>
                )}
              </div>

              {/* Blog */}
              <a
                href="/blog/"
                onClick={(e) => handleLinkClick(e, '/blog/')}
                className={isBlogActive ? activePillClass : inactiveLinkClass}
              >
                Blog
              </a>

              {/* Contact */}
              <a
                href="/contact-us/"
                onClick={(e) => handleLinkClick(e, '/contact-us/')}
                className={isContactActive ? activePillClass : inactiveLinkClass}
              >
                Contact
              </a>
            </nav>

            {/* RIGHT BOX: Phone Pill + Hamburger Button */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 xl:space-x-3 flex-shrink-0 min-w-max ml-auto">
              {/* Phone Pill Button (Hidden on Mobile screens, visible on Laptop / Desktop screens) */}
              <a
                href="tel:08408051299"
                className="hidden md:inline-flex flex-shrink-0 items-center space-x-1.5 border border-[#1F1B16] bg-white hover:bg-[#1F1B16] hover:text-white text-[#1F1B16] rounded-full px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold transition-all shadow-2xs whitespace-nowrap"
              >
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                <span>08408051299</span>
              </a>

              {/* 3-Line Hamburger Menu Toggle (Mobile / Tablet < 1280px) */}
              <div className="xl:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-1 text-[#1F1B16] hover:text-[#b5936d] focus:outline-none cursor-pointer"
                  aria-label="Toggle Navigation"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* MOBILE / TABLET RIGHT OFF-CANVAS SIDEBAR WITH BACKDROP */}
      {/* 1. Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 xl:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* 2. Right-aligned Sleek Sidebar Drawer */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[85vw] max-w-[320px] sm:max-w-[340px] bg-white z-50 xl:hidden shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#eedfcb]/70 bg-[#fbf8f2]">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full overflow-hidden bg-black p-0.5 border border-[#b5936d]/40 flex items-center justify-center flex-shrink-0">
              <img src={logoImg} alt="Dr. Amit Mulay" className="w-full h-full object-contain" />
            </div>
            <span className="font-cinzel text-xs font-bold text-[#b5936d] tracking-wide">
              Dr. Amit Mulay
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-black flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Scrollable Content with Collapsible Categories */}
        <div className="flex-1 overflow-y-auto px-3.5 py-3 space-y-1 divide-y divide-gray-100 text-left">
          
          {/* Top-Level Section: Home */}
          <div className="py-1">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                isHomeActive ? 'bg-[#1F1B16] text-[#dfba79]' : 'text-gray-800 hover:bg-[#fbf8f2] hover:text-[#b5936d]'
              }`}
            >
              <span>Home</span>
            </a>
          </div>

          {/* Top-Level Section: About Dr. Amit Mulay */}
          <div className="py-1">
            <a
              href="/about-us/"
              onClick={(e) => handleLinkClick(e, '/about-us/')}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                isAboutActive ? 'bg-[#1F1B16] text-[#dfba79]' : 'text-gray-800 hover:bg-[#fbf8f2] hover:text-[#b5936d]'
              }`}
            >
              <span>About Dr. Amit Mulay</span>
            </a>
          </div>

          {/* Surgery Category Accordions */}
          {surgeryCategories.map((cat) => {
            const isCategoryOpen = openMobileCategory === cat.key;
            return (
              <div key={cat.key} className="py-1">
                {/* Category Header Row (Click to toggle dropdown) */}
                <button
                  type="button"
                  onClick={() => toggleMobileCategory(cat.key)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold text-left transition-colors cursor-pointer ${
                    cat.isActive 
                      ? 'bg-[#1F1B16] text-[#dfba79]' 
                      : isCategoryOpen 
                        ? 'bg-[#fbf8f2] text-[#b5936d]' 
                        : 'text-gray-800 hover:bg-[#fbf8f2] hover:text-[#b5936d]'
                  }`}
                >
                  <span className="truncate">{cat.name}</span>
                  <div className="flex items-center space-x-1.5 flex-shrink-0 ml-2">
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      cat.isActive ? 'bg-[#dfba79] text-[#1F1B16]' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {cat.links.length}
                    </span>
                    <ChevronDown 
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isCategoryOpen ? 'rotate-180 text-[#b5936d]' : cat.isActive ? 'text-[#dfba79]' : 'text-gray-400'
                      }`} 
                    />
                  </div>
                </button>

                {/* Sub-pages Accordion Dropdown */}
                {isCategoryOpen && (
                  <div className="mt-1 ml-2 pl-3 border-l-2 border-[#eedfcb] space-y-0.5 py-1 animate-fadeIn">
                    {cat.links.map((link) => {
                      const isLinkCurrent = cleanPath === link.path.replace(/^\/+|\/+$/g, '');
                      return (
                        <a
                          key={link.path}
                          href={link.path}
                          onClick={(e) => handleLinkClick(e, link.path, cat.key)}
                          className={`block px-2.5 py-1.5 rounded-md text-[11.5px] transition-colors ${
                            isLinkCurrent 
                              ? 'bg-[#b5936d]/15 text-[#8b6d4b] font-bold' 
                              : 'text-gray-600 hover:text-[#b5936d] hover:bg-[#fbf8f2] font-medium'
                          }`}
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Top-Level Section: Blog */}
          <div className="py-1">
            <a
              href="/blog/"
              onClick={(e) => handleLinkClick(e, '/blog/')}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                isBlogActive ? 'bg-[#1F1B16] text-[#dfba79]' : 'text-gray-800 hover:bg-[#fbf8f2] hover:text-[#b5936d]'
              }`}
            >
              <span>Blog</span>
            </a>
          </div>

          {/* Top-Level Section: Contact */}
          <div className="py-1">
            <a
              href="/contact-us/"
              onClick={(e) => handleLinkClick(e, '/contact-us/')}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                isContactActive ? 'bg-[#1F1B16] text-[#dfba79]' : 'text-gray-800 hover:bg-[#fbf8f2] hover:text-[#b5936d]'
              }`}
            >
              <span>Contact</span>
            </a>
          </div>

        </div>

        {/* Drawer Footer */}
        <div className="p-3.5 border-t border-gray-100 bg-[#fbf8f2]/60 space-y-2">
          <a
            href="tel:08408051299"
            className="w-full flex items-center justify-center space-x-2 bg-[#1F1B16] text-[#dfba79] hover:bg-[#332b23] rounded-full py-2.5 text-xs font-bold transition-all shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call: 08408051299</span>
          </a>
        </div>
      </div>
    </>
  );
}
