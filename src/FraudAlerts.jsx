import React, { useState, useEffect } from 'react';

export default function FraudAlerts() {
    const alerts = [
        { type: 'Synthetic Identity (Deepfake)', origin: 'Port of Entry Checkpoint Alpha', detail: 'Neural networks detected 12 distinct anomalies in facial nodal mapping. The embedded passport photo was procedurally generated, failing UIDAI liveliness checks.', risk: 'Critical', color: 'bg-red-600' },
        { type: 'Metadata Stripping & ELA Failure', origin: 'Digital KYC Gateway', detail: 'Error Level Analysis revealed uniform compression artifacts inconsistent with authentic JPEG scans. Document date field was digitally altered post-capture.', risk: 'High', color: 'bg-orange-500' },
        { type: 'Format Forgery', origin: 'Internal HR Verification', detail: 'Optical Character Recognition flagged non-standard typography in the UID field. Font kerning does not match official government-issued ID templates.', risk: 'Medium', color: 'bg-yellow-500' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % alerts.length);
        }, 2800);
        return () => clearInterval(timer);
    }, [alerts.length]);

    return (
        <div className="max-w-5xl mx-auto fade-in">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
                Active Global Fraud Alerts
            </h2>

            <div className="bg-slate-900 rounded-3xl p-10 min-h-[400px] flex items-center shadow-2xl relative overflow-hidden border border-slate-700">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600"></div>

                {/* PPT Style Slide */}
                <div key={currentIndex} className="ppt-slide w-full">
                    <div className="flex items-center gap-4 mb-6">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-lg ${alerts[currentIndex].color}`}>
                            {alerts[currentIndex].risk} Risk
                        </span>
                        <span className="text-slate-400 text-sm font-medium tracking-wide border-l border-slate-700 pl-4">
                            Origin: {alerts[currentIndex].origin}
                        </span>
                    </div>

                    <h3 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                        {alerts[currentIndex].type}
                    </h3>
                    <p className="text-xl text-slate-300 leading-relaxed font-light border-l-4 border-red-500 pl-6">
                        {alerts[currentIndex].detail}
                    </p>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-10 flex gap-2">
                    {alerts.map((_, idx) => (
                        <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-red-500' : 'w-2 bg-slate-700'}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}