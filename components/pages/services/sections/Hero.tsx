import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["রেস্টুরেন্ট", "রিসোর্ট", "বাফেট", "লেডিস পার্লার", "জেন্টস পার্লার", "ক্যাফে"];

  useEffect(() => {
    const timer = setTimeout(() => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setTypingSpeed(2000); // Pause at end of phrase
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before starting next
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-28 bg-gradient-to-b from-orange-50/50 to-white overflow-visible">
      <div className="max-w-[1290px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-0">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="font-bengali font-bold text-dark leading-[1.2] tracking-tight text-4xl md:text-5xl lg:text-[64px] mb-4 min-h-[1.2em]">
              <span className="text-primary inline-flex items-center">
                {text}
                <span className="w-1 h-[0.8em] bg-primary ml-1 animate-pulse"></span>
              </span>
              <span className="ml-3">মেনু</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-bengali mb-6 font-bold">
              আমাদের প্রফেশনাল ডিজাইন সার্ভিসের মাধ্যমে আপনার ব্র্যান্ডের শক্তিশালী পরিচিতি গড়ে তুলুন। ক্রিয়েটিভ, অরিজিনাল এবং স্ট্র্যাটেজিক ডিজাইন যা আপনার ব্র্যান্ডকে প্রতিযোগিতার থেকে স্পষ্টভাবে আলাদা করে তুলবে।
            </p>

            <ul className="font-bengali space-y-2 mb-8 inline-block text-left">
              {[
                "স্মার্ট মেনু ডিরেক্টরি",
                "কাস্টমাইজ ওন ডিমান্ড",
                "সেলস মেকানিজম স্ট্রাটেজি",
                "পৃথিবীর সকল প্রান্তে ডেলিভারি",
                "বাংলা & ইংরেজি এরাবিকসহ ১৪ টি ভাষায় মেনু"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#demo" className="font-bengali bg-primary hover:bg-primary-dark text-white px-10 py-3.5 rounded bg-primary font-medium text-lg inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-0.5">
                ডেমো দেখুন
              </a>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Solid Circle Background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] bg-[#fff7ed] rounded-full -z-10"></div>
            
            <img 
              src="https://colorhutbd.xyz/image/orange-girl1.png" 
              alt="Creative Graphics Designer" 
              className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl relative z-10"
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative z-20 mt-6 lg:mt-0"
        >
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8 md:p-10">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              
              {/* Description */}
              <div className="flex-1 text-center lg:text-left lg:pr-10 lg:border-r border-gray-100">
                <h2 className="font-bengali font-bold text-xl md:text-2xl text-dark mb-3 leading-tight">
                  প্রতিটি মেনু আমরা তৈরি করি রিসার্চ ও আপনার ভিশন বুঝে।
                </h2>
                <p className="font-bengali text-gray-500 text-base leading-relaxed">
                  আপনি যদি চান এমন একটি মেনু , যেটা ব্র্যান্ড কে রিপ্রেজেন্ট করবে এবং অন্যদের থেকে আলাদা রাখবে — তাহলে আমরা প্রস্তুত!
                </p>
              </div>

              {/* Stats */}
              <div className="flex justify-center items-center gap-12 lg:pl-4 shrink-0">
                {/* Stat 1 */}
                <div className="text-center">
                  <h2 className="text-5xl md:text-6xl font-bold text-dark mb-2">৬৩৯</h2>
                  <p className="font-bengali text-lg font-medium text-gray-600">Coverage Thana</p>
                </div>

                {/* Stat 2 */}
                <div className="text-center">
                  <h2 className="text-5xl md:text-6xl font-bold text-dark mb-2">১৪+</h2>
                  <p className="font-bengali text-lg font-medium text-gray-600">Coverage County</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};