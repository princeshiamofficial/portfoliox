import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, Navigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { AdminSidebar } from './AdminSidebar';

export const AdminLayout: React.FC = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Simple Authentication Check
    const isAuthenticated = localStorage.getItem('admin_auth') === 'true';

    const handleLogout = () => {
        localStorage.removeItem('admin_auth');
        navigate('/admin/login');
    };

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return (
        <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
            {/* Background Gradient */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,88,12,0.03),transparent_50%)] pointer-events-none"></div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <AdminSidebar
                isSidebarOpen={isSidebarOpen}
                setSidebarOpen={setSidebarOpen}
                handleLogout={handleLogout}
            />

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 bg-transparent relative z-10 overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 md:px-12">
                    <button
                        className="md:hidden text-slate-400 p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu size={24} />
                    </button>

                    <div className="flex items-center gap-6 ml-auto">
                        <div className="flex items-center gap-4 pl-6 border-l border-slate-200">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-slate-900 leading-none">Developer Mode</p>
                                <p className="text-[10px] text-orange-600 font-bold uppercase tracking-widest mt-1">Super Admin</p>
                            </div>
                            <div className="w-11 h-11 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-orange-500 font-bold shadow-sm">
                                A
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-12">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
};
