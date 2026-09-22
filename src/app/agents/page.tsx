export default function AgentsPage() {
  return (
    <div className="p-10 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-serif text-4xl text-deep-charcoal">Agent Opportunity Balance</h1>
        <span className="text-xs font-semibold text-deep-charcoal bg-amber/10 px-3 py-1.5 uppercase tracking-widest border border-amber/30 rounded-sm">
          SIMULATED DEMO DATA
        </span>
      </div>

      {/* Agent Table */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-sm mb-8 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs text-gray-500 font-semibold uppercase tracking-widest">Agent</th>
              <th className="px-6 py-4 text-xs text-gray-500 font-semibold uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-xs text-gray-500 font-semibold uppercase tracking-widest">Performance</th>
              <th className="px-6 py-4 text-xs text-gray-500 font-semibold uppercase tracking-widest">Workload</th>
              <th className="px-6 py-4 text-xs text-gray-500 font-semibold uppercase tracking-widest">High-Intent Leads</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {/* Sarah */}
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-semibold text-deep-charcoal">Sarah</td>
              <td className="px-6 py-4">
                <span className="bg-amber/10 text-amber border border-amber/20 text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest shadow-sm">Overloaded</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">High Performer (41% Conv.)</td>
              <td className="px-6 py-4 text-sm font-semibold text-deep-charcoal">145% of median</td>
              <td className="px-6 py-4 text-sm text-gray-600">40% share</td>
            </tr>
            {/* Alex */}
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-semibold text-deep-charcoal">Alex</td>
              <td className="px-6 py-4">
                <span className="bg-sage/10 text-sage border border-sage/20 text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest shadow-sm">Under-Exposed</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">Improving (Up 18%)</td>
              <td className="px-6 py-4 text-sm font-semibold text-deep-charcoal">65% of median</td>
              <td className="px-6 py-4 text-sm text-gray-600">12% share</td>
            </tr>
            {/* Ahmed */}
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-semibold text-deep-charcoal">Ahmed</td>
              <td className="px-6 py-4">
                <span className="bg-coral/10 text-coral border border-coral/20 text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest shadow-sm">Attention Needed</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">Stable (37% Conv.)</td>
              <td className="px-6 py-4 text-sm font-semibold text-deep-charcoal">105% of median</td>
              <td className="px-6 py-4 text-sm text-gray-600">22% share</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* AI Executive Insight */}
      <div className="bg-deep-charcoal text-white rounded-sm p-8 shadow-md relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage opacity-10 rounded-full translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse"></span>
              <h3 className="font-serif text-2xl tracking-wide">AI Executive Insight</h3>
            </div>
            <div className="space-y-2">
               <p><span className="text-gray-400 font-bold uppercase tracking-wider text-xs mr-2">SUMMARY:</span> Sarah is handling 40% of high-intent leads but response time is degrading.</p>
               <p><span className="text-sage font-bold uppercase tracking-wider text-xs mr-2">ACTION:</span> Route next 5 Dubai Marina leads to Alex to balance exposure.</p>
            </div>
          </div>
          <button className="shrink-0 bg-sage hover:brightness-110 text-white px-6 py-3 rounded-sm font-bold text-sm uppercase tracking-widest transition-all shadow-sm cursor-pointer">
            Apply AI Routing
          </button>
        </div>
      </div>
    </div>
  );
}
