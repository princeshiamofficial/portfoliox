import React from 'react';
import {
    Users,
    FileText,
    TrendingUp,
    Clock,
    ArrowUpRight,
    Search,
    Filter,
    MoreHorizontal,
    Mail,
    CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

const STATS = [
    { label: 'Total Inquiries', value: '156', icon: Mail, trend: '+12%', color: 'from-blue-500 to-indigo-600' },
    { label: 'New Orders', value: '43', icon: FileText, trend: '+5%', color: 'from-orange-500 to-red-600' },
    { label: 'Active Clients', value: '89', icon: Users, trend: '+18%', color: 'from-emerald-500 to-teal-600' },
    { label: 'Pending Task', value: '07', icon: Clock, trend: '-2%', color: 'from-purple-500 to-pink-600' },
];

const RECENT_SUBMISSIONS = [
    { name: 'Abdul Awal', business: 'Restaurant', date: '2 hours ago', status: 'Pending', amount: '৳১৯৯৯' },
    { name: 'Kader Molla', business: 'Resort', date: '5 hours ago', status: 'In Review', amount: '৳২৯৯৯' },
    { name: 'Sumi Akter', business: 'Parlour', date: 'Yesterday', status: 'Completed', amount: '৳৩৯৯৯' },
    { name: 'Rahat Khan', business: 'Cafe', date: '2 days ago', status: 'Contacted', amount: '৳২৯৯৯' },
    { name: 'Nabil Islam', business: 'Hotel', date: '3 days ago', status: 'Completed', amount: '৳৫৯৯৯' },
];

export const AdminDashboard: React.FC = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
                    <p className="text-slate-500 mt-1">Welcome back, Admin. Here's what's happening today.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-xl border border-slate-200 transition-all flex items-center gap-2 text-sm font-medium shadow-sm">
                        <Filter size={16} />
                        Filter
                    </button>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-xl shadow-lg shadow-orange-600/20 transition-all flex items-center gap-2 text-sm font-bold">
                        <ArrowUpRight size={16} />
                        Export Data
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {STATS.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white border border-slate-200 p-6 rounded-[2rem] hover:border-orange-200 transition-all group relative overflow-hidden shadow-sm hover:shadow-md"
                    >
                        <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity`}></div>

                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg`}>
                                <stat.icon size={22} />
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.trend.startsWith('+') ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                                {stat.trend}
                            </span>
                        </div>

                        <h3 className="text-slate-500 text-sm font-medium">{stat.label}</h3>
                        <div className="flex items-end gap-2 mt-1">
                            <span className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</span>
                            <TrendingUp size={16} className="text-emerald-500 mb-2" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Table Section */}
                <div className="lg:col-span-2 bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
                    <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-900">Recent Submissions</h3>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                            <input
                                type="text"
                                placeholder="Search submissions..."
                                className="bg-slate-50 border border-slate-200 rounded-full pl-10 pr-4 py-2 text-sm text-slate-600 focus:outline-none focus:border-orange-500/50 w-64 transition-all"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-slate-400 text-xs uppercase tracking-widest border-b border-slate-50">
                                    <th className="px-8 py-5 font-semibold">Client Name</th>
                                    <th className="px-8 py-5 font-semibold">Business</th>
                                    <th className="px-8 py-5 font-semibold">Date</th>
                                    <th className="px-8 py-5 font-semibold">Amount</th>
                                    <th className="px-8 py-5 font-semibold">Status</th>
                                    <th className="px-8 py-5 font-semibold"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {RECENT_SUBMISSIONS.map((item, idx) => (
                                    <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-600">
                                                    {item.name.charAt(0)}
                                                </div>
                                                <span className="text-slate-900 font-medium">{item.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 text-slate-500 text-sm">{item.business}</td>
                                        <td className="px-8 py-5 text-slate-400 text-sm">{item.date}</td>
                                        <td className="px-8 py-5 font-bold text-slate-900 text-sm">{item.amount}</td>
                                        <td className="px-8 py-5">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.status === 'Completed' ? 'bg-emerald-100 text-emerald-600' :
                                                    item.status === 'Pending' ? 'bg-orange-100 text-orange-600' :
                                                        'bg-blue-100 text-blue-600'
                                                }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <button className="text-slate-300 hover:text-slate-900 transition-colors">
                                                <MoreHorizontal size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-6 border-t border-slate-50 text-center">
                        <button className="text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors">
                            View All Submissions
                        </button>
                    </div>
                </div>

                {/* Side Card */}
                <div className="space-y-8">
                    {/* Activity Card */}
                    <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-[2.5rem] shadow-xl shadow-orange-500/20 relative overflow-hidden group">
                        <div className="relative z-10 text-white">
                            <h3 className="text-xl font-bold mb-2">Ready to expand?</h3>
                            <p className="text-orange-50/90 text-sm leading-relaxed mb-6">You've reached <span className="text-white font-bold">80%</span> of your monthly target. Keep pushing!</p>
                            <button className="bg-white text-orange-600 px-6 py-2.5 rounded-xl text-sm font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all">
                                Review Goals
                            </button>
                        </div>
                        <CheckCircle2 className="absolute -right-6 -bottom-6 w-32 h-32 text-white/10 group-hover:scale-110 transition-transform" strokeWidth={1} />
                    </div>

                    {/* Quick Analytics Card */}
                    <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Traffic Source</h3>
                        <div className="space-y-5">
                            {[
                                { label: 'Social Media', value: 65, color: 'bg-orange-500' },
                                { label: 'Direct Entry', value: 24, color: 'bg-emerald-500' },
                                { label: 'Referrals', value: 11, color: 'bg-blue-500' },
                            ].map((src, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-slate-500 font-medium">{src.label}</span>
                                        <span className="text-slate-900 font-bold">{src.value}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className={`h-full ${src.color} rounded-full`} style={{ width: `${src.value}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
