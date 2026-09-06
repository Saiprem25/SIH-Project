import React from 'react';

export default function Users() {
    const users = [
        { name: 'Arjun Mehta', role: 'Super Admin', status: 'Active', login: '2 mins ago' },
        { name: 'Priya Sharma', role: 'Verification Agent', status: 'Active', login: '1 hr ago' },
        { name: 'System API_Node1', role: 'Service Account', status: 'Active', login: 'Online' },
        { name: 'Rahul Desai', role: 'Auditor', status: 'Offline', login: '2 days ago' },
    ];

    return (
        <div className="max-w-5xl mx-auto fade-in">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-[#1e293b] mb-6">Access Control & Users</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {users.map((user, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors text-center shadow-sm">
                            <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-xl mb-4 border border-blue-200">
                                {user.name.charAt(0)}
                            </div>
                            <h3 className="font-bold text-[#1e293b] text-lg mb-1">{user.name}</h3>
                            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">{user.role}</p>
                            <div className="flex justify-between items-center text-xs text-slate-500 border-t border-slate-200 pt-3">
                                <span className={`font-bold flex items-center gap-1 ${user.status === 'Active' ? 'text-green-600' : 'text-slate-400'}`}>
                                    <span className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-slate-400'}`}></span>
                                    {user.status}
                                </span>
                                <span>{user.login}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}