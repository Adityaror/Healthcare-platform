import React from 'react';
import { X, CheckCircle2, ShieldCheck, Clock, Calendar, ArrowRight } from 'lucide-react';

const procedureData = {
  'head-neck': {
    title: 'Head & Neck Microvascular Free Flap Reconstruction',
    category: 'Microvascular Oncoplastic Surgery',
    desc: 'Specialized composite tissue transplantation designed to restore mandibular, maxillary, and intraoral defects resulting from tumor ablations. Employing patient-specific 3D CAD/CAM cutting guides and sub-millimeter arterial/venous anastomoses.',
    timeline: '5–7 Days Inpatient Flap Care | 3–4 Weeks Functional Recovery',
    anesthesia: 'General Anesthesia in Laminar Flow Microsurgical OT',
    steps: [
      'Pre-operative 3D CT angiography & virtual surgical osteotomy planning',
      'Harvest of vascularized fibula, anterolateral thigh (ALT), or radial forearm free flap',
      'Microvascular anastomosis under 20x Carl Zeiss surgical magnification',
      'Precision internal fixation with pre-bent titanium reconstruction plates',
      'Continuous post-operative acoustic Doppler flap perfusion surveillance',
    ],
  },
  'breast-reconstruction': {
    title: 'Autologous DIEP Flap & Oncoplastic Breast Reconstruction',
    category: 'Post-Mastectomy Restorative Surgery',
    desc: 'Restoration of natural breast contour, softness, and ptosis utilizing the patient’s own lower abdominal skin and fat (DIEP flap) while completely sparing underlying rectus abdominis muscles, or dual-plane anatomical prepectoral implant reconstruction.',
    timeline: '3–4 Days Inpatient Stay | 2–3 Weeks Light Activity',
    anesthesia: 'General Anesthesia with Multimodal Regional Nerve Blocks',
    steps: [
      'Comprehensive pre-operative vascular perforator mapping with CT angiography',
      'Muscle-sparing dissection preserving core abdominal strength',
      'Microvascular reconnection to internal mammary recipient vessels',
      'Artistic 3D shaping of breast mound to match contralateral symmetry',
      'Secondary nipple-areolar complex reconstruction and scar maturation therapy',
    ],
  },
  'trauma-limb': {
    title: 'Trauma Limb Salvage & Hand Reconstructive Surgery',
    category: 'Emergency & Planned Orthoplastic Repair',
    desc: 'Complex reconstructive salvage for severe industrial, vehicular, and high-impact limb injuries, restoring vascularity, bone stability, nerve sensation, and tendon gliding mechanisms to prevent extremity amputation.',
    timeline: 'Variable based on injury severity | Early Active Rehabilitation',
    anesthesia: 'General or Regional Brachial Plexus Blockade',
    steps: [
      'Emergency debridement and skeletal stabilization',
      'Microscopic nerve coaptation and vascular bypass/revascularization',
      'Free tissue transfer for robust soft-tissue coverage over exposed bone',
      'Primary and secondary staged tendon transfers',
      'Multi-disciplinary occupational and physical hand rehabilitation',
    ],
  },
  'rhinoplasty': {
    title: 'Preservation & Structural Precision Rhinoplasty',
    category: 'Facial Cosmetic & Functional Surgery',
    desc: 'Artistic nasal reshaping that respects natural nasal architecture. Utilizing ultrasonic piezo bone sculpting to refine dorsal humps, tip projection, and alar base width while enhancing or preserving nasal airway breathing dynamics.',
    timeline: 'Day Surgery or 1 Night | 7 Days Cast Removal | 2 Weeks Social Downtime',
    anesthesia: 'General Anesthesia',
    steps: [
      'Internal nasal endoscopy and structural septum analysis',
      'Ultrasonic piezo instrumentation for precise bone reshaping without trauma',
      'Cartilaginous tip grafting and columellar strut stabilization',
      'Preservation of internal nasal valves for clear respiratory airflow',
      'Microsurgical closure with dissolvable internal sutures',
    ],
  },
  'face-neck-lift': {
    title: 'Deep Plane Extended Facelift & Neck Contouring',
    category: 'Advanced Facial Rejuvenation',
    desc: 'Anatomical repositioning of descended midface fat pads and tightening of the deep Superficial Musculoaponeurotic System (SMAS) with platysmaplasty, creating a naturally youthful, defined jawline without skin tension.',
    timeline: '1 Night Hospital Stay | 10–14 Days Social Downtime',
    anesthesia: 'General Anesthesia with Twilight Sedation Option',
    steps: [
      'Release of deep facial retaining ligaments for natural mobility',
      'Sub-SMAS structural elevation and midface fat repositioning',
      'Platysmaplasty and submental contouring for sharp cervicomental angle',
      'Tension-free skin redraping with meticulously hidden hairline incisions',
      'Post-operative lymphatic drainage and regenerative skin support',
    ],
  },
  'body-contouring': {
    title: 'High-Definition Liposculpture & Abdominoplasty',
    category: 'Body Sculpting & Post-Pregnancy Restoration',
    desc: 'Comprehensive contouring integrating ultrasound-assisted liposuction with abdominoplasty to repair diastasis recti (separated abdominal muscles), remove redundant skin, and craft a toned, natural silhouette.',
    timeline: '1–2 Nights Inpatient Stay | 2 Weeks Light Work | 6 Weeks Fitness',
    anesthesia: 'General Anesthesia with Long-Acting Transversus Abdominis Plane Block',
    steps: [
      'High-definition ultrasound fat emulsification targeting stubborn deposits',
      'Full-length dual-layer rectus abdominis muscle wall plication',
      'Progressive tension suturing to eliminate drain requirements and seroma risk',
      'Artistic reconstruction of an innie, natural-appearing umbilicus',
      'Tailored compression garment regimen and scar modulation protocol',
    ],
  },
  'blepharoplasty': {
    title: 'Upper & Lower Transconjunctival Blepharoplasty',
    category: 'Periorbital Rejuvenation',
    desc: 'Precision eyelid refinement addressing heavy hooded upper lids and herniated lower orbital fat bags. Emphasizing fat transposition over aggressive removal to maintain youthful orbital fullness.',
    timeline: 'Outpatient Day Procedure | 5–7 Days Suture Removal',
    anesthesia: 'Local Anesthesia with Mild Sedation or General Anesthesia',
    steps: [
      'Upper lid crease excision of redundant skin hidden in natural fold',
      'Transconjunctival lower lid incision eliminating visible external scarring',
      'Orbital fat transposition into tear trough hollows to smooth dark circles',
      'Canthopexy muscle tightening when needed for firm lower eyelid support',
    ],
  },
};

