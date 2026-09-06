import React, { useState } from 'react';

export default function LandingPage({ navigate }) {
    const [isVerifying, setIsVerifying] = useState(false);

    const handleEnterClick = () => {
        setIsVerifying(true);
        setTimeout(() => navigate('scanner'), 1000);
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#f4f1eb] page-transition">

            {/* Dark Navigation Bar */}
            <nav className="w-full px-8 py-6 flex justify-between items-center bg-[#1a2b3c] shadow-md z-50">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('landing')}>
                    <svg className="w-7 h-7 text-[#008b8b]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 5l5.5 13h-11L12 7z" /></svg>
                    <span className="font-serif font-semibold text-2xl tracking-tight text-white">GovEagle</span>
                </div>

                <div className="hidden md:flex gap-8 text-sm font-semibold text-white/90 items-center">
                    <button onClick={() => navigate('landing')} className="hover:text-[#008b8b] transition-colors py-2 border-b-2 border-transparent">Platform</button>

                    <div className="relative group">
                        <button className="hover:text-[#008b8b] transition-colors flex items-center gap-1 py-2 cursor-pointer">
                            Solutions <span className="text-[10px] transition-transform duration-300 group-hover:rotate-180">▼</span>
                        </button>
                        <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                            <div className="w-56 bg-white rounded shadow-xl border border-slate-200 overflow-hidden py-1">
                                <button onClick={() => navigate('solutions')} className="w-full text-left px-4 py-3 text-sm text-[#1a2b3c] font-medium hover:bg-slate-50 hover:text-[#008b8b] transition-colors">Identity Verification</button>
                                <button onClick={() => navigate('solutions')} className="w-full text-left px-4 py-3 text-sm text-[#1a2b3c] font-medium hover:bg-slate-50 hover:text-[#008b8b] transition-colors">Border Security</button>
                                <button onClick={() => navigate('solutions')} className="w-full text-left px-4 py-3 text-sm text-[#1a2b3c] font-medium hover:bg-slate-50 hover:text-[#008b8b] transition-colors">Digital KYC API</button>
                            </div>
                        </div>
                    </div>

                    <button onClick={() => navigate('about')} className="hover:text-[#008b8b] transition-colors py-2">About us</button>

                    <div className="relative group">
                        <button className="hover:text-[#008b8b] transition-colors flex items-center gap-1 py-2 cursor-pointer">
                            Resources <span className="text-[10px] transition-transform duration-300 group-hover:rotate-180">▼</span>
                        </button>
                        <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                            <div className="w-56 bg-white rounded shadow-xl border border-slate-200 overflow-hidden py-1">
                                <button onClick={() => navigate('resources')} className="w-full text-left px-4 py-3 text-sm text-[#1a2b3c] font-medium hover:bg-slate-50 hover:text-[#008b8b] transition-colors">Documentation</button>
                                <button onClick={() => navigate('resources')} className="w-full text-left px-4 py-3 text-sm text-[#1a2b3c] font-medium hover:bg-slate-50 hover:text-[#008b8b] transition-colors">API Reference</button>
                                <button onClick={() => navigate('resources')} className="w-full text-left px-4 py-3 text-sm text-[#1a2b3c] font-medium hover:bg-slate-50 hover:text-[#008b8b] transition-colors">Case Studies</button>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleEnterClick}
                    className="px-6 py-2.5 text-sm font-bold bg-[#008b8b] text-white hover:bg-white hover:text-[#1a2b3c] transition-colors duration-300 rounded"
                >
                    Access Workspace →
                </button>
            </nav>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-12 pb-32">
                <div className="text-[#008b8b] text-sm font-bold tracking-widest uppercase mb-6 flex gap-3">
                    <span>SIH26188</span> • <span>Level-2 Clearance</span> • <span>AI Ready</span>
                </div>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1a2b3c] mb-6 leading-tight max-w-5xl mx-auto">
                    AI for High <br /> Performance Screening
                </h1>

                <p className="text-[#1a2b3c]/80 text-lg max-w-2xl mb-10 font-medium">
                    One system. One source. One truth. From raw document uploads and facial matching to final neural verification.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                    <button
                        onClick={handleEnterClick}
                        disabled={isVerifying}
                        className={`w-full sm:w-auto px-10 py-4 text-base font-bold rounded transition-colors duration-300 flex justify-center items-center gap-2 ${isVerifying ? 'bg-slate-500 text-white cursor-not-allowed' : 'bg-[#1a2b3c] text-white hover:bg-[#008b8b] shadow-lg'
                            }`}
                    >
                        {isVerifying ? 'Authenticating...' : 'Launch Scanner →'}
                    </button>

                    <button onClick={() => navigate('resources')} className="w-full sm:w-auto px-10 py-4 text-base font-bold bg-transparent text-[#1a2b3c] border-2 border-[#1a2b3c] hover:bg-[#1a2b3c] hover:text-white transition-colors duration-300 rounded shadow-md">
                        See Documentation
                    </button>
                </div>
            </main>

            {/* Bottom Logo Strip */}
            <div className="w-full bg-white py-8 mt-auto border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center opacity-60 grayscale flex-wrap gap-8 text-[#1a2b3c]">
                    <span className="font-bold text-xl tracking-widest">[MHA]</span>
                    <span className="font-serif font-bold text-xl italic">SIH 2026</span>
                    <span className="font-bold text-xl uppercase tracking-tighter">OCR ENGINE</span>
                    <span className="font-bold text-xl">GovCons</span>
                    <span className="font-serif font-bold text-xl">SecureNode</span>
                </div>
            </div>
        </div>
    );
}