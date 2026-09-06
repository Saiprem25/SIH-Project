import React, { useState, useRef } from 'react';
import { runDocumentScreening } from './apiService';

export default function DocumentScreening() {
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
        <div className="max-w-5xl mx-auto space-y-6 fade-in">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-[#1e293b] mb-2">Neural Document Screening Node</h2>
                <p className="text-sm text-slate-500 mb-6">Upload identity files to analyze metadata, OCR fields, and Error Level Analysis (ELA).</p>

                <div onClick={() => fileInputRef.current.click()} className="border-2 border-dashed border-slate-300 bg-slate-50 rounded-xl p-10 text-center cursor-pointer hover:bg-blue-50 hover:border-blue-500 transition-all">
                    <svg className="w-10 h-10 text-blue-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                    <div className="text-base font-bold text-[#1e293b]">{file ? file.name : 'Click to Upload or Drag & Drop Document'}</div>
                    <div className="text-xs text-slate-400 mt-1">Supports JPG, PNG, PDF up to 10MB</div>
                    <input type="file" ref={fileInputRef} onChange={(e) => handleFile(e.target.files[0])} className="hidden" />
                </div>

                <div className="mt-6 flex justify-end">
                    <button onClick={runAIScan} disabled={!file || isScanning} className={`px-8 py-3 rounded-lg font-bold text-sm text-white transition-all shadow-md ${(!file || isScanning) ? 'bg-slate-300 cursor-not-allowed shadow-none' : 'bg-blue-600 hover:bg-blue-700'}`}>
                        {isScanning ? 'Running Neural Analysis...' : 'Process Document'}
                    </button>
                </div>
            </div>

            {results && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 fade-in">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 self-start">Source Preview</h3>
                        <div className="bg-slate-100 rounded-xl p-2 h-64 w-full flex items-center justify-center border border-slate-200">
                            <img src={previewSrc} alt="Preview" className="max-h-full object-contain rounded" />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Analysis Report</h3>
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 border border-red-200">FRAUD DETECTED</span>
                            </div>
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-sm py-2 border-b border-slate-100">
                                    <span className="text-slate-500 font-medium">Confidence Score</span>
                                    <span className="font-bold text-[#1e293b]">{results.confidenceScore}</span>
                                </div>
                                <div className="flex justify-between text-sm py-2 border-b border-slate-100">
                                    <span className="text-slate-500 font-medium">ELA Metadata Match</span>
                                    <span className="font-bold text-red-600">{results.tamperingScore}</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Extracted Data</div>
                                {Object.entries(results.ocrData).map(([k, v]) => (
                                    <div key={k} className="flex justify-between text-sm bg-slate-50 px-3 py-2 rounded border border-slate-100">
                                        <span className="text-slate-500 font-semibold">{k}</span>
                                        <span className="text-slate-800 font-medium" dangerouslySetInnerHTML={{ __html: v.includes('(Tampered)') ? v.replace('(Tampered)', '<span class="text-red-600 font-bold ml-1 bg-red-50 px-1 rounded text-xs">(Tampered)</span>') : v }}></span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}