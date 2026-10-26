import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Check, X, Sparkles } from 'lucide-react';

export const PROCEDURES_LIST = [
  // Breast & Chest
  { name: 'Breast Augmentation', category: 'Breast & Chest' },
  { name: 'Breast Reduction', category: 'Breast & Chest' },
  { name: 'Breast Reconstruction (Post-Cancer)', category: 'Breast & Chest' },
  { name: 'Breast Implant Surgery', category: 'Breast & Chest' },
  { name: 'Mastopexy (Breast Lift)', category: 'Breast & Chest' },
  { name: 'Gynaecomastia Surgery (Male Chest Reduction)', category: 'Breast & Chest' },
  { name: 'Nipple Inversion Surgery', category: 'Breast & Chest' },
  { name: 'Axilla Fold Correction', category: 'Breast & Chest' },
  
  // Reconstructive & Microsurgery
  { name: 'Reconstructive & Microvascular Surgery (Free Flaps)', category: 'Reconstructive Microsurgery' },
  { name: 'Head & Neck Reconstruction', category: 'Reconstructive Microsurgery' },
  { name: 'Maxillofacial Surgery', category: 'Reconstructive Microsurgery' },
  { name: 'Flap Surgery & Tissue Transfer', category: 'Reconstructive Microsurgery' },
  { name: 'Burn Reconstruction & Contracture Release', category: 'Reconstructive Microsurgery' },
  { name: 'Diabetic Foot Care Surgery & Limb Salvage', category: 'Diabetic Foot' },
  { name: 'Diabetic Foot Wound Care & Ulcer Management', category: 'Diabetic Foot' },
  { name: 'VAC Dressing (Vacuum-Assisted Closure / NPWT)', category: 'Diabetic Foot' },
  { name: 'Scar Revision Surgery', category: 'Reconstructive Microsurgery' },
  
  // Hand & Trauma
  { name: 'Hand Surgery & Trauma Salvage', category: 'Hand & Trauma' },
  { name: 'Thumb Reconstruction & Pollicization', category: 'Hand & Trauma' },
  { name: 'Peripheral Nerve & Tendon Repair', category: 'Hand & Trauma' },
  { name: 'Hand Tumour & Mass Excision', category: 'Hand & Trauma' },
  
  // Face & Rhinoplasty
  { name: 'Rhinoplasty (Nose Job & Reshaping)', category: 'Face & Aesthetics' },
  { name: 'Face Lift / Rhytidectomy', category: 'Face & Aesthetics' },
  { name: 'Facial Plastic & Cosmetic Surgery', category: 'Face & Aesthetics' },
  { name: 'Functional Face Aesthetics', category: 'Face & Aesthetics' },
  { name: 'Brow Lift & Forehead Lift', category: 'Face & Aesthetics' },
  { name: 'Eyelid Surgery (Blepharoplasty) / Ocular Plastic Surgery', category: 'Face & Aesthetics' },
  { name: 'Lip Reduction / Augmentation', category: 'Face & Aesthetics' },
  { name: 'Double Chin Treatment & Submental Liposuction', category: 'Face & Aesthetics' },
  { name: 'Dimple Creation', category: 'Face & Aesthetics' },
  { name: 'Ear Reconstruction (Microtia / Traumatic)', category: 'Face & Aesthetics' },
  { name: 'Earlobe Repair & Correction', category: 'Face & Aesthetics' },

  // Body Contouring
  { name: 'Liposuction & High-Definition Fat Removal', category: 'Body Contouring' },
  { name: 'Abdominoplasty (Tummy Tuck)', category: 'Body Contouring' },
  { name: 'Body Contouring & Mommy Makeover', category: 'Body Contouring' },
  { name: 'Buttock Lift & Buttock Liposuction', category: 'Body Contouring' },

  // Intimate & Genital Reconstruction
  { name: 'Labiaplasty', category: 'Intimate Aesthetics' },
  { name: 'Vaginoplasty (Vaginal Tightening)', category: 'Intimate Aesthetics' },
  { name: 'Hymenoplasty', category: 'Intimate Aesthetics' },
  { name: 'Hypospadias Surgery', category: 'Intimate Aesthetics' },
  { name: 'Penile Reconstruction', category: 'Intimate Aesthetics' },

  // Minor Surgical & Dermatology
  { name: 'Mole Removal', category: 'Minor & Skin Surgery' },
  { name: 'Sebaceous Cyst Removal', category: 'Minor & Skin Surgery' },
  { name: 'Scar Revision', category: 'Minor & Skin Surgery' },
  { name: 'Skin Tag Surgical Removal', category: 'Minor & Skin Surgery' },
  { name: 'Surgical Vitiligo Treatment (Melanocyte Grafting)', category: 'Minor & Skin Surgery' },
  { name: 'Surgical Tattoo Removal', category: 'Minor & Skin Surgery' },
];

