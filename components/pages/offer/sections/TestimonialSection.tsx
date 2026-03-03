import React from 'react';

const REVIEWS = [
    {
        name: "Mr. Rafiqul Islam",
        role: "Owner of Spice Garden Restaurant",
        img: "https://i.ibb.co.com/DHGVkdVX/309160279-469141311926119-4327479981390690669-n.jpg",
        text: "Color Hut এর মেনু কার্ড নিয়ে গ্রাহকরা প্রথমেই impressed! ওয়াটারপ্রুফ কোয়ালিটি—৮ মাস পরেও নতুনের মতো। Professional branding খুঁজলে Color Hut best choice!"
    },
    {
        name: "Farzana Akter",
        role: "CEO of Glam & Glow Beauty Parlour",
        img: "https://i.ibb.co.com/992PMhJj/277788933-104490772231100-82705641693239625-n.jpg",
        text: "Color Hut এর সার্ভিসে আমি মুগ্ধ! তাদের টিমের প্রফেশনালিজম এবং কাজের মান অসাধারণ। আমি তাদের সার্ভিস নিয়ে খুবই সন্তুষ্ট।"
    }
];

export const TestimonialSection: React.FC = () => {
    return (
        <section className="py-20 bg-white relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
            <div className="max-w-[1290px] mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h6 className="font-bengali text-2xl font-bold">
                        আমাদের গ্রাহকদের <span className="text-primary relative inline-block">
                            রিভিউ
                            <svg className="absolute w-full h-2 bottom-0 left-0 text-orange-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="5" fill="none" />
                            </svg>
                        </span>
                    </h6>
                    <div className="flex justify-center gap-1 text-yellow-400 mt-4 text-lg">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {REVIEWS.map((review, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-card transition-all duration-300 group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all"></div>
                                    <img
                                        src={review.img}
                                        alt={review.name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-white relative z-10"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark group-hover:text-primary transition-colors">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.role}</p>
                                </div>
                            </div>
                            <p className="font-bengali text-gray-600 leading-relaxed italic relative z-10">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};