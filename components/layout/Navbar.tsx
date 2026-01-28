import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'Services', href: '/services', hasDropdown: false },
    { name: 'About Us', href: '/about', hasDropdown: false },
    { name: 'Contact Us', href: '/contact-us', hasDropdown: false },
    { name: 'Blog', href: '/blog', hasDropdown: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div
        className={`pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between w-full ${scrolled
          ? 'mt-4 max-w-[1290px] mx-4 bg-white/90 backdrop-blur-md border border-white/40 shadow-card rounded-full py-3 px-6 md:px-8'
          : 'bg-transparent py-6 max-w-[1290px] px-4 md:px-6'
          }`}
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://colorhutbd.xyz/image/logo.png"
            alt="Xtrecy Logo"
            className="h-10 md:h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-600">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group h-full flex items-center">
              <Link
                to={link.href}
                className={`flex items-center gap-1 py-2 hover:text-primary transition-colors ${location.pathname === link.href ? 'text-primary' : ''
                  }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                )}
              </Link>

              {link.hasDropdown && (
                <div className="absolute top-full left-0 w-64 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                    {['Graphics Design', 'Facebook Marketing', 'Packaging', 'Website Development'].map((item) => (
                      <Link key={item} to="/services" className="block px-5 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors">
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link to="/services#requirment" className="bg-primary hover:bg-primary-dark text-white px-7 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-block">
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-700 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col pt-24 px-6 gap-4 pointer-events-auto"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="border-b border-gray-100 pb-3 text-lg font-medium text-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/services#requirment"
              className="bg-primary text-white text-center px-6 py-3 rounded-lg mt-4 font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign up
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};