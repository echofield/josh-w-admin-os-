'use client';

// import { useState } from 'react'; // Unused import removed
import { LayoutDashboard, Users, GanttChartSquare, Library, ShieldCheck, Siren, Send } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const Sidebar = () => (
  <aside className="p-4 w-64 flex-shrink-0 h-screen sticky top-0">
    <div className="rounded-3xl p-6 h-full flex flex-col bg-violet-600 text-white">
        <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">Josh W. OS</span>
        </div>
        <nav className="flex-1 space-y-2">
            <button className="w-full flex items-center gap-4 p-4 rounded-xl transition-colors bg-white/20 shadow-lg">
                <LayoutDashboard className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-sm">Dashboard</span>
            </button>
            <button className="w-full flex items-center gap-4 p-4 rounded-xl transition-colors hover:bg-white/10">
                <Users className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-sm">Clients</span>
            </button>
            <button className="w-full flex items-center gap-4 p-4 rounded-xl transition-colors hover:bg-white/10">
                <GanttChartSquare className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-sm">Timelines</span>
            </button>
             <button className="w-full flex items-center gap-4 p-4 rounded-xl transition-colors hover:bg-white/10">
                <Library className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-sm">Resources</span>
            </button>
        </nav>
        <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-xs text-violet-200">Powered by Josh&apos;s Growth Methodology</p>
        </div>
    </div>
  </aside>
);

const SmartNudge = () => (
    <div className="rounded-2xl p-6 shadow-lg border border-teal-500/20 bg-white">
        <div className="flex items-start gap-4">
            <Siren className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
            <div className="flex-1">
                <h3 className="text-lg mb-2 text-slate-900 font-semibold">Growth Hack Behind Schedule</h3>
                <p className="text-sm mb-3 text-slate-600">Hey <span className="font-bold">Tech Startup</span>, I noticed you haven&apos;t implemented the <span className="italic">Reddit Community Infiltration</span> growth hack yet. In my experience, this typically drives <span className="font-bold text-slate-800">50+ leads/month</span> within 2 weeks. Should we schedule a quick audit to get you unstuck?</p>
                <div className="flex justify-end gap-2 mt-4">
                    <button className="px-3 py-1 bg-slate-200 text-slate-800 rounded-lg hover:bg-slate-300 transition-colors text-sm">Dismiss</button>
                    <button className="px-3 py-1 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors text-sm">Schedule Audit</button>
                </div>
            </div>
        </div>
    </div>
);

const BroadcastMessage = () => (
    <div className="rounded-2xl p-6 shadow-lg bg-white border border-slate-200/50">
        <h3 className="text-lg text-slate-900 mb-4 font-semibold">Broadcast Message</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="broadcast-message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea id="broadcast-message" rows="6" className="mt-1 w-full p-2 rounded-lg bg-slate-100 border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:outline-none" placeholder="E.g., Hey everyone, just uploaded a new Instagram growth hack video..."></textarea>
            </div>
            <div>
                <label className="text-sm font-medium text-slate-700">1. Select Recipients</label>
                <div className="mt-2 space-y-2 p-3 rounded-lg bg-slate-100 border border-slate-200">
                    <div className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded text-violet-600 focus:ring-violet-500" defaultChecked /><label className="ml-2 text-sm">🚀 Tech Startups (5)</label></div>
                    <div className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded text-violet-600 focus:ring-violet-500" /><label className="ml-2 text-sm">💼 B2B SaaS (4)</label></div>
                    <div className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded text-violet-600 focus:ring-violet-500" defaultChecked /><label className="ml-2 text-sm">👗 Fashion & Apparel (3)</label></div>
                    <div className="flex items-center"><input type="checkbox" className="h-4 w-4 rounded text-violet-600 focus:ring-violet-500" /><label className="ml-2 text-sm">💪 Sports & Fitness (2)</label></div>
                </div>
                <label className="text-sm font-medium text-slate-700 mt-4 block">2. Delivery Method</label>
                <div className="mt-2 flex gap-4">
                    <div className="flex items-center"><input type="radio" name="delivery" className="h-4 w-4 text-teal-600 focus:ring-teal-500" defaultChecked /><label className="ml-2 text-sm">Dashboard Only</label></div>
                    <div className="flex items-center"><input type="radio" name="delivery" className="h-4 w-4 text-teal-600 focus:ring-teal-500" /><label className="ml-2 text-sm">Email</label></div>
                    <div className="flex items-center"><input type="radio" name="delivery" className="h-4 w-4 text-teal-600 focus:ring-teal-500" /><label className="ml-2 text-sm">Both</label></div>
                </div>
            </div>
        </div>
        <div className="flex justify-end mt-4">
            <button className="px-4 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send Broadcast
            </button>
        </div>
    </div>
);

