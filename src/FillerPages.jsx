import React from 'react';

// --- PUBLIC PAGES NAVBAR ---
const PublicNav = ({ navigate }) => (
    <nav className="w-full px-8 py-6 flex justify-between items-center bg-[#1a2b3c] shadow-md z-50 shrink-0">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('landing')}>
            <svg className="w-7 h-7 text-[#008b8b]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 5l5.5 13h-11L12 7z" /></svg>
            <span className="font-serif font-semibold text-2xl tracking-tight text-white">GovEagle</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-semibold text-white/90 items-center">
            <button onClick={() => navigate('landing')} className="hover:text-[#008b8b] transition-colors py-2">Platform</button>

            {/* Solutions Dropdown */}
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

            {/* Resources Dropdown */}
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

        <button onClick={() => navigate('scanner')} className="px-6 py-2.5 text-sm font-bold bg-[#008b8b] text-white hover:bg-white hover:text-[#1a2b3c] transition-colors duration-300 rounded">
            Access Workspace →
        </button>
    </nav>
);

// --- PRIVATE PAGES NAVBAR (Scanner Workspace) ---
const PrivateNav = ({ navigate }) => (
    <nav className="w-full px-8 py-6 flex justify-between items-center bg-[#1a2b3c] shadow-md z-50 shrink-0">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('landing')}>
            <svg className="w-7 h-7 text-[#008b8b]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 5l5.5 13h-11L12 7z" /></svg>
            <span className="font-serif font-semibold text-2xl tracking-tight text-white">GovEagle</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-semibold text-white/90 items-center">
            <button onClick={() => navigate('scanner')} className="hover:text-[#008b8b] transition-colors py-2">Scanner Node</button>
            <button onClick={() => navigate('audit')} className="hover:text-[#008b8b] transition-colors py-2">Audit Logs</button>

            {/* Settings Dropdown */}
            <div className="relative group">
                <button className="hover:text-[#008b8b] transition-colors flex items-center gap-1 py-2 cursor-pointer">
                    Settings <span className="text-[10px] transition-transform duration-300 group-hover:rotate-180">▼</span>
                </button>
                <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="w-56 bg-white rounded shadow-xl border border-slate-200 overflow-hidden py-1">
                        <button onClick={() => navigate('settings')} className="w-full text-left px-4 py-3 text-sm text-[#1a2b3c] font-medium hover:bg-slate-50 hover:text-[#008b8b] transition-colors">Engine Preferences</button>
                        <button onClick={() => navigate('settings')} className="w-full text-left px-4 py-3 text-sm text-[#1a2b3c] font-medium hover:bg-slate-50 hover:text-[#008b8b] transition-colors">Access Control</button>
                        <button onClick={() => navigate('settings')} className="w-full text-left px-4 py-3 text-sm text-[#1a2b3c] font-medium hover:bg-slate-50 hover:text-[#008b8b] transition-colors">System Diagnostics</button>
                    </div>
                </div>
            </div>
        </div>

        <button onClick={() => navigate('landing')} className="px-6 py-2.5 text-sm font-bold bg-white text-[#1a2b3c] hover:bg-[#008b8b] hover:text-white transition-colors duration-300 rounded">
            Exit Workspace
        </button>
    </nav>
);

// --- FILLER PAGE COMPONENTS ---
export const Solutions = ({ navigate }) => (
    <div className="min-h-screen flex flex-col bg-[#f4f1eb] page-transition">
        <PublicNav navigate={navigate} />
        <main className="flex-1 flex flex-col items-center pt-24 px-6 text-center">
            <h1 className="font-serif text-5xl font-bold text-[#1a2b3c] mb-6">Government Solutions</h1>
            <p className="text-lg text-[#1a2b3c]/70 max-w-2xl mb-12">Tailored artificial intelligence modules designed specifically for the Ministry of Home Affairs.</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
                {['Border Control', 'Internal Security', 'Digital KYC'].map((title) => (
                    <div key={title} className="bg-white p-8 border border-slate-200 rounded shadow-sm text-left">
                        <h3 className="text-xl font-bold text-[#1a2b3c] mb-3">{title}</h3>
                        <p className="text-sm text-slate-500">Deploy neural networks at checkpoints to verify document authenticity in under 3 seconds using edge computing.</p>
                    </div>
                ))}
            </div>
        </main>
    </div>
);

