import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ChevronDown } from 'lucide-react';

// Real Images imported from DR Content
import rhinoplastyImg from '../assets/DR Content/RHINOPLASTY-SURGERY.jpg.webp';
import tummyTuckImg from '../assets/DR Content/TUMMY-TUCK.jpg.webp';
import breastAugImg from '../assets/DR Content/BREAST-AUGMENTATION.jpg.webp';
import breastRedImg from '../assets/DR Content/BREAST-REDUCTION-SURGERY.jpg.webp';
import handSurgeryImg from '../assets/DR Content/HAND-RECONSTRUCTION-SURGERY.jpg.webp';
import burnSurgeryImg from '../assets/DR Content/ACUTE-BURN-SURGERY.jpg.webp';
import faceliftImg from '../assets/DR Content/FACELIFT-SURGERY.jpg.webp';
import facialReconImg from '../assets/DR Content/FACIAL-RECONSTRUCTION.jpg.webp';
import flapSurgeryImg from '../assets/DR Content/FLAP-SURGERY.jpg.webp';
import gynecomastiaImg from '../assets/DR Content/GYNECOMASTIA.jpg.webp';
import bodyContouringImg from '../assets/DR Content/Dr-Amit-Mulay-body-contouring.jpg.webp';
import doubleChinImg from '../assets/DR Content/DOUBLE-CHIN-CORRECTION.jpg.webp';
import dimpleImg from '../assets/DR Content/Dr-Amit-Mulay-dimple-creation.jpg.webp';
import scarRevisionImg from '../assets/DR Content/SCAR-REVISION.jpg.webp';
import keloidImg from '../assets/DR Content/WHAT-IS-KELOID.jpg.webp';
import diabeticFootImg from '../assets/DR Content/DIABETIC-FOOT.jpg.webp';
import skinGraftingImg from '../assets/DR Content/Skin-Grafting.jpg.webp';
import lipomaImg from '../assets/DR Content/LIPOMA-REMOVAL.jpg.webp';
import earLobeImg from '../assets/DR Content/EAR-LOBE-REPAIR.jpg.webp';

