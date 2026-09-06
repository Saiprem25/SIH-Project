import React, { useState } from 'react';

export default function Auth({ onLogin }) {
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            onLogin();
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-[#F4F5F3] flex items-center justify-center p-4 sm:p-8 font-sans">
            <div className="w-full max-w-6xl bg-[#FFFFFF] rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[750px] fade-in border border-[#E2E4E8]">

                <div className="lg:w-5/12 bg-[#0B2E2A] text-white p-12 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F6E56]/20 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="relative z-10 flex-1">
                        <div className="flex items-center gap-3 mb-16">
                            <div className="w-10 h-10 bg-[#0F6E56] rounded-xl flex items-center justify-center shadow-lg">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold tracking-wide">DocShield AI</h2>
                                <div className="text-[10px] text-[#E1F5EE] font-bold tracking-[0.2em] uppercase mt-0.5">Verify • Detect • Protect</div>
                            </div>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            Smarter Verification <br />for a Safer Tomorrow
                        </h1>
                        <p className="text-white/80 text-sm leading-relaxed mb-10 pr-4">
                            DocShield uses AI to detect forged and tampered documents, ensuring trust and security in every verification.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />, title: "AI-Powered", sub: "Fraud Detection" },
                                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />, title: "Secure & Reliable", sub: "" },
                                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />, title: "Fast Verification", sub: "" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full border border-[#0F6E56] flex items-center justify-center shrink-0">
                                        <svg className="w-4 h-4 text-[#0F6E56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                                    </div>
                                    <div className="text-sm font-medium">
                                        {item.title} <br />
                                        {item.sub && <span className="text-xs text-white/70">{item.sub}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:w-7/12 p-8 lg:p-16 relative flex flex-col justify-center bg-[#FFFFFF]">
                    <div className="absolute top-8 right-10 text-sm font-medium text-[#5F6864]">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button onClick={() => setIsLogin(!isLogin)} className="text-[#0F6E56] font-bold hover:underline">
                            {isLogin ? "Sign Up" : "Sign In"}
                        </button>
                    </div>

                    <div className="max-w-md mx-auto w-full fade-in" key={isLogin ? 'login' : 'register'}>
                        <h2 className="text-3xl font-extrabold text-[#1A1F1D] mb-2">
                            {isLogin ? "Welcome Back" : "Create Your Account"}
                        </h2>
                        <p className="text-sm text-[#5F6864] mb-10">
                            {isLogin ? "Securely access the verification portal to manage documents." : "Join DocShield and be a part of a safer, more secure digital world."}
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {!isLogin && (
                                <div className="flex gap-4">
                                    <input type="text" placeholder="First Name" required className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#E2E4E8] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6E56] text-[#1A1F1D]" />
                                    <input type="text" placeholder="Last Name" required className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#E2E4E8] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6E56] text-[#1A1F1D]" />
                                </div>
                            )}
                            <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#E2E4E8] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6E56] text-[#1A1F1D]" />
                            <input type="password" placeholder="Password" required className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#E2E4E8] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6E56] text-[#1A1F1D]" />
                            {!isLogin && (
                                <input type="password" placeholder="Confirm Password" required className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#E2E4E8] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6E56] text-[#1A1F1D]" />
                            )}
                            <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-[#0F6E56] text-white font-bold rounded-lg hover:bg-[#0D5A46] transition-all shadow-md disabled:bg-slate-400 mt-2">
                                {isLoading ? 'Processing...' : (isLogin ? 'Sign In →' : 'Create Account →')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}