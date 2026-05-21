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
          className="lg:hidden text-gray-700 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden pointer-events-auto"
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[360px] bg-white/98 backdrop-blur-md z-50 lg:hidden flex flex-col p-6 shadow-2xl border-l border-gray-100/50 pointer-events-auto"
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-gray-100/80">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img
                    src="https://colorhutbd.xyz/image/logo.png"
                    alt="Xtrecy Logo"
                    className="h-7 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-100 text-gray-700 active:scale-95 transition-all"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links with staggered animation */}
              <div className="flex flex-col gap-1 flex-grow">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 + 0.1 }}
                    >
                      <Link
                        to={link.href}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-300 ${
                          isActive
                            ? 'bg-orange-50/75 text-primary'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="w-4 h-4 -rotate-90 opacity-40 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.06 + 0.15 }}
                  className="mt-6 px-1"
                >
                  <Link
                    to="/#requirment"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all duration-300 text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Sign up</span>
                  </Link>
                </motion.div>
              </div>

              {/* Extra Info / Footer in drawer */}
              <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col gap-4 text-center">
                <div className="text-[11px] text-gray-400">
                  <p>© 2026 Color Hut. All rights reserved.</p>
                  <p className="mt-0.5">Premium Restaurant & Parlour Menu</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};