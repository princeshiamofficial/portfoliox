import React from 'react';
import { SectionHeader } from '../../../shared/SectionHeader';
import { ArrowRight } from 'lucide-react';
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
  const steps = [
    {
      title: "কাউন্সিলরের বিশেষজ্ঞ পরামর্শ",
      desc: "আপনার প্রয়োজন, আপনার চিন্তা—সব বুঝে একজন কাউন্সিলর Color Hut থেকে আপনাকে সবচেয়ে উপযোগী সেরা আইডিয়া ও সঠিক নির্দেশনা শেয়ার করবেন।",
      img: "https://colorhutbd.xyz/image/Graphics-Design.png",
      link: "#requirment",
      btn: "ফর্ম পুরন করুন"
    },
    {
      title: "ব্র্যান্ড-ফোকাসড ডিজাইন প্রসেস",
      desc: "আমাদের ডিজাইনার প্রথমে আপনার ব্র্যান্ড ও কাস্টমার প্রোফাইল বুঝবে। প্রতিটি ডিজাইন এক এক করে শেয়ার করা হবে, আপনি রিভিউ ও পরিবর্তন চাইতে পারবেন, এবং চূড়ান্ত অনুমোদনের পর প্রিন্টের জন্য প্রস্তুত হবে।",
      img: "https://xtrecy.com/wp-content/uploads/2022/12/Graphics-Design-02-1.png",
      link: "#pricing",
      btn: "প্যাকেজ সিলেক্ট করুন"
    },
    {
      title: "লজিস্টিক & ডেলিভারি",
      desc: "আমাদের লজিস্টিকস টিম প্রথমে অর্ডার যাচাই করবে এবং প্রিন্ট, বাইন্ডিং ও প্যাকেজিং সম্পূর্ণ করবে। পণ্যটি ডেলিভারির জন্য সম্পূর্ণ প্রস্তুত এবং নিরাপদ গন্তব্যে পৌঁছে দেওয়া হবে।",
      img: "https://xtrecy.com/wp-content/uploads/2022/12/Graphics-Design-01.png",
      link: "#",
      btn: "প্রোগ্রেস দেখুন"
    }
  ];

  return (
    <section className="py-20 md:py-28 relative" id="audit">
      <div className="max-w-[1290px] mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader text="কালার হাট পার্সোনাল মেনু এসিস্ট্যান্ট!" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="flex flex-col items-center text-center group p-8 rounded-3xl bg-white border border-white/60 shadow-soft hover:shadow-card hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="mb-8 relative w-full flex justify-center">
                <div className="absolute inset-0 bg-orange-100/30 rounded-full blur-3xl transform scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-auto h-[220px] object-contain transition-transform duration-500 group-hover:-translate-y-4 group-hover:scale-105 relative z-10 drop-shadow-lg"
                />
              </div>
              <h4 className="font-bengali text-[24px] font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                {step.title}
              </h4>
              <p className="font-bengali text-gray-500 mb-8 leading-relaxed text-[16px]">
                {step.desc}
              </p>
              <a
                href={step.link}
                className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-dark bg-gray-50 px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/30 group/btn"
              >
                {step.btn}
                <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-16 border-t border-gray-200/60 overflow-hidden"
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