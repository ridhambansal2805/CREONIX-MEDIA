import React from "react";
import { Instagram, Linkedin, Twitter, Mail, Phone, ArrowUp } from "lucide-react";

const Footer = ({ contactData }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#151515] text-white border-t border-[#717171]/20">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#ffd1e7] mb-4 uppercase tracking-wide">
                Creonix Media
              </h2>
              <p className="text-[#aaa] text-lg leading-relaxed mb-6 max-w-md">
                We specialize in building high-converting Shopify stores and scaling them 
                with performance-driven Meta advertising for fashion, lifestyle, and D2C brands.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a 
                  href={contactData.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#717171]/10 rounded-full flex items-center justify-center text-[#ffd1e7] hover:bg-[#ffd1e7] hover:text-[#151515] transition-all duration-300"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href={contactData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#717171]/10 rounded-full flex items-center justify-center text-[#88a2ff] hover:bg-[#88a2ff] hover:text-white transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href={contactData.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#717171]/10 rounded-full flex items-center justify-center text-[#d987ff] hover:bg-[#d987ff] hover:text-white transition-all duration-300"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#aaa] hover:text-[#ffd1e7] transition-colors duration-200 text-left"
                  >
                    Shopify Development
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#aaa] hover:text-[#ffd1e7] transition-colors duration-200 text-left"
                  >
                    Meta Advertising
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.querySelector('#case-studies').scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#aaa] hover:text-[#ffd1e7] transition-colors duration-200 text-left"
                  >
                    Conversion Optimization
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.querySelector('#case-studies').scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#aaa] hover:text-[#ffd1e7] transition-colors duration-200 text-left"
                  >
                    Performance Marketing
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-white">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="flex items-center gap-3 text-[#aaa] hover:text-[#ffd1e7] transition-colors duration-200"
                  >
                    <Mail size={16} />
                    {contactData.email}
                  </a>
                </li>
                <li>
                  <a 
                    href={`tel:${contactData.phone}`}
                    className="flex items-center gap-3 text-[#aaa] hover:text-[#ffd1e7] transition-colors duration-200"
                  >
                    <Phone size={16} />
                    {contactData.phone}
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#88a2ff] hover:text-[#ffd1e7] transition-colors duration-200 font-medium"
                  >
                    Book Strategy Call →
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#717171]/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-[#aaa]">
              © {currentYear} Creonix Media. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <button 
                className="text-sm text-[#aaa] hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button 
                className="text-sm text-[#aaa] hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button 
                onClick={scrollToTop}
                className="w-8 h-8 bg-[#ffd1e7]/10 rounded-full flex items-center justify-center text-[#ffd1e7] hover:bg-[#ffd1e7] hover:text-[#151515] transition-all duration-300"
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