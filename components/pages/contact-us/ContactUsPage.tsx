import React from 'react';
import { ContactForm } from '../services/sections/ContactForm';

export const ContactUsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Section */}
            <div className="bg-black text-white py-20 px-4 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-bengali">যোগাযোগ করুন</h1>
                    <p className="text-gray-400 text-lg md:text-xl font-light font-bengali leading-relaxed max-w-2xl mx-auto">
                        আপনার যেকোনো জিজ্ঞাসা বা প্রজেক্ট নিয়ে আলোচনার জন্য আমাদের সাথে যোগাযোগ করুন। আমরা আপনার অপেক্ষায় আছি।
                    </p>
                </div>
            </div>



            {/* Contact Form Section (Reused) */}
            <div className="bg-gray-50 pb-20">
                <ContactForm />
            </div>
        </div>
    );
};
