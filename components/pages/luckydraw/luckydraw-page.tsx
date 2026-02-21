import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Globe, PlayCircle, Share2, Facebook, Instagram, Twitter, Linkedin, MapPin, Send } from 'lucide-react';

export const LuckyDrawPage: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            whatsapp: formData.get('whatsapp'),
            division: formData.get('division'),
            regional_text: formData.get('regional_text'),
        };

        try {
            // Replace this URL with your Google Apps Script Web App URL
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx4aYxEjyT5RLw6CDIzfOz0texXXQ_iTwhqIlhn0EZ-ZhhqlG2LUJtbEVUJ0M2MM2gr/exec';

            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Apps Script requires no-cors for simple redirect handling
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            setIsSuccess(true);
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error('Submission error:', error);
            alert('দুঃখিত, কোনো একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white font-bengali selection:bg-red-600 selection:text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
                {/* Artistic Background Illustration Overlay - Stylized Shaheed Minar */}
                <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[120%] h-auto max-w-none transform -rotate-3 translate-y-20">
                        {/* Main Pillar */}
                        <rect x="375" y="100" width="50" height="400" rx="4" fill="currentColor" />
                        {/* Side Pillars */}
                        <rect x="290" y="200" width="40" height="300" rx="4" fill="currentColor" />
                        <rect x="470" y="200" width="40" height="300" rx="4" fill="currentColor" />
                        {/* Outer Pillars */}
                        <rect x="215" y="280" width="35" height="220" rx="4" fill="currentColor" />
                        <rect x="550" y="280" width="35" height="220" rx="4" fill="currentColor" />
                        {/* Base */}
                        <rect x="150" y="500" width="500" height="20" rx="4" fill="currentColor" />
                        {/* Sun/Aura */}
                        <circle cx="400" cy="180" r="120" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
                        <circle cx="400" cy="180" r="80" fill="currentColor" fillOpacity="0.2" />
                    </svg>
                </div>

                {/* Subtle Red Gradient Overlay */}
                <div className="absolute inset-x-0 top-0 h-64 z-0 bg-gradient-to-b from-red-50 to-transparent pointer-events-none opacity-60"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
                            ভাষার মাস ২০২৬
                        </span>
                        <h1 className="text-5xl md:text-8xl font-bold text-gray-900 mb-8 leading-[1.1]">
                            মায়ের ভাষা, <br className="hidden md:block" />
                            <span className="text-red-600 relative">
                                বাংলা ভাষা
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                                    <path d="M1 10.5C50 3.5 150 1.5 299 10.5" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            ফেব্রুয়ারি ভাষার মাস — গর্ব ও আবেগের স্মৃতি। মাতৃভাষার সম্মানে আমাদের বিশেষ ক্যাম্পেইন।
                        </p>
                        <motion.a
                            href="#register"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-xl shadow-red-600/20 transition-all duration-500 group"
                        >
                            এখনই অংশগ্রহণ করুন
                            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                <Send className="w-6 h-6" />
                            </motion.span>
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Campaign Info Section */}
            <section className="py-24 relative overflow-hidden bg-gray-50/30">
                <div className="container mx-auto px-4 relative z-10 text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ক্যাম্পেইন সম্পর্কে তথ্য</h2>
                    <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full"></div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <InfoCard
                            icon={<Trophy className="w-10 h-10 text-red-600" />}
                            title="বিজয়ী সংখ্যা"
                            description="মোট ৮ জন ভাগ্যবান বিজয়ী নির্বাচিত হবেন।"
                            delay={0.1}
                        />
                        <InfoCard
                            icon={<PlayCircle className="w-10 h-10 text-red-600" />}
                            title="লাইভ লটারি"
                            description="সম্পূর্ণ স্বচ্ছ Page Live প্রক্রিয়ার মাধ্যমে নির্বাচন।"
                            delay={0.2}
                        />
                        <InfoCard
                            icon={<Globe className="w-10 h-10 text-red-600" />}
                            title="দেশব্যাপী সুযোগ"
                            description="বাংলাদেশের যেকোনো প্রান্ত থেকে অংশগ্রহণ করা যাবে।"
                            delay={0.3}
                        />
                        <InfoCard
                            icon={<Users className="w-10 h-10 text-red-600" />}
                            title="সহজ অংশগ্রহণ"
                            description="ফর্ম পূরণ করে খুব সহজেই যুক্ত হোন ক্যাম্পেইনে।"
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

            {/* Registration Form Section */}
            <section id="register" className="py-24 md:py-40 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 md:p-14 rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-100"
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">অংশগ্রহণ করুন</h2>
                                <p className="text-gray-500">নিচের তথ্যগুলো দিয়ে আপনার অংশগ্রহণ নিশ্চিত করুন</p>
                            </div>

                            <form className="space-y-8" onSubmit={handleSubmit}>
                                <div className="relative group">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent rounded-3xl focus:bg-white focus:ring-0 focus:border-red-600 outline-none transition-all duration-300 peer placeholder-transparent text-lg"
                                        placeholder="পূর্ণ নাম"
                                        required
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute left-8 top-5 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-red-600 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                                    >
                                        পূর্ণ নাম
                                    </label>
                                </div>

                                <div className="relative group">
                                    <input
                                        type="tel"
                                        id="whatsapp"
                                        name="whatsapp"
                                        className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent rounded-3xl focus:bg-white focus:ring-0 focus:border-red-600 outline-none transition-all duration-300 peer placeholder-transparent text-lg"
                                        placeholder="WhatsApp নম্বর"
                                        required
                                    />
                                    <label
                                        htmlFor="whatsapp"
                                        className="absolute left-8 top-5 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-red-600 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                                    >
                                        WhatsApp নম্বর
                                    </label>
                                </div>

                                <div className="relative group">
                                    <select
                                        id="division"
                                        name="division"
                                        className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent rounded-3xl focus:bg-white focus:ring-0 focus:border-red-600 outline-none transition-all duration-300 appearance-none text-gray-600 text-lg group"
                                        defaultValue=""
                                        required
                                    >
                                        <option value="" disabled>বিভাগ নির্বাচন করুন</option>
                                        <option value="dhaka">ঢাকা</option>
                                        <option value="chattogram">চট্টগ্রাম</option>
                                        <option value="rajshahi">রাজশাহী</option>
                                        <option value="khulna">খুলনা</option>
                                        <option value="barishal">বরিশাল</option>
                                        <option value="sylhet">সিলেট</option>
                                        <option value="rangpur">রংপুর</option>
                                        <option value="mymensingh">ময়মনসিংহ</option>
                                    </select>
                                    <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 transition-colors group-hover:text-red-600">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 bg-red-50 border border-red-100 rounded-2xl">
                                        <p className="text-gray-600 text-sm mb-1 uppercase tracking-wider font-bold">নিচের বাক্যটি অনুবাদ করুন:</p>
                                        <p className="text-gray-900 text-lg font-medium">"মায়ের কোলেই শুরু হয়েছিল ভাষার প্রথম পাঠ।"</p>
                                    </div>
                                    <div className="relative group">
                                        <textarea
                                            id="regional_text"
                                            name="regional_text"
                                            rows={3}
                                            className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent rounded-3xl focus:bg-white focus:ring-0 focus:border-red-600 outline-none transition-all duration-300 peer placeholder-transparent text-lg resize-none"
                                            placeholder="আপনার আঞ্চলিক ভাষায় লিখুন"
                                            required
                                        ></textarea>
                                        <label
                                            htmlFor="regional_text"
                                            className="absolute left-8 top-5 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm peer-focus:text-red-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-red-600 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                                        >
                                            আপনার আঞ্চলিক ভাষায় লিখুন
                                        </label>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    {isSuccess ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="bg-green-50 text-green-600 p-6 rounded-3xl text-center font-bold border border-green-100"
                                        >
                                            আপনার অংশগ্রহণ সফলভাবে নথিভুক্ত হয়েছে! ধন্যবাদ।
                                        </motion.div>
                                    ) : (
                                        <motion.button
                                            whileHover={{ scale: 1.02, backgroundColor: '#b91c1c' }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full bg-red-600 text-white py-5 rounded-[2rem] text-xl font-bold shadow-2xl shadow-red-600/30 transition-all duration-300 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? 'প্রসেসিং হচ্ছে...' : 'সাবমিট করুন'}
                                        </motion.button>
                                    )}
                                    <p className="text-center text-gray-400 text-sm mt-6">
                                        আপনার তথ্য আমাদের কাছে সুরক্ষিত থাকবে
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">CH</div>
                            <div className="text-gray-400 text-lg">
                                আয়োজনে – <span className="text-gray-900 font-bold">Color Hut</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <SocialLink href="https://facebook.com/colorhutbd" icon={<Facebook className="w-5 h-5" />} />
                            <SocialLink href="https://instagram.com/colorhutofficial" icon={<Instagram className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
                        </div>
                    </div>
                    <div className="mt-10 pt-10 border-t border-gray-50 text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} Color Hut. সকল স্বত্ব সংরক্ষিত।
                    </div>
                </div>
            </footer>
        </div>
    );
};

const InfoCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -10 }}
        className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-50 transition-all duration-500 text-center"
    >
        <div className="flex justify-center mb-6 transform transition-transform duration-500 group-hover:scale-110">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-500 leading-relaxed font-light">{description}</p>
    </motion.div>
);
const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-red-600 transition-all duration-300 p-3 border border-gray-100 rounded-2xl hover:border-red-100 hover:bg-red-50 flex items-center justify-center"
    >
        {icon}
    </a>
);
