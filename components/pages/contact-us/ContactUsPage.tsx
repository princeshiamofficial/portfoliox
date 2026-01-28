import React from 'react';
import { ContactForm } from '../services/sections/ContactForm';

export const ContactUsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-20">




            {/* Contact Form Section (Reused) */}
            <div className="bg-gray-50 pb-20">
                <ContactForm />
            </div>
        </div>
    );
};
