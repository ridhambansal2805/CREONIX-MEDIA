import React from "react";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2ecc71]/10 text-[#2ecc71] px-4 py-2 rounded-full text-sm font-mono uppercase tracking-wider mb-6 shadow-[0_0_20px_#2ecc71] backdrop-blur-sm border border-[#1a4d2e]/50">
            <Star size={16} />
            Client Love
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            What Our <span className="bg-gradient-to-r from-[#2ecc71] to-[#27ae60] bg-clip-text text-transparent drop-shadow-[0_0_20px_#2ecc71]">Clients Say</span>
          </h2>
          
          <p className="text-lg text-[#b3b3b3] leading-relaxed">
            Don't just take our word for it. Here's what brand owners have to say 
            about working with CREON!X MEDIA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`
                relative p-8 rounded-2xl border-2 transition-all duration-500 hover:transform hover:scale-[1.02] group backdrop-blur-sm
                ${index === 0 
                  ? 'bg-gradient-to-br from-[#2ecc71]/20 to-[#1a4d2e]/10 border-[#2ecc71]/30 hover:border-[#2ecc71] hover:shadow-[0_0_40px_#2ecc71]' 
                  : index === 1 
                  ? 'bg-gradient-to-br from-[#27ae60]/20 to-[#0f5132]/10 border-[#27ae60]/30 hover:border-[#27ae60] hover:shadow-[0_0_40px_#27ae60]'
                  : 'bg-gradient-to-br from-[#1a4d2e]/20 to-[#2ecc71]/10 border-[#2ecc71]/30 hover:border-[#2ecc71] hover:shadow-[0_0_40px_#2ecc71]'
                }
              `}
            >
              {/* Quote Icon */}
              <div className={`
                inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 transition-all duration-300 group-hover:scale-110 backdrop-blur-sm
                ${index === 0 
                  ? 'bg-[#2ecc71]/20 text-[#2ecc71] group-hover:bg-gradient-to-br group-hover:from-[#2ecc71] group-hover:to-[#27ae60] group-hover:text-black group-hover:shadow-[0_0_20px_#2ecc71]' 
                  : index === 1 
                  ? 'bg-[#27ae60]/20 text-[#27ae60] group-hover:bg-gradient-to-br group-hover:from-[#27ae60] group-hover:to-[#2ecc71] group-hover:text-black group-hover:shadow-[0_0_20px_#27ae60]'
                  : 'bg-[#1a4d2e]/20 text-[#2ecc71] group-hover:bg-gradient-to-br group-hover:from-[#2ecc71] group-hover:to-[#1a4d2e] group-hover:text-black group-hover:shadow-[0_0_20px_#2ecc71]'
                }
              `}>
                <Quote size={20} />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <Star 
                    key={starIndex}
                    size={16} 
                    className={`
                      fill-current transition-colors duration-300
                      ${index === 0 
                        ? 'text-[#2ecc71] drop-shadow-[0_0_5px_#2ecc71]' 
                        : index === 1 
                        ? 'text-[#27ae60] drop-shadow-[0_0_5px_#27ae60]'
                        : 'text-[#2ecc71] drop-shadow-[0_0_5px_#2ecc71]'
                      }
                    `}
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-white text-lg leading-relaxed mb-6 group-hover:text-[#d4d4d4] transition-colors duration-300">
                "{testimonial.content}"
              </blockquote>

              {/* Results Highlight */}
              <div className={`
                text-sm font-mono uppercase tracking-wider mb-6 p-3 rounded-lg backdrop-blur-sm
                ${index === 0 
                  ? 'bg-[#2ecc71]/10 text-[#2ecc71] border border-[#2ecc71]/20 shadow-[0_0_10px_#2ecc71]/30' 
                  : index === 1 
                  ? 'bg-[#27ae60]/10 text-[#27ae60] border border-[#27ae60]/20 shadow-[0_0_10px_#27ae60]/30'
                  : 'bg-[#1a4d2e]/10 text-[#2ecc71] border border-[#2ecc71]/20 shadow-[0_0_10px_#2ecc71]/30'
                }
              `}>
                {testimonial.results}
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#1a4d2e]/30 group-hover:border-[#2ecc71]/50 transition-all duration-300 shadow-[0_0_10px_#2ecc71]/20"
                />
                <div>
                  <div className="font-semibold text-white group-hover:text-[#2ecc71] transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#b3b3b3] group-hover:text-[#d4d4d4] transition-colors duration-300">
                    {testimonial.position} at {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className={`
                absolute top-4 right-4 w-24 h-24 rounded-full blur-2xl opacity-20 transition-opacity duration-500 group-hover:opacity-60
                ${index === 0 
                  ? 'bg-[#2ecc71] group-hover:shadow-[0_0_50px_#2ecc71]' 
                  : index === 1 
                  ? 'bg-[#27ae60] group-hover:shadow-[0_0_50px_#27ae60]'
                  : 'bg-[#2ecc71] group-hover:shadow-[0_0_50px_#2ecc71]'
                }
              `}></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#1a4d2e]/20 via-[#2ecc71]/10 to-[#0f5132]/20 rounded-2xl p-8 border border-[#1a4d2e]/30 backdrop-blur-sm shadow-[0_0_30px_#2ecc71]/20">
            <h3 className="text-xl font-bold mb-4 text-white">
              Join <span className="text-[#2ecc71] drop-shadow-[0_0_10px_#2ecc71]">50+ Happy Clients</span> Who Trust Us
            </h3>
            <p className="text-[#b3b3b3] mb-6">
              Ready to see similar results for your brand? Let's discuss your goals.
            </p>
            
            {/* Client Logos Placeholder */}
            <div className="flex items-center justify-center gap-8 opacity-50">
              <div className="w-16 h-8 bg-gradient-to-r from-[#1a4d2e]/30 to-[#2ecc71]/20 rounded border border-[#1a4d2e]/20"></div>
              <div className="w-16 h-8 bg-gradient-to-r from-[#27ae60]/30 to-[#1a4d2e]/20 rounded border border-[#27ae60]/20"></div>
              <div className="w-16 h-8 bg-gradient-to-r from-[#2ecc71]/30 to-[#0f5132]/20 rounded border border-[#2ecc71]/20"></div>
              <div className="w-16 h-8 bg-gradient-to-r from-[#0f5132]/30 to-[#27ae60]/20 rounded border border-[#0f5132]/20"></div>
              <div className="w-16 h-8 bg-gradient-to-r from-[#1a4d2e]/30 to-[#2ecc71]/20 rounded border border-[#1a4d2e]/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;