import React from 'react';

const DEPARTMENTS = [
    {
        id: 'crm',
        title: 'Customer Relationship',
        description: 'Building strong connections and ensuring customer satisfaction through dedicated support.',
        icon: (
            <svg className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
    },
    {
        id: 'graphic',
        title: 'Graphics Design',
        description: 'Creative branding, logos, restaurant menus, and marketing materials that stand out.',
        icon: (
            <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
        image: "https://images.unsplash.com/photo-1626785774573-4b7993143a26?w=800&q=80"
    },
    {
        id: 'logistics',
        title: 'Logistics',
        description: 'Efficient supply chain solutions and reliable delivery management strategies.',
        icon: (
            <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
        ),
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
    },
    {
        id: 'photo',
        title: 'Photography',
        description: 'Professional product, event, and portrait photography capturing moments perfectly.',
        icon: (
            <svg className="w-8 h-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80"
    },
    {
        id: 'video',
        title: 'Videography',
        description: 'Cinematic video production, editing, and storytelling for your brand.',
        icon: (
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        image: "https://images.unsplash.com/photo-1574717432707-c6780961dba4?w=800&q=80"
    },
    {
        id: 'marketing',
        title: 'Digital Marketing',
        description: 'Strategic social media management, SEO, and paid campaigns to grow your audience.',
        icon: (
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
        ),
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    }
];

export const OurDepartments: React.FC = () => {
    return (
        <section className="bg-black py-24 relative overflow-hidden font-sans border-t border-zinc-900">
            {/* Header */}
            <div className="text-center mb-16 relative z-10 px-4">
                <h2 className="text-white text-4xl md:text-5xl font-serif font-bold tracking-tight mb-2">
                    Our Departments
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                    We offer a comprehensive suite of digital services to help your business thrive in the modern landscape.
                </p>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DEPARTMENTS.map((dept, idx) => (
                        <div
                            key={dept.id}
                            className="group relative h-[300px] rounded-3xl overflow-hidden cursor-pointer bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center"
                        >
                            {/* Icon Container */}
                            <div className="w-20 h-20 rounded-full bg-black/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner ring-1 ring-white/5 group-hover:ring-white/10">
                                {dept.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                                {dept.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs group-hover:text-gray-300 transition-colors">
                                {dept.description}
                            </p>

                            {/* Bottom Hover Line */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
