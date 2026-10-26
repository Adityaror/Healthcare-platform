import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, ArrowLeft, MapPin, Phone, Mail, Clock, 
  Send, Sparkles, CheckCircle2, ArrowUpRight, MessageSquare 
} from 'lucide-react';

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

export default function ContactPage({ onNavigate, onOpenBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    location: 'Chinchwad Clinic (Creo Clinic)'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Contact Dr. Amit Mulay | Clinic Locations in Pune & PCMC';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/send-appointment.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          notes: `${formData.message}\nPreferred Clinic: ${formData.location}`,
          procedure: 'General Inquiry / Clinic Visit',
          source: 'Contact Page'
        }),
      });
    } catch (err) {
      console.warn('API submission failed, showing offline fallback:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', email: '', message: '', location: 'Chinchwad Clinic (Creo Clinic)' });
      }, 5000);
    }
  };

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
              <span className="text-[#1f1b16] font-bold">Contact Us &amp; Clinic Locations</span>
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
            <MessageSquare className="w-3.5 h-3.5 text-[#c5932b]" />
            <span>DIRECT CLINICAL CONSULTATION</span>
          </div>

          <MaskedHeadingReveal
            text="Get In Touch with Dr. Amit Mulay"
            as="h1"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#12100d] leading-tight"
          />

          <p className="text-sm sm:text-base text-[#4a4239] max-w-2xl font-normal leading-relaxed">
            Schedule a private consultation at our Chinchwad (PCMC) or Bund Garden (Pune Camp) clinics for personalized surgical evaluations.
          </p>
        </div>
      </section>

      {/* 3. MAIN CONTACT & LOCATIONS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: CLINIC LOCATIONS & DETAILS */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Location 1: Chinchwad PCMC */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: luxuryEase }}
              className="p-6 sm:p-7 bg-white border border-[#eedfcb] rounded-2xl shadow-xs space-y-4 hover:border-[#c5932b] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#916922] bg-[#f5efe3] px-3 py-1 rounded-full border border-[#eedfcb]">
                  PRIMARY PCMC CLINIC
                </span>
                <span className="text-xs text-[#5c544b] font-medium flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-[#c5932b]" />
                  <span>Mon – Sat: 10 AM – 7 PM</span>
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#1f1b16]">
                Creo Clinic (Chinchwad, PCMC)
              </h3>

              <div className="flex items-start space-x-3 text-xs sm:text-sm text-[#4a4239] leading-relaxed">
                <MapPin className="w-4 h-4 text-[#c5932b] flex-shrink-0 mt-1" />
                <span>Shop-30, Ground Floor, Kohinoor Majestic, Behind Kundan Hyundai, Chinchwad, MIDC, Pune, Maharashtra 411019</span>
              </div>

              <div className="pt-3 border-t border-[#eedfcb]/70 flex flex-wrap gap-4 items-center justify-between">
                <a
                  href="tel:08408051299"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#1f1b16] hover:text-[#916922] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5932b]" />
                  <span>08408051299</span>
                </a>

                <a
                  href="https://g.page/Creoclinic?share"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#916922] hover:text-[#1f1b16] transition-colors"
                >
                  <span>Google Maps Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Location 2: Bund Garden Camp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: luxuryEase }}
              className="p-6 sm:p-7 bg-white border border-[#eedfcb] rounded-2xl shadow-xs space-y-4 hover:border-[#c5932b] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#916922] bg-[#f5efe3] px-3 py-1 rounded-full border border-[#eedfcb]">
                  PUNE CAMP CLINIC
                </span>
                <span className="text-xs text-[#5c544b] font-medium flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-[#c5932b]" />
                  <span>By Prior Appointment</span>
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#1f1b16]">
                Deccan Clinic (Bund Garden Rd)
              </h3>

              <div className="flex items-start space-x-3 text-xs sm:text-sm text-[#4a4239] leading-relaxed">
                <MapPin className="w-4 h-4 text-[#c5932b] flex-shrink-0 mt-1" />
                <span>Ground Floor, C/O Deccan Clinic 60-62, Connaught Place, Bund Garden Rd, Pune, Maharashtra 411001</span>
              </div>

              <div className="pt-3 border-t border-[#eedfcb]/70 flex flex-wrap gap-4 items-center justify-between">
                <a
                  href="mailto:dramitmulay@gmail.com"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#1f1b16] hover:text-[#916922] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#c5932b]" />
                  <span>dramitmulay@gmail.com</span>
                </a>

                <a
                  href="https://goo.gl/maps/oq6cszejPqbDnQZg8"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#916922] hover:text-[#1f1b16] transition-colors"
                >
                  <span>Google Maps Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Interactive Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-[#eedfcb] shadow-xs h-64 sm:h-72 w-full bg-[#f5efe3]">
              <iframe
                title="Dr. Amit Mulay Clinic Location"
                src="https://maps.google.com/maps?q=Ground%20Floor%2C%20Dr.%20Amit%20Mulay%20-%20Best%20Plastic%20Surgeon%20in%20Pune%20%7C%20Plastic%20Surgery%20in%20Pune%20%7C%20Cosmetic%20Surgeon%20in%20Pune%20%7C%20Rhinoplasty%20in%20Pune%2C%2060-62%2C%20Connaught%20Place%2C%20Bund%20Garden%20Rd%2C%20Pune%2C%20Maharashtra%20411001&t=m&z=15&output=embed&iwloc=near"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* RIGHT: QUICK ENQUIRY FORM */}
          <div className="lg:col-span-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: luxuryEase }}
              className="p-7 sm:p-9 bg-white border border-[#eedfcb] rounded-3xl shadow-sm space-y-6"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[2px] text-[#916922]">
                  <Sparkles className="w-3 h-3 text-[#c5932b]" />
                  <span>ONLINE APPOINTMENT &amp; ENQUIRY</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1f1b16]">
                  Request a Consultation
                </h2>
                <p className="text-xs sm:text-sm text-[#5c544b]">
                  Please fill in your details below and our clinic coordinator will confirm your preferred appointment slot promptly.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-[#f5efe3] border border-[#eedfcb] rounded-2xl text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1f1b16] text-[#dfba79] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6 text-[#c5932b]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1f1b16]">Thank you, {formData.name || 'Patient'}!</h3>
                  <p className="text-xs text-[#4a4239] leading-relaxed">
                    Your consultation request has been received. Our clinical staff will call you at <strong className="text-[#1f1b16]">{formData.phone}</strong> to confirm your slot.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3d3429] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-[#eedfcb] bg-[#fbf8f2] text-xs sm:text-sm text-[#1f1b16] focus:outline-none focus:border-[#c5932b] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3d3429] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 Mobile Number"
                        className="w-full px-4 py-3 rounded-xl border border-[#eedfcb] bg-[#fbf8f2] text-xs sm:text-sm text-[#1f1b16] focus:outline-none focus:border-[#c5932b] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3d3429] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#eedfcb] bg-[#fbf8f2] text-xs sm:text-sm text-[#1f1b16] focus:outline-none focus:border-[#c5932b] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3d3429] mb-1.5">
                      Preferred Clinic Location
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#eedfcb] bg-[#fbf8f2] text-xs sm:text-sm text-[#1f1b16] focus:outline-none focus:border-[#c5932b] focus:bg-white transition-colors cursor-pointer"
                    >
                      <option value="Chinchwad Clinic (Creo Clinic)">Chinchwad, PCMC (Creo Clinic)</option>
                      <option value="Bund Garden Clinic (Deccan Clinic)">Bund Garden Rd, Pune Camp (Deccan Clinic)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3d3429] mb-1.5">
                      Message / Clinical Requirements
                    </label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your procedure or treatment inquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-[#eedfcb] bg-[#fbf8f2] text-xs sm:text-sm text-[#1f1b16] focus:outline-none focus:border-[#c5932b] focus:bg-white transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 bg-[#1f1b16] text-[#dfba79] hover:bg-[#c5932b] hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-xl cursor-pointer flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Request...' : 'Submit Consultation Request'}</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>

    </div>
  );
}
