import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Outlet, useLocation } from 'react-router-dom';

export const BaseLayout: React.FC = () => {
    const location = useLocation();
    const isLuckyDrawPage = location.pathname.includes('/luckydraw');

    return (
        <div className="min-h-screen bg-white font-bengali text-slate-900">
            <Navbar />
            <main>
                <Outlet />
            </main>
            {!isLuckyDrawPage && <Footer />}
        </div>
    );
};
