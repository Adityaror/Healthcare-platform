import React, { useState } from 'react';
import { Play, ArrowUpRight, BookOpen, Video, ExternalLink, X } from 'lucide-react';

import lymphoedemaImg from '../assets/DR Content/swellinginarmsandlegs.png.webp';
import scarsImg from '../assets/DR Content/scars-keep-growing.png.webp';
import recoveryImg from '../assets/DR Content/LifeAfterReconstructiveSurgery.png.webp';

export default function MediaJournalSection({ onNavigate }) {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const videos = [
    {
      id: '4U0uovs-fD4',
      index: '01',
      title: 'What Is Plastic Surgery?',
      subtitle: 'Cosmetic, Oral & Reconstructive Spectrum',
      thumbnail: 'https://i.ytimg.com/vi/4U0uovs-fD4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=4U0uovs-fD4',
    },
    {
      id: 'OBQJ5VN2sV4',
      index: '02',
      title: 'Precision in Microsurgery & Free Flaps',
      subtitle: 'Vascularised Tissue Transfers',
      thumbnail: 'https://i.ytimg.com/vi/OBQJ5VN2sV4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=OBQJ5VN2sV4',
    },
    {
      id: 'NFMzbQheCNg',
      index: '03',
      title: 'Facial & Aesthetic Rejuvenation',
      subtitle: 'Natural Anatomical Restoration',
      thumbnail: 'https://i.ytimg.com/vi/NFMzbQheCNg/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=NFMzbQheCNg',
    },
    {
      id: 'ACl1mFRbrBo',
      index: '04',
      title: 'Hand & Trauma Reconstructive Salvage',
      subtitle: 'Restoring Fine Motor Dexterity',
      thumbnail: 'https://i.ytimg.com/vi/ACl1mFRbrBo/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=ACl1mFRbrBo',
    },
  ];

  const articles = [
    {
      id: 'lymphoedema',
      image: lymphoedemaImg,
      kicker: 'PATIENT EDUCATION',
      title: 'Swelling in Arms or Legs After Surgery: Could It Be Lymphoedema?',
      desc: 'Understanding post-operative lymphatic congestion, early clinical stages, compression therapy, and microvascular lymphovenous anastomosis (LVA).',
      author: 'DR. AMIT MULAY / JOURNAL',
      readTime: '4 MIN READ',
    },
    {
      id: 'keloids',
      image: scarsImg,
      kicker: 'PATIENT EDUCATION',
      title: 'Why Some Scars Keep Growing: Understanding Keloids & Hypertrophic Scars',
      desc: 'The biological differences between keloids and hypertrophic scars, genetic predispositions, and multimodal recurrence-resistant treatment.',
      author: 'DR. AMIT MULAY / JOURNAL',
      readTime: '5 MIN READ',
    },
    {
      id: 'recovery',
      image: recoveryImg,
      kicker: 'PATIENT EDUCATION',
      title: 'Life After Reconstructive Surgery: What Patients Can Expect During Recovery',
      desc: 'Milestones in wound maturation, managing swelling, restoring range of motion, and emotional well-being throughout rehabilitation.',
      author: 'DR. AMIT MULAY / JOURNAL',
      readTime: '6 MIN READ',
    },
  ];

  return (
    <div id="media" className="text-[#1f1b16] border-b border-[#eedfcb]">
      
      {/* ============ VIDEO MODAL PLAYER ============ */}
      {activeVideoId && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl border border-white/20 aspect-video">
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&rel=0`}
              title="Dr. Amit Mulay YouTube Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* ============ MEDIA & VIDEO GALLERY SECTION ============ */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Direct from dramitmulay.com) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 text-left">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] font-semibold tracking-[3px] uppercase text-[#b8924e] mb-2">
              <span>STRAIGHT FROM THE SPECIALIST</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1f1b16] leading-tight">
              Watch. Learn.<br />
              <em className="italic font-normal text-[#b8924e]">Understand.</em>
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm text-[#5c544b] font-light mb-2">
              News &amp; Media with Dr. Amit Mulay
            </p>
            <a
              href="https://www.youtube.com/channel/UCCkntdutyLdS-oZyL701dMg/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#b8924e] hover:text-[#1f1b16] transition-colors"
            >
              <span>Visit YouTube Channel</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((vid) => (
            <article
              key={vid.id}
              className="bg-white border border-[#eedfcb] rounded-lg overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group text-left"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/90">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                
                {/* Play Button Overlay */}
                <button
                  onClick={() => setActiveVideoId(vid.id)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors cursor-pointer"
                  aria-label={`Play ${vid.title}`}
                >
                  <div className="w-12 h-12 rounded-full bg-[#dfba79] text-[#1f1b16] flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-white transition-all">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </button>

                <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wider">
                  {vid.index}
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#b8924e] block mb-1">
                    {vid.subtitle}
                  </span>
                  <h3 className="font-serif text-base font-medium text-[#1f1b16] leading-snug group-hover:text-[#b8924e] transition-colors">
                    {vid.title}
                  </h3>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setActiveVideoId(vid.id)}
                    className="font-bold text-[#b8924e] hover:text-[#1f1b16] uppercase tracking-wider text-[11px] cursor-pointer"
                  >
                    Watch Video ↗
                  </button>
                  <a
                    href={vid.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-600 transition-colors"
                    title="Open on YouTube"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* ============ PATIENT JOURNAL & INSIGHTS (From dramitmulay.com) ============ */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#eedfcb]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 text-left">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] font-semibold tracking-[3px] uppercase text-[#b8924e] mb-2">
              <span>INSIGHTS &amp; UPDATES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1f1b16] leading-tight">
              From the <em className="italic font-normal text-[#b8924e]">journal.</em>
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b8924e]">
              PATIENT EDUCATION SERIES ↗
            </span>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              onClick={() => onNavigate && onNavigate('/blog/')}
              className="bg-white border border-[#eedfcb] rounded-lg overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-400 flex flex-col group text-left cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-[#916922]">
                  {art.kicker}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-2">
                    {art.author} · {art.readTime}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1f1b16] mb-3 group-hover:text-[#b8924e] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5c544b] font-light leading-relaxed mb-6">
                    {art.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#b8924e] group-hover:text-[#1f1b16] inline-flex items-center space-x-1">
                    <span>Read Article</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </span>
                </div>
              </div>

            </article>
          ))}
        </div>

      </section>

    </div>
  );
}
