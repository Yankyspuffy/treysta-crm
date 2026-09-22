'use client';

import { useState, useEffect, useCallback } from 'react';

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
        <span className="text-xs font-semibold text-deep-charcoal bg-amber/10 px-3 py-1.5 uppercase tracking-widest border border-amber/30 rounded-sm">
          SIMULATED DEMO DATA
        </span>
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
    </div>
  );
}
