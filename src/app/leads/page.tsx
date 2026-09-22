const LEADS = [
  { name: 'Mohammed Al Rashid', source: 'Website', property: 'Business Bay Penthouse', budget: '$2.5M', status: 'Hot', statusColor: 'coral', agent: 'Alex', lastContact: '2 hours ago', score: 92 },
  { name: 'Fatima Al Mazrouei', source: 'Referral', property: 'Downtown Boulevard', budget: '$3.8M', status: 'Warm', statusColor: 'amber', agent: 'Sarah', lastContact: '1 day ago', score: 78 },
  { name: 'Elena Volkov', source: 'Property Finder', property: 'Dubai Marina Sky Villa', budget: '$4.5M', status: 'Hot', statusColor: 'coral', agent: 'Ahmed', lastContact: '3 hours ago', score: 88 },
  { name: 'Khalid Al Saud', source: 'Direct Walk-in', property: 'Palm Jumeirah Estate', budget: '$12.0M', status: 'Qualified', statusColor: 'sage', agent: 'Alex', lastContact: '5 hours ago', score: 95 },
  { name: 'Priya Sharma', source: 'Instagram Ad', property: 'JBR Beachfront Studio', budget: '$800K', status: 'New', statusColor: 'sage', agent: 'Unassigned', lastContact: 'Just now', score: 45 },
  { name: 'James Chen', source: 'LinkedIn', property: 'DIFC Residence', budget: '$6.2M', status: 'Warm', statusColor: 'amber', agent: 'Sarah', lastContact: '12 hours ago', score: 71 },
  { name: 'Youssef Ahmed', source: 'Bayut', property: 'Creek Harbour Tower', budget: '$1.9M', status: 'Follow Up', statusColor: 'amber', agent: 'Ahmed', lastContact: '2 days ago', score: 62 },
];

function StatusBadge({ status, color }: { status: string; color: string }) {
  const colorMap: Record<string, string> = {
    coral: 'bg-coral/10 text-coral border-coral/20',
    amber: 'bg-amber/10 text-amber border-amber/20',
    sage: 'bg-sage/10 text-sage border-sage/20',
  };
  return (
    <span className={`${colorMap[color]} border text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest`}>
      {status}
    </span>
  );
}

export default function LeadsPage() {
  return (
    <div className="p-10 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-serif text-4xl text-deep-charcoal">Lead Management</h1>
        <span className="text-xs font-semibold text-deep-charcoal bg-amber/10 px-3 py-1.5 uppercase tracking-widest border border-amber/30 rounded-sm">
          SIMULATED DEMO DATA
        </span>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Leads', value: '847', sub: '+24 this week' },
          { label: 'New Today', value: '12', sub: '3 unassigned' },
          { label: 'Qualified', value: '312', sub: '36.8% rate' },
          { label: 'Avg. Response', value: '14 min', sub: 'SLA: 30 min' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-200 shadow-sm rounded-sm p-5">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{stat.label}</p>
            <p className="text-2xl font-semibold text-deep-charcoal mt-1">{stat.value}</p>
            <p className="text-xs text-sage mt-2">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Leads Table */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
        <div className="px-8 py-5 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-serif text-xl text-deep-charcoal">Active Leads</h2>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 uppercase tracking-widest">Filter by:</span>
            <button className="text-xs font-semibold text-deep-charcoal bg-gray-50 px-3 py-1.5 rounded-sm border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">All Status</button>
            <button className="text-xs font-semibold text-deep-charcoal bg-gray-50 px-3 py-1.5 rounded-sm border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">All Agents</button>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 text-left">
              <th className="px-8 py-3 text-xs text-gray-400 font-semibold uppercase tracking-widest">Lead</th>
              <th className="px-4 py-3 text-xs text-gray-400 font-semibold uppercase tracking-widest">Source</th>
              <th className="px-4 py-3 text-xs text-gray-400 font-semibold uppercase tracking-widest">Property Interest</th>
              <th className="px-4 py-3 text-xs text-gray-400 font-semibold uppercase tracking-widest">Budget</th>
              <th className="px-4 py-3 text-xs text-gray-400 font-semibold uppercase tracking-widest">Score</th>
              <th className="px-4 py-3 text-xs text-gray-400 font-semibold uppercase tracking-widest">Status</th>
              <th className="px-4 py-3 text-xs text-gray-400 font-semibold uppercase tracking-widest">Agent</th>
              <th className="px-4 py-3 text-xs text-gray-400 font-semibold uppercase tracking-widest">Last Contact</th>
            </tr>
          </thead>
          <tbody>
            {LEADS.map((lead) => (
              <tr key={lead.name} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer">
                <td className="px-8 py-4">
                  <p className="font-semibold text-deep-charcoal text-sm">{lead.name}</p>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500">{lead.source}</td>
                <td className="px-4 py-4 text-sm text-gray-500">{lead.property}</td>
                <td className="px-4 py-4 text-sm font-semibold text-deep-charcoal">{lead.budget}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-xs font-bold text-deep-charcoal">{lead.score}</div>
                  </div>
                </td>
                <td className="px-4 py-4"><StatusBadge status={lead.status} color={lead.statusColor} /></td>
                <td className="px-4 py-4 text-sm text-gray-500">{lead.agent}</td>
                <td className="px-4 py-4 text-xs text-gray-400">{lead.lastContact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
