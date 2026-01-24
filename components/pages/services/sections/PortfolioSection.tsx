import React, { useState } from 'react';
import { SectionHeader } from '../../../shared/SectionHeader';
import { Plus, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RESTAURANT_IMAGES = [
  "https://colorhutbd.xyz/image/restaurant/R1.webp",
  "https://colorhutbd.xyz/image/restaurant/R2.webp",
  "https://colorhutbd.xyz/image/restaurant/R3.webp",
  "https://colorhutbd.xyz/image/restaurant/R4.webp",
  "https://colorhutbd.xyz/image/restaurant/R5.webp",
  "https://colorhutbd.xyz/image/restaurant/R6.webp",
  "https://colorhutbd.xyz/image/restaurant/R7.webp",
  "https://colorhutbd.xyz/image/restaurant/R8.webp",
];

const PARLOUR_IMAGES = [
  "https://colorhutbd.xyz/image/parlour/P1.webp",
  "https://colorhutbd.xyz/image/parlour/P2.webp",
  "https://colorhutbd.xyz/image/parlour/P3.webp",
  "https://colorhutbd.xyz/image/parlour/P4.webp",
  "https://colorhutbd.xyz/image/parlour/P5.webp",
  "https://colorhutbd.xyz/image/parlour/P6.webp",
  "https://colorhutbd.xyz/image/parlour/P7.webp",
  "https://colorhutbd.xyz/image/parlour/P8.webp",
];

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Restaurant');

  const getImages = () => {
    switch (activeTab) {
      case 'Parlour':
        return PARLOUR_IMAGES;
      case 'More+':
        return [...RESTAURANT_IMAGES].reverse();
      case 'Restaurant':
      default:
        return RESTAURANT_IMAGES;
    }
  };

  const images = getImages();

  const handleTabClick = (tab: string) => {
    if (tab === 'More+') {
      window.open('https://menu.colorhutbd.xyz', '_blank');
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <section className="py-20 md:py-28 relative" id="demo">
      <div className="max-w-[1290px] mx-auto px-4 md:px-6">
        <SectionHeader text="Brand Impression" />

        <div className="flex justify-center gap-8 mb-16 font-medium text-gray-500">
          <div className="bg-white/80 backdrop-blur-sm p-1.5 rounded-full border border-white/50 shadow-soft flex gap-2 flex-wrap justify-center">
            {['Restaurant', 'Parlour', 'More+'].map((tab, i) => (
              <button
                key={i}
                onClick={() => handleTabClick(tab)}
                className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-semibold ${activeTab === tab
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'hover:bg-gray-100 text-gray-600'
                  }`}
              >
                {tab === 'More+' ? (
                  <span>More<span className={`${activeTab === tab ? 'text-white' : 'text-primary'} font-bold text-base ml-0.5`}>+</span></span>
                ) : tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode='wait'>
            {images.map((src, idx) => (
              <motion.div
                key={`${activeTab}-${idx}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="aspect-[4/3] overflow-hidden rounded-2xl group relative cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-white/20"
              >
                <img
                  src={src}
                  alt={`Portfolio ${idx}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 flex gap-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark hover:text-primary transition-colors shadow-lg hover:scale-110 duration-300">
                      <Plus size={24} />
                    </button>
                    <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition-colors shadow-lg hover:scale-110 duration-300">
                      <Eye size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-24 text-center">
          <h2 className="font-bengali text-3xl font-bold text-dark mb-3">Quality & Quantity</h2>
          <p className="font-bengali text-gray-500 text-lg">No হিডেন চার্জ</p>
        </div>
      </div>
    </section>
  );
};