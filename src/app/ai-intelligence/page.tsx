const AI_INSIGHTS = [
  {
    id: 1,
    type: 'Opportunity',
    title: 'Khalid Al Saud likely to close within 48 hours',
    detail: 'Based on viewing frequency (3 in 5 days), engagement score (95), and comparable deal patterns, this $12M Palm Jumeirah deal has a 91% probability of closing this week.',
    confidence: 91,
    action: 'Prepare booking documents',
    dotColor: 'bg-sage',
    borderColor: 'border-l-sage',
  },
  {
    id: 2,
    type: 'Risk Alert',
    title: 'Elena Volkov engagement declining',
    detail: 'Response time increased from 2 hours to 18 hours over the past week. Lead score dropped from 88 to 71. Similar patterns in historical data led to 65% drop-off rate.',
    confidence: 78,
    action: 'Schedule personal follow-up',
    dotColor: 'bg-coral',
    borderColor: 'border-l-coral',
  },
];

const AGENTS = [
  { name: 'Alex', leads: 42, conv: '44%', rev: '$18.2M', score: 94, trend: '↑' },
  { name: 'Sarah', leads: 38, conv: '41%', rev: '$15.7M', score: 89, trend: '↑' },
  { name: 'Ahmed', leads: 35, conv: '37%', rev: '$12.4M', score: 82, trend: '→' },
  { name: 'Yasmine', leads: 31, conv: '35%', rev: '$9.8M', score: 79, trend: '↑' },
  { name: 'Omar', leads: 29, conv: '34%', rev: '$8.5M', score: 76, trend: '↓' },
  { name: 'Fatima', leads: 28, conv: '32%', rev: '$7.9M', score: 74, trend: '→' },
  { name: 'David', leads: 27, conv: '31%', rev: '$7.5M', score: 73, trend: '↑' },
  { name: 'Elena', leads: 25, conv: '30%', rev: '$6.8M', score: 71, trend: '↓' },
  { name: 'Mohammed', leads: 24, conv: '29%', rev: '$6.2M', score: 69, trend: '→' },
  { name: 'Priya', leads: 22, conv: '27%', rev: '$5.5M', score: 65, trend: '↑' },
  { name: 'Michael', leads: 20, conv: '25%', rev: '$4.9M', score: 62, trend: '↓' },
  { name: 'Emma', leads: 19, conv: '24%', rev: '$4.5M', score: 60, trend: '→' },
  { name: 'Hassan', leads: 18, conv: '22%', rev: '$4.1M', score: 58, trend: '↓' },
  { name: 'Layla', leads: 17, conv: '21%', rev: '$3.8M', score: 56, trend: '↑' },
  { name: 'Khalid', leads: 15, conv: '20%', rev: '$3.2M', score: 54, trend: '→' },
  { name: 'Noor', leads: 14, conv: '18%', rev: '$2.9M', score: 51, trend: '↓' },
  { name: 'Ali', leads: 13, conv: '17%', rev: '$2.5M', score: 49, trend: '→' },
  { name: 'Sophia', leads: 12, conv: '15%', rev: '$2.1M', score: 45, trend: '↑' },
  { name: 'Tariq', leads: 10, conv: '14%', rev: '$1.8M', score: 42, trend: '↓' },
  { name: 'Zainab', leads: 9, conv: '12%', rev: '$1.5M', score: 39, trend: '→' },
  { name: 'Karim', leads: 8, conv: '10%', rev: '$1.2M', score: 35, trend: '↓' },
  { name: 'Maya', leads: 6, conv: '8%', rev: '$800K', score: 31, trend: '→' },
  { name: 'Jamal', leads: 4, conv: '5%', rev: '$450K', score: 28, trend: '↓' },
];

