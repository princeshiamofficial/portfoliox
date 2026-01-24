import React, { useState } from 'react';
import { Send, Check, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    designation: '',
    businessType: '',
    address: '',
    note: ''
  });

  // PASTE YOUR GOOGLE APPS SCRIPT URL HERE
  const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!SCRIPT_URL || SCRIPT_URL.includes("YOUR_GOOGLE_APPS_SCRIPT_URL")) {
      alert("Please configure the Google Apps Script URL in ContactForm.tsx");
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Critical for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        designation: '',
        businessType: '',
        address: '',
        note: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error!', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-24 relative" id="requirment">
      <div className="max-w-[1290px] mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bengali text-3xl md:text-4xl font-bold text-dark mb-3">আপনার তথ্য দিয়ে ফর্ম সাবমিট করুন</h2>
          <p className="font-bengali text-gray-500">আমরা দ্রুত আপনার সাথে যোগাযোগ করবো</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-2xl md:p-12 p-6 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/60 relative overflow-hidden ring-1 ring-white/80">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-purple-500 to-primary"></div>

          {status === 'success' ? (
            <div className="py-12 text-center animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} strokeWidth={3} />
              </div>
              <h3 className="font-bengali text-2xl font-bold text-dark mb-2">সফলভাবে সাবমিট হয়েছে!</h3>
              <p className="font-bengali text-gray-500 text-lg">আপনার তথ্যের জন্য ধন্যবাদ। আমরা দ্রুত আপনার সাথে যোগাযোগ করছি।</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="group">
                  <label className="block font-bengali text-gray-700 font-medium mb-2 group-focus-within:text-primary transition-colors">আপনার নাম</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                    placeholder="Ex: আব্দুল আউয়াল"
                  />
                </div>
                <div className="group">
                  <label className="block font-bengali text-gray-700 font-medium mb-2 group-focus-within:text-primary transition-colors">ফোন নাম্বার</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
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
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                    placeholder="Ex: মালিক, ম্যানেজার"
                  />
                </div>
                <div className="group">
                  <label className="block font-bengali text-gray-700 font-medium mb-2 group-focus-within:text-primary transition-colors">ব্যবসার ধরন</label>
                  <input
                    type="text"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                    placeholder="Ex: রেস্টুরেন্ট, পার্লার, রিসোর্ট"
                  />
                </div>
              </div>

              <div className="mb-8 group">
                <label className="block font-bengali text-gray-700 font-medium mb-2 group-focus-within:text-primary transition-colors">ঠিকানা</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                  placeholder="আপনার ঠিকানা লিখুন..."
                />
              </div>

              <div className="mb-8 group">
                <label className="block font-bengali text-gray-700 font-medium mb-2 group-focus-within:text-primary transition-colors">নোট</label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm resize-none"
                  placeholder="আপনার কি ধরনের মেনু চাচ্ছেন, কোম্পানির ধরন, আপনার গ্রাহক কে - এই তথ্যগুলো লিখুন..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="font-bengali bg-primary hover:bg-primary-dark text-white px-12 py-4 rounded-full font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 mx-auto w-full md:w-auto group text-lg relative overflow-hidden disabled:opacity-70 disabled:pointer-events-none"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {status === 'loading' ? (
                      <>
                        প্রসেস হচ্ছে...
                        <Loader2 size={18} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        সাবমিট করুন
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
                </button>
                {status === 'error' && (
                  <p className="font-bengali text-red-500 mt-4 animate-fade-in">দুঃখিত! কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।</p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};