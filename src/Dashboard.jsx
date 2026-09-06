import React, { useState } from 'react';

export default function Dashboard({ navigate }) {
    const [timeFilterOpen, setTimeFilterOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState('Last 30 Days');
    const timeOptions = ["Today", "Past 7 Days", "Last 30 Days", "Past 3 Months", "Past 6 Months"];

    const metrics = [
        { title: 'Total Documents', count: '12,458', trend: '↑ +12%', trendColor: 'text-blue-600', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> },
        { title: 'Genuine Documents', count: '10,982', trend: '↑ +15%', trendColor: 'text-green-600', iconBg: 'bg-green-100', iconColor: 'text-green-600', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /> },
        { title: 'Suspicious Documents', count: '1,102', trend: '↑ +8%', trendColor: 'text-orange-500', iconBg: 'bg-orange-100', iconColor: 'text-orange-500', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /> },
        { title: 'Fake Documents', count: '374', trend: '↑ +5%', trendColor: 'text-red-600', iconBg: 'bg-red-100', iconColor: 'text-red-600', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> }
    ];

    const recentActivity = [
        { id: 1, name: 'Aadhar_001.pdf', type: 'ID Proof', result: 'Genuine', bg: 'bg-green-100', text: 'text-green-700', date: '05 Sep 2026, 10:42' },
        { id: 2, name: 'Passport_scan.jpg', type: 'Passport', result: 'Suspicious', bg: 'bg-orange-100', text: 'text-orange-700', date: '05 Sep 2026, 09:15' },
        { id: 3, name: 'DL_image.png', type: 'Driving License', result: 'Fake', bg: 'bg-red-100', text: 'text-red-700', date: '05 Sep 2026, 08:31' },
        { id: 4, name: 'VoterID.pdf', type: 'ID Proof', result: 'Genuine', bg: 'bg-green-100', text: 'text-green-700', date: '04 Sep 2026, 18:20' },
        { id: 5, name: 'PAN_card.jpg', type: 'PAN Card', result: 'Suspicious', bg: 'bg-orange-100', text: 'text-orange-700', date: '04 Sep 2026, 16:05' },
    ];

    return (
        <div className="space-y-6 max-w-7xl mx-auto pb-10 fade-in">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl p-8 border border-blue-100 flex justify-between items-center relative overflow-hidden shadow-sm">
                <div className="relative z-10">
                    <div className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2">Ministry of Home Affairs</div>
                    <h1 className="text-4xl font-bold text-[#1e293b] mb-2">Welcome, Admin</h1>
                    <p className="text-[#1e293b] font-semibold text-lg">AI-Based Fake Identity & Document Screening System</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((m, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${m.iconBg}`}>
                            <svg className={`w-6 h-6 ${m.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">{m.icon}</svg>
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-slate-500 mb-1">{m.title}</div>
                            <div className="text-2xl font-bold text-[#1e293b] mb-2">{m.count}</div>
                            <div className="flex items-center gap-2 text-xs">
                                <span className={`font-bold ${m.trendColor}`}>{m.trend}</span>
                                <span className="text-slate-400">vs last period</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="font-bold text-[#1e293b]">Document Status Trend</h3>
                            <p className="text-xs text-slate-500 mt-1">Verification results based on selected timeframe</p>
                        </div>

                        {/* Animated Time Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setTimeFilterOpen(!timeFilterOpen)}
                                className="text-xs font-semibold text-slate-600 border border-slate-200 rounded px-3 py-1.5 flex items-center gap-1 hover:bg-slate-50 transition-colors"
                            >
                                {selectedTime} {timeFilterOpen ? '▲' : '▼'}
                            </button>
                            {timeFilterOpen && (
                                <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-lg shadow-lg border border-slate-100 slide-down z-10 overflow-hidden">
                                    {timeOptions.map(opt => (
                                        <button
                                            key={opt}
                                            onClick={() => { setSelectedTime(opt); setTimeFilterOpen(false); }}
                                            className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors ${selectedTime === opt ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex-1 relative min-h-[220px] w-full flex items-center justify-center border border-dashed border-slate-200 rounded-lg bg-slate-50">
                        <span className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Chart Data: {selectedTime}</span>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="font-bold text-[#1e293b]">Recent Activity</h3>
                            <p className="text-xs text-slate-500 mt-1">Latest document verification results</p>
                        </div>
                        <button onClick={() => navigate('Reports')} className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                            View All →
                        </button>
                    </div>

                    <div className="flex-1 overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-200">
                                    <th className="pb-3 text-xs font-semibold text-slate-500">Document</th>
                                    <th className="pb-3 text-xs font-semibold text-slate-500">Result</th>
                                    <th className="pb-3 text-xs font-semibold text-slate-500">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentActivity.map((row) => (
                                    <tr key={row.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                                        <td className="py-3 text-sm font-semibold text-[#1e293b]">{row.name}</td>
                                        <td className="py-3"><span className={`px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider ${row.bg} ${row.text}`}>{row.result}</span></td>
                                        <td className="py-3 text-xs font-medium text-slate-500">{row.date}</td>
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