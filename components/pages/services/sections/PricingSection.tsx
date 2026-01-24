import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PricingCardProps {
    name: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    features: { text: string, check: boolean }[];
    whatsappLink: string;
    delay: number;
    isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ name, price, originalPrice, discount, features, whatsappLink, delay, isPopular }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay * 0.2, duration: 0.5 }}
        className={`relative bg-white rounded-3xl p-8 flex flex-col items-center transition-all duration-500 group ${isPopular
            ? 'shadow-[0_20px_60px_-15px_rgba(234,88,12,0.25)] scale-105 z-10 ring-2 ring-primary ring-offset-2 ring-offset-[#F8FAFC]'
            : 'shadow-xl border border-gray-100 hover:border-primary/30 hover:-translate-y-2 hover:shadow-2xl'
            }`}
    >
        {isPopular && (
            <div className="absolute -top-5 bg-gradient-to-r from-primary to-orange-600 text-white px-8 py-2 rounded-full text-sm font-bold shadow-lg shadow-orange-500/30 tracking-wide uppercase animate-pulse-slow">
                Most Popular
            </div>
        )}

        <div className="text-center mb-8 mt-4 w-full border-b border-gray-100 pb-8">
            <h6 className="font-bengali text-xl font-bold text-gray-500 mb-4 tracking-wide">{name}</h6>
            <div className="flex items-center justify-center text-dark font-bold gap-3">
                <div className="flex items-center">
                    <span className="text-2xl mr-1 text-gray-400 self-start mt-2">৳</span>
                    <span className={`text-5xl font-bengali tracking-tight ${isPopular ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-700' : 'text-dark'}`}>{price}</span>
                </div>
                {originalPrice && (
                    <div className="flex flex-col items-start ml-1">
                        {discount && (
                            <span className="bg-red-100 text-red-600 text-[11px] font-bold px-2 py-0.5 rounded-full mb-1">
                                {discount} ছাড়
                            </span>
                        )}
                        <span className="text-xl text-gray-400 line-through font-bengali decoration-red-400/60 decoration-2">৳{originalPrice}</span>
                    </div>
                )}
            </div>
            <p className="text-gray-400 text-sm mt-3 bg-gray-50 inline-block px-3 py-1 rounded-full border border-gray-100">এককালীন পেমেন্ট</p>
        </div>

        <div className="w-full space-y-4 mb-10">
            {features.map((feat, i) => (
                <div key={i} className="flex items-center justify-between w-full group/item">
                    <div className="flex items-start gap-3 text-left">
                        {feat.check ? (
                            <div className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 group-hover/item:bg-green-500 group-hover/item:text-white transition-colors">
                                <Check size={12} strokeWidth={4} />
                            </div>
                        ) : (
                            <div className="mt-1 w-5 h-5 rounded-full bg-red-50 text-red-300 flex items-center justify-center flex-shrink-0 opacity-50">
                                <X size={12} strokeWidth={3} />
                            </div>
                        )}
                        <span className={`font-bengali text-[16px] leading-tight ${feat.check ? 'text-gray-700 font-medium' : 'text-gray-400 line-through opacity-60'}`}>
                            {feat.text}
                        </span>
                    </div>
                </div>
            ))}
        </div>

        <Link
            to="/services#requirment"
            className={`mt-auto w-full py-4 rounded-xl font-bengali font-bold text-center transition-all duration-300 relative overflow-hidden group/btn ${isPopular
                ? 'bg-primary text-white shadow-xl shadow-primary/30 hover:shadow-primary/50'
                : 'bg-gray-50 text-dark hover:bg-gray-800 hover:text-white border border-gray-100'
                }`}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                অর্ডার করুন
                {isPopular && <Check size={16} />}
            </span>
            {isPopular && <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1s_infinite]"></div>}
        </Link>
    </motion.div>
);

