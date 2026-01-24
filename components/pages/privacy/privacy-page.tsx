import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-8 pb-4 border-b border-gray-100">Privacy Policy</h1>
            
            <div className="space-y-8 font-sans text-gray-600 leading-relaxed">
                <div>
                    <h3 className="text-xl font-bold text-dark mb-3">1. Introduction</h3>
                    <p>Welcome to Color Hut. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-dark mb-3">2. Data We Collect</h3>
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-dark mb-3">3. How We Use Your Data</h3>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-dark mb-3">4. Data Security</h3>
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-dark mb-3">5. Contact Us</h3>
                    <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:colorhut.official@gmail.com" className="text-primary hover:underline">colorhut.official@gmail.com</a></p>
                </div>
            </div>
         </div>
      </div>
    </section>
  );
};