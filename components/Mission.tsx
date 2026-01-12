import React from 'react';

export const Mission: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative group">
             <div className="absolute inset-0 bg-brand-teal transform translate-x-4 translate-y-4 rounded-lg -z-10 opacity-20 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6"></div>
             <img 
               src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop" 
               alt="Women learning" 
               className="rounded-lg shadow-xl w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
             />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-darkBlue">
              Empowering Through Knowledge
            </h2>
            <div className="w-20 h-1 bg-brand-accent"></div>
            
            <div className="prose text-stone-600 leading-relaxed">
              <p className="text-lg">
                Women's Empowerment Through Education (WETE) is dedicated to providing accessible, safe, and quality education to women and girls who have been denied their fundamental right to learn.
              </p>
              <p>
                We believe that education is the most powerful tool for change. By equipping women with knowledge and skills, we not only transform individual lives but uplift entire communities. Our programs are designed to be resilient, discreet, and effective in challenging environments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="border-l-4 border-brand-teal pl-4">
                <h4 className="font-bold text-brand-darkBlue text-xl">Our Vision</h4>
                <p className="text-sm text-stone-600 mt-1">A world where every woman has the agency to shape her own future through education.</p>
              </div>
              <div className="border-l-4 border-brand-accent pl-4">
                <h4 className="font-bold text-brand-darkBlue text-xl">Our Mission</h4>
                <p className="text-sm text-stone-600 mt-1">To dismantle barriers to learning and create safe pathways for academic and personal growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};