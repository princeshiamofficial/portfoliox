import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#0B0F19] pt-24 pb-12 relative overflow-hidden font-sans border-t border-white/5">
      {/* Decorative Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none -mt-32"></div>
      
      <div className="max-w-[1290px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
            
            {/* Brand Column (Span 4) */}
            <div className="lg:col-span-5 space-y-8">
                <div className="mb-6">
                    {/* Using brightness/invert to ensure logo works on dark background */}
                    <img 
                        src="https://colorhutbd.xyz/image/logo.png" 
                        alt="Color Hut" 
                        className="h-12 w-auto brightness-0 invert opacity-90"
                    />
                </div>
                <p className="text-gray-400 leading-relaxed pr-0 lg:pr-12 max-w-md">
                    We specialize in creating unique brand identities through professional design services. From menus to marketing materials, we bring your vision to life with precision and creativity.
                </p>
                
                <div className="flex flex-col gap-5 mt-6">
                    <div className="flex items-start gap-4 text-gray-400 group">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 ring-1 ring-white/10 group-hover:ring-primary">
                             <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <span className="text-sm leading-relaxed pt-2 group-hover:text-gray-200 transition-colors">House No. 14, Road No. A, Block A, Sontek, South Kajla, Jatrabari, Dhaka - 1236</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 group">
                         <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 ring-1 ring-white/10 group-hover:ring-primary">
                             <i className="fas fa-phone-alt"></i>
                        </div>
                        <span className="text-sm group-hover:text-gray-200 transition-colors">+8801919-760626</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 group">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 ring-1 ring-white/10 group-hover:ring-primary">
                             <i className="fas fa-envelope"></i>
                        </div>
                        <span className="text-sm group-hover:text-gray-200 transition-colors">colorhut.official@gmail.com</span>
                    </div>
                </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-2">
                <h4 className="text-white font-bold text-lg mb-8 relative inline-flex flex-col">
                    Company
                    <span className="w-1/2 h-1 bg-primary rounded-full mt-2"></span>
                </h4>
                <ul className="space-y-4">
                    {['About', 'Service', 'Career', 'Investor'].map((item) => (
                        <li key={item}>
                            <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-sm">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

             <div className="lg:col-span-2">
                <h4 className="text-white font-bold text-lg mb-8 relative inline-flex flex-col">
                    Products
                    <span className="w-1/2 h-1 bg-primary rounded-full mt-2"></span>
                </h4>
                <ul className="space-y-4">
                    {['Customer Database', 'Data Analytics', 'Cyber Security', 'E-Commerce'].map((item) => (
                        <li key={item}>
                            <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-sm">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

             <div className="lg:col-span-3">
                <h4 className="text-white font-bold text-lg mb-8 relative inline-flex flex-col">
                    Support
                    <span className="w-1/2 h-1 bg-primary rounded-full mt-2"></span>
                </h4>
                <ul className="space-y-4">
                    <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-sm">Customer Service</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-sm">Knowledge Base</a></li>
                    <li>
                      <a 
                        href="#privacy" 
                        onClick={scrollToTop}
                        className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-sm"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#refund" 
                        onClick={scrollToTop}
                        className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-sm"
                      >
                        Refund Policy
                      </a>
                    </li>
                </ul>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm font-medium">© 2025 COLOR HUT. All rights reserved.</p>
            
            <div className="flex gap-4">
                {[
                    { icon: "fab fa-facebook-f", href: "https://www.facebook.com/colorhutbd", color: "hover:bg-[#1877F2] hover:border-[#1877F2]" },
                    { icon: "fab fa-instagram", href: "https://www.instagram.com/colorhutofficial", color: "hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:border-transparent" },
                    { icon: "fab fa-tiktok", href: "https://www.tiktok.com/@colorhutofficial", color: "hover:bg-white hover:text-black hover:border-white" },
                    { icon: "fab fa-youtube", href: "https://www.youtube.com/@ColorHut_Official", color: "hover:bg-[#FF0000] hover:border-[#FF0000]" },
                ].map((social, i) => (
                    <a 
                        key={i} 
                        href={social.href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg hover:shadow-primary/20 ${social.color}`}
                    >
                        <i className={social.icon}></i>
                    </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};