const Roadmap = () => (
    <div className="rounded-2xl p-6 shadow-lg bg-white border border-slate-200/50">
        <h3 className="text-lg text-slate-900 mb-4 font-semibold">7-Day Fast-Track Plan</h3>
        <div className="relative pl-6">
            <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-slate-200"></div>
            <div className="relative mb-6"><div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-teal-500 border-2 border-white shadow-md"></div><p className="font-semibold text-slate-800">Day 1: Define Buyer Persona</p><p className="text-xs text-slate-500">Status: Completed</p></div>
            <div className="relative mb-6"><div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-teal-500 border-2 border-white shadow-md"></div><p className="font-semibold text-slate-800">Day 2: Growth Hack Selection</p><p className="text-xs text-slate-500">Status: Completed</p></div>
            <div className="relative mb-6"><div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-md animate-pulse"></div><p className="font-semibold text-slate-800">Day 3: Launch First Campaign</p><p className="text-xs text-blue-600">Status: In Progress</p></div>
            <div className="relative mb-6"><div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-slate-300 border-2 border-white shadow-md"></div><p className="font-semibold text-slate-500">Day 4: Measure & Optimize</p><p className="text-xs text-slate-400">Status: Pending</p></div>
            <div className="relative"><div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-slate-300 border-2 border-white shadow-md"></div><p className="font-semibold text-slate-500">Day 5-7: Scale & Report</p><p className="text-xs text-slate-400">Status: Pending</p></div>
        </div>
    </div>
);

export default function AdminDashboard() {
  return (
    <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Implementation Dashboard</h1>
                    <p className="text-slate-500 mt-1">Tracking the execution of your custom marketing plan.</p>
                </div>
                <SmartNudge />
                <BroadcastMessage />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-2xl p-6 shadow-lg bg-white border border-slate-200/50"><p className="text-sm text-slate-500">App Downloads</p><p className="text-3xl text-slate-900 font-bold mt-2">2,480</p><p className="text-sm text-green-500 mt-1">+15% this week</p></div>
                        <div className="rounded-2xl p-6 shadow-lg bg-white border border-slate-200/50"><p className="text-sm text-slate-500">Revenue Growth</p><p className="text-3xl text-slate-900 font-bold mt-2">+32%</p><p className="text-sm text-green-500 mt-1">vs last quarter</p></div>
                        <div className="rounded-2xl p-6 shadow-lg bg-white border border-slate-200/50"><p className="text-sm text-slate-500">Implementation Rate</p><p className="text-3xl text-slate-900 font-bold mt-2">72%</p><p className="text-sm text-slate-500 mt-1">of plan executed</p></div>
                    </div>
                    <div className="lg:col-span-2 rounded-2xl p-6 shadow-lg bg-white border border-slate-200/50">
                         <p className="text-sm text-slate-500 mb-2">Client Portfolio</p>
                         <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm"><span className="flex items-center">🚀 Tech Startups</span> <span className="font-semibold text-slate-800">5</span></div>
                            <div className="flex items-center justify-between text-sm"><span className="flex items-center">  B2B SaaS</span> <span className="font-semibold text-slate-800">4</span></div>
                            <div className="flex items-center justify-between text-sm"><span className="flex items-center">👗 Fashion & Apparel</span> <span className="font-semibold text-slate-800">3</span></div>
                            <div className="flex items-center justify-between text-sm"><span className="flex items-center">💪 Sports & Fitness</span> <span className="font-semibold text-slate-800">2</span></div>
                         </div>
                    </div>
                </div>
                <Roadmap />
            </div>
        </main>
    </div>
  );
}
 