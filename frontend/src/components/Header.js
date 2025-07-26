import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = ({ navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-[#1a4d2e]/40">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-center relative h-16">
          {/* Desktop Navigation - Left Side */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-0">
            {navigation.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-[#2ecc71] hover:text-[#27ae60] transition-colors duration-200 text-sm font-normal hover:underline"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Logo - Centered */}
          <div>
            <h1 className="text-2xl font-bold text-white uppercase tracking-wider" style={{ fontFamily: '"Bebas Neue", "Arial Black", "Arial Narrow", condensed, sans-serif' }}>
              CREON!X MEDIA
            </h1>
          </div>

          {/* CTA Button - Desktop Only (Right Side) */}
          <div className="hidden md:block absolute right-0">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-black text-[#2ecc71] border border-[#1a4d2e] rounded-full px-6 py-2 text-xs font-mono uppercase tracking-wider hover:bg-[#1a4d2e] hover:text-white transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button - Right Side */}
          <button
            className="md:hidden text-[#2ecc71] hover:text-[#27ae60] absolute right-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black border-b border-[#1a4d2e]/40 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              {navigation.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[#2ecc71] hover:text-[#27ae60] transition-colors duration-200 text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="bg-black text-[#2ecc71] border border-[#1a4d2e] rounded-full px-6 py-2 text-xs font-mono uppercase tracking-wider mt-4 w-fit"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;