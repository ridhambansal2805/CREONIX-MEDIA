import React, { useState } from "react";
import { ArrowRight, Mail, Phone, Calendar, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";

const ContactSection = ({ contactData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          revenue: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  const openCalendly = () => {
    window.open(contactData.calendlyLink, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#151515] text-white">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#78d692]/10 text-[#78d692] px-4 py-2 rounded-full text-sm font-mono uppercase tracking-wider mb-6">
            <Mail size={16} />
            Get In Touch
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Ready To <span className="bg-gradient-to-r from-[#ffd1e7] to-[#78d692] bg-clip-text text-transparent">Scale Your Brand?</span>
          </h2>
          
          <p className="text-lg text-[#aaa] leading-relaxed">
            Book a free strategy call to discuss how we can help you build a high-converting 
            Shopify store and scale it with profitable Meta advertising.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-[#717171]/10 rounded-2xl p-8 lg:p-12 border border-[#717171]/20">
            <h3 className="text-2xl font-bold mb-6">Tell Us About Your Project</h3>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#ffd1e7]">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-[#151515] border-[#717171]/30 text-white placeholder:text-[#aaa] focus:border-[#ffd1e7] transition-colors duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#ffd1e7]">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-[#151515] border-[#717171]/30 text-white placeholder:text-[#aaa] focus:border-[#ffd1e7] transition-colors duration-200"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-[#ffd1e7]">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-[#151515] border-[#717171]/30 text-white placeholder:text-[#aaa] focus:border-[#ffd1e7] transition-colors duration-200"
                      placeholder="Your Brand"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="revenue" className="block text-sm font-medium mb-2 text-[#ffd1e7]">
                      Monthly Revenue
                    </label>
                    <select
                      id="revenue"
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleInputChange}
                      className="w-full bg-[#151515] border border-[#717171]/30 text-white rounded-md px-3 py-2 focus:border-[#ffd1e7] transition-colors duration-200"
                    >
                      <option value="">Select range</option>
                      <option value="0-10k">$0 - $10k</option>
                      <option value="10k-50k">$10k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k+">$100k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#ffd1e7]">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-[#151515] border-[#717171]/30 text-white placeholder:text-[#aaa] focus:border-[#ffd1e7] transition-colors duration-200 resize-none"
                    placeholder="Tell us about your brand, current challenges, and what you'd like to achieve..."
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#ffd1e7] text-[#151515] border border-[#ffd1e7] rounded-full px-8 py-3 text-sm font-mono uppercase tracking-wider hover:bg-[#ff84e4] hover:border-[#ff84e4] transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-[#151515] border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <ArrowRight size={16} />
                    </span>
                  )}
                </Button>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-[#78d692] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#78d692] mb-4">Message Sent!</h3>
                <p className="text-[#aaa]">
                  Thank you for reaching out. We'll get back to you within 24 hours with a detailed proposal.
                </p>
              </div>
            )}
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-8">
            {/* Quick Contact Options */}
            <div className="bg-gradient-to-br from-[#ffd1e7]/10 to-[#88a2ff]/10 rounded-2xl p-8 border border-[#717171]/20">
              <h3 className="text-2xl font-bold mb-6">Prefer to Talk Directly?</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ffd1e7]/20 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-[#ffd1e7]" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <a href={`mailto:${contactData.email}`} className="text-[#ffd1e7] hover:underline">
                      {contactData.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#88a2ff]/20 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-[#88a2ff]" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <a href={`tel:${contactData.phone}`} className="text-[#88a2ff] hover:underline">
                      {contactData.phone}
                    </a>
                  </div>
                </div>
              </div>

              <Button 
                onClick={openCalendly}
                className="w-full bg-[#78d692] text-white border border-[#78d692] rounded-full px-8 py-3 text-sm font-mono uppercase tracking-wider hover:bg-[#a1a500] hover:border-[#a1a500] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                Book Free Strategy Call
              </Button>
            </div>

            {/* What to Expect */}
            <div className="bg-[#717171]/10 rounded-2xl p-8 border border-[#717171]/20">
              <h3 className="text-xl font-bold mb-6">What Happens Next?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#ffd1e7]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#ffd1e7] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Discovery Call</div>
                    <div className="text-sm text-[#aaa]">We'll discuss your goals, challenges, and vision for your brand.</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#88a2ff]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#88a2ff] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Strategy Proposal</div>
                    <div className="text-sm text-[#aaa]">Custom strategy tailored to your specific needs and budget.</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#d987ff]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#d987ff] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Project Kickoff</div>
                    <div className="text-sm text-[#aaa]">Begin building your high-converting Shopify store and Meta campaigns.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;