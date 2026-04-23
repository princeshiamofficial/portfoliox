import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const REVIEWS = [
    { src: "https://i.ibb.co.com/hFvSMhHX/image.png", alt: "Customer Review 1" },
    { src: "https://i.ibb.co.com/rGv80xMd/image.png", alt: "Customer Review 2" },
    { src: "https://i.ibb.co.com/8nBVJw65/image.png", alt: "Customer Review 3" },
    { src: "https://i.ibb.co.com/zk25yZ1/image.png", alt: "Customer Review 4" },
    { src: "https://i.ibb.co.com/27GjqbqC/image.png", alt: "Customer Review 5" },
];

export const CustomerReviews: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const centerScroll = () => {
            if (scrollRef.current && window.innerWidth < 768) {
                const container = scrollRef.current;
                const scrollWidth = container.scrollWidth;
                const clientWidth = container.clientWidth;
                container.scrollLeft = (scrollWidth - clientWidth) / 2;
            }
        };

        // Delay to ensure layout is complete
        const timer = setTimeout(centerScroll, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="bg-black py-24 relative overflow-hidden font-sans">
            {/* Header */}
            <div className="text-center mb-16 md:mb-24 relative z-10 px-4">
                <h2 className="text-white text-4xl md:text-5xl font-serif font-bold tracking-tight">
                    Customer Review
                </h2>
                <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            {/* Horizontal Scroll Area */}
            <div 
                ref={scrollRef}
                className="w-full overflow-x-auto pb-24 pt-10 scrollbar-hide no-scrollbar snap-x snap-mandatory"
            >
                <div className="flex gap-2 md:gap-12 w-max mx-auto items-center">
                    {/* Spacers only for mobile to allow edge items to reach center */}
                    <div className="w-[35vw] md:hidden flex-shrink-0" />
                    
                    {REVIEWS.map((review, idx) => (
                        <ReviewCard key={idx} src={review.src} alt={review.alt} />
                    ))}
                    
                    <div className="w-[35vw] md:hidden flex-shrink-0" />
                </div>
            </div>
            
            {/* Background Decorative Shadow/Glow - Reduced blur for better performance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/5 blur-[80px] pointer-events-none rounded-full -z-0"></div>
        </section>
    );
};

const ReviewCard = ({ src, alt }: { src: string, alt: string }) => {
    return (
        <motion.div 
            initial={{ scale: 0.85, opacity: 0.3 }}
            whileInView={{ scale: 1.1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="flex-shrink-0 snap-center z-10"
        >
            <div className="h-[380px] md:h-[520px] rounded-[1.25rem] md:rounded-[1.5rem] border-[3px] md:border-[4px] border-white overflow-hidden bg-[#0b141a] shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative mx-1 md:mx-0">
                <img 
                    src={src} 
                    alt={alt} 
                    className="h-full w-auto object-contain" 
                />
                
                {/* Inner Shadow Overlay */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]"></div>
            </div>
        </motion.div>
    );
};
