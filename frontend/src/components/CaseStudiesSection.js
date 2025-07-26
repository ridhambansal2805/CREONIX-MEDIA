import React from "react";
import { TrendingUp, Target, Zap, ArrowUpRight } from "lucide-react";

const CaseStudiesSection = ({ caseStudies }) => {
  const getColorClasses = (bgColor, textColor) => {
    const colorMap = {
      'light-pink': 'bg-[#ffd1e7] text-[#151515]',
      'mid-purple': 'bg-[#d987ff] text-white',
      'light-yellow': 'bg-[#f6fd87] text-[#151515]',
      'mid-green': 'bg-[#78d692] text-white'
    };
    return colorMap[bgColor] || 'bg-[#ffd1e7] text-[#151515]';
  };

  const getServiceButtonColor = (service) => {
    const serviceColorMap = {
      'Shopify Design': 'bg-[#88a2ff] text-white',
      'Shopify Development': 'bg-[#88a2ff] text-white',
      'Meta Ads': 'bg-[#d987ff] text-white',
      'Conversion Optimization': 'bg-[#ff965a] text-white',
      'Brand Launch': 'bg-[#ffd1e7] text-[#151515]',
      'Mobile Optimization': 'bg-[#78d692] text-white',
      'Seasonal Campaigns': 'bg-[#ffe03d] text-[#151515]',
      'Subscription Setup': 'bg-[#a1a500] text-white',
      'Influencer Campaigns': 'bg-[#ff84e4] text-[#151515]'
    };
    return serviceColorMap[service] || 'bg-[#717171] text-white';
  };

  return (
    <section id="case-studies" className="py-24 bg-[#151515] text-white">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#d987ff]/10 text-[#d987ff] px-4 py-2 rounded-full text-sm font-mono uppercase tracking-wider mb-6">
            <Target size={16} />
            Case Studies
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Real Results For <span className="bg-gradient-to-r from-[#ffd1e7] to-[#d987ff] bg-clip-text text-transparent">Real Brands</span>
          </h2>
          
          <p className="text-lg text-[#aaa] leading-relaxed">
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
                relative rounded-2xl p-8 lg:p-12 transition-all duration-500 hover:transform hover:scale-[1.02] group cursor-pointer
                ${getColorClasses(study.bgColor, study.textColor)}
              `}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{study.brandName}</h3>
                  <p className="opacity-70 font-medium">{study.industry}</p>
                </div>
                <ArrowUpRight 
                  size={24} 
                  className="opacity-50 group-hover:opacity-100 group-hover:transform group-hover:scale-110 transition-all duration-300" 
                />
              </div>

              {/* Challenge */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 uppercase text-sm tracking-wider">Challenge</h4>
                <p className="opacity-80 leading-relaxed text-sm">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <h4 className="font-semibold mb-3 uppercase text-sm tracking-wider">Our Solution</h4>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-xs uppercase tracking-wider opacity-70">Shopify:</span>
                    <p className="opacity-80 text-sm mt-1">{study.solution.shopify}</p>
                  </div>
                  <div>
                    <span className="font-medium text-xs uppercase tracking-wider opacity-70">Meta Ads:</span>
                    <p className="opacity-80 text-sm mt-1">{study.solution.metaAds}</p>
                  </div>
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-black/10 rounded-lg">
                  <div className="text-2xl font-bold flex items-center justify-center gap-1 mb-1">
                    <TrendingUp size={20} />
                    {study.results.conversionRate}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider opacity-70">Conversion Rate</div>
                </div>
                
                <div className="text-center p-4 bg-black/10 rounded-lg">
                  <div className="text-2xl font-bold flex items-center justify-center gap-1 mb-1">
                    <Target size={20} />
                    {study.results.roas}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider opacity-70">ROAS</div>
                </div>
                
                <div className="text-center p-4 bg-black/10 rounded-lg">
                  <div className="text-2xl font-bold flex items-center justify-center gap-1 mb-1">
                    <Zap size={20} />
                    {study.results.ctr}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider opacity-70">CTR</div>
                </div>
                
                <div className="text-center p-4 bg-black/10 rounded-lg">
                  <div className="text-2xl font-bold mb-1">
                    {study.results.revenue}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider opacity-70">Revenue Growth</div>
                </div>
              </div>

              {/* Services Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {study.services.map((service, serviceIndex) => (
                  <span 
                    key={serviceIndex}
                    className={`
                      px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider
                      ${getServiceButtonColor(service)}
                    `}
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-current opacity-50"></div>
                <span className="text-sm font-medium">{study.timeline} project timeline</span>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#88a2ff]/10 via-[#ffd1e7]/10 to-[#d987ff]/10 rounded-2xl p-8 lg:p-12 border border-[#717171]/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              These Results Speak For <span className="text-[#ffd1e7]">Themselves</span>
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#88a2ff] mb-2">50+</div>
                <div className="text-sm text-[#aaa]">Brands Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#d987ff] mb-2">5.8x</div>
                <div className="text-sm text-[#aaa]">Average ROAS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ffd1e7] mb-2">138%</div>
                <div className="text-sm text-[#aaa]">Avg. Conversion Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#78d692] mb-2">$2M+</div>
                <div className="text-sm text-[#aaa]">Revenue Generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;