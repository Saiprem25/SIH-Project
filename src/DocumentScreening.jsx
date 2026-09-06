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
            <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E2E4E8] shadow-sm">
                <h2 className="text-xl font-bold text-[#1A1F1D] mb-2">Neural Document Screening Node</h2>
                <p className="text-sm text-[#5F6864] mb-6">Upload identity files to analyze metadata, OCR fields, and ELA.</p>

                <div onClick={() => fileInputRef.current.click()} className="border-2 border-dashed border-[#E2E4E8] bg-[#F4F5F3] rounded-xl p-10 text-center cursor-pointer hover:border-[#0F6E56] transition-all">
                    <div className="text-base font-bold text-[#1A1F1D]">{file ? file.name : 'Click to Upload Document'}</div>
                    <input type="file" ref={fileInputRef} onChange={(e) => handleFile(e.target.files[0])} className="hidden" />
                </div>

                <div className="mt-6 flex justify-end">
                    <button onClick={runAIScan} disabled={!file || isScanning} className={`px-8 py-3 rounded-lg font-bold text-sm text-white transition-all shadow-md ${(!file || isScanning) ? 'bg-[#E2E4E8] cursor-not-allowed shadow-none' : 'bg-[#0F6E56] hover:bg-[#0D5A46]'}`}>
                        {isScanning ? 'Processing...' : 'Process Document'}
                    </button>
                </div>
            </div>

            {results && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 fade-in">
                    <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E2E4E8] shadow-sm">
                        <h3 className="text-sm font-bold text-[#5F6864] uppercase mb-4">Preview</h3>
                        <div className="bg-[#F4F5F3] rounded-xl p-2 h-64 w-full flex items-center justify-center border border-[#E2E4E8]">
                            <img src={previewSrc} className="max-h-full object-contain rounded" alt="Preview" />
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E2E4E8] shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-sm font-bold text-[#5F6864] uppercase">Report</h3>
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FAECE7] text-[#712813]">FRAUD DETECTED</span>
                            </div>
                            <div className="space-y-2">
                                <div className="text-xs font-bold text-[#5F6864] uppercase tracking-wider">Extracted Data</div>
                                {Object.entries(results.ocrData).map(([k, v]) => (
                                    <div key={k} className="flex justify-between text-sm bg-[#F4F5F3] px-3 py-2 rounded border border-[#E2E4E8]">
                                        <span className="text-[#5F6864] font-semibold">{k}</span>
                                        <span className="text-[#1A1F1D] font-medium" dangerouslySetInnerHTML={{ __html: v.includes('(Tampered)') ? v.replace('(Tampered)', '<span class="text-[#712813] font-bold ml-1 bg-[#FAECE7] px-1 rounded text-xs">(Tampered)</span>') : v }}></span>
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