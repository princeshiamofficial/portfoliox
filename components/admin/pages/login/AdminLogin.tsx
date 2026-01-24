import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Check } from 'lucide-react';

export const AdminLogin: React.FC = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, validation and auth logic goes here.
        navigate('/admin');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 text-slate-900 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] font-sans">
            <div className="w-full max-w-[400px]">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg shadow-black/10">
                        <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45"></div>
                    </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-[2.5rem] p-10 border border-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04),0_8px_10px_-6px_rgba(0,0,0,0.04)]">
                    <header className="text-center mb-10">
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Color Hut Admin</h1>
                        <p className="text-slate-500 text-sm mt-1 font-medium">Sign in to manage your portfolio</p>
                    </header>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                                Email Address
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-black transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full bg-[#fdfdfd] border border-[#e2e8f0] rounded-xl pl-12 pr-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-black focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,0,0,0.03)] font-medium text-sm transition-all"
                                    placeholder="admin@colorhut.com"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                                    Password
                                </label>
                            </div>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-black transition-colors">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full bg-[#fdfdfd] border border-[#e2e8f0] rounded-xl pl-12 pr-12 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-black focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,0,0,0.03)] font-medium text-sm transition-all"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-black transition-colors focus:outline-none"
                                >
                                    {!showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center group cursor-pointer w-fit">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="peer h-5 w-5 opacity-0 absolute cursor-pointer"
                                />
                                <div className="h-5 w-5 border-2 border-slate-200 rounded-md peer-checked:bg-black peer-checked:border-black transition-all flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white hidden peer-checked:block" strokeWidth={4} />
                                </div>
                                <label
                                    htmlFor="rememberMe"
                                    className="ml-3 text-sm text-slate-500 font-medium cursor-pointer group-hover:text-slate-800 transition-colors"
                                >
                                    Remember Me
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-slate-900 text-white font-semibold py-4 rounded-xl hover:bg-black hover:shadow-xl hover:shadow-black/10 active:scale-[0.98] transition-all duration-200"
                        >
                            Sign In
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
                        Color Hut &copy; 2026
                    </span>
                </div>
            </div>
        </div>
    );
};

