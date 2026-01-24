import React from 'react';
import { Hero } from './sections/Hero';
import { ProcessAndTools } from './sections/ProcessAndTools';
import { MeetingSection } from './sections/MeetingSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { PricingSection } from './sections/PricingSection';
import { TestimonialSection } from './sections/TestimonialSection';
import { FAQSection } from './sections/FAQSection';
import { ContactForm } from './sections/ContactForm';

interface ServicesPageProps {
    onBookMeeting: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onBookMeeting }) => {
    return (
        <>
            <Hero />
            <ProcessAndTools />
            <MeetingSection onBookMeeting={onBookMeeting} />
            <PortfolioSection />
            <PricingSection />
            <TestimonialSection />
            <FAQSection />
            <ContactForm />
        </>
    );
};
