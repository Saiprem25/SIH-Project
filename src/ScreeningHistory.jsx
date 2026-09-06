import React from 'react';

export default function ScreeningHistory() {
    const historyData = [
        { id: 'SCN-8821', doc: 'Passport_Scan_Front.pdf', type: 'Passport', agent: 'Agent A', status: 'Verified', date: '2026-09-06 09:14 AM' },
        { id: 'SCN-8822', doc: 'Aadhar_Tampered_02.png', type: 'National ID', agent: 'System API', status: 'Flagged', date: '2026-09-06 08:30 AM' },
        { id: 'SCN-8823', doc: 'Driver_License_99.jpg', type: 'Driving License', agent: 'Agent C', status: 'Verified', date: '2026-09-05 16:45 PM' },
        { id: 'SCN-8824', doc: 'Visa_Application_X.pdf', type: 'Visa', agent: 'Agent A', status: 'Manual Review', date: '2026-09-05 14:10 PM' },
    ];

    return (
        <div className="max-w-6xl mx-auto fade-in">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-[#1e293b] mb-1">Global Screening History</h2>
                <p className="text-sm text-slate-500 mb-8">Detailed log of all document verification nodes across the MHA network.</p>

                <div className="grid gap-4">
                    {historyData.map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-xl hover:shadow-md hover:border-blue-200 transition-all">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs ${item.status === 'Verified' ? 'bg-green-500' : item.status === 'Flagged' ? 'bg-red-500' : 'bg-orange-500'
                                    }`}>
                                    {item.status === 'Verified' ? '✓' : item.status === 'Flagged' ? '✕' : '⚠'}
                                </div>
                                <div>
                                    <div className="font-bold text-[#1e293b]">{item.doc}</div>
                                    <div className="text-xs text-slate-500 font-medium">ID: {item.id} • Processed by: {item.agent}</div>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0 flex items-center gap-6">
                                <div className="text-right">
                                    <div className="text-sm font-semibold text-[#1e293b]">{item.type}</div>
                                    <div className="text-xs text-slate-500">{item.date}</div>
                                </div>
                                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors">
                                    View Log
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}