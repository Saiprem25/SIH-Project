import React from 'react';

export default function Reports() {
    const reportData = [
        { sno: 1, type: 'Passport', result: 'Verified', date: '2026-09-06 09:14 AM' },
        { sno: 2, type: 'National ID', result: 'Fraud', date: '2026-09-06 08:30 AM' },
        { sno: 3, type: 'Driving License', result: 'Verified', date: '2026-09-05 16:45 PM' },
        { sno: 4, type: 'Visa', result: 'Manual Review', date: '2026-09-05 14:10 PM' },
    ];

    return (
        <div className="max-w-5xl mx-auto fade-in">
            <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E2E4E8] shadow-sm">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-xl font-bold text-[#1A1F1D] mb-1">Compiled Analytics Reports</h2>
                        <p className="text-sm text-[#5F6864]">Structured table data synced from the screening history log.</p>
                    </div>
                    <button className="px-5 py-2 bg-[#0F6E56] text-white rounded-lg text-sm font-semibold hover:bg-[#0D5A46] transition-colors shadow">
                        Export CSV
                    </button>
                </div>

                <div className="overflow-x-auto rounded-xl border border-[#E2E4E8]">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#F4F5F3] border-b border-[#E2E4E8]">
                                <th className="p-4 text-xs font-bold text-[#5F6864] uppercase tracking-wider">S.No</th>
                                <th className="p-4 text-xs font-bold text-[#5F6864] uppercase tracking-wider">Document Type</th>
                                <th className="p-4 text-xs font-bold text-[#5F6864] uppercase tracking-wider">Result</th>
                                <th className="p-4 text-xs font-bold text-[#5F6864] uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reportData.map((row) => (
                                <tr key={row.sno} className="border-b border-[#E2E4E8] hover:bg-[#F4F5F3] transition-colors last:border-0">
                                    <td className="p-4 text-sm font-medium text-[#5F6864]">{row.sno}</td>
                                    <td className="p-4 text-sm font-bold text-[#1A1F1D]">{row.type}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${row.result === 'Verified' ? 'bg-[#E1F5EE] text-[#085041]' :
                                                row.result === 'Fraud' ? 'bg-[#FAECE7] text-[#712813]' : 'bg-[#FAEEDA] text-[#854F08]'
                                            }`}>
                                            {row.result}
                                        </span>
                                    </td>
                                    <td className="p-4 text-sm text-[#5F6864] font-medium">{row.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}