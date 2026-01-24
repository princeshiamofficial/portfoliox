import React from 'react';
import { HeroSlideshow } from './sections/HeroSlideshow';
import { HomeLogos } from './sections/HomeLogos';
import { CustomerReviews } from './sections/CustomerReviews';
import { CustomerVideoReviews } from './sections/CustomerVideoReviews';
import { ProductShowreels } from './sections/ProductShowreels';
import { OurDepartments } from './sections/OurDepartments';
import { OurServices } from './sections/OurServices';
import { CoverageArea } from './sections/CoverageArea';
import { YourJourney } from './sections/YourJourney';
import { OwnerInfo } from './sections/OwnerInfo';

export const HomePage: React.FC = () => {
    return (
        <div className="bg-[#050505] text-white overflow-hidden font-system text-center md:text-left">
            <HeroSlideshow />
            <HomeLogos />
            <CustomerReviews />
            <CustomerVideoReviews />
            <ProductShowreels />
            <OurDepartments />
            <OurServices />
            <CoverageArea />
            <YourJourney />
            <OwnerInfo />
        </div>
    );
};
