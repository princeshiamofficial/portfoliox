import React from 'react';
import { Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

export const OwnerInfo: React.FC = () => {
    return (
        <section id="owner-info" className="py-24 bg-gray-50 relative overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Profile Image */}
                    <div className="w-full md:w-5/12 relative group" data-aos="fade-right">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://i.ibb.co.com/3YCYRZtD/007e61cc-15d3-4e0f-8581-c5d13073f783-Picsart-Background-Remover.png"
                                alt="Abdul Awal - Founder of Color Hut Creative Agency"
                                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700 bg-gray-200"
                            />

                            {/* Overlay Card */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 text-white">
                                <h3 className="text-2xl font-bold mb-1">Abdul Awal</h3>
                                <p className="text-orange-400 font-medium">Founder</p>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-orange-100 rounded-3xl -z-0"></div>
                    </div>

                    {/* Bio Content */}
                    <div className="w-full md:w-7/12" data-aos="fade-left">
                        <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">
                            The Visionary
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                            Crafting Memories <br /> Through Flavor.
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                "I believe that food is more than just sustenance; it's a language that connects us all. My
                                journey began in a small family kitchen, where the aroma of spices sparked a lifelong
                                passion."
                            </p>
                            <p>
                                With over 15 years of culinary exploration, my mission is to bring you dishes that tell a
                                story—blending tradition with modern innovation to create something truly unforgettable.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row items-center gap-8">
                            <img
                                src="/signature.svg"
                                alt="Signature"
                                className="h-12 opacity-60"
                            />

                            <div className="h-8 w-px bg-gray-300 hidden sm:block"></div>

                            <div className="flex items-center gap-6">
                                <a href="mailto:alex@colorhut.com" className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors group">
                                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-orange-500 transition-all">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                                        </svg>
                                    </div>
                                    <span className="font-medium text-sm">alex@colorhut.com</span>
                                </a>

                                {/* Facebook */}
                                <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                                    </svg>
                                </a>

                                {/* Twitter */}
                                <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 2.084-4.678 3.327-7.296 3.327-.474 0-.945-.027-1.409-.081 2.628 1.688 5.688 2.674 8.972 2.674 10.768 0 16.657-8.921 16.657-16.657 0-.256-.007-.513-.02-.767.902-.695 1.684-1.565 2.459-2.454z"></path>
                                    </svg>
                                </a>
                                {/* LinkedIn */}
                                <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
