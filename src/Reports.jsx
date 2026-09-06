import React from 'react';

export default function Reports() {
    const reportData = [
        { sno: 1, type: 'Passport', result: 'Verified', date: '2026-09-06 09:14 AM' },
        { sno: 2, type: 'National ID', result: 'Fraud', date: '2026-09-06 08:30 AM' },
        { sno: 3, type: 'Driving License', result: 'Verified', date: '2026-09-05 16:45 PM' },
        { sno: 4, type: 'Visa', result: 'Manual Review', date: '2026-09-05 14:10 PM' },
        { sno: 5, type: 'PAN Card', result: 'Fraud', date: '2026-09-04 11:22 AM' },
    ];

    return (
        <div className="max-w-5xl mx-auto fade-in">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-xl font-bold text-[#1e293b] mb-1">Compiled Analytics Reports</h2>
                        <p className="text-sm text-slate-500">Structured table data synced from the screening history log.</p>
                    </div>
                    <button className="px-5 py-2 bg-[#1e293b] text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors shadow">
                        Export CSV
                    </button>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">S.No</th>
                                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Document Type</th>
                                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Result</th>
                                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reportData.map((row) => (
                                <tr key={row.sno} className="border-b border-slate-100 hover:bg-slate-50 transition-colors last:border-0">
                                    <td className="p-4 text-sm font-medium text-slate-600">{row.sno}</td>
                                    <td className="p-4 text-sm font-bold text-[#1e293b]">{row.type}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${row.result === 'Verified' ? 'bg-green-100 text-green-700' :
                                                row.result === 'Fraud' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                                            }`}>
                                            {row.result}
                                        </span>
                                    </td>
                                    <td className="p-4 text-sm text-slate-500 font-medium">{row.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}