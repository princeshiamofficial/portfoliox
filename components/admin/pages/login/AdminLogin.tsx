import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const AdminLogin: React.FC = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simple authentication check
        setTimeout(() => {
            if (email === 'admin@colorhut.com' && password === 'admin123') {
                localStorage.setItem('admin_auth', 'true');
                navigate('/admin');
            } else {
                setError('Invalid credentials. Please try again.');
                setIsLoading(false);
                setTimeout(() => setError(''), 3000);
            }
        }, 800);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 font-sans selection:bg-orange-500/30 overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-red-200/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-[440px] relative z-10"
            >
                {/* Logo & Header */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-gradient-to-br from-orange-500 to-red-600 shadow-2xl shadow-orange-600/20 mb-6"
                    >
                        <Lock className="text-white w-8 h-8" strokeWidth={2.5} />
                    </motion.div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Welcome Back</h1>
                    <p className="text-slate-500 font-medium">Secure Admin Access Only</p>
                </div>

                {/* Card Container */}
                <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-2xl shadow-slate-200/50 relative overflow-hidden group">
                    {/* Error Message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-2xl text-xs font-bold text-center mb-6"
                        >
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Identity</label>
                            <div className="relative group/input">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-orange-500 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 font-medium transition-all"
                                    placeholder="admin@colorhut.com"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Security Key</label>
                            <div className="relative group/input">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-orange-500 transition-colors">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-12 py-4 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 font-medium transition-all"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between px-1">
                            <label className="flex items-center gap-3 cursor-pointer group/check">
                                <div className="relative flex items-center justify-center">
                                    <input type="checkbox" className="peer absolute opacity-0 w-full h-full cursor-pointer" />
                                    <div className="w-5 h-5 border-2 border-slate-200 rounded-lg group-hover/check:border-slate-300 transition-colors peer-checked:bg-orange-500 peer-checked:border-orange-500 flex items-center justify-center">
                                        <Check size={12} className="text-white font-bold" strokeWidth={4} />
                                    </div>
                                </div>
                                <span className="text-sm text-slate-500 font-medium group-hover/check:text-slate-800 transition-all">Keep me locked in</span>
                            </label>
                            <button type="button" className="text-xs font-bold text-slate-500 hover:text-orange-500 transition-colors">Reset Key?</button>
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-orange-600/20 hover:shadow-orange-600/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 group"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-3 border-white/20 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <span>Access Panel</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Dashboard Footer Info */}
                <div className="mt-10 text-center space-y-4">
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em]">Color Hut Systems &bull; v2.0</p>
                    <div className="flex justify-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Network Secure</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

