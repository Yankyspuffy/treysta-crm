export default function AgentPipelinePage() {
  return (
    <div className="p-10 max-w-[1400px] mx-auto w-full h-[calc(100vh-80px)] flex flex-col">
      <div className="mb-8 shrink-0">
        <h1 className="font-serif text-4xl text-[#111111] mb-2">My Pipeline</h1>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Active Deals</p>
      </div>

      <div className="flex-1 flex gap-6 overflow-x-auto pb-4">
        
        <div className="w-80 shrink-0 bg-gray-50 border border-gray-200 rounded-sm flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-bold text-[#111111] uppercase tracking-widest text-sm flex items-center justify-between">
              Contacted <span className="bg-white text-gray-500 px-2 py-0.5 rounded-sm border border-gray-200 text-xs">1</span>
            </h2>
          </div>
          <div className="p-4 flex-1 space-y-4">
            <div className="bg-white border border-gray-200 rounded-sm p-4 shadow-sm hover:shadow-md transition-shadow cursor-grab">
              <div className="flex justify-between items-start mb-2">
                <p className="font-bold text-[#111111]">Mohammed A.</p>
                <span className="w-2 h-2 rounded-full bg-[#4A6B5D]"></span>
              </div>
              <p className="text-xs text-gray-500 font-medium mb-3">Safa Two Apartment</p>
              <div className="flex justify-between items-center text-xs font-bold text-gray-400">
                <span>AED 2.8M</span>
                <span>2 days ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 shrink-0 bg-gray-50 border border-gray-200 rounded-sm flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-bold text-[#111111] uppercase tracking-widest text-sm flex items-center justify-between">
              Viewing Scheduled <span className="bg-white text-gray-500 px-2 py-0.5 rounded-sm border border-gray-200 text-xs">1</span>
            </h2>
          </div>
          <div className="p-4 flex-1 space-y-4">
            <div className="bg-white border border-[#C8524B]/30 rounded-sm p-4 shadow-sm hover:shadow-md transition-shadow cursor-grab">
              <div className="flex justify-between items-start mb-2">
                <p className="font-bold text-[#111111]">Youssef Ahmed</p>
                <span className="w-2 h-2 rounded-full bg-[#C8524B] animate-pulse"></span>
              </div>
              <p className="text-xs text-gray-500 font-medium mb-3">Business Bay Penthouse</p>
              <div className="flex justify-between items-center text-xs font-bold text-gray-400">
                <span>AED 2.1M</span>
                <span className="text-[#C8524B]">Urgent</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 shrink-0 bg-gray-50 border border-gray-200 rounded-sm flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-bold text-[#111111] uppercase tracking-widest text-sm flex items-center justify-between">
              Negotiation <span className="bg-white text-gray-500 px-2 py-0.5 rounded-sm border border-gray-200 text-xs">1</span>
            </h2>
          </div>
          <div className="p-4 flex-1 space-y-4">
            <div className="bg-white border border-gray-200 rounded-sm p-4 shadow-sm hover:shadow-md transition-shadow cursor-grab">
              <div className="flex justify-between items-start mb-2">
                <p className="font-bold text-[#111111]">Elena Volkov</p>
                <span className="w-2 h-2 rounded-full bg-[#4A6B5D]"></span>
              </div>
              <p className="text-xs text-gray-500 font-medium mb-3">Dubai Marina Sky Villa</p>
              <div className="flex justify-between items-center text-xs font-bold text-gray-400">
                <span>AED 4.5M</span>
                <span>Active</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
