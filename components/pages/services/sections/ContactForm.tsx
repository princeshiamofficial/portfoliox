import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    designation: '',
    businessType: '',
    address: '',
    note: ''
  });

  // GOOGLE APPS SCRIPT URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwLA9KyU8aIwQ33rDSTkhgyFxxIP5NH_voe4Da1W3kuF13SyMrlvHw042sz58Jn1GZv/exec";

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
      // Sending data to Google Sheets via Apps Script
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setStatus('success');

      // Redirect to Thank You page
      navigate('/thank-you');

    } catch (error) {
      console.error('Error!', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-16 relative" id="requirment">
      <div className="max-w-[1290px] mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-bengali text-2xl md:text-3xl font-bold text-dark mb-2">আপনার তথ্য দিয়ে ফর্ম সাবমিট করুন</h2>
          <p className="font-bengali text-sm md:text-base text-gray-500">আমরা দ্রুত আপনার সাথে যোগাযোগ করবো</p>
        </div>

        <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-2xl md:p-8 p-6 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-white/60 relative overflow-hidden ring-1 ring-black/5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-orange-400 to-primary"></div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5">
              <div className="group">
                <label className="block font-bengali text-gray-700 text-sm font-medium mb-1.5 group-focus-within:text-primary transition-colors">আপনার নাম</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-light/50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                  placeholder="Ex: আব্দুল আউয়াল"
                />
              </div>
              <div className="group">
                <label className="block font-bengali text-gray-700 text-sm font-medium mb-1.5 group-focus-within:text-primary transition-colors">ফোন নাম্বার</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-light/50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                  placeholder="Ex: 01800000000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="group">
                <label className="block font-bengali text-gray-700 text-sm font-medium mb-1.5 group-focus-within:text-primary transition-colors">পদবি</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                  className="w-full bg-light/50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                  placeholder="Ex: মালিক, ম্যানেজার"
                />
              </div>
              <div className="group">
                <label className="block font-bengali text-gray-700 text-sm font-medium mb-1.5 group-focus-within:text-primary transition-colors">ব্যবসার ধরন</label>
                <input
                  type="text"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full bg-light/50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                  placeholder="Ex: রেস্টুরেন্ট, পার্লার"
                />
              </div>
            </div>

            <div className="group">
              <label className="block font-bengali text-gray-700 text-sm font-medium mb-1.5 group-focus-within:text-primary transition-colors">ঠিকানা</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full bg-light/50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                placeholder="আপনার ঠিকানা লিখুন..."
              />
            </div>

            <div className="group">
              <label className="block font-bengali text-gray-700 text-sm font-medium mb-1.5 group-focus-within:text-primary transition-colors">নোট (ঐচ্ছিক)</label>
              <input
                type="text"
                name="note"
                value={formData.note}
                onChange={handleChange}
                className="w-full bg-light/50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                placeholder="আপনার রিকোয়ারমেন্টস এখানে লিখুন..."
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="font-bengali bg-primary hover:bg-primary-dark text-white px-10 py-3.5 rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2.5 w-full group text-base relative overflow-hidden disabled:opacity-70 disabled:pointer-events-none"
              >
                <span className="relative z-10 flex items-center gap-2.5">
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
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              </button>
              {status === 'error' && (
                <p className="font-bengali text-red-500 mt-3 text-sm text-center animate-fade-in">দুঃখিত! কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};