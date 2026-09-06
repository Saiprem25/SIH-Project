import React, { useState, useRef } from 'react';
import { runDocumentScreening } from './apiService';

export default function ScannerDashboard({ navigate }) {
    const [file, setFile] = useState(null);
    const [previewSrc, setPreviewSrc] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [results, setResults] = useState(null);
    const fileInputRef = useRef(null);

    const handleFile = (selectedFile) => {
        if (!selectedFile) return;
        setFile(selectedFile);
        setResults(null);
        const reader = new FileReader();
        reader.onload = (e) => setPreviewSrc(e.target.result);
        reader.readAsDataURL(selectedFile);
    };

    const runAIScan = async () => {
        setIsScanning(true);
        try {
            const scanData = await runDocumentScreening(file);
            setResults(scanData);
        } catch (error) {
            console.error(error);
        } finally {
            setIsScanning(false);
        }
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
                    <button onClick={() => navigate('scanner')} className="text-[#008b8b] border-b-2 border-[#008b8b] pb-1">Scanner Node</button>
                    <button onClick={() => navigate('audit')} className="hover:text-[#008b8b] transition-colors py-2">Audit Logs</button>

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

                <button
                    onClick={() => navigate('landing')}
                    className="px-6 py-2.5 text-sm font-bold bg-white text-[#1a2b3c] hover:bg-[#008b8b] hover:text-white transition-colors duration-300 rounded"
                >
                    Exit Workspace
                </button>
            </nav>

            {/* Main Dashboard Content */}
            <main className="flex-1 flex flex-col p-8">
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">

                    {/* Left: Upload Box */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="bg-white rounded shadow-sm p-8 border border-slate-200">
                            <h3 className="font-serif text-2xl font-bold text-[#1a2b3c] mb-6">Document Source</h3>

                            <div
                                onClick={() => fileInputRef.current.click()}
                                className="border-2 border-dashed border-slate-300 bg-[#fbfaf8] rounded p-10 text-center cursor-pointer hover:bg-slate-100 hover:border-[#008b8b] transition-all"
                            >
                                <svg className="w-8 h-8 text-[#008b8b] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                                <div className="text-base font-bold text-[#1a2b3c]">{file ? file.name : 'Upload Document'}</div>
                                <div className="text-sm text-slate-500 mt-1">JPG, PNG, PDF up to 10MB</div>
                                <input type="file" ref={fileInputRef} onChange={(e) => handleFile(e.target.files[0])} className="hidden" />
                            </div>

                            <button
                                onClick={runAIScan}
                                disabled={!file || isScanning}
                                className={`w-full mt-6 text-base font-bold py-4 rounded transition-colors duration-300 flex justify-center items-center gap-2 shadow-md ${(!file || isScanning) ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none' : 'bg-[#1a2b3c] text-white hover:bg-[#008b8b]'
                                    }`}
                            >
                                {isScanning ? 'Processing Neural Scan...' : 'Run Analysis →'}
                            </button>
                        </div>

                        {previewSrc && (
                            <div className="bg-white rounded shadow-sm p-4 border border-slate-200 flex items-center justify-center h-56">
                                <img src={previewSrc} className="max-h-full rounded shadow-sm" alt="Preview" />
                            </div>
                        )}
                    </div>

                    {/* Right: Results Box */}
                    <div className="lg:col-span-7">
                        {results ? (
                            <div className="bg-white rounded shadow-sm p-10 border border-slate-200 h-full">

                                <div className="flex justify-between items-start mb-8 pb-6 border-b border-slate-200">
                                    <h3 className="font-serif text-3xl font-bold text-[#1a2b3c]">Analysis Report</h3>
                                    <div className={`px-4 py-1.5 text-sm font-bold uppercase tracking-widest rounded ${results.status === "AUTHENTIC" ? "bg-[#e0f2f1] text-[#008b8b]" : "bg-red-50 text-red-700 border border-red-200"
                                        }`}>
                                        {results.status === "AUTHENTIC" ? "VERIFIED" : "FRAUD DETECTED"}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-8 mb-10">
                                    <div>
                                        <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Authenticity Score</div>
                                        <div className="text-3xl font-serif text-[#1a2b3c]">{results.confidenceScore}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">ELA Metadata</div>
                                        <div className="text-3xl font-serif text-red-600">{results.tamperingScore}</div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Extracted Data</h4>
                                    <div className="bg-[#fbfaf8] rounded p-6 border border-slate-200 space-y-4">
                                        {Object.entries(results.ocrData).map(([k, v]) => (
                                            <div key={k} className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                                                <span className="text-base font-semibold text-slate-600">{k}</span>
                                                <span className="text-base font-bold text-[#1a2b3c]" dangerouslySetInnerHTML={{
                                                    __html: v.includes('(Tampered)') ? v.replace('(Tampered)', '<span class="text-red-600 ml-2 border border-red-200 bg-red-50 px-2 py-0.5 rounded text-sm">(Tampered)</span>') : v
                                                }}></span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <div className="h-full border-2 border-dashed border-slate-300 rounded flex flex-col items-center justify-center text-slate-400 bg-[#fbfaf8]/50 min-h-[400px]">
                                <p className="font-semibold text-base text-[#1a2b3c]/50">Awaiting document input...</p>
                            </div>
                        )}
                    </div>

                </div>
            </main>
        </div>
    );
}