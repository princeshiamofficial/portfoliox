import React from 'react';
import { motion } from 'framer-motion';

const CLIENT_LOGOS = [
    { name: "Nebula", url: "/logos/logo_nebula.svg" },
    { name: "Vertex", url: "/logos/logo_vertex.svg" },
    { name: "EcoCore", url: "/logos/logo_ecocore.svg" },
    { name: "Swift", url: "/logos/logo_swift.svg" },
    { name: "Crown", url: "/logos/logo_crown.svg" },
    { name: "Flux", url: "/logos/logo_flux.svg" },
    { name: "Sphere", url: "/logos/logo_sphere.svg" }
];

export const HomeLogos: React.FC = () => {
    return (
        <section className="bg-black select-none font-sans">
            {/* Bright Orange Header Strip */}
            <div className="bg-[#ff4500] py-6 relative overflow-hidden shadow-[0_4px_20px_rgba(255,69,0,0.3)] z-20">
                <div className="absolute inset-0 bg-white/5 opacity-20 transform -skew-x-12 translate-x-1/2"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-white text-2xl md:text-3xl font-bold tracking-wider uppercase drop-shadow-md font-heading">
                        Our Previous Customers
                    </h2>
                </div>
            </div>

            {/* Logo Marquee Section */}
            <div className="py-16 md:py-24 relative overflow-hidden flex flex-col gap-12 md:gap-16">
                <style>{`
                    @keyframes logo-marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes logo-marquee-reverse {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-logo-marquee {
                        animation: logo-marquee 50s linear infinite;
                    }
                    .animate-logo-marquee-reverse {
                        animation: logo-marquee-reverse 50s linear infinite;
                    }
                    .animate-logo-marquee:hover,
                    .animate-logo-marquee-reverse:hover {
                        animation-play-state: paused;
                    }
                    .mask-sides {
                        mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                        -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                    }
                `}</style>

                {/* First Row - Moves Left */}
                <div className="w-full mask-sides">
                    <div className="flex items-center gap-16 md:gap-24 animate-logo-marquee w-max pl-4">
                        {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
                            <div key={`row1-${idx}`} className="flex-shrink-0 group cursor-pointer relative" title={logo.name}>
                                <div className="absolute -inset-4 bg-white/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                <img
                                    src={logo.url}
                                    alt={logo.name}
                                    className="h-10 md:h-14 w-auto object-contain transition-all duration-500 brightness-0 invert opacity-60 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Row - Moves Right */}
                <div className="w-full mask-sides">
                    <div className="flex items-center gap-16 md:gap-24 animate-logo-marquee-reverse w-max pl-4">
                        {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
                            <div key={`row2-${idx}`} className="flex-shrink-0 group cursor-pointer relative" title={logo.name}>
                                <div className="absolute -inset-4 bg-white/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                <img
                                    src={logo.url}
                                    alt={logo.name}
                                    className="h-10 md:h-14 w-auto object-contain transition-all duration-500 brightness-0 invert opacity-60 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