export const CATEGORIES = [
  'All',
  'Reconstructive Microsurgery',
  'Breast & Chest',
  'Face & Aesthetics',
  'Body Contouring',
  'Hand & Trauma',
  'Intimate Aesthetics',
  'Minor & Skin Surgery',
];

export default function ProcedureSearchInput({ value, onChange, placeholder = 'Search procedure or area of concern...', required = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(value || '');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  // Sync internal search term when external value changes
  useEffect(() => {
    setSearchTerm(value || '');
  }, [value]);

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtered procedures based on search query & category
  const filteredProcedures = PROCEDURES_LIST.filter((proc) => {
    const matchesCategory = selectedCategory === 'All' || proc.category === selectedCategory;
    const query = searchTerm.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesName = proc.name.toLowerCase().includes(query);
    const matchesCat = proc.category.toLowerCase().includes(query);
    return matchesCategory && (matchesName || matchesCat);
  });

  const handleSelectProcedure = (procedureName) => {
    setSearchTerm(procedureName);
    onChange(procedureName);
    setIsOpen(false);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    setSearchTerm('');
    onChange('');
    if (inputRef.current) inputRef.current.focus();
    setIsOpen(true);
  };

  return (
    <div ref={containerRef} className="relative w-full text-left">
      {/* Search Input Bar */}
      <div
        className="relative flex items-center cursor-pointer"
        onClick={() => {
          setIsOpen(true);
          if (inputRef.current) inputRef.current.focus();
        }}
      >
        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          required={required}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            onChange(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-16 py-2.5 rounded-lg bg-[#fafafa] border border-[#ebdcc4] focus:border-[#c5932b] focus:bg-white focus:outline-none text-xs text-gray-900 transition-colors placeholder:text-gray-400 shadow-sm"
        />

        <div className="absolute right-2.5 flex items-center space-x-1">
          {searchTerm && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors"
              title="Clear selection"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="p-1 text-gray-400 hover:text-gray-700"
          >
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#c5932b]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-[#ebdcc4] rounded-xl shadow-2xl z-50 overflow-hidden text-xs animate-fadeIn flex flex-col max-h-72">
          
          {/* Category Filter Chips Bar */}
          <div className="p-2 bg-[#fdfbf7] border-b border-[#ebdcc4] flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCategory(cat);
                }}
                className={`px-2.5 py-1 rounded-full text-[10px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#c5932b] text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Summary */}
          <div className="px-3 py-1.5 bg-gray-50 border-b border-gray-100 text-[10px] text-gray-500 flex items-center justify-between">
            <span>
              {filteredProcedures.length} {filteredProcedures.length === 1 ? 'procedure found' : 'procedures found'}
            </span>
            <span className="text-gray-400">Click to select</span>
          </div>

          {/* Procedures List */}
          <div className="overflow-y-auto flex-1 divide-y divide-gray-50">
            {filteredProcedures.length > 0 ? (
              filteredProcedures.map((proc, idx) => {
                const isSelected = value === proc.name;
                return (
                  <div
                    key={idx}
                    onClick={() => handleSelectProcedure(proc.name)}
                    className={`px-3.5 py-2.5 flex items-center justify-between cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-[#fbf8f2] text-gray-900 font-bold'
                        : 'hover:bg-[#faf6ee] text-gray-700'
                    }`}
                  >
                    <div className="flex flex-col text-left">
                      <span className="text-xs text-gray-900 leading-snug">{proc.name}</span>
                      <span className="text-[10px] text-[#b5936d] font-medium">{proc.category}</span>
                    </div>

                    {isSelected && (
                      <div className="w-4 h-4 rounded-full bg-[#c5932b] text-white flex items-center justify-center flex-shrink-0 ml-2">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="p-4 text-center text-gray-500 space-y-1">
                <p className="text-xs">No exact procedure matched "{searchTerm}"</p>
                <p className="text-[10px] text-gray-400">You can still submit your consultation inquiry with this term.</p>
                <button
                  type="button"
                  onClick={() => handleSelectProcedure(searchTerm)}
                  className="mt-2 px-3 py-1 rounded bg-[#c5932b] text-white font-bold text-[10px] uppercase tracking-wider"
                >
                  Use "{searchTerm}"
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