export default function AIIntelligencePage() {
  return (
    <div className="p-10 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="font-serif text-4xl text-deep-charcoal">AI Intelligence Hub</h1>
          <p className="text-sm text-gray-400 mt-2">Powered by contextual analysis of your pipeline, market data, and client behaviour</p>
        </div>
        <span className="text-xs font-semibold text-deep-charcoal bg-amber/10 px-3 py-1.5 uppercase tracking-widest border border-amber/30 rounded-sm">
          SIMULATED DEMO DATA
        </span>
      </div>

      {/* AI Ask Chat Box */}
      <div className="bg-deep-charcoal rounded-sm p-1 mb-8 shadow-md">
        <div className="bg-white rounded-sm p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center">
              <span className="w-2 h-2 bg-sage rounded-full animate-pulse"></span>
            </div>
            <h2 className="font-serif text-xl text-deep-charcoal">Ask AI Copilot</h2>
          </div>
          
          {/* Simulated Chat History */}
          <div className="space-y-4 max-h-[200px] overflow-y-auto pr-2">
            <div className="bg-gray-50 rounded p-4 max-w-[80%] self-start">
              <p className="text-sm text-gray-700 font-medium">Which agent is currently best suited to handle a new AED 15M off-plan lead in Downtown Dubai?</p>
            </div>
            <div className="bg-sage/5 border border-sage/20 rounded p-4 max-w-[90%] self-end relative">
              <span className="absolute -left-3 top-4 text-[10px] text-sage font-bold uppercase tracking-widest -rotate-90">AI</span>
              <p className="text-sm text-gray-800 leading-relaxed ml-3">
                Based on historical conversion rates and current workload, <strong className="text-deep-charcoal">Alex</strong> is the optimal choice. Alex has a 44% conversion rate and has successfully closed 3 high-value Downtown off-plan deals this quarter. Sarah is a close second but is currently flagged as "Overloaded" with a 145% median workload.
              </p>
            </div>
          </div>
          
          {/* Input Box */}
          <div className="flex items-center gap-3 mt-2 bg-gray-50 border border-gray-200 rounded-sm p-2 focus-within:border-sage focus-within:ring-1 focus-within:ring-sage transition-all">
            <svg className="w-5 h-5 text-gray-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <input type="text" placeholder="Ask a question about your business, team, or market..." className="flex-1 bg-transparent border-none outline-none text-sm text-deep-charcoal placeholder:text-gray-400" />
            <button className="bg-deep-charcoal text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">Ask</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Insights */}
        <div className="lg:col-span-2 space-y-8">
          {/* AI Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Insights Generated', value: '24', sub: 'Last 7 days' },
              { label: 'Revenue Influenced', value: '$8.4M', sub: 'This month' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white border border-gray-200 shadow-sm rounded-sm p-5">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{stat.label}</p>
                <p className="text-2xl font-semibold text-deep-charcoal mt-1">{stat.value}</p>
                <p className="text-xs text-sage mt-2">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* AI Insights Feed */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-8">
            <h2 className="font-serif text-2xl text-deep-charcoal mb-6 border-b border-gray-100 pb-4">Proactive Insights</h2>
            <div className="space-y-5">
              {AI_INSIGHTS.map((insight) => (
                <div key={insight.id} className={`border border-gray-100 border-l-4 ${insight.borderColor} rounded-sm p-5 hover:shadow-sm transition-shadow`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${insight.dotColor}`}></span>
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{insight.type}</span>
                        <span className="text-xs text-gray-300">•</span>
                        <span className="text-xs font-semibold text-deep-charcoal">{insight.confidence}% confidence</span>
                      </div>
                      <p className="font-semibold text-deep-charcoal">{insight.title}</p>
                      <p className="text-sm text-gray-500 mt-2 leading-relaxed">{insight.detail}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end border-t border-gray-50 pt-4">
                    <button className="bg-deep-charcoal text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm hover:bg-black transition-colors cursor-pointer shadow-sm">
                      {insight.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Full Agent Roster (23 Agents) */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-sm flex flex-col h-[750px]">
          <div className="p-6 border-b border-gray-100">
            <h2 className="font-serif text-2xl text-deep-charcoal mb-1">Global Team Performance</h2>
            <p className="text-xs text-gray-400 font-medium">Real-time AI ranking of all 23 agents</p>
          </div>
          
          {/* Scrollable list */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {AGENTS.map((agent, i) => (
              <div key={agent.name} className="flex items-center justify-between p-3 border border-gray-100 rounded-sm hover:border-gray-300 transition-colors bg-gray-50/50">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i < 3 ? 'bg-deep-charcoal text-white shadow-md' : 'bg-white border border-gray-200 text-gray-500'}`}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-deep-charcoal text-sm">{agent.name}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">{agent.conv} Conv. &bull; {agent.rev}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${agent.score >= 80 ? 'bg-sage/10 border-sage/20 text-sage' : agent.score >= 50 ? 'bg-amber/10 border-amber/20 text-amber' : 'bg-coral/10 border-coral/20 text-coral'}`}>
                    {agent.score}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Team Avg Score: 61</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
