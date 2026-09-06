import React, { useState } from 'react';

export default function Dashboard({ navigate }) {
    const [timeFilterOpen, setTimeFilterOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState('Last 30 Days');
    const timeOptions = ["Today", "Past 7 Days", "Last 30 Days", "Past 3 Months", "Past 6 Months"];

    const metrics = [
        { title: 'Total Documents', count: '12,458', trend: '↑ +12%', trendColor: 'text-[#0F6E56]', iconBg: 'bg-[#E1F5EE]', iconColor: 'text-[#0F6E56]', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> },
        { title: 'Genuine Documents', count: '10,982', trend: '↑ +15%', trendColor: 'text-[#085041]', iconBg: 'bg-[#E1F5EE]', iconColor: 'text-[#085041]', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /> },
        { title: 'Suspicious Documents', count: '1,102', trend: '↑ +8%', trendColor: 'text-[#854F08]', iconBg: 'bg-[#FAEEDA]', iconColor: 'text-[#854F08]', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /> },
        { title: 'Fake Documents', count: '374', trend: '↑ +5%', trendColor: 'text-[#712813]', iconBg: 'bg-[#FAECE7]', iconColor: 'text-[#712813]', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> }
    ];

    const recentActivity = [
        { id: 1, name: 'Aadhar_001.pdf', result: 'Verified', bg: 'bg-[#E1F5EE]', text: 'text-[#085041]', date: '05 Sep 2026' },
        { id: 2, name: 'Passport_scan.jpg', result: 'Manual Review', bg: 'bg-[#FAEEDA]', text: 'text-[#854F08]', date: '05 Sep 2026' },
        { id: 3, name: 'DL_image.png', result: 'Fraud', bg: 'bg-[#FAECE7]', text: 'text-[#712813]', date: '05 Sep 2026' },
    ];

    return (
        <div className="space-y-6 max-w-7xl mx-auto pb-10 fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((m, i) => (
                    <div key={i} className="bg-[#FFFFFF] rounded-xl p-6 border border-[#E2E4E8] shadow-sm flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${m.iconBg}`}>
                            <svg className={`w-6 h-6 ${m.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">{m.icon}</svg>
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-[#5F6864] mb-1">{m.title}</div>
                            <div className="text-2xl font-bold text-[#1A1F1D] mb-2">{m.count}</div>
                            <div className="flex items-center gap-2 text-xs">
                                <span className={`font-bold ${m.trendColor}`}>{m.trend}</span>
                                <span className="text-[#5F6864]">vs last period</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#FFFFFF] rounded-xl p-6 border border-[#E2E4E8] shadow-sm flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="font-bold text-[#1A1F1D]">Document Status Trend</h3>
                            <p className="text-xs text-[#5F6864] mt-1">Verification results based on selected timeframe</p>
                        </div>
                        <div className="relative">
                            <button onClick={() => setTimeFilterOpen(!timeFilterOpen)} className="text-xs font-semibold text-[#1A1F1D] border border-[#E2E4E8] rounded px-3 py-1.5 hover:bg-[#F4F5F3]">
                                {selectedTime} {timeFilterOpen ? '▲' : '▼'}
                            </button>
                            {timeFilterOpen && (
                                <div className="absolute right-0 top-full mt-1 w-36 bg-[#FFFFFF] rounded-lg shadow-lg border border-[#E2E4E8] slide-down z-10 overflow-hidden">
                                    {timeOptions.map(opt => (
                                        <button key={opt} onClick={() => { setSelectedTime(opt); setTimeFilterOpen(false); }} className={`w-full text-left px-4 py-2 text-xs font-medium ${selectedTime === opt ? 'bg-[#E1F5EE] text-[#0F6E56]' : 'text-[#5F6864] hover:bg-[#F4F5F3]'}`}>
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex-1 min-h-[220px] w-full flex items-center justify-center border border-dashed border-[#E2E4E8] rounded-lg bg-[#F4F5F3]">
                        <span className="text-xs text-[#5F6864] font-semibold uppercase tracking-widest">Chart Data: {selectedTime}</span>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] rounded-xl p-6 border border-[#E2E4E8] shadow-sm flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="font-bold text-[#1A1F1D]">Recent Activity</h3>
                            <p className="text-xs text-[#5F6864] mt-1">Latest document verification results</p>
                        </div>
                        <button onClick={() => navigate('Reports')} className="text-sm font-semibold text-[#0F6E56] hover:text-[#0D5A46]">View All →</button>
                    </div>
                    <div className="flex-1 overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-[#E2E4E8]">
                                    <th className="pb-3 text-xs font-semibold text-[#5F6864]">Document</th>
                                    <th className="pb-3 text-xs font-semibold text-[#5F6864]">Result</th>
                                    <th className="pb-3 text-xs font-semibold text-[#5F6864]">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentActivity.map((row) => (
                                    <tr key={row.id} className="border-b border-[#E2E4E8] last:border-0 hover:bg-[#F4F5F3]">
                                        <td className="py-3 text-sm font-semibold text-[#1A1F1D]">{row.name}</td>
                                        <td className="py-3"><span className={`px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider ${row.bg} ${row.text}`}>{row.result}</span></td>
                                        <td className="py-3 text-xs font-medium text-[#5F6864]">{row.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}