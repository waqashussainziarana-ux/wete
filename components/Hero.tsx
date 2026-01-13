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
    <section className="relative pt-12 pb-32 lg:pt-24 lg:pb-48 overflow-hidden bg-[#F9F5EB]">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }}></div>

      {/* Background Hills/Dunes Layer */}
      <div className="absolute inset-x-0 bottom-0 w-full h-full pointer-events-none z-0">
         {/* Distant Hill */}
         <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-[#F0EAD6] rounded-tl-[50%] rounded-tr-[30%] transform scale-125 translate-y-20 opacity-80"></div>
         {/* Mid Hill */}
         <div className="absolute bottom-0 right-0 w-[80%] h-[40%] bg-[#E6DCC3] rounded-tl-[80%] transform translate-y-12"></div>
         {/* Front Hill Left */}
         <div className="absolute -bottom-10 left-0 w-[60%] h-[30%] bg-[#DCCFB2] rounded-tr-[100%]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-darkBlue leading-[1.15]">
              Education Is Her Right — <br />
              <span className="text-brand-darkBlue">Even When It Is Denied</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Supporting safe, discreet education programs for women and girls in Afghanistan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="primary" className="text-lg px-8 py-3 shadow-lg" onClick={handleDonate}>
                Donate Now
              </Button>
              <Button variant="secondary" className="text-lg px-8 py-3 shadow-lg" onClick={handleLearnMore}>
                Learn How We Help
              </Button>
            </div>
          </div>

          {/* Illustration / Image Area */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* 
                Placeholder image chosen to resemble the theme of the design. 
            */}
            <div className="relative w-full max-w-lg">
                <img 
                  src="https://wete.ca/wp-content/uploads/2026/01/ChatGPT-Image-Jan-13-2026-04_15_33-PM.png" 
                  alt="Afghan women reading illustration" 
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-xl mask-image-gradient"
                  style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                />
            </div>
          </div>
        </div>
      </div>
      
      {/* Smooth Transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};