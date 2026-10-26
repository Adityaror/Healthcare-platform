import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      num: 'Q.01',
      q: 'What is Dr. Amit Mulay\'s surgical qualification and background?',
      a: 'Dr. Amit Mulay holds an M.Ch in Plastic, Oral & Reconstructive Surgery with Gold Medal honors, MS in General Surgery, and specialized fellowship training in microvascular reconstruction, oral cancer restoration, and aesthetic surgery. He has over 13+ years of dedicated specialist experience across leading tertiary medical institutions.',
    },
    {
      num: 'Q.02',
      q: 'What is microvascular free flap surgery and when is it necessary?',
      a: 'Microvascular free tissue transfer involves harvesting living composite tissue (skin, muscle, or vascularized bone with its native blood supply) from a donor region to reconstruct large anatomical defects caused by cancer resections or severe trauma. The 0.8mm–1.5mm vessels are connected under 20x magnification to re-establish robust perfusion.',
    },
    {
      num: 'Q.03',
      q: 'What is Dr. Mulay\'s microvascular flap success rate and volume?',
      a: 'Dr. Mulay has performed over 3,500 reconstructive and aesthetic procedures with a documented 99.4% microvascular tissue survival rate, well above international benchmarks.',
    },
    {
      num: 'Q.04',
      q: 'How are post-cancer breast and head/neck reconstructions planned?',
      a: 'Every major reconstruction is planned using high-resolution 3D CT angiography, CAD/CAM virtual planning, and custom 3D printed cutting guides to ensure exact millimeter alignment of bone and natural soft-tissue contours.',
    },
    {
      num: 'Q.05',
      q: 'Does Dr. Mulay perform cosmetic and aesthetic surgeries as well?',
      a: 'Yes. Dr. Mulay performs structural and preservation rhinoplasty, deep plane face and neck lifts, high-definition body contouring, abdominoplasty, and blepharoplasty, applying the same microscopic precision and tissue-sparing techniques.',
    },
    {
      num: 'Q.06',
      q: 'How can out-of-station and international patients consult?',
      a: 'Out-of-town patients can schedule a preliminary digital review by submitting their medical history, scans, and clinical photographs. Our patient coordinator assists with appointment scheduling, hospital admissions, and stay logistics.',
    },
    {
      num: 'Q.07',
      q: 'Where does Dr. Mulay operate and consult?',
      a: 'Dr. Mulay consults at his private clinical chambers and operates across premier NABH-accredited tertiary care hospitals in Pune and Mumbai.',
    },
  ];

  return (
    <section id="faqs" className="py-24 sm:py-32 text-[#1f1b16] relative border-b border-[#eedfcb]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <span className="w-10 h-[1px] bg-[#c9a25a]"></span>
            <span className="text-[11px] font-semibold tracking-[4px] uppercase text-[#b8924e]">
              COMMON QUESTIONS
            </span>
            <span className="w-10 h-[1px] bg-[#c9a25a]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.8rem] font-normal text-[#1f1b16] leading-[1.12] mb-4">
            Frequently Asked <em className="italic font-normal text-[#b8924e]">Questions</em>
          </h2>

          <p className="text-base text-[#5c544b] font-light">
            About the practice, procedures, and confidential consultations
          </p>
        </div>

        {/* Luxe Accordion List (.mk-faq-list) */}
        <div className="border-t border-[#eedfcb]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border-b border-[#eedfcb] transition-colors duration-300 ${
                  isOpen ? 'bg-gradient-to-b from-[#f8efdd]/60 to-transparent' : 'hover:bg-[#f5efe3]/40'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full py-7 px-4 sm:px-6 text-left flex justify-between items-center cursor-pointer gap-6 focus:outline-none group"
                >
                  <div className="flex items-baseline space-x-4 flex-1">
                    <span className="font-serif italic text-sm text-[#b8924e] tracking-wider flex-shrink-0">
                      {faq.num}
                    </span>
                    <span className="font-serif text-lg sm:text-xl font-medium text-[#1f1b16] group-hover:text-[#b8924e] transition-colors leading-snug">
                      {faq.q}
                    </span>
                  </div>

                  {/* Circular Rotating Gold Icon */}
                  <div
                    className={`w-9 h-9 rounded-full border border-[#c9a25a] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-[#c9a25a] text-white rotate-180' : 'text-[#b8924e] group-hover:bg-[#c9a25a] group-hover:text-white'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-8 pl-12 sm:pl-16 text-sm sm:text-base text-[#5c544b] font-light leading-[1.85] animate-fadeIn text-left">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
