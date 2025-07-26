import React from "react";
import { ArrowRight, TrendingUp, Target, Zap } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = ({ heroData, stats }) => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#1a4d2e]/30 rounded-full blur-3xl shadow-[0_0_50px_#2ecc71]"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#0f5132]/20 rounded-full blur-3xl shadow-[0_0_80px_#27ae60]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#2ecc71]/10 rounded-full blur-3xl shadow-[0_0_100px_#1a4d2e]"></div>
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-4 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1a4d2e]/20 text-[#2ecc71] px-4 py-2 rounded-full text-sm font-mono uppercase tracking-wider mb-8 shadow-[0_0_20px_#2ecc71] backdrop-blur-sm border border-[#1a4d2e]/50">
            <TrendingUp size={16} />
            {heroData.trustText}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-[#2ecc71] to-[#27ae60] bg-clip-text text-transparent drop-shadow-[0_0_30px_#2ecc71]">
            {heroData.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#b3b3b3] max-w-3xl mx-auto leading-relaxed mb-12">
            {heroData.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-[#2ecc71] to-[#27ae60] text-black border border-[#2ecc71] rounded-full px-8 py-3 text-sm font-mono uppercase tracking-wider hover:shadow-[0_0_30px_#2ecc71] transition-all duration-300 flex items-center gap-2 group shadow-[0_0_20px_#2ecc71]"
            >
              {heroData.ctaText}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <button 
              onClick={() => document.querySelector('#case-studies').scrollIntoView({ behavior: 'smooth' })}
              className="text-white border border-[#1a4d2e] rounded-full px-8 py-3 text-sm font-mono uppercase tracking-wider hover:border-[#2ecc71] hover:bg-gradient-to-r hover:from-[#1a4d2e] hover:to-[#2ecc71] hover:text-black transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_#2ecc71]"
            >
              View Our Work
              <Target size={16} />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-gradient-to-br from-[#1a4d2e]/20 to-[#0f5132]/10 rounded-lg border border-[#1a4d2e]/30 hover:border-[#2ecc71]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_20px_#2ecc71] backdrop-blur-sm"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#2ecc71] mb-2 flex items-center justify-center gap-1 drop-shadow-[0_0_10px_#2ecc71]">
                  {index === 0 && <Target size={20} />}
                  {index === 1 && <TrendingUp size={20} />}
                  {index === 2 && <Zap size={20} />}
                  {index === 3 && <ArrowRight size={20} />}
                  {stat.value}
                </div>
                <div className="text-sm text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-xs text-[#b3b3b3]">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;