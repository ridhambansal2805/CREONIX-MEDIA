import React from "react";
import { ShoppingCart, Target, TrendingUp, Zap, Globe, BarChart3 } from "lucide-react";
import { Button } from "./ui/button";

const ServicesSection = ({ services }) => {
  const getServiceIcon = (index) => {
    return index === 0 ? <ShoppingCart size={32} /> : <Target size={32} />;
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-black text-white">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1a4d2e]/20 text-[#2ecc71] px-4 py-2 rounded-full text-sm font-mono uppercase tracking-wider mb-6 shadow-[0_0_20px_#2ecc71] backdrop-blur-sm border border-[#1a4d2e]/50">
            <Zap size={16} />
            Our Services
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Everything You Need To <span className="bg-gradient-to-r from-[#2ecc71] to-[#27ae60] bg-clip-text text-transparent drop-shadow-[0_0_20px_#2ecc71]">Scale Your Brand</span>
          </h2>
          
          <p className="text-lg text-[#b3b3b3] leading-relaxed">
            From custom Shopify development to high-performing Meta advertising campaigns, 
            we handle every aspect of your digital growth strategy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`
                relative p-8 lg:p-12 rounded-2xl border-2 transition-all duration-500 hover:transform hover:scale-[1.02] group backdrop-blur-sm
                ${service.color === 'mid-blue' 
                  ? 'bg-gradient-to-br from-[#1a4d2e]/30 to-[#0f5132]/20 border-[#2ecc71]/30 hover:border-[#2ecc71] hover:shadow-[0_0_40px_#2ecc71]' 
                  : 'bg-gradient-to-br from-[#0f5132]/30 to-[#1a4d2e]/20 border-[#27ae60]/30 hover:border-[#27ae60] hover:shadow-[0_0_40px_#27ae60]'
                }
              `}
            >
              {/* Service Icon */}
              <div className={`
                inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 backdrop-blur-sm
                ${service.color === 'mid-blue' 
                  ? 'bg-[#2ecc71]/20 text-[#2ecc71] group-hover:bg-gradient-to-br group-hover:from-[#2ecc71] group-hover:to-[#27ae60] group-hover:text-black group-hover:shadow-[0_0_20px_#2ecc71]' 
                  : 'bg-[#27ae60]/20 text-[#27ae60] group-hover:bg-gradient-to-br group-hover:from-[#27ae60] group-hover:to-[#2ecc71] group-hover:text-black group-hover:shadow-[0_0_20px_#27ae60]'
                }
              `}>
                {getServiceIcon(index)}
              </div>

              {/* Service Content */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#2ecc71] transition-colors duration-300 drop-shadow-[0_0_10px_transparent] group-hover:drop-shadow-[0_0_10px_#2ecc71]">
                {service.title}
              </h3>
              
              <p className="text-[#b3b3b3] text-lg leading-relaxed mb-8 group-hover:text-[#d4d4d4] transition-colors duration-300">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="flex items-center gap-3 text-white group-hover:text-[#ffd1e7] transition-colors duration-300"
                  >
                    <div className={`
                      w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300
                      ${service.color === 'mid-blue' 
                        ? 'bg-[#88a2ff] group-hover:bg-[#ffd1e7]' 
                        : 'bg-[#d987ff] group-hover:bg-[#ffd1e7]'
                      }
                    `}></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Service CTA */}
              <Button 
                onClick={scrollToContact}
                className={`
                  w-full border-2 rounded-full px-6 py-3 text-sm font-mono uppercase tracking-wider transition-all duration-300 hover:transform hover:scale-105
                  ${service.color === 'mid-blue' 
                    ? 'bg-transparent text-[#88a2ff] border-[#88a2ff] hover:bg-[#88a2ff] hover:text-white' 
                    : 'bg-transparent text-[#d987ff] border-[#d987ff] hover:bg-[#d987ff] hover:text-white'
                  }
                `}
              >
                Get Started With {index === 0 ? 'Shopify' : 'Meta Ads'}
              </Button>

              {/* Decorative Elements */}
              <div className={`
                absolute top-4 right-4 w-24 h-24 rounded-full blur-2xl opacity-20 transition-opacity duration-500 group-hover:opacity-40
                ${service.color === 'mid-blue' ? 'bg-[#88a2ff]' : 'bg-[#d987ff]'}
              `}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#88a2ff]/10 via-[#ffd1e7]/10 to-[#d987ff]/10 rounded-2xl p-8 lg:p-12 border border-[#717171]/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to <span className="text-[#ffd1e7]">Transform</span> Your Business?
            </h3>
            <p className="text-[#aaa] text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you build a high-converting Shopify store and scale it with profitable Meta advertising.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-[#ffd1e7] text-[#151515] border border-[#ffd1e7] rounded-full px-8 py-3 text-sm font-mono uppercase tracking-wider hover:bg-[#ff84e4] hover:border-[#ff84e4] transition-all duration-300"
            >
              Book Your Free Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;