
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
    { q: "কাজ সম্পন্ন করতে কত সময় লাগবে?", a: "আপনার প্যাকেজের উপর নিরভর করে একটি লোগো করতে সর্বনিম্ন ২ দিন থেকে ৫ দিনের মধ্যে হয়ে যাবে। কিন্তু আপনার ফিডব্যাক নেওয়ার পর রিভিশন দিয়ে ফাইনাল লোগো পেতে আর ১/২ দিন বেশী সময় লাগবে। আর যদি আপনার খুবি আর্জেন্ট ডিজাইন প্রয়োজন হয় সে ক্ষেত্রে আলোচনা সাপেক্ষে কিছু টাকা বেশী দিয়ে দ্রুত লোগো করে নিতে পারবেন।" },
    { q: "ঢাকার বাইরে অবস্থান করলে কোনো সমস্যা হবে কি?", a: "আমরা সবসময়ই আমাদের ক্লায়েন্টদের খুশি রাখতে চেষ্টা করি এবং তাদের মন মত ভালো মানের ডিজাইন করে দেই লোগোর ক্ষেত্রে আপনি প্যাকেজ ভেদে সর্বনিম্ন ২ থেকে ৪ টি আলাদা আলাদা কনসেপ্ট পাবেন। এছাড়াও প্যাকেজ ভেদে রয়েছে ৩ টি থেকে আনলিমিটেড রিভিশনের সুযোগ। যদি এর পর আপনার লোগো ভালো না লাগে তাহলে কিছু টাকা আলাদা ভাবে আপনি দিয়ে নতুন কনসেপ্ট করাতে পারেন।" },
    { q: "ওপেনিংয়ের কতদিন আগে অর্ডার দিতে হবে?", a: "আমরা সবসময় উইনিক কাজ করার চেষ্টা করি। তাই আমাদের থেকে লোগো করানোর পর আপনি চাইলে গুগল ইমেজ সার্চ করে যাচাই করে নিতে পারেন আপনার লোগো কপি কিনা।" },
    { q: "ডিজাইন অনলাইনে হবে, নাকি সরাসরি বসে করতে হবে?", a: "অনলাইন জগতে আপনার ব্যবসা শুরু করার জন্য যা যা প্রয়োজন আপনি সবি পাবেন আমাদের কাছে। ফেসবুক পেজ সেটআপ , গুগল অ্যাড ক্যাম্পেইন, ওয়েবসাইট ডেভেলপমেন্ট থেকে শুরু করে আপনার যা যা প্রয়োজন সবি পাবেন আমাদের কাছে।" },
    { q: "ডেলিভারি আপনারা দেবেন, নাকি আমাদের নিতে হবে?", a: "আমরা প্রিন্টিং সার্ভিস দেইনা, তবে আপনি চাইলে আমরা আপনাকে আপনার ডিজাইন কোথা থেকে প্রিন্ট করতে পারেন সেই ঠিকানা দিয়ে দিতে পারবো।" },
    { q: "আপনারা কী কী অতিরিক্ত সাপোর্ট দেন?", a: "আমাদের সার্ভিস অর্ডার করার সিস্টেম অটোমেটিক, আপনার যে প্যাকেজ প্রয়োজন আপনি সেই প্যাকেজ টি সিলেক্ট করে সর্বমোট খরছের ৫০% এডভান্স করে দিবেন। সাইটে দেওয়া বিকাশ, নগদ নাম্বারে ।" },
    { q: "মেনুর ছবি কি আমাদের দিতে হবে?", a: "আমরা প্রিন্টিং সার্ভিস দেইনা, তবে আপনি চাইলে আমরা আপনাকে আপনার ডিজাইন কোথা থেকে প্রিন্ট করতে পারেন সেই ঠিকানা দিয়ে দিতে পারবো।" },
    { q: "মেনু লিস্টের কোনো গাইডলাইন কি পাব?", a: "আমাদের সার্ভিস অর্ডার করার সিস্টেম অটোমেটিক, আপনার যে প্যাকেজ প্রয়োজন আপনি সেই প্যাকেজ টি সিলেক্ট করে সর্বমোট খরছের ৫০% এডভান্স করে দিবেন। সাইটে দেওয়া বিকাশ, নগদ নাম্বারে ।" }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white/50">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
         <div className="text-center mb-12">
             <h6 className="font-bengali text-2xl font-bold">
                 মেনু ডিজাইন সংক্রান্ত <span className="text-primary">প্রস্ন এবং উত্তর</span>
             </h6>
         </div>

         <div className="space-y-4">
             {FAQS.map((faq, idx) => (
                 <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:shadow-md">
                     <button 
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50/50 transition-colors text-left"
                     >
                         <span className="font-bengali font-semibold text-dark text-lg pr-4">{faq.q}</span>
                         <span className={`text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                             {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                         </span>
                     </button>
                     <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                     >
                         <div className="p-5 pt-0 font-bengali text-gray-600 leading-relaxed border-t border-gray-100 mt-2 bg-gray-50/30">
                             {faq.a}
                         </div>
                     </div>
                 </div>
             ))}
         </div>
      </div>
    </section>
  );
};
