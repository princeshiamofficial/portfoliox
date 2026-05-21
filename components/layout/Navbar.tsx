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
    { name: 'Services', href: '/services/', hasDropdown: false },
    { name: 'About Us', href: '/about/', hasDropdown: false },
    { name: 'Contact Us', href: '/contact-us/', hasDropdown: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div
        className="pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between w-full mt-0 max-w-[1290px] mx-0 lg:mx-4 bg-white/90 backdrop-blur-md border-b border-gray-200/80 lg:border lg:border-white/40 shadow-card rounded-none lg:rounded-b-2xl py-3 px-6 lg:px-8"
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://colorhutbd.xyz/image/logo.png"
            alt="Xtrecy Logo"
            className="h-7 md:h-8 w-auto object-contain"
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
          <Link to="/#requirment" className="bg-primary hover:bg-primary-dark text-white px-7 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-block">
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Backdrop (not glassy, solid opacity) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden pointer-events-auto"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-[320px] bg-white z-50 lg:hidden flex flex-col p-6 shadow-2xl pointer-events-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <img
                  src="https://colorhutbd.xyz/image/logo.png"
                  alt="Xtrecy Logo"
                  className="h-7 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-dark hover:bg-gray-100 rounded-full transition-all"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 flex-grow">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 ${
                      location.pathname === link.href
                        ? 'bg-orange-50 text-primary'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    <span className="text-gray-400 group-hover:text-primary transition-colors">→</span>
                  </Link>
                ))}
              </div>

              {/* Footer / CTA in Drawer */}
              <div className="pt-6 border-t border-gray-100">
                <Link
                  to="/#requirment"
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center py-4 rounded-xl font-bold transition-all shadow-md active:scale-95 text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};