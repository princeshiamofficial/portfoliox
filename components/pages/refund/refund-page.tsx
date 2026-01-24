import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const RefundPolicy: React.FC = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen bg-gray-50/50">
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
         <div className="mb-8">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-medium bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 hover:shadow-md"
            >
                <ArrowLeft size={18} />
                <span>হোমে ফিরে যান</span>
            </a>
         </div>

         <div className="bg-white rounded-3xl shadow-card border border-gray-100 p-8 md:p-16">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8 pb-4 border-b border-gray-100">Liability and Refunds</h1>
            
            <div className="space-y-8 font-sans text-gray-600 leading-relaxed">
                <div>
                    <h3 className="text-xl font-bold text-dark mb-3">Liability for Errors</h3>
                    <p>Color Hut's liability for errors or damages is typically limited to the cost of the order or a reprint.</p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-dark mb-3">Advance Payment</h3>
                    <p>Color Hut will not refund advance payment if the order is canceled for any reason after the design work has been started.</p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-dark mb-3">Returns and Refunds</h3>
                    <p>Color Hut may have a return policy or refund policy, but it's important to note that they are not always responsible for issues caused by customer errors or outside factors.</p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-dark mb-3">Force Majeure</h3>
                    <p>The printing company may be exempt from liability for delays or failures caused by events beyond their control (e.g., natural disasters).</p>
                </div>

                <div className="pt-6 border-t border-gray-100">
                    <h3 className="text-xl font-bold text-dark mb-3">Contact Us</h3>
                    <p>If you have any questions about our Refund Policy, please contact us at: <a href="mailto:colorhut.official@gmail.com" className="text-primary hover:underline">colorhut.official@gmail.com</a></p>
                </div>
            </div>
         </div>
      </div>
    </section>
  );
};