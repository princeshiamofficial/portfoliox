import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export const BaseLayout: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-bengali text-slate-900">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
