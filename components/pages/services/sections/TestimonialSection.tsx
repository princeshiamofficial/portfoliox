import React from 'react';

const REVIEWS = [
    {
        name: "Rafid Ahsan",
        role: "CEO of Barir Bazar",
        img: "https://xtrecy.com/wp-content/uploads/2024/02/review1-150x150.jpg",
        text: "এক্সট্রেসির সাথে আমরা কাজ করছি প্রায় ৩ বছর যাবত, সব সময়ই ভালো সেবা পেয়েছি. আমাদের বিজনেস গ্রো করতে অনেক হেল্প পেয়েছি।"
    },
    {
        name: "Abrar Rafi",
        role: "Founder of Elegant Printing",
        img: "https://xtrecy.com/wp-content/uploads/2024/02/review2-150x150.jpg",
        text: "অ্যাড রান হবার পর আজ দুইদিনে ৭ হাজার টাকা সেল আলহামদুলিল্লাহ অন্যান্য পোস্টেও রিচ ভালো। আপনাদের সার্ভিস যথেষ্ট প্রফেশনাল এবং সন্তোষজনক। আমি পুরোপুরিভাবে সন্তুষ্ট"
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