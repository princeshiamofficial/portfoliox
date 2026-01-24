import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    FolderOpen,
    MessageSquare,
    Settings,
    LogOut,
    X,
    Users,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const ADMIN_NAV_ITEMS = [
    { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { label: 'Projects', path: '/admin/projects', icon: FolderOpen },
    { label: 'Customers', path: '/admin/customers', icon: Users },
    { label: 'Messages', path: '/admin/messages', icon: MessageSquare },
    { label: 'Settings', path: '/admin/settings', icon: Settings },
];

interface AdminSidebarProps {
    isSidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    handleLogout: () => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ isSidebarOpen, setSidebarOpen, handleLogout }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    return (
        <aside className={`
            fixed md:static inset-y-0 left-0 z-50 bg-white border-r border-slate-200 
            transform transition-all duration-500 ease-in-out flex flex-col
            ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'}
            ${isCollapsed ? 'w-20' : 'w-72'}
        `}>
            {/* Logo Area */}
            <div className={`h-24 flex items-center transition-all duration-500 overflow-hidden ${isCollapsed ? 'px-5' : 'px-8'}`}>
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
                    <span className="font-bold text-white tracking-tighter text-lg">CH</span>
                </div>
                {!isCollapsed && (
                    <div className="ml-4 animate-in fade-in slide-in-from-left-2 duration-500">
                        <span className="text-xl font-bold tracking-tight block text-slate-900 border-none">Color Hut</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Admin Portal</span>
                    </div>
                )}
                <button
                    className="ml-auto md:hidden text-slate-400 hover:text-slate-900 transition-colors"
                    onClick={() => setSidebarOpen(false)}
                >
                    <X size={20} />
                </button>
            </div>

            {/* Collapse Toggle Button (Desktop Only) */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="hidden md:flex absolute -right-3 top-12 w-6 h-6 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500 transition-all z-50 shadow-sm"
            >
                {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </button>

            {/* Navigation */}
            <nav className={`flex-1 overflow-y-auto overflow-x-hidden py-4 space-y-2 transition-all duration-500 ${isCollapsed ? 'px-3' : 'px-4'}`}>
                <div className={`mb-4 transition-all duration-500 ${isCollapsed ? 'px-2' : 'px-4'}`}>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                        {isCollapsed ? '···' : 'Menu'}
                    </span>
                </div>
                {ADMIN_NAV_ITEMS.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/admin'}
                        onClick={() => setSidebarOpen(false)}
                        className={({ isActive }) => `
                            flex items-center rounded-2xl transition-all duration-300 group relative
                            ${isCollapsed ? 'justify-center py-3.5' : 'px-4 py-3.5 gap-3'}
                            ${isActive
                                ? 'bg-orange-500 text-white shadow-xl shadow-orange-500/20 font-semibold'
                                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                            }
                        `}
                    >
                        {({ isActive }) => (
                            <>
                                <item.icon size={20} className={`shrink-0 ${isActive ? 'text-white' : 'group-hover:text-orange-500 transition-colors'}`} />
                                {!isCollapsed && (
                                    <span className="animate-in fade-in slide-in-from-left-2 duration-500 whitespace-nowrap">
                                        {item.label}
                                    </span>
                                )}

                                {/* Tooltip for Collapsed State */}
                                {isCollapsed && (
                                    <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-[100] whitespace-nowrap shadow-xl">
                                        {item.label}
                                    </div>
                                )}
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* Footer / Logout */}
            <div className={`border-t border-slate-100 transition-all duration-500 ${isCollapsed ? 'p-3' : 'p-6'}`}>
                <button
                    onClick={handleLogout}
                    className={`flex items-center text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-all duration-300 group relative
                        ${isCollapsed ? 'justify-center py-3.5 w-full' : 'px-4 py-3.5 gap-3 w-full'}
                    `}
                >
                    <LogOut size={20} className="shrink-0 group-hover:translate-x-1 transition-transform" />
                    {!isCollapsed && <span className="font-semibold animate-in fade-in slide-in-from-left-2 duration-500">Sign Out</span>}

                    {/* Tooltip for Logout */}
                    {isCollapsed && (
                        <div className="absolute left-full ml-4 px-3 py-2 bg-red-600 text-white text-xs rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-[100] whitespace-nowrap shadow-xl">
                            Sign Out
                        </div>
                    )}
                </button>
            </div>
        </aside>
    );
};
