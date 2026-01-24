import React from 'react';

const REVIEWS = [
    {
        name: "Akash Bari Resort",
        date: "20 October 2023",
        messages: [
            { text: "Okay sir", time: "6:14 pm", isUser: false },
            { audio: true, duration: "0:08", time: "2:18 pm", isUser: true },
            { image: true, text: "72 kB", time: "2:21 pm", isUser: true },
            { text: "Coriyar kora hoyece", time: "2:22 pm", isUser: true },
            { text: "Valo hoye che..\nThank you", time: "1:17 pm", isUser: true, isNew: true }
        ]
    },
    {
        name: "Sausage Secret",
        date: "19 October 2023",
        messages: [
            { text: "cash on delivery", time: "6:21 pm", isUser: true },
            { text: "Ok", time: "6:28 pm", isUser: false },
            { text: "sir product hate peyechen?", time: "10:19 am", isUser: false },
            { text: "Yes", time: "10:19 am", isUser: true },
            { text: "Eibar er products looks very good so far", time: "10:20 am", isUser: true },
            { text: "Dhonnobad sir.....next time korle obossoi janaben", time: "12:18 pm", isUser: false },
            { text: "Ok.. We have another work to do", time: "12:23 pm", isUser: true }
        ]
    },
    {
        name: "Quince",
        date: "22 October 2023",
        messages: [
            { text: "G payachi", time: "2:09 pm", isUser: true },
            { text: "But soft copy ta dan please", time: "2:10 pm", isUser: true },
            { text: "Thanks", time: "2:10 pm", isUser: false },
            { text: "G acha", time: "2:10 pm", isUser: false },
            { text: "Alhumdulliah", time: "2:10 pm", isUser: true },
            { text: "Dhonnobad sir....\nPorobortite aro koraite chaile janaben", time: "2:12 pm", isUser: false },
            { text: "Ok", time: "2:22 pm", isUser: true }
        ]
    },
    {
        name: "Wind in Bloom",
        date: "13 August 2023",
        messages: [
            { type: "system", text: "Color Hut changed the group name from 'Wind in bloom' to '0176(Wind in bloom)'" },
            { text: "Assalamu Alaikum sir asha kori valo achen. Amader service ti apnar kemon legeche sir?", time: "10:37 am", isUser: false },
            { text: "Ji valo ami notun kore r o kisu menu banabo next week a ami apnak call debo", time: "10:38 am", isUser: true },
            { text: "Okay sir Thank you", time: "10:38 am", isUser: false }
        ],
        showKeyboard: true
    }
];

export const CustomerReviews: React.FC = () => {
    return (
        <section className="bg-black py-20 relative overflow-hidden font-sans">
            {/* Header */}
            <div className="text-center mb-10 md:mb-16 relative z-10 px-4">
                <h2 className="text-white text-3xl md:text-5xl font-serif font-bold tracking-tight">
                    Customer Review
                </h2>
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            {/* Scroll Container */}
            <div className="flex overflow-x-auto pb-12 px-4 md:px-12 gap-6 snap-x snap-mandatory scrollbar-hide no-scrollbar items-start justify-start md:justify-center">
                {REVIEWS.map((chat, idx) => (
                    <div key={idx} className="flex-shrink-0 snap-center">
                        <PhoneFrame chat={chat} />
                    </div>
                ))}
            </div>
        </section>
    );
};

