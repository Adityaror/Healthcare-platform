import React, { useState, useEffect } from 'react';

// UI 2 Components (Dr's Desk Quiet Luxury Architecture)
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MeetDoctor from './components/MeetDoctor';
import SpecialtiesSection from './components/SpecialtiesSection';
import PatientJourney from './components/PatientJourney';
import CertificatesCarousel from './components/CertificatesCarousel';
import HospitalAffiliations from './components/HospitalAffiliations';
import MediaJournalSection from './components/MediaJournalSection';
import FaqSection from './components/FaqSection';
import ConsultationSection from './components/ConsultationSection';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import ProcedureModal from './components/ProcedureModal';
import ThemeCustomizerModal from './components/ThemeCustomizerModal';

// Dedicated Standalone Pages & Procedures Registry
import AboutUsPage from './components/AboutUsPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import ProcedureDetailPage from './components/ProcedureDetailPage';
import { getProcedureBySlug } from './data/proceduresData';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [currentCategory, setCurrentCategory] = useState(() => {
    return sessionStorage.getItem('dr_mulay_nav_category') || null;
  });
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState('In-Clinic');
  const [selectedProcedure, setSelectedProcedure] = useState(null);
  const [themeCustomizerOpen, setThemeCustomizerOpen] = useState(false);

  useEffect(() => {
    // Set active default gradient (Antique Gold & Cashmere at 45deg)
    let activeGrad = localStorage.getItem('dr_mulay_active_gradient_css') || 'linear-gradient(45deg, #e1d3b7 0%, #897d67 100%)';
    localStorage.setItem('dr_mulay_active_gradient_css', activeGrad);
    document.documentElement.style.setProperty('--section-bg-gradient', activeGrad);

    // Listen to browser Back/Forward buttons
    const handlePopState = () => {
      const newPath = window.location.pathname || '/';
      setCurrentPath(newPath);
      const clean = newPath.toLowerCase().replace(/^\/+|\/+$/g, '');
      const proc = getProcedureBySlug(clean);
      if (proc) {
        // keep stored category if valid, else fallback
        const stored = sessionStorage.getItem('dr_mulay_nav_category');
        if (!stored) {
          setCurrentCategory(proc.categorySlug);
        }
      } else {
        setCurrentCategory(null);
        sessionStorage.removeItem('dr_mulay_nav_category');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path, category = null) => {
    if (!path) return;

    // Handle hash links directly if they start with #
    if (path.startsWith('#')) {
      const targetId = path.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Update active category
    if (category) {
      setCurrentCategory(category);
      sessionStorage.setItem('dr_mulay_nav_category', category);
    } else {
      const clean = (path || '/').toLowerCase().replace(/^\/+|\/+$/g, '');
      const proc = getProcedureBySlug(clean);
      if (proc) {
        setCurrentCategory(proc.categorySlug);
        sessionStorage.setItem('dr_mulay_nav_category', proc.categorySlug);
      } else {
        setCurrentCategory(null);
        sessionStorage.removeItem('dr_mulay_nav_category');
      }
    }

    // Format target slug
    let formattedPath = path;
    if (!formattedPath.startsWith('/')) {
      formattedPath = '/' + formattedPath;
    }
    if (!formattedPath.endsWith('/') && !formattedPath.includes('.')) {
      formattedPath = formattedPath + '/';
    }

    // Update browser URL bar without reloading
    window.history.pushState({}, '', formattedPath);
    setCurrentPath(formattedPath);

    // If navigating to home, scroll to top
    if (formattedPath === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = 'Best Plastic, Reconstructive & Cosmetic Surgeon in Pune | Dr. Amit Mulay';
      return;
    }

    // Handle About page slug
    if (formattedPath === '/about-us/' || formattedPath === '/dr-amit-mulay/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = 'Best Plastic Surgeon in Pune | Best Cosmetic Surgeon in Pune | Dr. Amit Mulay';
      return;
    }

    // Handle Contact page slug
    if (formattedPath === '/contact-us/' || formattedPath === '/contact/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = 'Contact Dr. Amit Mulay | Clinic Locations in Pune & PCMC';
      return;
    }

    // Handle Blog page slug
    if (formattedPath === '/blog/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = 'Clinical Blog & Surgical Insights | Dr. Amit Mulay - Plastic & Cosmetic Surgeon in Pune';
      return;
    }

    // Scroll to top for procedure pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (type = 'In-Clinic') => {
    if (typeof type === 'string' && type) {
      setBookingType(type);
    } else {
      setBookingType('In-Clinic');
    }
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  const handleSelectProcedure = (procedureSlug, category = null) => {
    handleNavigate('/' + procedureSlug + '/', category);
  };

  // Check if current URL matches an authentic procedure page or standalone pages
  const matchedProcedure = getProcedureBySlug(currentPath);
  const isAboutPage = currentPath === '/about-us/' || currentPath === '/about-us' || currentPath === '/dr-amit-mulay/' || currentPath === '/dr-amit-mulay';
  const isBlogPage = currentPath === '/blog/' || currentPath === '/blog';
  const isContactPage = currentPath === '/contact-us/' || currentPath === '/contact-us' || currentPath === '/contact/' || currentPath === '/contact';

  return (
    <div
      className="min-h-screen text-[#2a2620] font-sans selection:bg-[#c9a25a] selection:text-white ui-theme-scope w-full max-w-full overflow-x-clip"
      style={{ background: 'var(--section-bg-gradient)', backgroundAttachment: 'fixed' }}
    >
      {/* Navigation Bar with Reference URLs & Theme Studio */}
      <Navbar
        currentPath={currentPath}
        activeCategory={currentCategory}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenThemeStudio={() => setThemeCustomizerOpen(true)}
      />

      {/* Conditional Rendering: If active procedure is loaded, display Procedural Landing Page */}
      {matchedProcedure ? (
        <main>
          <ProcedureDetailPage
            procedure={matchedProcedure}
            activeCategory={currentCategory}
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        </main>
      ) : isAboutPage ? (
        <main>
          <AboutUsPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        </main>
      ) : isBlogPage ? (
        <main>
          <BlogPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        </main>
      ) : isContactPage ? (
        <main>
          <ContactPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        </main>
      ) : (
        <main>
          {/* Dr's Desk Luxe Hero */}
          <HeroSection
            onOpenBooking={handleOpenBooking}
            onNavigate={handleNavigate}
          />

          {/* Block 01: The Surgeon Profile & Credentials */}
          <MeetDoctor
            onOpenBooking={handleOpenBooking}
            onNavigate={handleNavigate}
          />

          {/* Specialities & Clinical Portfolio with slug navigation */}
          <SpecialtiesSection
            onSelectProcedure={handleSelectProcedure}
            onOpenBooking={handleOpenBooking}
          />

          {/* 4-Step Patient Journey Continuum */}
          <PatientJourney onOpenBooking={handleOpenBooking} />

          {/* Video Library & Patient Education Journal */}
          <MediaJournalSection onNavigate={handleNavigate} />

          {/* Infinite Scrolling Credentials & Certifications Track */}
          <CertificatesCarousel />

          {/* Hospital Affiliations */}
          <HospitalAffiliations />

          {/* Luxe Accordion FAQs */}
          <FaqSection />

          {/* Location & Direction Hub */}
          <ConsultationSection />
        </main>
      )}

      {/* Luxe Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* 2-Column Popup Consultation Booking Modal */}
      <AppointmentModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        initialType={bookingType}
      />

      {/* Procedure Detail Modal (for supplementary popups) */}
      <ProcedureModal
        procedureId={selectedProcedure}
        onClose={() => setSelectedProcedure(null)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Theme & Gradient Customizer Modal */}
      <ThemeCustomizerModal
        isOpen={themeCustomizerOpen}
        onClose={() => setThemeCustomizerOpen(false)}
      />
    </div>
  );
}
