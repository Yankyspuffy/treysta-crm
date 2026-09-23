'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface FlightEvent {
  id: string;
  time: string;
  text: string;
  dotColor: string;
  subtext?: string;
}

const INITIAL_FLIGHT_EVENTS: FlightEvent[] = [
  { id: 'fe-1', time: '14:00', text: 'Viewing completed at Business Bay by Sarah', dotColor: 'bg-sage', subtext: 'Next: Follow up within 2 hours' },
  { id: 'fe-2', time: '13:45', text: 'AI recommended 3 properties to Lead #8829', dotColor: 'bg-deep-charcoal' },
  { id: 'fe-3', time: '13:10', text: 'Payment plan requested by Client Youssef', dotColor: 'bg-amber' },
];

export default function CEOCommandCentre() {
  const router = useRouter();
  const [isAddAgentModalOpen, setIsAddAgentModalOpen] = useState(false);
  const [isAgentCreated, setIsAgentCreated] = useState(false);
  
  const [atRiskCount, setAtRiskCount] = useState(8);
  const [pipelineCount, setPipelineCount] = useState(312);
  const [hotLeads] = useState(45);
  const [flightEvents, setFlightEvents] = useState<FlightEvent[]>(INITIAL_FLIGHT_EVENTS);

  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) + ' GST');
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  // Listen for custom events from sidebar actions (demo orchestration)
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      if (e.detail?.id === 'sla-breach') {
        setAtRiskCount((p) => Math.max(0, p - 1));
        setPipelineCount((p) => p - 1);
        setFlightEvents((prev) => [
          { id: `fe-${Date.now()}`, time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }), text: 'Lead Mohammed A. reassigned from Alex → Sarah', dotColor: 'bg-sage', subtext: 'SLA risk resolved' },
          ...prev,
        ]);
      }
    };
    window.addEventListener('treysta-action' as string, handler as EventListener);
    return () => window.removeEventListener('treysta-action' as string, handler as EventListener);
  }, []);

  return (
    <div className="p-10 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <h1 className="font-serif text-4xl text-deep-charcoal">Executive Overview</h1>
          <span className="text-xs text-gray-400 font-mono tracking-widest">{currentTime}</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsAddAgentModalOpen(true)}
            className="bg-[#111111] hover:bg-black text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-sm"
          >
            + Add Agent
          </button>
          <span className="text-xs font-semibold text-deep-charcoal bg-amber/10 px-3 py-1.5 uppercase tracking-widest border border-amber/30 rounded-sm">
            SIMULATED DEMO DATA
          </span>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 shadow-sm p-6 flex flex-col justify-between rounded-sm hover:shadow-md transition-shadow">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1 tracking-wide uppercase">Active Pipeline</p>
            <p className="text-4xl font-semibold text-deep-charcoal">{pipelineCount}</p>
          </div>
          <div className="mt-8">
            <p className="text-sm font-semibold text-sage flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sage"></span>
              {hotLeads} Hot Leads
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 shadow-sm p-6 flex flex-col justify-between rounded-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1 tracking-wide uppercase">Payment Pending</p>
              <p className="text-4xl font-semibold text-deep-charcoal">$4.2M</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-sm text-gray-500">Awaiting reconciliation</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 border-l-4 border-l-coral shadow-sm p-6 flex flex-col justify-between rounded-sm hover:shadow-md transition-shadow">
          <div>
            <p className="text-sm text-gray-500 font-medium mb-1 tracking-wide uppercase">At Risk</p>
            <p className="text-4xl font-semibold text-deep-charcoal">{atRiskCount}</p>
          </div>
          <div className="mt-8">
            <p className="text-sm font-semibold text-coral flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              {atRiskCount > 0 ? 'Requires immediate intervention' : 'All risks resolved'}
            </p>
          </div>
        </div>
      </div>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Active Deals Pipeline */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-8">
          <h2 className="font-serif text-2xl text-deep-charcoal mb-6 border-b border-gray-100 pb-4">Active Deals Pipeline</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-6 border-b border-gray-50">
              <div>
                <p className="font-semibold text-deep-charcoal">Youssef Ahmed</p>
                <p className="text-sm text-gray-500 mt-1">Business Bay Penthouse &bull; $2.1M</p>
              </div>
              <span className="bg-sage/10 text-sage border border-sage/20 text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest shadow-sm">Viewing Scheduled</span>
            </div>
            <div className="flex items-center justify-between pb-6 border-b border-gray-50">
              <div>
                <p className="font-semibold text-deep-charcoal">Elena Volkov</p>
                <p className="text-sm text-gray-500 mt-1">Dubai Marina Sky Villa &bull; $4.5M</p>
              </div>
              <span className="bg-amber/10 text-amber border border-amber/20 text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest shadow-sm">Payment Pending</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-deep-charcoal">Khalid Al Saud</p>
                <p className="text-sm text-gray-500 mt-1">Palm Jumeirah Estate &bull; $12.0M</p>
              </div>
              <span className="bg-sage/10 text-sage border border-sage/20 text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest shadow-sm">Negotiation</span>
            </div>
          </div>
        </div>

        {/* Sales Flight Recorder */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-8">
          <h2 className="font-serif text-2xl text-deep-charcoal mb-6 border-b border-gray-100 pb-4">Sales Flight Recorder</h2>
          <div className="relative border-l-2 border-gray-100 ml-4 space-y-8 mt-4 pb-2">
            {flightEvents.map((event) => (
              <div key={event.id} className="relative pl-6 animate-fade-in">
                <span className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full ${event.dotColor} ring-4 ring-white shadow-sm`}></span>
                <p className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-1">{event.time}</p>
                <p className="text-deep-charcoal font-medium">{event.text}</p>
                {event.subtext && (
                  <p className="text-sm font-bold text-deep-charcoal mt-2 bg-gray-50 inline-block px-3 py-1.5 rounded-sm border border-gray-100">{event.subtext}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Agent Modal */}
      {isAddAgentModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full rounded-sm shadow-2xl overflow-hidden animate-fade-in border border-gray-200">
            {!isAgentCreated ? (
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="font-serif text-3xl text-deep-charcoal mb-2">Onboard Sales Agent</h2>
                  <p className="text-sm text-gray-500 font-sans">Assign manager, territory, and initial lead exposure limits.</p>
                </div>
                
                <div className="space-y-4 font-sans">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1.5">Full Name</label>
                    <input type="text" defaultValue="David Kamau" className="w-full bg-gray-50 border border-gray-200 rounded-sm px-3 py-2 text-sm text-deep-charcoal focus:outline-none focus:border-sage transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1.5">Email</label>
                    <input type="email" defaultValue="david@demo.treysta.com" className="w-full bg-gray-50 border border-gray-200 rounded-sm px-3 py-2 text-sm text-deep-charcoal focus:outline-none focus:border-sage transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1.5">Role</label>
                      <select disabled className="w-full bg-gray-100 border border-gray-200 rounded-sm px-3 py-2 text-sm text-gray-500 appearance-none cursor-not-allowed">
                        <option>Sales Agent</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1.5">Manager</label>
                      <input type="text" defaultValue="James M." className="w-full bg-gray-50 border border-gray-200 rounded-sm px-3 py-2 text-sm text-deep-charcoal focus:outline-none focus:border-sage transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1.5">Specialization</label>
                    <input type="text" defaultValue="Off-Plan / 2 Bedroom" className="w-full bg-gray-50 border border-gray-200 rounded-sm px-3 py-2 text-sm text-deep-charcoal focus:outline-none focus:border-sage transition-colors" />
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-end gap-4 font-sans">
                  <button onClick={() => setIsAddAgentModalOpen(false)} className="text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-deep-charcoal transition-colors">
                    Cancel
                  </button>
                  <button onClick={() => setIsAgentCreated(true)} className="bg-[#111111] hover:bg-black text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-sm">
                    Create Account & Send Invite
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-[#4A6B5D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#4A6B5D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-serif text-2xl text-deep-charcoal mb-4">Account created successfully for David Kamau</h2>
                <p className="text-sm text-gray-500 font-sans mb-8 leading-relaxed max-w-sm mx-auto">
                  Invitation sent to <span className="font-semibold text-deep-charcoal">david@demo.treysta.com</span>. Credentials active for demo login.
                </p>
                <div className="flex flex-col gap-3 font-sans">
                  <button onClick={() => router.push('/login')} className="w-full bg-[#111111] hover:bg-black text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-sm">
                    Switch to David's Login
                  </button>
                  <button onClick={() => { setIsAddAgentModalOpen(false); setIsAgentCreated(false); }} className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors">
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
