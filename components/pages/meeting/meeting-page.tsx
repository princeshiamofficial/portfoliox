import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export const MeetingPage: React.FC = () => {
  useEffect(() => {
    // Force cleanup of any existing scripts to ensure fresh load
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="pt-32 pb-20 min-h-screen bg-gray-50/50">
      <div className="max-w-[1290px] mx-auto px-4 md:px-6">
         {/* Back Button */}
         <div className="mb-8">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-medium bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 hover:shadow-md"
            >
                <ArrowLeft size={18} />
                <span>হোমে ফিরে যান</span>
            </a>
         </div>

         <div className="text-center mb-10">
             <h2 className="font-bengali text-3xl md:text-4xl font-bold text-dark mb-4">
                 আপনার মিটিং শিডিউল করুন
             </h2>
             <p className="font-bengali text-gray-500 text-lg">
                 নিচের ক্যালেন্ডার থেকে আপনার সুবিধাজনক সময় বেছে নিন
             </p>
         </div>
         
         <div className="bg-white rounded-3xl shadow-card border border-gray-100 overflow-hidden p-2 md:p-6">
            <div 
                className="calendly-inline-widget w-full" 
                data-url="https://calendly.com/colorhut-official/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
                style={{ minWidth: '320px', height: '700px' }} 
            />
         </div>
      </div>
    </section>
  );
};