export default function SpecialtiesSection({ onSelectProcedure, onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Specialities' },
    { id: 'skin', label: 'Skin Surgeries' },
    { id: 'face', label: 'Face & Profile' },
    { id: 'breast', label: 'Breast Surgery' },
    { id: 'cosmetic', label: 'Cosmetic & Body' },
    { id: 'reconstructive', label: 'Reconstructive & Hand' },
    { id: 'minor', label: 'Minor Surgeries' },
    { id: 'diabetic', label: 'Diabetic Foot' },
  ];

  const procedures = [
    {
      id: 'skin-grafting',
      slug: 'skin-grafting-in-pune',
      category: 'skin',
      index: '01',
      title: 'Skin Grafting in Pune',
      subtitle: 'Skin & Dermal Reconstruction',
      desc: 'Surgical procedure in which skin is removed from one healthy part of the body and replaced over another body region that has lost its top protective layer of the skin.',
      tag: 'Skin Reconstruction',
      image: skinGraftingImg,
      points: ['Autograft & Allograft Care', 'Infection, Burns & Wounds', 'Donor Harvest: Groin, Forearm, Abdomen'],
    },
    {
      id: 'rhinoplasty',
      slug: 'rhinoplasty-in-pune',
      category: 'face',
      index: '02',
      title: 'Rhinoplasty Surgery',
      subtitle: 'Face & Profile Refinement',
      desc: 'Precision aesthetic and functional nose reshaping to enhance facial harmony while preserving unobstructed nasal airflow.',
      tag: 'Aesthetic & Functional',
      image: rhinoplastyImg,
      points: ['Natural Dorsal Line Sculpting', 'Septal Correction for Breathing', 'Minimal Visible Incisions'],
    },
    {
      id: 'tummy-tuck',
      slug: 'tummy-tuck-in-pune',
      category: 'cosmetic',
      index: '03',
      title: 'Abdominoplasty (Tummy Tuck)',
      subtitle: 'Body Contouring & Wall Repair',
      desc: 'Surgical excision of loose abdominal skin and tightening of separated rectus muscles (diastasis recti) post-pregnancy or weight loss.',
      tag: 'Body Sculpting',
      image: tummyTuckImg,
      points: ['Diastasis Recti Muscle Plication', 'Low Concealed Bikini Incision', 'Harmonious Waistline Definition'],
    },
    {
      id: 'breast-augmentation',
      slug: 'breast-augmentation-in-pune',
      category: 'breast',
      index: '04',
      title: 'Breast Augmentation & Lift',
      subtitle: 'Breast Symmetry & Contour',
      desc: 'Enhancing breast volume and contour with high-safety cohesive silicone gel implants or autologous tissue restoration.',
      tag: 'Aesthetic Breast',
      image: breastAugImg,
      points: ['Sub-pectoral Dual Plane Placement', 'Natural Proportions & Cleavage', 'FDA-Approved Cohesive Implants'],
    },
    {
      id: 'keloid-treatment',
      slug: 'keloid-treatment-in-pune',
      category: 'breast',
      index: '04b',
      title: 'Keloid Treatment in Pune',
      subtitle: 'Multimodal Core Excision',
      desc: 'Advanced removal of abnormal hypertrophic scars and keloids using precision surgical excision, intralesional therapies, and pressure protocols.',
      tag: 'Keloid Removal',
      image: keloidImg,
      points: ['In-Office 30-Min Painless Excision', 'Corticosteroid & 5-FU Infiltration', 'Minimal Recurrence Protocol'],
    },
    {
      id: 'hand-reconstruction',
      slug: 'hand-reconstruction-surgery',
      category: 'reconstructive',
      index: '05',
      title: 'Hand & Finger Reconstruction',
      subtitle: 'Trauma Salvage & Function',
      desc: 'Expert microsurgical repair of severed tendons, digital nerves, crushed skeletal structures, and congenital deformities.',
      tag: 'Microsurgical Salvage',
      image: handSurgeryImg,
      points: ['Tendon Gliding Restoration', 'Micro-Nerve Anastomosis', 'Early Range-of-Motion Rehabilitation'],
    },
    {
      id: 'acute-burn-surgery',
      slug: 'acute-burn-surgery',
      category: 'skin',
      index: '06',
      title: 'Acute Burn Surgery & Reconstruction',
      subtitle: 'Post-Burn Contracture Release',
      desc: 'Specialized burn excision, skin grafting, and flap reconstruction to restore mobility, release contractures, and minimize scarring.',
      tag: 'Burn Restoration',
      image: burnSurgeryImg,
      points: ['Early Tangential Excision', 'Complex Z-Plasty Contracture Release', 'Full-Thickness Skin Grafting'],
    },
    {
      id: 'facelift',
      slug: 'facelift-surgery-in-pune',
      category: 'face',
      index: '07',
      title: 'Facelift & Facial Reconstruction',
      subtitle: 'Deep SMAS Suspension',
      desc: 'Deep plane fascial structural elevation restoring cheekbone volume, smoothing jowls, and defining the neck angle gracefully.',
      tag: 'Facial Rejuvenation',
      image: faceliftImg,
      points: ['Deep SMAS Structural Repositioning', 'Platysmaplasty Neck Definition', 'Inconspicuous Hairline Scars'],
    },
    {
      id: 'gynecomastia',
      slug: 'gynecomastia-treatment-in-pune',
      category: 'cosmetic',
      index: '08',
      title: 'Gynecomastia (Male Chest Reduction)',
      subtitle: 'Male Chest Sculpting',
      desc: 'Minimally invasive gland excision combined with micro-liposuction for a masculine, flat, and well-contoured chest profile.',
      tag: 'Male Aesthetics',
      image: gynecomastiaImg,
      points: ['Direct Sub-Areolar Gland Excision', 'Ultra-Fine Micro-Cannula Lipo', 'Rapid 3-Day Return to Work'],
    },
    {
      id: 'flap-surgery',
      slug: 'flap-surgery-in-pune',
      category: 'reconstructive',
      index: '09',
      title: 'Flap Surgery & Free Tissue Transfer',
      subtitle: 'Microvascular Tissue Transfers',
      desc: 'Advanced vascularised tissue transfers (ALT, DIEP, Free Fibula) under 20x surgical magnification for complex anatomical defects.',
      tag: 'Free Flap Specialist',
      image: flapSurgeryImg,
      points: ['Sub-millimeter Vessel Anastomosis', 'Single-Stage Functional Recovery', 'Dedicated Micro-Perfusion Monitoring'],
    },
    {
      id: 'liposuction',
      slug: 'liposuction-in-pune',
      category: 'cosmetic',
      index: '10',
      title: 'Liposuction & Body Contouring',
      subtitle: 'Refined Silhouette Sculpting',
      desc: 'Targeted fat removal across arms, abdomen, flanks, and thighs with skin retraction technology for a seamless silhouette.',
      tag: 'Contouring',
      image: bodyContouringImg,
      points: ['Targeted Stubborn Adipose Removal', 'Skin Elasticity Preservation', 'Customised Anatomical Vector Mapping'],
    },
    {
      id: 'lipoma-removal',
      slug: 'lipoma-removal-in-pune',
      category: 'minor',
      index: '11',
      title: 'Lipoma Removal Surgery',
      subtitle: 'Painless Daycare Excision',
      desc: 'Painless 20-minute outpatient removal of subcutaneous fatty nodules with minimal hairline incisions and zero recurrence.',
      tag: 'Minor Surgery',
      image: lipomaImg,
      points: ['Complete Capsule Enucleation', 'Local Anesthesia Daycare', 'Minimal Cosmetic Scars'],
    },
    {
      id: 'ear-lobe-repair',
      slug: 'ear-lobe-repair-in-pune',
      category: 'minor',
      index: '12',
      title: 'Ear Lobe Repair Surgery',
      subtitle: '15-Min Split Lobe Fix',
      desc: 'Scarless multi-layer repair of stretched or split earlobe piercing holes with safe re-piercing support.',
      tag: 'Minor Surgery',
      image: earLobeImg,
      points: ['15-Minute Outpatient Procedure', 'Invisible Edge Alignment', 'Re-Piercing Support at 6 Weeks'],
    },
    {
      id: 'diabetic-foot',
      slug: 'diabetic-foot-treatment-in-pune',
      category: 'diabetic',
      index: '13',
      title: 'Diabetic Foot & Wound Care',
      subtitle: 'Limb Salvage & VAC Therapy',
      desc: 'Comprehensive multi-disciplinary diabetic foot ulcer management, advanced micro-debridement, VAC dressing, and plastic reconstructive limb salvage.',
      tag: 'Limb Salvage',
      image: diabeticFootImg,
      points: ['Advanced Ulcer & Wound Care', 'VAC Dressing / NPWT Protocols', 'Biomechanical Offloading & Limb Salvage'],
    },
  ];

  const filteredProcedures = activeCategory === 'all'
    ? procedures
    : procedures.filter((p) => p.category === activeCategory);

  return (
    <section id="services" className="py-20 sm:py-28 text-[#1f1b16] relative border-b border-[#eedfcb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 text-left">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] font-semibold tracking-[3px] uppercase text-[#b8924e] mb-2">
              <span>SPECIALIST CARE, CENTERED ON YOU</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1f1b16] leading-tight">
              Our <em className="italic font-normal text-[#b8924e]">Specialities.</em>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5c544b] font-light max-w-md leading-relaxed">
            Cosmetic, Oral &amp; Reconstructive Surgery.<br />
            <strong className="text-[#1f1b16] font-medium">From The Microsurgery Specialist.</strong>
          </p>
        </div>

        {/* Mobile Custom Luxury Dropdown Menu (Screens < 640px) */}
        <div className="block sm:hidden mb-8 text-left relative z-30">
          <label className="block text-[11px] font-bold uppercase tracking-[2px] text-[#8b5e28] mb-2 flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#c9a25a]" />
            <span>Select Speciality Category</span>
          </label>
          
          {/* Dropdown Toggle Trigger */}
          <button
            type="button"
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="w-full bg-[#1f1b16] text-[#dfba79] font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl border-2 border-[#dfba79] shadow-md flex items-center justify-between cursor-pointer transition-all"
          >
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#dfba79] animate-pulse"></span>
              <span className="text-white">
                {(categories.find(c => c.id === activeCategory) || categories[0]).label}
              </span>
            </span>
            <ChevronDown className={`w-4 h-4 text-[#dfba79] transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Animated Dropdown Menu with Click-Outside Backdrop */}
          {mobileDropdownOpen && (
            <>
              <div 
                className="fixed inset-0 z-30 bg-black/20 backdrop-blur-[1px]" 
                onClick={() => setMobileDropdownOpen(false)} 
              />
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl border border-[#eedfcb] shadow-2xl overflow-hidden py-1.5 z-40 animate-fadeIn">
                {categories.map((cat) => {
                  const isSelected = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setMobileDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-xs uppercase tracking-wider font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#1f1b16] text-[#dfba79]'
                          : 'text-[#2a2620] hover:bg-[#fbf8f2] hover:text-[#b8924e]'
                      }`}
                    >
                      <span>{cat.label}</span>
                      {isSelected && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#dfba79]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Desktop / Tablet Filter Category Pills (Screens >= 640px) */}
        <div className="hidden sm:flex flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1f1b16] text-[#dfba79] shadow-md'
                  : 'bg-white text-[#5c544b] border border-[#eedfcb] hover:border-[#b8924e] hover:text-[#1f1b16]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3-Column Procedure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProcedures.map((proc) => (
            <div
              key={proc.id}
              onClick={() => onSelectProcedure && onSelectProcedure(proc.slug, proc.category === 'reconstructive' ? 'hand' : proc.category)}
              className="bg-white border border-[#eedfcb] rounded-lg overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col group text-left cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
                <img
                  src={proc.image}
                  alt={proc.title}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors duration-300"></div>

                {/* Index Pill */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded text-xs font-serif font-bold text-[#1f1b16]">
                  {proc.index}
                </div>

                {/* Tag Pill */}
                <div className="absolute top-4 right-4 bg-[#1f1b16]/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-[#dfba79] border border-white/10">
                  {proc.tag}
                </div>

                {/* Title Overlay in Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#dfba79] block mb-1">
                    {proc.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-white leading-snug">
                    {proc.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-[#5c544b] font-light leading-relaxed mb-5">
                    {proc.desc}
                  </p>

                  {/* Feature Points */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#eedfcb]">
                    {proc.points.map((pt, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-[#5c544b]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a25a] flex-shrink-0"></span>
                        <span className="leading-tight">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProcedure && onSelectProcedure(proc.slug, proc.category === 'reconstructive' ? 'hand' : proc.category);
                    }}
                    className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#b8924e] hover:text-[#1f1b16] transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBooking();
                    }}
                    className="px-4 py-2 bg-[#1f1b16] hover:bg-[#b8924e] text-white text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer rounded"
                  >
                    Consult
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
