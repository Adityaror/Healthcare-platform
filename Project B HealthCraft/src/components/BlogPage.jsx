import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ArrowLeft, Sparkles, BookOpen, Clock, 
  ArrowUpRight, X, ChevronDown
} from 'lucide-react';
import { BLOGS_DATA } from '../data/blogsData';

const luxuryEase = [0.16, 1, 0.3, 1];

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

export default function BlogPage({ onNavigate, onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Clinical Blog & Surgical Insights | Dr. Amit Mulay - Plastic & Cosmetic Surgeon in Pune';
  }, []);

  const categories = ['All', 'Reconstructive Surgery', 'Scar Management', 'Cosmetic & Wellness', 'Clinical Insights'];

  const filteredBlogs = selectedCategory === 'All'
    ? BLOGS_DATA
    : BLOGS_DATA.filter(b => b.category === selectedCategory || (selectedCategory === 'Reconstructive Surgery' && b.category === 'Patient Recovery'));

  return (
    <div className="min-h-screen text-[#1f1b16] selection:bg-[#c9a25a] selection:text-white pb-24 overflow-x-clip">
      
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
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <span className="text-[#1f1b16] font-bold">Clinical Blog &amp; Patient Insights</span>
            </nav>

            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#1f1b16] hover:text-[#b5936d] transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. HERO HEADER */}
      <section className="pt-12 sm:pt-16 pb-12 border-b border-[#eedfcb] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f2ebd9] border border-[#eedfcb] text-[#916922] text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px] shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-[#c5932b]" />
            <span>KNOWLEDGE HUB · DR. AMIT MULAY</span>
          </div>

          <MaskedHeadingReveal
            text="Clinical Blog & Surgical Insights"
            as="h1"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#12100d] leading-tight"
          />

          <p className="text-sm sm:text-base text-[#4a4239] max-w-2xl font-normal leading-relaxed">
            Evidence-based medical articles on plastic surgery, cosmetic enhancements, reconstructive recovery, keloid protocols, and advanced wound management.
          </p>

          {/* Mobile Category Dropdown (Screens < 640px) */}
          <div className="block sm:hidden w-full pt-3">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none bg-white text-[#1f1b16] font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl border border-[#eedfcb] shadow-2xs focus:outline-none focus:border-[#b8924e] cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#8b5e28]">
                <ChevronDown className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Desktop / Tablet Category Filter Pills (Screens >= 640px) */}
          <div className="hidden sm:flex flex-wrap gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1f1b16] text-[#dfba79] shadow-md scale-[1.02]'
                    : 'bg-white text-[#5c544b] border border-[#eedfcb] hover:border-[#c5932b] hover:text-[#1f1b16]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BLOG ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredBlogs.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: luxuryEase }}
              className="bg-white border border-[#eedfcb] rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#c5932b] hover:shadow-xl transition-all duration-300 text-left group"
            >
              <div>
                {/* Blog Card Featured Image */}
                {post.image && (
                  <div 
                    onClick={() => setActiveArticle(post)}
                    className="w-full h-48 sm:h-52 overflow-hidden bg-[#f5efe3] relative cursor-pointer"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <span className="absolute bottom-3 left-3 font-bold uppercase tracking-wider text-[10px] bg-white/95 backdrop-blur-xs text-[#916922] px-2.5 py-1 rounded-full border border-[#eedfcb]/80 shadow-2xs">
                      {post.category}
                    </span>
                  </div>
                )}

                <div className="p-6 space-y-3.5">
                  <div className="flex items-center justify-between text-xs text-[#916922]">
                    {!post.image && (
                      <span className="font-bold uppercase tracking-wider text-[10px] bg-[#f5efe3] px-2.5 py-1 rounded-full border border-[#eedfcb]">
                        {post.category}
                      </span>
                    )}
                    <div className="flex items-center space-x-1.5 text-[#73685a] ml-auto">
                      <Clock className="w-3 h-3 text-[#c5932b]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 
                    onClick={() => setActiveArticle(post)}
                    className="font-serif text-lg sm:text-xl font-bold text-[#1f1b16] group-hover:text-[#916922] transition-colors leading-snug cursor-pointer line-clamp-2"
                  >
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#4a4239] leading-relaxed font-normal line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 mt-auto border-t border-[#eedfcb]/60 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-full bg-[#f5efe3] flex items-center justify-center text-[#916922] font-serif text-xs font-bold border border-[#eedfcb]">
                    AM
                  </div>
                  <span className="text-xs font-medium text-[#5c544b]">Dr. Amit Mulay</span>
                </div>

                <button
                  onClick={() => setActiveArticle(post)}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-[#916922] hover:text-[#1f1b16] transition-colors cursor-pointer group/btn"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 4. ARTICLE DETAIL MODAL */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: luxuryEase }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-[#eedfcb] rounded-3xl shadow-2xl p-6 sm:p-10 overflow-y-auto text-left space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#fbf8f2] border border-[#eedfcb] flex items-center justify-center text-[#5c544b] hover:text-[#1f1b16] hover:bg-[#eedfcb]/50 transition-all cursor-pointer z-10"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Featured Image in Modal */}
              {activeArticle.image && (
                <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden bg-[#f5efe3] border border-[#eedfcb] shadow-2xs">
                  <img
                    src={activeArticle.image}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}

              <div className="space-y-3 pt-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#f5efe3] text-[#916922] text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-[#c5932b]" />
                  <span>{activeArticle.category} · BY DR. AMIT MULAY</span>
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1f1b16] leading-snug">
                  {activeArticle.title}
                </h1>

                <div className="flex items-center space-x-4 text-xs text-[#6e6355] pt-1">
                  <span>Published: {activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-[15px] text-[#2c261e] leading-[1.85] font-normal border-t border-[#eedfcb] pt-6">
                {activeArticle.paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              <div className="p-5 bg-[#fbf8f2] border border-[#eedfcb] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1f1b16]">Have clinical queries on this condition?</h4>
                  <p className="text-xs text-[#5c544b] mt-0.5">Consult Dr. Amit Mulay for a thorough evaluation in Pune.</p>
                </div>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenBooking();
                  }}
                  className="px-5 py-2.5 bg-[#1f1b16] text-[#dfba79] hover:bg-[#c5932b] hover:text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer flex-shrink-0"
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