export const AboutUs = ({ navigate }) => (
    <div className="min-h-screen flex flex-col bg-[#f4f1eb] page-transition">
        <PublicNav navigate={navigate} />
        <main className="flex-1 flex flex-col items-center pt-24 px-6 text-center">
            <h1 className="font-serif text-5xl font-bold text-[#1a2b3c] mb-6">About Project SIH26188</h1>
            <p className="text-lg text-[#1a2b3c]/70 max-w-3xl mb-8">Developed for the Smart India Hackathon 2026. Our mission is to bridge the gap between legacy verification systems and modern generative AI threats.</p>
            <div className="bg-white p-10 border border-slate-200 rounded shadow-sm max-w-3xl text-left">
                <h3 className="font-bold text-[#008b8b] mb-4 uppercase tracking-widest text-sm">Core Architecture</h3>
                <ul className="space-y-4 text-[#1a2b3c]">
                    <li><strong>Optical Character Recognition (OCR):</strong> Extracts text with 99.8% accuracy.</li>
                    <li><strong>Error Level Analysis (ELA):</strong> Detects manipulated pixels and Photoshop artifacts.</li>
                    <li><strong>Facial Biometrics:</strong> Maps 128 nodal points to verify identity against databases.</li>
                </ul>
            </div>
        </main>
    </div>
);

export const Resources = ({ navigate }) => (
    <div className="min-h-screen flex flex-col bg-[#f4f1eb] page-transition">
        <PublicNav navigate={navigate} />
        <main className="flex-1 flex flex-col items-center pt-24 px-6 text-center">
            <h1 className="font-serif text-5xl font-bold text-[#1a2b3c] mb-6">Documentation & API</h1>
            <p className="text-lg text-[#1a2b3c]/70 max-w-2xl mb-12">Integrate the GovEagle screening node directly into your existing infrastructure.</p>
            <div className="bg-[#1a2b3c] text-left p-8 rounded w-full max-w-2xl shadow-lg">
                <code className="text-[#008b8b] block mb-4">// Example Node.js Implementation</code>
                <code className="text-white block">const response = await GovEagle.scan(document);<br />console.log(response.authenticityScore);</code>
            </div>
        </main>
    </div>
);

export const AuditLogs = ({ navigate }) => (
    <div className="min-h-screen flex flex-col bg-[#f4f1eb] page-transition">
        <PrivateNav navigate={navigate} />
        <main className="flex-1 p-10 max-w-6xl mx-auto w-full">
            <h2 className="font-serif text-3xl font-bold text-[#1a2b3c] mb-8">System Audit Logs</h2>
            <div className="bg-white rounded border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#1a2b3c] text-white">
                            <th className="p-4 font-semibold text-sm">Timestamp</th>
                            <th className="p-4 font-semibold text-sm">Doc Type</th>
                            <th className="p-4 font-semibold text-sm">Operator ID</th>
                            <th className="p-4 font-semibold text-sm">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { time: '2026-09-05 14:32:11', type: 'Passport', op: 'Agent_042', status: 'VERIFIED' },
                            { time: '2026-09-05 14:15:09', type: 'National ID', op: 'Agent_042', status: 'FRAUD' },
                            { time: '2026-09-05 13:58:44', type: 'Visa', op: 'Agent_019', status: 'VERIFIED' },
                        ].map((log, i) => (
                            <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                                <td className="p-4 text-sm text-slate-600">{log.time}</td>
                                <td className="p-4 text-sm font-bold text-[#1a2b3c]">{log.type}</td>
                                <td className="p-4 text-sm text-slate-500">{log.op}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 text-xs font-bold rounded ${log.status === 'VERIFIED' ? 'bg-[#e0f2f1] text-[#008b8b]' : 'bg-red-100 text-red-700'}`}>
                                        {log.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    </div>
);

export const Settings = ({ navigate }) => (
    <div className="min-h-screen flex flex-col bg-[#f4f1eb] page-transition">
        <PrivateNav navigate={navigate} />
        <main className="flex-1 p-10 max-w-4xl mx-auto w-full">
            <h2 className="font-serif text-3xl font-bold text-[#1a2b3c] mb-8">Engine Configuration</h2>
            <div className="bg-white rounded border border-slate-200 p-8 shadow-sm space-y-6">

                <div className="flex justify-between items-center border-b border-slate-100 pb-6">
                    <div>
                        <div className="font-bold text-[#1a2b3c] text-lg">Deep Scan ELA</div>
                        <div className="text-sm text-slate-500">Enable intensive pixel analysis (increases scan time by 1.2s)</div>
                    </div>
                    <div className="w-12 h-6 bg-[#008b8b] rounded-full relative cursor-pointer">
                        <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow"></div>
                    </div>
                </div>

                <div className="flex justify-between items-center border-b border-slate-100 pb-6">
                    <div>
                        <div className="font-bold text-[#1a2b3c] text-lg">Cross-reference Databases</div>
                        <div className="text-sm text-slate-500">Ping Interpol and UIDAI servers automatically</div>
                    </div>
                    <div className="w-12 h-6 bg-[#008b8b] rounded-full relative cursor-pointer">
                        <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow"></div>
                    </div>
                </div>

                <button className="px-6 py-3 bg-red-50 text-red-600 font-bold rounded border border-red-200 hover:bg-red-100 transition-colors">
                    Purge Local Cache
                </button>
            </div>
        </main>
    </div>
);