import React, { useState } from 'react';
import { Button } from './Button';
import { CreditCard, Lock } from 'lucide-react';

const TierCard: React.FC<{ amount: number; label: string; selected: boolean; onClick: () => void }> = ({ 
  amount, 
  label, 
  selected, 
  onClick 
}) => (
  <div 
    onClick={onClick}
    className={`
      cursor-pointer p-6 rounded-lg text-center transition-all duration-200 border-2
      ${selected 
        ? 'bg-brand-sand border-brand-darkBlue transform -translate-y-1 shadow-lg' 
        : 'bg-white border-transparent hover:border-brand-accent shadow-sm'}
    `}
  >
    <div className="text-4xl font-serif font-bold text-brand-darkBlue mb-2">${amount}</div>
    <div className="text-sm font-medium text-stone-600 uppercase tracking-wide">{label}</div>
  </div>
);

export const Donation: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(50);

  const handleDonate = () => {
    window.open("https://gofund.me/5233f0ce", "_blank");
  };

  return (
    <section className="relative py-20 bg-brand-darkBlue overflow-hidden text-center text-white">
      {/* Watercolory background texture for the blue section */}
      <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Your Support Changes Lives</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-brand-darkBlue">
          <TierCard 
            amount={25} 
            label="Learning Materials" 
            selected={selectedAmount === 25} 
            onClick={() => setSelectedAmount(25)} 
          />
          <TierCard 
            amount={50} 
            label="One Month of Classes" 
            selected={selectedAmount === 50} 
            onClick={() => setSelectedAmount(50)} 
          />
          <TierCard 
            amount={100} 
            label="Teacher Support" 
            selected={selectedAmount === 100} 
            onClick={() => setSelectedAmount(100)} 
          />
        </div>

        <div className="flex flex-col items-center gap-6">
          <Button 
            className="w-full md:w-auto px-12 py-4 text-xl bg-brand-teal hover:bg-emerald-600 shadow-xl border border-teal-400/30"
            onClick={handleDonate}
          >
            Donate Securely ${selectedAmount}
          </Button>

          <div className="flex items-center gap-2 text-brand-sand/80 text-sm">
             <Lock className="w-4 h-4" />
             <span>SSL Secure Payment</span>
          </div>

          <div className="flex items-center justify-center gap-6 mt-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
             {/* Simple visual representation of payment logos */}
             <div className="flex items-center gap-1 font-bold italic text-xl"><span className="text-white">Pay</span><span className="text-blue-300">Pal</span></div>
             <div className="flex items-center gap-1 font-bold text-xl text-white">stripe</div>
             <div className="flex items-center gap-1"><CreditCard className="w-6 h-6"/> <span className="font-mono">VISA</span></div>
          </div>
        </div>
      </div>
      
      {/* Bottom sand decoration */}
      <div className="absolute bottom-0 w-full h-8 bg-[#F9F5EB] rounded-t-[50%] scale-x-110"></div>
    </section>
  );
};