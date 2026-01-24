import React from 'react';

interface MeetingSectionProps {
  onBookMeeting?: () => void;
}

export const MeetingSection: React.FC<MeetingSectionProps> = ({ onBookMeeting }) => {
  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <div className="max-w-[1290px] mx-auto px-4 md:px-6">
        
        {/* Main Container */}
        <div className="relative bg-white border border-orange-50 rounded-[40px] md:rounded-[60px] overflow-hidden shadow-soft">
            
            {/* Flex Container */}
            <div className="flex flex-col lg:flex-row items-stretch">
                
                {/* Left Side: Image Area & Pattern */}
                <div className="w-full lg:w-[55%] relative bg-white overflow-hidden min-h-[400px] lg:min-h-[550px]">
                    {/* Background Pattern (Dots) */}
                    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
                        style={{ 
                            backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)', 
                            backgroundSize: '24px 24px'
                        }}>
                    </div>

                    <div className="h-full w-full flex items-end justify-center relative z-10 pt-12 lg:pt-16">
                        
                         {/* Floating Icon: Zoom (Orange Circle) */}
                        <div className="absolute top-[12%] left-[15%] animate-[bounce_3s_infinite] z-30">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#ea580c] rounded-full flex items-center justify-center shadow-xl shadow-orange-200 border-[5px] border-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-white">
                                    <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.94-.94 2.56-.27 2.56 1.06v11.38c0 1.33-1.62 2-2.56 1.06z" />
                                </svg>
                            </div>
                        </div>

                        {/* Floating Icon: Google Meet */}
                        <div className="absolute top-[35%] right-[15%] animate-[bounce_4s_infinite] z-30">
                            <div className="bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-gray-50">
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/1024px-Google_Meet_icon_%282020%29.svg.png" 
                                    alt="Meet" 
                                    className="w-7 h-7 md:w-9 md:h-9"
                                />
                            </div>
                        </div>

                        {/* Main Image */}
                        <img 
                            src="https://colorhutbd.xyz/image/orange-girl2.png" 
                            alt="Meeting" 
                            className="relative z-20 w-auto h-[350px] md:h-[450px] lg:h-[580px] object-contain mb-0 leading-none block" 
                        />
                    </div>
                </div>

                {/* Right Side: Content Card */}
                <div className="w-full lg:w-[45%] bg-[#fff7ed] p-10 md:p-16 flex flex-col justify-center relative z-20">
                    <div className="max-w-lg mx-auto lg:mx-0">
                        {/* Live Badge */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-4 h-4 bg-[#ea580c] rounded-full animate-pulse"></div>
                            <span className="text-[28px] md:text-[32px] font-bold text-[#111827] tracking-tight font-sans leading-none">Live</span>
                        </div>
                        
                        {/* Title */}
                        <h2 className="font-bengali text-[32px] md:text-[42px] font-bold text-[#ea580c] mb-6 leading-[1.2]">
                            একটি মিটিং করতে চান?
                        </h2>
                        
                        {/* Description */}
                        <p className="font-bengali text-[#4b5563] text-[17px] md:text-[18px] leading-[1.7] mb-10">
                            আপনার মেনু নিয়ে আমাদের সাথে সরাসরি কথা বলতে চান? <br className="hidden xl:block"/> 
                            তাহলে এখানে ক্লিক করে একটি গুগোল মিটিং বুক করুন
                        </p>

                        {/* Button */}
                        <a 
                            href="#meeting" 
                            onClick={(e) => {
                                if (onBookMeeting) {
                                    e.preventDefault();
                                    onBookMeeting();
                                }
                            }}
                            className="inline-flex items-center gap-3 bg-white hover:bg-white text-[#1f2937] px-8 py-4 rounded-xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group w-full md:w-auto justify-center md:justify-start cursor-pointer"
                        >
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/1024px-Google_Meet_icon_%282020%29.svg.png" 
                                alt="Icon" 
                                className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
                            />
                            <span className="font-bengali font-bold text-[18px]">মিটিং বুক করুন</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};