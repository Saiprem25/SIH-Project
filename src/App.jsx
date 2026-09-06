import React, { useState } from 'react';
import Auth from './Auth';
import Dashboard from './Dashboard';
import DocumentScreening from './DocumentScreening';
import ScreeningHistory from './ScreeningHistory';
import FraudAlerts from './FraudAlerts';
import Reports from './Reports';
import Users from './Users';
import Settings from './Settings';
import './index.css';

const globalDatabase = [
    { id: 'SCN-8821', doc: 'Passport_Scan_Front.pdf', status: 'Verified' },
    { id: 'SCN-8822', doc: 'Aadhar_Tampered_02.png', status: 'Fraud' },
    { id: 'SCN-8823', doc: 'Driver_License_99.jpg', status: 'Verified' },
    { id: 'USR-042', doc: 'Arjun Mehta (Admin)', status: 'Active' },
    { id: 'RPT-091', doc: 'Monthly Threat Analysis', status: 'Generated' },
];

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);

    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const searchResults = globalDatabase.filter(item =>
        item.doc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (!isAuthenticated) {
        return <Auth onLogin={() => setIsAuthenticated(true)} />;
    }

    const handleSignOut = () => {
        setIsAdminDropdownOpen(false);
        setIsAuthenticated(false);
        setActiveTab('Dashboard');
    };

    const navItems = [
        { name: 'Dashboard', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
        { name: 'Document Screening', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> },
        { name: 'Screening History', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
        { name: 'Fraud Alerts', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /> },
        { name: 'Reports', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> },
        { name: 'Users', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /> },
        { name: 'Settings', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM12 15a3 3 0 100-6 3 3 0 000 6z" /> }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'Dashboard': return <Dashboard navigate={setActiveTab} />;
            case 'Document Screening': return <DocumentScreening />;
            case 'Screening History': return <ScreeningHistory />;
            case 'Fraud Alerts': return <FraudAlerts />;
            case 'Reports': return <Reports />;
            case 'Users': return <Users />;
            case 'Settings': return <Settings />;
            default: return <Dashboard navigate={setActiveTab} />;
        }
    };

    return (
        <div className="flex h-screen bg-[#F4F5F3] font-sans text-[#1A1F1D] overflow-hidden">
            <aside className="w-64 bg-[#0B2E2A] text-white flex flex-col shrink-0 border-r border-[#E2E4E8]">
                <div className="h-20 flex items-center px-6 border-b border-[#0F6E56]/30">
                    <div className="w-8 h-8 bg-[#0F6E56] rounded flex items-center justify-center mr-3 shadow-md">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </div>
                    <div>
                        <div className="text-white font-bold text-lg leading-tight">DocShield AI</div>
                        <div className="text-[10px] text-white/60">Secure Identities. Safer India.</div>
                    </div>
                </div>

                <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto custom-scrollbar">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === item.name ? 'bg-[#0F6E56] text-white shadow-md' : 'text-white/70 hover:bg-[#0F6E56]/40 hover:text-white'
                                }`}
                        >
                            <svg className="w-5 h-5 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                            {item.name}
                        </button>
                    ))}
                </nav>
            </aside>

            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                <header className="h-20 bg-[#FFFFFF] border-b border-[#E2E4E8] flex items-center justify-between px-8 shrink-0 z-30 shadow-sm">
                    <div className="relative w-96">
                        <svg className="w-5 h-5 absolute left-3 top-2.5 text-[#5F6864]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                            placeholder="Search databases, ID numbers, or cases..."
                            className="w-full bg-[#F4F5F3] rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F6E56] border border-[#E2E4E8] text-[#1A1F1D]"
                        />

                        {isSearchFocused && searchQuery.length > 0 && (
                            <div className="absolute top-full mt-2 w-full bg-[#FFFFFF] rounded-xl shadow-xl border border-[#E2E4E8] overflow-hidden slide-down">
                                {searchResults.length > 0 ? (
                                    searchResults.map(item => (
                                        <div key={item.id} className="px-4 py-3 border-b border-[#E2E4E8] hover:bg-[#F4F5F3] cursor-pointer flex justify-between items-center" onClick={() => { setActiveTab('Screening History'); setSearchQuery(''); }}>
                                            <div>
                                                <div className="text-sm font-bold text-[#1A1F1D]">{item.doc}</div>
                                                <div className="text-xs text-[#5F6864]">{item.id}</div>
                                            </div>
                                            <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded ${item.status === 'Verified' ? 'bg-[#E1F5EE] text-[#085041]' : item.status === 'Fraud' ? 'bg-[#FAECE7] text-[#712813]' : 'bg-[#F4F5F3] text-[#5F6864]'}`}>{item.status}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="px-4 py-4 text-center text-sm text-[#5F6864]">No database records found for "{searchQuery}"</div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-6 relative">
                        <div className="relative">
                            <div
                                className="flex items-center gap-3 cursor-pointer hover:bg-[#F4F5F3] p-1.5 rounded-lg transition-colors"
                                onClick={() => setIsAdminDropdownOpen(!isAdminDropdownOpen)}
                            >
                                <div className="w-10 h-10 rounded-full bg-[#0F6E56] text-white font-bold flex items-center justify-center shadow">A</div>
                                <span className="text-sm font-semibold text-[#1A1F1D] select-none">Admin {isAdminDropdownOpen ? '▲' : '▼'}</span>
                            </div>

                            {isAdminDropdownOpen && (
                                <div className="absolute right-0 top-full mt-2 w-56 bg-[#FFFFFF] rounded-xl shadow-xl border border-[#E2E4E8] slide-down overflow-hidden z-50">
                                    <div className="px-4 py-3 border-b border-[#E2E4E8] bg-[#F4F5F3]">
                                        <p className="text-sm font-bold text-[#1A1F1D]">Admin User</p>
                                        <p className="text-xs text-[#5F6864]">admin.mha@gov.in</p>
                                    </div>
                                    <button onClick={() => { setActiveTab('Settings'); setIsAdminDropdownOpen(false); }} className="w-full text-left px-4 py-3 text-sm text-[#5F6864] hover:bg-[#E1F5EE] hover:text-[#0F6E56] transition-colors">Workspace Settings</button>
                                    <button onClick={() => { setActiveTab('Users'); setIsAdminDropdownOpen(false); }} className="w-full text-left px-4 py-3 text-sm text-[#5F6864] hover:bg-[#E1F5EE] hover:text-[#0F6E56] transition-colors">Manage Accounts</button>
                                    <div className="border-t border-[#E2E4E8]">
                                        <button onClick={handleSignOut} className="w-full text-left px-4 py-3 text-sm text-[#712813] hover:bg-[#FAECE7] transition-colors font-semibold">Sign Out Session</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
}