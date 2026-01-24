import React from 'react';
import { motion } from 'framer-motion';

export const HeroSlideshow: React.FC = () => {
    const [activeSlide, setActiveSlide] = React.useState(0);

    const slides = [
        "/agency_slide_1.png",
        "/design_slide_2.png",
        "/menu_slide_3.png",
        "/parlor_hero.png",
        "/studio_hero.png"
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // Slightly slower for better readability
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section id="home" className="relative h-screen h-[100dvh] flex items-center justify-center px-6 overflow-hidden pt-16 md:pt-20">
            {/* Slideshow */}
            <div id="slides" className="absolute inset-0 md:rounded-xl md:shadow-2xl overflow-hidden">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt="Hero Slide"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${index === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                            }`}
                    />
                ))}
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:rounded-xl pointer-events-none z-10">
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-4xl text-center text-white" data-aos="fade-up" data-aos-delay="300">
                <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                    Bring <span className="text-orange-500">Your Brand</span><br />to Life with Color Hut
                </h1>
                <p className="text-base md:text-xl mb-8 md:mb-10 max-w-xl mx-auto drop-shadow-md px-4 opacity-90">
                    Stunning, user-focused designs crafted to make your brand unforgettable and stand out in a crowded market.
                </p>
                <a href="#contact" className="inline-block bg-orange-500 hover:bg-orange-600 transition text-white font-bold py-4 px-12 rounded-full shadow-lg drop-shadow-lg transform hover:scale-105 active:scale-95">
                    Start a Project
                </a>
            </div>

            {/* Navigation dots */}
            <div id="dots" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30" aria-label="Slideshow navigation" role="tablist">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        aria-label={`Slide ${index + 1}`}
                        role="tab"
                        aria-selected={index === activeSlide}
                        className={`h-2 rounded-full transition-all border border-white/20 ${index === activeSlide ? 'bg-orange-500 w-8 scale-110' : 'bg-white/30 w-2 hover:bg-white/50'
                            }`}
                        onClick={() => setActiveSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
};
