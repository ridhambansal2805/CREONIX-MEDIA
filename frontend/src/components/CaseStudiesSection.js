import React from "react";
import { TrendingUp, Target, Zap, ArrowUpRight } from "lucide-react";

const CaseStudiesSection = ({ caseStudies }) => {
  const getColorClasses = (bgColor, textColor) => {
    const colorMap = {
      'light-pink': 'bg-gradient-to-br from-[#1a4d2e]/40 to-[#0f5132]/30 text-white border-[#2ecc71]/30',
      'mid-purple': 'bg-gradient-to-br from-[#27ae60]/40 to-[#1a4d2e]/30 text-white border-[#27ae60]/30',
      'light-yellow': 'bg-gradient-to-br from-[#2ecc71]/30 to-[#0f5132]/40 text-white border-[#2ecc71]/40',
      'mid-green': 'bg-gradient-to-br from-[#0f5132]/40 to-[#27ae60]/30 text-white border-[#27ae60]/40'
    };
    return colorMap[bgColor] || 'bg-gradient-to-br from-[#1a4d2e]/40 to-[#0f5132]/30 text-white border-[#2ecc71]/30';
  };

  const getServiceButtonColor = (service) => {
    const serviceColorMap = {
      'Shopify Design': 'bg-gradient-to-r from-[#2ecc71] to-[#27ae60] text-black shadow-[0_0_10px_#2ecc71]',
      'Shopify Development': 'bg-gradient-to-r from-[#27ae60] to-[#2ecc71] text-black shadow-[0_0_10px_#27ae60]',
      'Meta Ads': 'bg-gradient-to-r from-[#1a4d2e] to-[#0f5132] text-[#2ecc71] border border-[#2ecc71]/30',
      'Conversion Optimization': 'bg-[#2ecc71]/20 text-[#2ecc71] border border-[#2ecc71]/50',
      'Brand Launch': 'bg-[#27ae60]/20 text-[#27ae60] border border-[#27ae60]/50',
      'Mobile Optimization': 'bg-gradient-to-r from-[#0f5132] to-[#1a4d2e] text-[#27ae60] border border-[#27ae60]/30',
      'Seasonal Campaigns': 'bg-[#2ecc71]/15 text-[#2ecc71] border border-[#2ecc71]/40',
      'Subscription Setup': 'bg-[#27ae60]/15 text-[#27ae60] border border-[#27ae60]/40',
      'Influencer Campaigns': 'bg-gradient-to-r from-[#1a4d2e]/50 to-[#2ecc71]/20 text-[#2ecc71] border border-[#2ecc71]/30'
    };
    return serviceColorMap[service] || 'bg-[#1a4d2e]/20 text-[#2ecc71] border border-[#2ecc71]/30';
  };

  return (
    <section id="case-studies" className="py-24 bg-black text-white">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0f5132]/20 text-[#27ae60] px-4 py-2 rounded-full text-sm font-mono uppercase tracking-wider mb-6 shadow-[0_0_20px_#27ae60] backdrop-blur-sm border border-[#0f5132]/50">
            <Target size={16} />
            Case Studies
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Real Results For <span className="bg-gradient-to-r from-[#2ecc71] to-[#27ae60] bg-clip-text text-transparent drop-shadow-[0_0_20px_#2ecc71]">Real Brands</span>
          </h2>
          
          <p className="text-lg text-[#b3b3b3] leading-relaxed">
            See how we've helped fashion, beauty, and lifestyle brands achieve remarkable growth 
            through strategic Shopify development and Meta advertising.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id}
              className={`
                relative rounded-2xl p-8 lg:p-12 transition-all duration-500 hover:transform hover:scale-[1.02] group cursor-pointer backdrop-blur-sm border-2
                ${getColorClasses(study.bgColor, study.textColor)}
                hover:shadow-[0_0_40px_#2ecc71]/30
              `}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#2ecc71] transition-colors duration-300 drop-shadow-[0_0_10px_transparent] group-hover:drop-shadow-[0_0_10px_#2ecc71]">{study.brandName}</h3>
                  <p className="opacity-70 font-medium text-[#b3b3b3] group-hover:text-[#27ae60] transition-colors duration-300">{study.industry}</p>
                </div>
                <ArrowUpRight 
                  size={24} 
                  className="opacity-50 group-hover:opacity-100 group-hover:transform group-hover:scale-110 transition-all duration-300 text-[#2ecc71] group-hover:drop-shadow-[0_0_10px_#2ecc71]" 
                />
              </div>

              {/* Challenge */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 uppercase text-sm tracking-wider text-[#2ecc71]">Challenge</h4>
                <p className="opacity-80 leading-relaxed text-sm text-[#d4d4d4]">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <h4 className="font-semibold mb-3 uppercase text-sm tracking-wider text-[#27ae60]">Our Solution</h4>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-xs uppercase tracking-wider opacity-70 text-[#2ecc71]">Shopify:</span>
                    <p className="opacity-80 text-sm mt-1 text-[#d4d4d4]">{study.solution.shopify}</p>
                  </div>
                  <div>
                    <span className="font-medium text-xs uppercase tracking-wider opacity-70 text-[#27ae60]">Meta Ads:</span>
                    <p className="opacity-80 text-sm mt-1 text-[#d4d4d4]">{study.solution.metaAds}</p>
                  </div>
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-gradient-to-br from-[#1a4d2e]/30 to-black/20 rounded-lg backdrop-blur-sm border border-[#2ecc71]/20 group-hover:border-[#2ecc71]/40 transition-all duration-300">
                  <div className="text-2xl font-bold flex items-center justify-center gap-1 mb-1 text-[#2ecc71] drop-shadow-[0_0_10px_#2ecc71]">
                    <TrendingUp size={20} />
                    {study.results.conversionRate}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider opacity-70 text-[#b3b3b3]">Conversion Rate</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-[#0f5132]/30 to-black/20 rounded-lg backdrop-blur-sm border border-[#27ae60]/20 group-hover:border-[#27ae60]/40 transition-all duration-300">
                  <div className="text-2xl font-bold flex items-center justify-center gap-1 mb-1 text-[#27ae60] drop-shadow-[0_0_10px_#27ae60]">
                    <Target size={20} />
                    {study.results.roas}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider opacity-70 text-[#b3b3b3]">ROAS</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-[#2ecc71]/10 to-black/20 rounded-lg backdrop-blur-sm border border-[#2ecc71]/20 group-hover:border-[#2ecc71]/40 transition-all duration-300">
                  <div className="text-2xl font-bold flex items-center justify-center gap-1 mb-1 text-[#2ecc71] drop-shadow-[0_0_10px_#2ecc71]">
                    <Zap size={20} />
                    {study.results.ctr}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider opacity-70 text-[#b3b3b3]">CTR</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-[#27ae60]/10 to-black/20 rounded-lg backdrop-blur-sm border border-[#27ae60]/20 group-hover:border-[#27ae60]/40 transition-all duration-300">
                  <div className="text-2xl font-bold mb-1 text-[#27ae60] drop-shadow-[0_0_10px_#27ae60]">
                    {study.results.revenue}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider opacity-70 text-[#b3b3b3]">Revenue Growth</div>
                </div>
              </div>

              {/* Services Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {study.services.map((service, serviceIndex) => (
                  <span 
                    key={serviceIndex}
                    className={`
                      px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider backdrop-blur-sm
                      ${getServiceButtonColor(service)}
                    `}
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2ecc71] shadow-[0_0_5px_#2ecc71]"></div>
                <span className="text-sm font-medium text-[#d4d4d4]">{study.timeline} project timeline</span>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-[#2ecc71]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_100px_#2ecc71]"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#1a4d2e]/20 via-[#2ecc71]/10 to-[#0f5132]/20 rounded-2xl p-8 lg:p-12 border border-[#1a4d2e]/30 backdrop-blur-sm shadow-[0_0_30px_#2ecc71]/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              These Results Speak For <span className="text-[#2ecc71] drop-shadow-[0_0_15px_#2ecc71]">Themselves</span>
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2ecc71] mb-2 drop-shadow-[0_0_10px_#2ecc71]">50+</div>
                <div className="text-sm text-[#b3b3b3]">Brands Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#27ae60] mb-2 drop-shadow-[0_0_10px_#27ae60]">5.8x</div>
                <div className="text-sm text-[#b3b3b3]">Average ROAS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2ecc71] mb-2 drop-shadow-[0_0_10px_#2ecc71]">138%</div>
                <div className="text-sm text-[#b3b3b3]">Avg. Conversion Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#27ae60] mb-2 drop-shadow-[0_0_10px_#27ae60]">$2M+</div>
                <div className="text-sm text-[#b3b3b3]">Revenue Generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;