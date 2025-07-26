import React from "react";
import { Instagram, Linkedin, Twitter, Mail, Phone, ArrowUp } from "lucide-react";

const Footer = ({ contactData }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-[#1a4d2e]/30">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide" style={{ fontFamily: '"Cubano", "Arial Black", "Arial Narrow", condensed, sans-serif' }}>
                CREON!X
              </h2>
              <p className="text-[#b3b3b3] text-lg leading-relaxed mb-6 max-w-md">
                We specialize in building high-converting Shopify stores and scaling them 
                with performance-driven Meta advertising for fashion, lifestyle, and D2C brands.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a 
                  href={contactData.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-[#2ecc71]/20 to-[#1a4d2e]/10 rounded-full flex items-center justify-center text-[#2ecc71] hover:bg-gradient-to-br hover:from-[#2ecc71] hover:to-[#27ae60] hover:text-black transition-all duration-300 border border-[#2ecc71]/30 shadow-[0_0_10px_#2ecc71]/30 hover:shadow-[0_0_20px_#2ecc71]"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href={contactData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-[#27ae60]/20 to-[#0f5132]/10 rounded-full flex items-center justify-center text-[#27ae60] hover:bg-gradient-to-br hover:from-[#27ae60] hover:to-[#2ecc71] hover:text-black transition-all duration-300 border border-[#27ae60]/30 shadow-[0_0_10px_#27ae60]/30 hover:shadow-[0_0_20px_#27ae60]"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href={contactData.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-[#1a4d2e]/20 to-[#2ecc71]/10 rounded-full flex items-center justify-center text-[#2ecc71] hover:bg-gradient-to-br hover:from-[#2ecc71] hover:to-[#1a4d2e] hover:text-black transition-all duration-300 border border-[#2ecc71]/30 shadow-[0_0_10px_#2ecc71]/30 hover:shadow-[0_0_20px_#2ecc71]"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-[#2ecc71] drop-shadow-[0_0_5px_#2ecc71]">Services</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#b3b3b3] hover:text-[#2ecc71] transition-colors duration-200 text-left hover:drop-shadow-[0_0_5px_#2ecc71]"
                  >
                    Shopify Development
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#b3b3b3] hover:text-[#27ae60] transition-colors duration-200 text-left hover:drop-shadow-[0_0_5px_#27ae60]"
                  >
                    Meta Advertising
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.querySelector('#case-studies').scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#b3b3b3] hover:text-[#2ecc71] transition-colors duration-200 text-left hover:drop-shadow-[0_0_5px_#2ecc71]"
                  >
                    Conversion Optimization
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.querySelector('#case-studies').scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#b3b3b3] hover:text-[#27ae60] transition-colors duration-200 text-left hover:drop-shadow-[0_0_5px_#27ae60]"
                  >
                    Performance Marketing
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-[#27ae60] drop-shadow-[0_0_5px_#27ae60]">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="flex items-center gap-3 text-[#b3b3b3] hover:text-[#2ecc71] transition-colors duration-200 hover:drop-shadow-[0_0_5px_#2ecc71]"
                  >
                    <Mail size={16} />
                    {contactData.email}
                  </a>
                </li>
                <li>
                  <a 
                    href={`tel:${contactData.phone}`}
                    className="flex items-center gap-3 text-[#b3b3b3] hover:text-[#27ae60] transition-colors duration-200 hover:drop-shadow-[0_0_5px_#27ae60]"
                  >
                    <Phone size={16} />
                    {contactData.phone}
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#2ecc71] hover:text-[#27ae60] transition-colors duration-200 font-medium hover:drop-shadow-[0_0_5px_#27ae60]"
                  >
                    Book Strategy Call →
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a4d2e]/30 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-[#b3b3b3]">
              © {currentYear} Creonix Media. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <button 
                className="text-sm text-[#b3b3b3] hover:text-[#2ecc71] transition-colors duration-200 hover:drop-shadow-[0_0_5px_#2ecc71]"
              >
                Privacy Policy
              </button>
              <button 
                className="text-sm text-[#b3b3b3] hover:text-[#27ae60] transition-colors duration-200 hover:drop-shadow-[0_0_5px_#27ae60]"
              >
                Terms of Service
              </button>
              <button 
                onClick={scrollToTop}
                className="w-8 h-8 bg-gradient-to-br from-[#2ecc71]/20 to-[#1a4d2e]/10 rounded-full flex items-center justify-center text-[#2ecc71] hover:bg-gradient-to-br hover:from-[#2ecc71] hover:to-[#27ae60] hover:text-black transition-all duration-300 border border-[#2ecc71]/30 shadow-[0_0_10px_#2ecc71]/30 hover:shadow-[0_0_20px_#2ecc71]"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;