import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MapPin, Users, Award } from 'lucide-react';

export const CoverageArea: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'international' | 'bangladesh'>('international');

    return (
        <section className="bg-black py-24 relative overflow-hidden font-sans border-t border-zinc-900">
            {/* Header */}
            <div className="text-center mb-16 relative z-10 px-4">
                <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-3 block">Global To Local</span>
                <h2 className="text-white text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
                    Our Coverage Area
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mb-8" />

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab('international')}
                        className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${activeTab === 'international'
                                ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                : 'bg-zinc-900 text-gray-400 border border-zinc-800 hover:border-zinc-700'
                            }`}
                    >
                        INTERNATIONAL
                    </button>
                    <button
                        onClick={() => setActiveTab('bangladesh')}
                        className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${activeTab === 'bangladesh'
                                ? 'bg-orange-600 text-white shadow-[0_0_20px_rgba(234,88,12,0.3)]'
                                : 'bg-zinc-900 text-gray-400 border border-zinc-800 hover:border-zinc-700'
                            }`}
                    >
                        BANGLADESH
                    </button>
                </div>
            </div>

            {/* Content Display */}
            <div className="container mx-auto px-4 md:px-8 relative min-h-[600px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {activeTab === 'international' ? (
                        <InternationalMap key="international" />
                    ) : (
                        <BangladeshMap key="bangladesh" />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

const InternationalMap = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-6xl relative"
        >
            {/* Abstract World Map Background */}
            <div className="relative aspect-[16/9] w-full bg-[#0a0a0a] rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl">
                {/* Dotted Grid Background */}
                <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />

                {/* Simple World Map Image Overlay (Dark Theme) */}
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                    alt="World Map"
                    className="absolute inset-0 w-full h-full object-cover opacity-10 filter invert grayscale contrast-125"
                />

                {/* Glowing Orbs for Key Locations */}
                {/* USA */}
                <LocationMarker top="35%" left="20%" label="USA" color="blue" delay={0} />
                {/* UK */}
                <LocationMarker top="25%" left="48%" label="UK" color="blue" delay={0.2} />
                {/* UAE */}
                <LocationMarker top="45%" left="60%" label="UAE" color="orange" delay={0.4} />
                {/* Canada */}
                <LocationMarker top="25%" left="15%" label="Canada" color="blue" delay={0.6} />
                {/* Australia */}
                <LocationMarker top="75%" left="85%" label="Australia" color="blue" delay={0.8} />

                {/* Connecting Lines (Simulated) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                    <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    {/* Simplified curves connecting to a central point (South Asia approx) */}
                    <motion.path
                        d="M 200,200 Q 400,100 650,300"
                        fill="none" stroke="url(#lineGrad)" strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M 800,250 Q 700,400 650,300"
                        fill="none" stroke="url(#lineGrad)" strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                    />
                </svg>

                {/* Stats Overlay */}
                <div className="absolute bottom-8 left-8 flex flex-col md:flex-row gap-8 z-20">
                    <StatItem icon={Globe} value="25+" label="Countries" color="text-blue-500" />
                    <StatItem icon={Users} value="500+" label="Global Clients" color="text-blue-500" />
                </div>
            </div>
        </motion.div>
    );
};

const BangladeshMap = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl relative"
        >
            <div className="relative aspect-[4/3] w-full bg-[#0a0a0a] rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl flex items-center justify-center">
                {/* Dotted Grid Background */}
                <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />

                {/* Bangladesh Map Silhouette / Placeholder */}
                {/* Since direct SVG path is complex, using a stylized representation or image */}
                <div className="relative w-[300px] h-[450px] md:w-[400px] md:h-[600px] opacity-40">
                    {/* Simple abstract shape for BD if no image */}
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Bangladesh_Map.svg"
                        alt="Bangladesh"
                        className="w-full h-full object-contain filter invert drop-shadow-[0_0_15px_rgba(234,88,12,0.3)]"
                    />
                </div>

                {/* Locations */}
                <LocationMarker top="45%" left="48%" label="Dhaka" color="orange" delay={0} size="large" />
                <LocationMarker top="65%" left="65%" label="Ctg" color="orange" delay={0.2} />
                <LocationMarker top="25%" left="65%" label="Sylhet" color="orange" delay={0.4} />
                <LocationMarker top="35%" left="30%" label="Rajshahi" color="orange" delay={0.6} />
                <LocationMarker top="65%" left="35%" label="Khulna" color="orange" delay={0.8} />

                {/* Stats Overlay */}
                <div className="absolute bottom-8 right-8 flex flex-col md:flex-row gap-8 z-20 text-right md:text-left">
                    <StatItem icon={MapPin} value="64" label="Districts Covered" color="text-orange-500" />
                    <StatItem icon={Award} value="1000+" label="Local Projects" color="text-orange-500" />
                </div>
            </div>
        </motion.div>
    );
};

const LocationMarker = ({ top, left, label, color = "blue", delay = 0, size = "normal" }: any) => {
    const colorClass = color === "blue" ? "bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]" : "bg-orange-500 shadow-[0_0_20px_rgba(234,88,12,0.5)]";
    const sizeClass = size === "large" ? "w-4 h-4" : "w-3 h-3";

    return (
        <div style={{ top, left }} className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10">
            {/* Pulse Effect */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 2, 2], opacity: [1, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay }}
                className={`absolute inset-0 rounded-full ${color === "blue" ? "bg-blue-500" : "bg-orange-500"}`}
            />
            {/* Dot */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay }}
                className={`relative rounded-full border-2 border-white ${colorClass} ${sizeClass}`}
            />
            {/* Label */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: delay + 0.2 }}
                className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur px-2 py-1 rounded text-[10px] text-white font-bold tracking-wider whitespace-nowrap border border-white/10"
            >
                {label}
            </motion.div>
        </div>
    );
};

const StatItem = ({ icon: Icon, value, label, color }: any) => (
    <div className="flex items-center gap-4 bg-black/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/5">
        <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ${color}`}>
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">{label}</div>
        </div>
    </div>
);
