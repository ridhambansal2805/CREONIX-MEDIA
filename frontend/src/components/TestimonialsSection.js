import React from "react";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="py-24 bg-[#151515] text-white">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#ffd1e7]/10 text-[#ffd1e7] px-4 py-2 rounded-full text-sm font-mono uppercase tracking-wider mb-6">
            <Star size={16} />
            Client Love
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            What Our <span className="bg-gradient-to-r from-[#ffd1e7] to-[#88a2ff] bg-clip-text text-transparent">Clients Say</span>
          </h2>
          
          <p className="text-lg text-[#aaa] leading-relaxed">
            Don't just take our word for it. Here's what brand owners have to say 
            about working with Creonix Media.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`
                relative p-8 rounded-2xl border-2 transition-all duration-500 hover:transform hover:scale-[1.02] group
                ${index === 0 
                  ? 'bg-[#ffd1e7]/10 border-[#ffd1e7]/30 hover:border-[#ffd1e7]' 
                  : index === 1 
                  ? 'bg-[#88a2ff]/10 border-[#88a2ff]/30 hover:border-[#88a2ff]'
                  : 'bg-[#d987ff]/10 border-[#d987ff]/30 hover:border-[#d987ff]'
                }
              `}
            >
              {/* Quote Icon */}
              <div className={`
                inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 transition-all duration-300 group-hover:scale-110
                ${index === 0 
                  ? 'bg-[#ffd1e7]/20 text-[#ffd1e7] group-hover:bg-[#ffd1e7] group-hover:text-[#151515]' 
                  : index === 1 
                  ? 'bg-[#88a2ff]/20 text-[#88a2ff] group-hover:bg-[#88a2ff] group-hover:text-white'
                  : 'bg-[#d987ff]/20 text-[#d987ff] group-hover:bg-[#d987ff] group-hover:text-white'
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
                        ? 'text-[#ffd1e7]' 
                        : index === 1 
                        ? 'text-[#88a2ff]'
                        : 'text-[#d987ff]'
                      }
                    `}
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-white text-lg leading-relaxed mb-6 group-hover:text-[#ffd1e7] transition-colors duration-300">
                "{testimonial.content}"
              </blockquote>

              {/* Results Highlight */}
              <div className={`
                text-sm font-mono uppercase tracking-wider mb-6 p-3 rounded-lg
                ${index === 0 
                  ? 'bg-[#ffd1e7]/10 text-[#ffd1e7]' 
                  : index === 1 
                  ? 'bg-[#88a2ff]/10 text-[#88a2ff]'
                  : 'bg-[#d987ff]/10 text-[#d987ff]'
                }
              `}>
                {testimonial.results}
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#717171]/20"
                />
                <div>
                  <div className="font-semibold text-white group-hover:text-[#ffd1e7] transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#aaa] group-hover:text-[#b6cbcb] transition-colors duration-300">
                    {testimonial.position} at {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className={`
                absolute top-4 right-4 w-24 h-24 rounded-full blur-2xl opacity-20 transition-opacity duration-500 group-hover:opacity-40
                ${index === 0 
                  ? 'bg-[#ffd1e7]' 
                  : index === 1 
                  ? 'bg-[#88a2ff]'
                  : 'bg-[#d987ff]'
                }
              `}></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#88a2ff]/10 via-[#ffd1e7]/10 to-[#d987ff]/10 rounded-2xl p-8 border border-[#717171]/20">
            <h3 className="text-xl font-bold mb-4 text-white">
              Join <span className="text-[#ffd1e7]">50+ Happy Clients</span> Who Trust Us
            </h3>
            <p className="text-[#aaa] mb-6">
              Ready to see similar results for your brand? Let's discuss your goals.
            </p>
            
            {/* Client Logos Placeholder */}
            <div className="flex items-center justify-center gap-8 opacity-50">
              <div className="w-16 h-8 bg-[#717171]/30 rounded"></div>
              <div className="w-16 h-8 bg-[#717171]/30 rounded"></div>
              <div className="w-16 h-8 bg-[#717171]/30 rounded"></div>
              <div className="w-16 h-8 bg-[#717171]/30 rounded"></div>
              <div className="w-16 h-8 bg-[#717171]/30 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;