export default function ProcedureModal({ procedureId, onClose, onOpenBooking }) {
  if (!procedureId) return null;

  const data = procedureData[procedureId] || {
    title: 'Specialized Surgical Procedure',
    category: 'Plastic & Reconstructive Surgery',
    desc: 'Comprehensive surgical protocol planned and executed by Dr. Amit Mulay with state-of-the-art microsurgical and aesthetic instrumentation.',
    timeline: 'Personalized to surgical scope',
    anesthesia: 'General or Regional Anesthesia in Accredited OT',
    steps: ['Detailed Clinical Assessment', 'Virtual CAD/CAM Planning', 'Precision Microsurgical Execution', 'Dedicated Post-Op Protocol'],
  };

  const handleBook = () => {
    onClose();
    onOpenBooking();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white overflow-hidden shadow-2xl text-left max-h-[90vh] overflow-y-auto border border-[#eedfcb]">
        
        {/* Header with Gold Border */}
        <div className="p-6 sm:p-8 bg-[#fbf8f2] border-b border-[#eedfcb] relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/80 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer shadow"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#b8924e] block mb-1">
            {data.category}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1f1b16] leading-snug pr-8">
            {data.title}
          </h3>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 text-[#1f1b16]">
          
          <p className="text-sm sm:text-base text-[#5c544b] font-light leading-[1.85]">
            {data.desc}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded bg-[#f5efe3] border border-[#eedfcb] text-xs">
            <div className="flex items-start space-x-2.5">
              <Clock className="w-4 h-4 text-[#c9a25a] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1f1b16] block uppercase tracking-wider text-[10px]">Recovery Profile</strong>
                <span className="text-[#5c544b]">{data.timeline}</span>
              </div>
            </div>

            <div className="flex items-start space-x-2.5">
              <ShieldCheck className="w-4 h-4 text-[#c9a25a] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1f1b16] block uppercase tracking-wider text-[10px]">Surgical Environment</strong>
                <span className="text-[#5c544b]">{data.anesthesia}</span>
              </div>
            </div>
          </div>

          {/* Clinical Steps */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#1f1b16] mb-3 uppercase tracking-wider text-xs">
              Surgical Protocol &amp; Technique
            </h4>
            <div className="space-y-2.5">
              {data.steps.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#5c544b]">
                  <div className="w-4 h-4 rounded-full border border-[#c9a25a] bg-[#fbf8f2] flex items-center justify-center text-[#b8924e] font-bold text-[9px] flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close Details
            </button>

            <button
              onClick={handleBook}
              className="px-8 py-3 rounded-full bg-[#c9a25a] hover:bg-[#b08840] text-white text-xs font-bold uppercase tracking-widest transition-all shadow cursor-pointer"
            >
              Book Procedure Consultation
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
