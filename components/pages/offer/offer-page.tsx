import React from 'react';
import { Hero } from './sections/Hero';
import { ProcessAndTools } from './sections/ProcessAndTools';

import { PortfolioSection } from './sections/PortfolioSection';
import { PricingSection } from './sections/PricingSection';
import { TestimonialSection } from './sections/TestimonialSection';
import { FAQSection } from './sections/FAQSection';
import { ContactForm } from './sections/ContactForm';

export const OfferPage: React.FC = () => {
    return (
        <>
            <Hero />
            <ProcessAndTools />
            <PortfolioSection />
            <PricingSection />
            <ContactForm />
            <FAQSection />
            <TestimonialSection />
        </>
    );
};
