import React from 'react';
import { SectionHeader } from '../../../shared/SectionHeader';

import { motion } from 'framer-motion';

const MARKET_PLACES = [
  { name: "Dubai / UAE", img: "https://colorhutbd.xyz/image/place/place1.jpg" },
  { name: "Australia", img: "https://colorhutbd.xyz/image/place/place2.jpg" },
  { name: "UK", img: "https://colorhutbd.xyz/image/place/place3.jpg" },
  { name: "USA", img: "https://colorhutbd.xyz/image/place/place4.jpg" },
  { name: "Oman", img: "https://colorhutbd.xyz/image/place/place5.jpg" },
  { name: "Qatar", img: "https://colorhutbd.xyz/image/place/place6.jpg" },
  { name: "Saudi Arabia", img: "https://colorhutbd.xyz/image/place/place7.jpg" },
  { name: "Singapore", img: "https://colorhutbd.xyz/image/place/place8.jpg" },
  { name: "Malaysia", img: "https://colorhutbd.xyz/image/place/place9.jpg" },
  { name: "Bhutan", img: "https://colorhutbd.xyz/image/place/place10.jpg" },
  { name: "Nepal", img: "https://colorhutbd.xyz/image/place/place11.jpg" },
  { name: "India", img: "https://colorhutbd.xyz/image/place/place12.jpg" },
  { name: "Bangladesh", img: "https://colorhutbd.xyz/image/place/place13.jpg" }
];

export const ProcessAndTools: React.FC = () => {


  return (
    <section className="relative" id="audit">
      <div className="max-w-[1290px] mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader text="কালার হাট পার্সোনাল মেনু এসিস্ট্যান্ট!" />



        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-200/60 overflow-hidden pt-8 mt-4"
        >
          <div className="text-center mb-10">
            <h3 className="font-bengali text-2xl font-bold text-gray-400 uppercase tracking-widest">Global Markets Experience</h3>
          </div>

          <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marquee 40s linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>

          <div className="w-full overflow-hidden mask-linear-fade">
            <div className="flex items-center gap-10 animate-marquee w-max">
              {/* Double the list for infinite loop effect */}
              {[...MARKET_PLACES, ...MARKET_PLACES].map((place, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 group/item">
                  <img
                    src={place.img}
                    alt={place.name}
                    className="h-20 md:h-28 w-auto object-contain rounded-xl shadow-lg opacity-90 group-hover/item:opacity-100 transition-all duration-300 transform group-hover/item:scale-105"
                  />
                  <span className="font-bengali text-sm font-semibold text-gray-500 drop-shadow-sm group-hover/item:text-primary transition-colors whitespace-nowrap">
                    {place.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};