import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const handleDonate = () => {
    window.open("https://gofund.me/5233f0ce", "_blank");
  };

  const handleLearnMore = () => {
    window.location.href = "#contact";
  };

  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Background Texture Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9F5EB] via-[#F5F0E6] to-[#F9F5EB] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left z-10">
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-brand-darkBlue leading-tight">
              Education Is Her Right — <br />
              <span className="text-brand-teal/90 italic">Even When It Is Denied</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              WETE supports safe, discreet, and resilient education programs for women and girls in Afghanistan who have been barred from learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" className="text-lg px-8 py-4" onClick={handleDonate}>
                Donate Now
              </Button>
              <Button variant="secondary" className="text-lg px-8 py-4" onClick={handleLearnMore}>
                Learn How We Help
              </Button>
            </div>
          </div>

          {/* Illustration / Image Area */}
          <div className="relative flex justify-center lg:justify-end">
             {/* Decorative blob behind image */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-20 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
               {/* Replaced with the famous 'Afghan Girl' portrait */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/b/b4/Sharbat_Gula.jpg" 
                alt="Afghan Girl - Sharbat Gula" 
                className="w-full h-auto object-cover contrast-110 brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-darkBlue/10 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] text-white/50">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#F9F5EB]"></path>
        </svg>
      </div>
    </section>
  );
};