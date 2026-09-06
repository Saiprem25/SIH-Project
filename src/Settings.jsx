import React, { useState } from 'react';

export default function Settings() {
    const [settings, setSettings] = useState({
        autoReject: true,
        deepEla: false,
        crossRef: true,
        twoFactor: true
    });

    const toggleSetting = (key) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const ToggleRow = ({ title, desc, settingKey }) => (
        <div className="flex justify-between items-center py-5 border-b border-slate-100 last:border-0 hover:bg-slate-50 px-4 rounded-lg transition-colors">
            <div>
                <div className="font-bold text-[#1e293b] text-base">{title}</div>
                <div className="text-sm text-slate-500 mt-1">{desc}</div>
            </div>
            <div
                onClick={() => toggleSetting(settingKey)}
                className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-300 shadow-inner ${settings[settingKey] ? 'bg-blue-600' : 'bg-slate-300'}`}
            >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow transition-transform duration-300 ${settings[settingKey] ? 'translate-x-6.5 left-0' : 'left-0.5'}`}></div>
            </div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto fade-in">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-[#1e293b] mb-1">Engine Configuration</h2>
                <p className="text-sm text-slate-500 mb-8">Modify global security thresholds and API behaviors.</p>

                <div className="space-y-2 mb-10 border border-slate-100 rounded-xl p-2 bg-white shadow-sm">
                    <ToggleRow
                        title="Auto-Reject Low Confidence Profiles"
                        desc="Automatically fail documents scoring below the 40% neural threshold."
                        settingKey="autoReject"
                    />
                    <ToggleRow
                        title="Deep ELA Pixel Scan"
                        desc="Enable intense Error Level Analysis (Increases verification time by 1.8s)."
                        settingKey="deepEla"
                    />
                    <ToggleRow
                        title="UIDAI Cross-Reference"
                        desc="Ping government servers automatically upon detecting an ID number."
                        settingKey="crossRef"
                    />
                    <ToggleRow
                        title="Enforce Admin 2FA"
                        desc="Require biometric or token authentication for exporting reports."
                        settingKey="twoFactor"
                    />
                </div>

                <div className="p-6 bg-red-50 border border-red-100 rounded-xl flex justify-between items-center">
                    <div>
                        <h4 className="font-bold text-red-700">Danger Zone</h4>
                        <p className="text-sm text-red-600/80">Purge local cache and reset neural weights.</p>
                    </div>
                    <button className="px-6 py-2.5 bg-white text-red-600 font-bold rounded-lg border border-red-200 hover:bg-red-600 hover:text-white transition-colors shadow-sm">
                        Factory Reset Node
                    </button>
                </div>
            </div>
        </div>
    );
}