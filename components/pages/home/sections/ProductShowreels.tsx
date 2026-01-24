import React, { useState } from 'react';

const PRODUCT_SHOWCASE = [
    { id: "showreel_1", title: "Premium Menu Collection 2024", thumbnail: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&q=80" },
    { id: "showreel_2", title: "Luxury Business Cards", thumbnail: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80" },
    { id: "showreel_3", title: "Interactive QR Solutions", thumbnail: "https://images.unsplash.com/photo-1595079676614-88bcc498835b?w=500&q=80" },
    { id: "showreel_4", title: "Restaurant Ambience Design", thumbnail: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&q=80" },
    { id: "showreel_5", title: "Digital Marketing Assets", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80" },
];

export const ProductShowreels: React.FC = () => {
    return (
        <section className="bg-black py-20 relative overflow-hidden font-sans border-t border-zinc-900">
            {/* Header */}
            <div className="text-center mb-16 relative z-10 px-4">
                <h2 className="text-white text-4xl md:text-5xl font-serif font-bold tracking-tight mb-2">
                    Product Showreels
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
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

            {/* Scroll Container */}
            <div className="flex overflow-x-auto pb-12 px-4 md:px-12 gap-6 snap-x snap-mandatory scrollbar-hide no-scrollbar items-start justify-start md:justify-center">
                {PRODUCT_SHOWCASE.map((video, idx) => (
                    <div key={idx} className="flex-shrink-0 snap-center">
                        <VideoCard video={video} index={idx} />
                    </div>
                ))}
            </div>
        </section>
    );
};

const VideoCard = ({ video, index }: { video: any, index: number }) => {
    // Shared component logic with CustomerVideoReviews, but tailored content
    return (
        <div className="w-[280px] h-[500px] bg-zinc-900 rounded-2xl overflow-hidden relative group cursor-pointer border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-orange-500/10">
            {/* Thumbnail Image */}
            <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

            {/* Top Right Actions */}
            <div className="absolute top-4 right-4 flex flex-col gap-4 text-white z-10 opacity-100">
                <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                </div>
            </div>

            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-12 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-white">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-[10px] font-bold">CH</div>
                    <span className="text-sm font-medium">COLOR HUT</span>
                    {/* View Product Label instead of Subscribe */}
                    <span className="bg-white/10 backdrop-blur text-white border border-white/20 text-[10px] font-bold px-2 py-1 rounded-full">Coming Soon</span>
                </div>
                <p className="text-sm line-clamp-2 font-light text-gray-200">{video.title}</p>
            </div>
        </div>
    );
}
