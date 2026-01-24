import React from 'react';
import { Search, Map, Zap, Rocket } from 'lucide-react';

const JOURNEY_STEPS = [
    {
        id: 1,
        title: "Discover",
        description: "We dive deep into your vision, understanding your goals, audience, and unique brand challenges.",
        icon: Search,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        id: 2,
        title: "Strategize",
        description: "Our experts craft a tailored roadmap, selecting the right tools and technologies for your success.",
        icon: Map,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20"
    },
    {
        id: 3,
        title: "Execute",
        description: "We bring ideas to life with pixel-perfect design and robust code, ensuring top-tier quality.",
        icon: Zap,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        id: 4,
        title: "Elevate",
        description: "Launch with confidence. We provide ongoing support to scale your brand to new heights.",
        icon: Rocket,
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20"
    }
];

export const YourJourney: React.FC = () => {
    return (
        <section className="bg-black py-24 relative overflow-hidden font-sans border-t border-zinc-900">
            {/* Header */}
            <div className="text-center mb-20 relative z-10 px-4">
                <span className="text-gray-500 font-bold tracking-widest uppercase text-xs mb-3 block">Process</span>
                <h2 className="text-white text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
                    Your Journey With Us
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 relative">

                {/* Connecting Line (Horizontal on Desktop, Vertical on Mobile) */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-zinc-800 -translate-y-1/2 z-0"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {JOURNEY_STEPS.map((step, idx) => (
                        <div key={idx} className="group relative">
                            {/* Card */}
                            <div className="h-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 hover:border-zinc-700 hover:shadow-2xl hover:shadow-white/5">
                                {/* Step Number */}
                                <div className="absolute -top-6 left-8 text-6xl font-black text-zinc-800/50 group-hover:text-zinc-700/50 transition-colors select-none">
                                    0{step.id}
                                </div>

                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.border} border flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-500`}>
                                    <step.icon className={`w-8 h-8 ${step.color}`} />
                                    {/* Pulse Effect */}
                                    <div className={`absolute inset-0 rounded-2xl ${step.bg} animate-ping opacity-20`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Connector Circle (Desktop Only) */}
                            <div className="hidden lg:block absolute top-[calc(50%-1.25rem)] -right-4 w-10 h-1 z-0 bg-zinc-800" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
