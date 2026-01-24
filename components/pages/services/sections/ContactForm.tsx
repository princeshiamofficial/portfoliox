import React from 'react';
import { Send, Check } from 'lucide-react';

export const ContactForm: React.FC = () => {
  return (
    <section className="py-24 relative" id="requirment">
      <div className="max-w-[1290px] mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bengali text-3xl md:text-4xl font-bold text-dark mb-3">আপনার তথ্য দিয়ে ফর্ম সাবমিট করুন</h2>
          <p className="font-bengali text-gray-500">আমরা দ্রুত আপনার সাথে যোগাযোগ করবো</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-2xl md:p-12 p-6 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/60 relative overflow-hidden ring-1 ring-white/80">
          {/* Decorative glow */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-purple-500 to-primary"></div>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="group">
                <label className="block font-bengali text-gray-700 font-medium mb-2 group-focus-within:text-primary transition-colors">আপনার নাম</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                  placeholder="Ex: Abdul Awal"
                />
              </div>
              <div className="group">
                <label className="block font-bengali text-gray-700 font-medium mb-2 group-focus-within:text-primary transition-colors">ফোন নাম্বার</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                  placeholder="Ex: 01800000000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="group">
                <label className="block font-bengali text-gray-700 font-medium mb-2 group-focus-within:text-primary transition-colors">পদবি</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                  placeholder="আপনার পদবি লিখুন..."
                />
              </div>
              <div className="group">
                <label className="block font-bengali text-gray-700 font-medium mb-2 group-focus-within:text-primary transition-colors">ব্যবসার ধরন</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                  placeholder="আপনার ব্যবসার ধরন লিখুন (উদাঃ রেস্টুরেন্ট)"
                />
              </div>
            </div>

            <div className="mb-8 group">
              <label className="block font-bengali text-gray-700 font-medium mb-2 group-focus-within:text-primary transition-colors">ঠিকানা</label>
              <input
                type="text"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                placeholder="আপনার ঠিকানা লিখুন..."
              />
            </div>

            <div className="mb-8 group">
              <label className="block font-bengali text-gray-700 font-medium mb-2 group-focus-within:text-primary transition-colors">আপনার রিকোয়ারমেন্টস বিস্তারিত লিখুন</label>
              <textarea
                rows={5}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm resize-none"
                placeholder="আপনার কি ধরনের মেনু চাচ্ছেন, কোম্পানির ধরন, আপনার গ্রাহক কে - এই তথ্যগুলো লিখুন..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="font-bengali bg-primary hover:bg-primary-dark text-white px-12 py-4 rounded-full font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 mx-auto w-full md:w-auto group text-lg relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  সাবমিট করুন
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};