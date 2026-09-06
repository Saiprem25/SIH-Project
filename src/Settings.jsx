import React, { useState } from 'react';

export default function Settings() {
    const [settings, setSettings] = useState({
        autoReject: true,
        deepEla: false,
        crossRef: true
    });

    const toggleSetting = (key) => setSettings(prev => ({ ...prev, [key]: !prev[key] }));

    const ToggleRow = ({ title, desc, settingKey }) => (
        <div className="flex justify-between items-center py-5 border-b border-[#E2E4E8] last:border-0 hover:bg-[#F4F5F3] px-4 rounded-lg transition-colors">
            <div>
                <div className="font-bold text-[#1A1F1D] text-base">{title}</div>
                <div className="text-sm text-[#5F6864] mt-1">{desc}</div>
            </div>
            <button
                onClick={() => toggleSetting(settingKey)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none ${settings[settingKey] ? 'bg-[#0F6E56]' : 'bg-[#E2E4E8]'}`}
            >
                <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-300 ease-in-out ${settings[settingKey] ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto fade-in">
            <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E2E4E8] shadow-sm">
                <h2 className="text-2xl font-bold text-[#1A1F1D] mb-1">Engine Configuration</h2>
                <p className="text-sm text-[#5F6864] mb-8">Modify global security thresholds and API behaviors.</p>

                <div className="space-y-1 mb-10 border border-[#E2E4E8] rounded-xl p-2 bg-[#FFFFFF] shadow-sm">
                    <ToggleRow title="Auto-Reject Profiles" desc="Automatically fail documents scoring below threshold." settingKey="autoReject" />
                    <ToggleRow title="Deep ELA Pixel Scan" desc="Enable intense Error Level Analysis." settingKey="deepEla" />
                    <ToggleRow title="UIDAI Cross-Reference" desc="Ping servers automatically." settingKey="crossRef" />
                </div>
            </div>
        </div>
    );
}