import React from 'react';
import logoImg from '../assets/Dr. Amit Mulay Logo.png';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer({ onNavigate, onOpenBooking }) {
  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <footer className="bg-[#1c1a17] text-[#f5f0e8] relative overflow-hidden font-sans border-t border-[#dfba79]/20">
      
      {/* Top Ornamental Crown */}
      <div className="flex items-center justify-center space-x-4 pt-12 sm:pt-14 pb-2 px-4">
        <span className="h-[1px] w-24 sm:w-48 bg-gradient-to-r from-transparent via-[#d4af6a] to-transparent"></span>
        <span className="w-2.5 h-2.5 border border-[#d4af6a] transform rotate-45 flex-shrink-0"></span>
        <span className="font-serif italic text-xs tracking-[0.22em] text-[#d4af6a] uppercase flex-shrink-0">
          Plastic, Oral &amp; Reconstructive Surgeon · Pune &amp; Pimpri-Chinchwad
        </span>
        <span className="w-2.5 h-2.5 border border-[#d4af6a] transform rotate-45 flex-shrink-0"></span>
        <span className="h-[1px] w-24 sm:w-48 bg-gradient-to-r from-transparent via-[#d4af6a] to-transparent"></span>
      </div>

      {/* Brand Heading Block */}
      <div className="text-center py-8 sm:py-10 px-4">
        
        {/* Logo Slot - Square Badge */}
        <div className="flex justify-center mb-5">
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-black border border-[#dfba79]/60 flex items-center justify-center p-2.5 shadow-xl overflow-hidden group hover:border-[#dfba79] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <img
              src={logoImg}
              alt="Dr. Amit Mulay Logo"
              className="w-full h-full object-contain"
            />
          </a>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-[#f5f0e8] mb-2">
          Dr. Amit <em className="italic text-[#d4af6a]">Mulay</em>
        </h2>

        <p className="text-[11px] font-medium tracking-[0.2em] text-[#d4af6a] uppercase">
          MBBS, FCPS, DNB (General Surgery), DNB (Plastic Surgery) &nbsp;·&nbsp; MMC: 2007/04/1104 &nbsp;·&nbsp; 13+ Years Specialist
        </p>
      </div>

      {/* 3-Column Main Directory Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 pt-8 border-t border-[#dfba79]/20 text-left">
          
          {/* Column 1 — About Practice */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-[11px] font-bold tracking-[0.3em] uppercase text-[#dfba79]">
              <span>About</span>
              <span className="flex-1 h-[1px] bg-[#dfba79]/40"></span>
            </div>
            
            <p className="text-sm font-normal text-[#f5f0e8] leading-[1.85]">
              <strong className="font-serif italic text-base text-[#dfba79] font-normal block mb-2">
                Precision in Surgery. Personal in Care.
              </strong>
              Board-certified plastic, reconstructive, and aesthetic surgeon specializing in reconstructive microsurgery, vascularised free tissue transfers (Free Flaps), aesthetic surgery, and burn restoration across Pune &amp; PCMC.
            </p>
          </div>

          {/* Column 2 — Quick Navigation */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-[11px] font-bold tracking-[0.3em] uppercase text-[#dfba79]">
              <span>Navigation</span>
              <span className="flex-1 h-[1px] bg-[#dfba79]/40"></span>
            </div>

            <ul className="space-y-2.5 text-sm font-normal text-[#f5f0e8]">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNavClick(e, '/')}
                  className="text-[#f5f0e8] hover:text-[#dfba79] transition-colors inline-flex items-center space-x-2 group cursor-pointer"
                >
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#dfba79] transition-all"></span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="/about-us/"
                  onClick={(e) => handleNavClick(e, '/about-us/')}
                  className="text-[#f5f0e8] hover:text-[#dfba79] transition-colors inline-flex items-center space-x-2 group cursor-pointer"
                >
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#dfba79] transition-all"></span>
                  <span>Meet Dr. Amit Mulay</span>
                </a>
              </li>
              <li>
                <a
                  href="/skin-grafting-in-pune/"
                  onClick={(e) => handleNavClick(e, '/skin-grafting-in-pune/')}
                  className="text-[#f5f0e8] hover:text-[#dfba79] transition-colors inline-flex items-center space-x-2 group cursor-pointer"
                >
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#dfba79] transition-all"></span>
                  <span>Skin Grafting in Pune</span>
                </a>
              </li>
              <li>
                <a
                  href="/rhinoplasty-in-pune/"
                  onClick={(e) => handleNavClick(e, '/rhinoplasty-in-pune/')}
                  className="text-[#f5f0e8] hover:text-[#dfba79] transition-colors inline-flex items-center space-x-2 group cursor-pointer"
                >
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#dfba79] transition-all"></span>
                  <span>Rhinoplasty Surgery</span>
                </a>
              </li>
              <li>
                <a
                  href="/blog/"
                  onClick={(e) => handleNavClick(e, '/blog/')}
                  className="text-[#f5f0e8] hover:text-[#dfba79] transition-colors inline-flex items-center space-x-2 group cursor-pointer"
                >
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#dfba79] transition-all"></span>
                  <span>Video Library &amp; Journal</span>
                </a>
              </li>
              <li>
                <a
                  href="/contact-us/"
                  onClick={(e) => handleNavClick(e, '/contact-us/')}
                  className="text-[#f5f0e8] hover:text-[#dfba79] transition-colors inline-flex items-center space-x-2 group cursor-pointer"
                >
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#dfba79] transition-all"></span>
                  <span>Clinic Location &amp; Contact</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-[#f5f0e8] hover:text-[#dfba79] transition-colors inline-flex items-center space-x-2 group cursor-pointer text-left"
                >
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#dfba79] transition-all"></span>
                  <span>Book Consultation</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 — Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-[11px] font-bold tracking-[0.3em] uppercase text-[#dfba79]">
              <span>Contact Us</span>
              <span className="flex-1 h-[1px] bg-[#dfba79]/40"></span>
            </div>

            <div className="space-y-3.5 text-sm font-normal text-[#f5f0e8]">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full border border-[#dfba79]/60 flex items-center justify-center text-[#dfba79] flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[#dfba79] font-bold block text-xs uppercase tracking-wider mb-0.5">Clinic Address</span>
                  <span className="text-[#f5f0e8] leading-relaxed block">Shop-30, Ground Floor, Kohinoor Majestic, Behind Kundan Hyundai, Chinchwad, MIDC, Pune, Maharashtra 411019</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full border border-[#dfba79]/60 flex items-center justify-center text-[#dfba79] flex-shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[#dfba79] font-bold block text-xs uppercase tracking-wider mb-0.5">Direct Phone</span>
                  <a href="tel:08408051299" className="text-[#f5f0e8] hover:text-[#dfba79] font-medium transition-colors block">
                    08408051299
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full border border-[#dfba79]/60 flex items-center justify-center text-[#dfba79] flex-shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[#dfba79] font-bold block text-xs uppercase tracking-wider mb-0.5">Email</span>
                  <a href="mailto:dramitmulay@gmail.com" className="text-[#f5f0e8] hover:text-[#dfba79] font-medium transition-colors block">
                    dramitmulay@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Social Strip */}
      <div className="border-t border-[#dfba79]/20 py-7 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-6">
        <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#d4af6a]">
          Connect
        </span>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full border border-[#dfba79]/40 flex items-center justify-center text-[#f5f0e8]/70 hover:text-white hover:border-[#d4af6a] hover:-translate-y-1 transition-all"
          aria-label="Instagram"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full border border-[#dfba79]/40 flex items-center justify-center text-[#f5f0e8]/70 hover:text-white hover:border-[#d4af6a] hover:-translate-y-1 transition-all"
          aria-label="YouTube"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.2 5 12 5 12 5s-4.2 0-6.9.1c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9C6.8 19 12 19 12 19s4.2 0 6.9-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9l5.7 2.8-5.7 2.7z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full border border-[#dfba79]/40 flex items-center justify-center text-[#f5f0e8]/70 hover:text-white hover:border-[#d4af6a] hover:-translate-y-1 transition-all"
          aria-label="LinkedIn"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918408051299"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full border border-[#dfba79]/40 flex items-center justify-center text-[#f5f0e8]/70 hover:text-white hover:border-[#d4af6a] hover:-translate-y-1 transition-all"
          aria-label="WhatsApp"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
          </svg>
        </a>
      </div>

      {/* Bottom Bar Disclaimer & Copyright */}
      <div className="bg-black/60 py-6 px-4 text-center text-xs text-[#ede6db]/90 space-y-2 border-t border-white/10">
        <p className="max-w-4xl mx-auto leading-relaxed">
          Disclaimer: Information on this website is for educational and guidance purposes only and is not a substitute for formal clinical consultation with a qualified medical specialist. All surgical procedures carry inherent risks and require personalized evaluation.
        </p>
        <div className="text-[11px] uppercase tracking-wider text-[#dfba79] font-medium">
          © 2026 Dr. Amit Mulay Plastic, Oral &amp; Reconstructive Surgery. All Rights Reserved.
        </div>
      </div>

    </footer>
  );
}