export const PricingSection: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden" id="pricing">
            {/* Background Decorators */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#fff7ed]/50 to-[#F8FAFC]"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply animate-pulse-slow"></div>
            <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply animate-float"></div>

            <div className="max-w-[1290px] mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs bg-white border border-orange-100 px-4 py-2 rounded-full shadow-sm">Pricing Plans</span>
                    <h2 className="font-bengali text-4xl md:text-5xl font-bold text-dark mt-6 mb-4">Best Deal!</h2>
                    <p className="font-bengali text-gray-500 max-w-2xl mx-auto text-lg">ব্যবসার ধরণ অনুযায়ী প্যাকেজ বেছে নিন</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 items-center">
                    <PricingCard
                        name="Primary"
                        price="১৯৯৯"
                        whatsappLink="https://wa.me/8801919760626?text=I%20want%20to%20order%20Primary%20Package"
                        delay={0}

                        features={[
                            { text: "৮-পেজ প্রিমিয়াম মেনু ডিজাইন", check: true },
                            { text: "৩টি রিভিশন", check: true },
                            { text: "JPG/PDF (HD) – সোশ্যাল মিডিয়া রেডি", check: true },
                            { text: "অনলাইন/ফুড ডেলিভারি কম্প্যাটিবল ফাইল", check: true },
                            { text: "৫ দিনের ইমারজেন্সি সার্ভিস", check: true },
                            { text: "কাস্টম QR কোড", check: true },
                            { text: "Bi-Fold / Tri-Fold ডিজাইন (Takeaway)", check: false },
                            { text: "ইন্টারেকটিভ ডিজিটাল মেনু", check: false },
                            { text: "ডিজিটাল মেনু", check: false },
                            { text: "হাই-রেজোলিউশন ইমেজ সাপোর্ট", check: false },
                            { text: "বাংলা ও English মিক্স মেনু", check: false },
                            { text: "প্রফেশনাল ফটো এডিটিং ও সোশ্যাল ভিজুয়ালস", check: false },
                        ]}
                    />
                    <PricingCard
                        name="Secondary"
                        price="২৯৯৯"
                        whatsappLink="https://wa.me/8801919760626?text=I%20want%20to%20order%20Secondary%20Package"
                        delay={1}
                        isPopular={true}
                        features={[
                            { text: "১৬-পেজ প্রিমিয়াম মেনু ডিজাইন", check: true },
                            { text: "৫টি রিভিশন", check: true },
                            { text: "JPG/PDF (HD) – সোশ্যাল মিডিয়া রেডি", check: true },
                            { text: "অনলাইন/ফুড ডেলিভারি কম্প্যাটিবল ফাইল", check: true },
                            { text: "৩ দিনের ইমারজেন্সি সার্ভিস", check: true },
                            { text: "কাস্টম QR কোড", check: true },
                            { text: "Bi-Fold / Tri-Fold ডিজাইন (Takeaway)", check: true },
                            { text: "ইন্টারেকটিভ ডিজিটাল মেনু", check: false },
                            { text: "ডিজিটাল মেনু", check: false },
                            { text: "হাই-রেজোলিউশন ইমেজ সাপোর্ট", check: false },
                            { text: "বাংলা ও English মিক্স মেনু", check: false },
                            { text: "প্রফেশনাল ফটো এডিটিং ও সোশ্যাল ভিজুয়ালস", check: false },
                        ]}
                    />
                    <PricingCard
                        name="Tertiary"
                        price="৩৯৯৯"
                        originalPrice="৫৯৯৯"
                        discount="৩৩%"
                        whatsappLink="https://wa.me/8801919760626?text=I%20want%20to%20order%20Tertiary%20Package"
                        delay={2}
                        features={[
                            { text: "২৪-পেজ প্রিমিয়াম মেনু ডিজাইন", check: true },
                            { text: "৭টি রিভিশন", check: true },
                            { text: "JPG/PDF (HD) – সোশ্যাল মিডিয়া রেডি", check: true },
                            { text: "অনলাইন/ফুড ডেলিভারি কম্প্যাটিবল ফাইল", check: true },
                            { text: "১ দিনের ইমারজেন্সি সার্ভিস", check: true },
                            { text: "কাস্টম QR কোড", check: true },
                            { text: "Bi-Fold / Tri-Fold ডিজাইন (Takeaway)", check: true },
                            { text: "ইন্টারেকটিভ ডিজিটাল মেনু", check: true },
                            { text: "ডিজিটাল মেনু", check: true },
                            { text: "হাই-রেজোলিউশন ইমেজ সাপোর্ট", check: true },
                            { text: "বাংলা ও English মিক্স মেনু", check: true },
                            { text: "প্রফেশনাল ফটো এডিটিং ও সোশ্যাল ভিজুয়ালস", check: true },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};