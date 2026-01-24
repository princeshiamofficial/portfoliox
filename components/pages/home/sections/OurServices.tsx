import React from 'react';
import { Palette, Globe, Megaphone, Video, Camera, Phone } from 'lucide-react';

const SERVICES = [
    {
        title: "Brand Identity Design",
        description: "Create a lasting impression with unique logos, typography, and brand guidelines that tell your story.",
        icon: Palette,
        features: ["Logo Design", "Brand Guidelines", "Stationery"]
    },
    {
        title: "Web & App Development",
        description: "High-performance websites and mobile apps built with modern technologies for optimal user experience.",
        icon: Globe,
        features: ["Corporate Websites", "E-commerce", "Web Applications"]
    },
    {
        title: "Digital Marketing Strategy",
        description: "Data-driven marketing campaigns to increase visibility, engagement, and conversion rates.",
        icon: Megaphone,
        features: ["SEO Optimization", "Social Media Mgmt", "PPC Advertising"]
    },
    {
        title: "Video Production",
        description: "Cinematic storytelling through professional video editing, motion graphics, and animation.",
        icon: Video,
        features: ["Commercial Ads", "Corporate Reels", "Social Shorts"]
    },
    {
        title: "Professional Photography",
        description: "High-quality product and event photography to showcase your business in the best light.",
        icon: Camera,
        features: ["Product Shoots", "Event Coverage", "Portraiture"]
    },
    {
        title: "Customer Support Solutions",
        description: "Dedicated support teams to manage customer inquiries and maintain strong relationships.",
        icon: Phone,
        features: ["24/7 Chat Support", "Ticket Management", "Client Onboarding"]
    }
];

export const OurServices: React.FC = () => {
    return (
        <section className="bg-black py-24 relative overflow-hidden font-sans border-t border-zinc-900">
            {/* Header */}
            <div className="text-center mb-16 relative z-10 px-4">
                <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-3 block">What We Do</span>
                <h2 className="text-white text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4">
                    Our Premium Services
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, idx) => (
                        <div
                            key={idx}
                            className="group p-6 md:p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 hover:bg-zinc-900 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center mb-6 text-white group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 relative z-10 shadow-lg">
                                <service.icon className="w-7 h-7" />
                            </div>

                            {/* Text Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>

                                {/* Feature List */}
                                <ul className="space-y-2 border-t border-white/5 pt-4">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center text-xs text-gray-500 font-medium font-mono">
                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 mr-2 group-hover:bg-orange-500 transition-colors" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