const PhoneFrame = ({ chat }: { chat: any }) => {
    return (
        <div className="w-[300px] h-[600px] bg-[#0b141a] rounded-[30px] border-8 border-gray-900 overflow-hidden relative shadow-2xl flex flex-col font-sans text-xs">
            {/* Status Bar */}
            <div className="bg-[#008069] h-7 w-full flex items-center justify-between px-4 text-[10px] text-white/90">
                <span>12:00</span>
                <div className="flex gap-1">
                    <div className="w-3 h-3 bg-white/20 rounded-full" />
                    <div className="w-3 h-3 bg-white/20 rounded-full" />
                </div>
            </div>

            {/* App Header */}
            <div className="bg-[#008069] py-2 px-3 flex items-center gap-2 text-white shadow-sm z-10">
                <div className="w-4 h-4 text-white/80">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 overflow-hidden">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{chat.name}</h3>
                    <p className="text-[9px] text-white/80 truncate">tap here for group info</p>
                </div>
                <div className="flex gap-3 text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.9 14.3L15 14.4C14.7 14.5 14.4 14.3 14.2 14L11.7 10.6C11.5 10.3 11.5 9.9 11.7 9.6L12.7 8.3C12.9 8.1 12.9 7.7 12.7 7.4L9.8 3.5C9.5 3.2 9.1 3.2 8.8 3.5L7.2 5.1C6.2 6.2 5.6 7.6 5.6 9C5.6 13.5 9.1 17.3 13.5 17.8C14.7 17.9 15.9 17.6 16.8 16.9L18.8 14.9C19.1 14.6 19.1 14.2 18.8 13.9L15.9 14.3Z" /></svg>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-[#efe7de] bg-[url('https://camo.githubusercontent.com/854b9f7173b2c63eb66f658095b584347c641d9c08bd805073024844391694d4/68747470733a2f2f757365722d696d616765732e67697468756275736572636f6e74656e742e636f6d2f31353037353735392f32383731393134342d38366463306637302d373362312d346363352d626466322d6465323537383666353332632e706e67')] opacity-90 overflow-y-auto p-3 flex flex-col gap-2">

                {/* Date Divider */}
                <div className="flex justify-center mb-2">
                    <span className="bg-[#e1f1f3] text-[#566466] px-2 py-1 rounded-md text-[9px] shadow-sm font-medium uppercase tracking-wide">
                        {chat.date}
                    </span>
                </div>

                {chat.messages.map((msg: any, i: number) => (
                    <div key={i} className={`flex ${msg.type === 'system' ? 'justify-center' : (msg.isUser ? 'justify-start' : 'justify-end')}`}>

                        {msg.type === 'system' ? (
                            <div className="bg-[#ffeb3b]/30 text-[#566466] text-center px-2 py-1 rounded-md text-[9px] max-w-[80%]">
                                {msg.text}
                            </div>
                        ) : (
                            <div className={`
                                max-w-[80%] rounded-lg p-2 shadow-sm text-sm relative
                                ${msg.isUser ? 'bg-white rounded-tr-lg rounded-tl-none' : 'bg-[#d9fdd3] rounded-tl-lg rounded-tr-none'}
                            `}>
                                {msg.image ? (
                                    <div className="flex items-center gap-2 bg-black/5 p-2 rounded mb-1">
                                        <div className="w-6 h-8 bg-gray-400 rounded flex items-center justify-center text-[8px] text-white font-bold uppercase">PDF</div>
                                        <span className="text-gray-700 font-medium">DOCUMENT.pdf</span>
                                    </div>
                                ) : null}

                                {msg.audio ? (
                                    <div className="flex items-center gap-2 min-w-[120px]">
                                        <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-white">▶</div>
                                        <div className="h-1 bg-gray-300 flex-1 rounded-full relative">
                                            <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gray-500 rounded-full" />
                                        </div>
                                        <span className="text-[9px] text-gray-500">{msg.duration}</span>
                                    </div>
                                ) : (
                                    <p className="text-gray-900 leading-snug whitespace-pre-wrap">{msg.text}</p>
                                )}

                                <div className="text-[9px] text-gray-400 text-right mt-1 flex items-center justify-end gap-1">
                                    {msg.time}
                                    {!msg.isUser && <span className="text-[#53bdeb]">✓✓</span>}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Input Bar */}
            {chat.showKeyboard ? (
                <div className="bg-[#f0f2f5] p-2">
                    <div className="bg-white rounded-full px-4 py-2 text-gray-400 mb-2 flex items-center justify-between">
                        <span>Message</span>
                        <div className="flex gap-2 text-gray-500">
                            <span className="rotate-45">📎</span>
                            <span>📷</span>
                        </div>
                    </div>
                    {/* Fake Keyboard */}
                    <div className="bg-[#d1d5db] p-1 pb-4">
                        <div className="flex justify-center gap-1 mb-1">
                            {[..."QWERTYUIOP"].map(k => <div key={k} className="w-7 h-9 bg-white rounded flex items-center justify-center shadow-sm text-sm font-medium">{k}</div>)}
                        </div>
                        <div className="flex justify-center gap-1 mb-1 px-4">
                            {[..."ASDFGHJKL"].map(k => <div key={k} className="w-7 h-9 bg-white rounded flex items-center justify-center shadow-sm text-sm font-medium">{k}</div>)}
                        </div>
                        <div className="flex justify-center gap-1 px-8">
                            <div className="w-9 h-9 bg-gray-300 rounded flex items-center justify-center">⇧</div>
                            {[..."ZXCVBNM"].map(k => <div key={k} className="w-7 h-9 bg-white rounded flex items-center justify-center shadow-sm text-sm font-medium">{k}</div>)}
                            <div className="w-9 h-9 bg-gray-300 rounded flex items-center justify-center">⌫</div>
                        </div>
                        <div className="flex justify-center mt-2">
                            <div className="w-48 h-8 bg-white rounded-full shadow-sm" />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-[#f0f2f5] py-2 px-2 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500">☺</div>
                    <div className="flex-1 bg-white rounded-full py-2 px-4 text-gray-400 flex items-center justify-between shadow-sm">
                        <span>Message</span>
                        <div className="flex gap-3">
                            <span className="rotate-45">📎</span>
                            <span>📷</span>
                        </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#008069] flex items-center justify-center text-white shadow-md">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.66 9 5v6c0 1.66 1.34 3 3 3z" /><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" /></svg>
                    </div>
                </div>
            )}

            {/* System Bar */}
            <div className="h-4 bg-black/10 flex items-center justify-center gap-12">
                <div className="w-4 h-4 text-gray-400">|||</div>
                <div className="w-4 h-4 border border-gray-400 rounded-sm"></div>
                <div className="w-3 h-4 text-gray-400">&lt;</div>
            </div>
        </div>
    );
}
