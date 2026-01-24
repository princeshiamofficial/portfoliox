import React from 'react';

export const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-32 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold mb-8">About Us</h1>
                <div className="prose prose-invert lg:prose-xl">
                    <p className="text-gray-300 leading-relaxed">
                        Welcome to our About page. This page is under construction.
                    </p>
                </div>
            </div>
        </div>
    );
};
