import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

export const ThankYouPage: React.FC = () => {
    useEffect(() => {
        // Trigger confetti once when the component mounts
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-20">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-orange-50 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[40%] bg-orange-50 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="max-w-2xl w-full text-center relative z-10">
                {/* Success Icon Animation */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1
                    }}
                    className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-100/50"
                >
                    <CheckCircle size={48} strokeWidth={2.5} />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <h1 className="font-bengali text-3xl md:text-5xl font-extrabold text-dark mb-6 leading-tight">
                        আপনার আগ্রহের জন্য আপনাকে <br />
                        <span className="text-primary">অসংখ্য ধন্যবাদ!</span>
                    </h1>

                    <p className="font-bengali text-lg md:text-xl text-gray-500 mb-10 leading-relaxed max-w-lg mx-auto">
                        আমরা আপনার তথ্য পেয়েছি এবং খুব শীঘ্রই আপনার সাথে যোগাযোগ করব।
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >


                    <a
                        href="https://store.colorhutbd.xyz"
                        className="font-bengali flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-bold hover:bg-gray-900 transition-all hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto justify-center"
                    >
                        আরো প্রোডাক্ট দেখুন
                        <ArrowRight size={18} />
                    </a>
                </motion.div>

                {/* Contact Support */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-gray-400 text-sm font-medium"
                >
                    জরুরী প্রয়োজনে কল করুন: <a href="tel:+8801919760626" className="text-dark font-bold hover:text-primary transition-colors">+৮৮০ ১৯১৯-৭৬০৬২৬</a>
                </motion.p>
            </div>
        </div>
    );
};
