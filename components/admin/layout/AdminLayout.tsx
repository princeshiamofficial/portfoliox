import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    FolderOpen,
    MessageSquare,
    Settings,
    LogOut,
    Menu,
    X,
    Users
} from 'lucide-react';

const ADMIN_NAV_ITEMS = [
    { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { label: 'Projects', path: '/admin/projects', icon: FolderOpen },
    { label: 'Customers', path: '/admin/customers', icon: Users },
    { label: 'Messages', path: '/admin/messages', icon: MessageSquare },
    { label: 'Settings', path: '/admin/settings', icon: Settings },
];

export const AdminLayout: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-900 text-white font-sans overflow-hidden">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed md:static inset-y-0 left-0 z-30 w-64 bg-gray-950 border-r border-gray-800 
                transform transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                <div className="flex flex-col h-full">
                    {/* Logo Area */}
                    <div className="h-16 flex items-center px-6 border-b border-gray-800">
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                            <span className="font-bold text-white">CH</span>
                        </div>
                        <span className="text-lg font-bold tracking-tight">Admin Panel</span>
                        <button
                            className="ml-auto md:hidden text-gray-400"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                        {ADMIN_NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === '/admin'}
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) => `
                                    flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                                    ${isActive
                                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20 font-medium'
                                        : 'text-gray-400 hover:bg-gray-900 hover:text-white'
                                    }
                                `}
                            >
                                <item.icon size={20} />
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Footer / Logout */}
                    <div className="p-4 border-t border-gray-800">
                        <button className="flex items-center gap-3 w-full px-3 py-2.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all">
                            <LogOut size={20} />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 bg-gray-900">
                {/* Header */}
                <header className="h-16 bg-gray-950/50 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-4 md:px-8">
                    <button
                        className="md:hidden text-gray-400 p-2"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu size={24} />
                    </button>

                    <div className="flex items-center gap-4 ml-auto">
                        <div className="flex items-center gap-3 pl-4 border-l border-gray-800">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-medium text-white">Administrator</p>
                                <p className="text-xs text-gray-500">Super Admin</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-500 font-bold">
                                A
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
