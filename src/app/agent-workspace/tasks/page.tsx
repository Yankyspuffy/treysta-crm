export default function AgentTasksPage() {
  return (
    <div className="p-10 max-w-[1400px] mx-auto w-full">
      <div className="mb-8">
        <h1 className="font-serif text-4xl text-[#111111] mb-2">My Tasks</h1>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Daily Action List</p>
      </div>

      <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-8">
        <h2 className="font-serif text-2xl text-[#111111] mb-6">Pending Actions</h2>
        
        <div className="space-y-4">
          {/* Task 1 - Amber Highlight */}
          <div className="flex items-center justify-between p-4 border border-[#C88A35]/30 bg-[#C88A35]/5 rounded-sm relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-[#C88A35]"></div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-[#C88A35] rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold text-[#C88A35] uppercase tracking-widest">Urgent SLA</span>
              </div>
              <p className="font-bold text-[#111111] text-lg">Follow up with Youssef - 1 hour remaining on SLA</p>
              <p className="text-sm text-gray-500 font-medium">Business Bay Penthouse Interest</p>
            </div>
            <button className="bg-[#111111] hover:bg-black text-white px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-sm">
              Mark Completed
            </button>
          </div>

          {/* Task 2 */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
            <div>
              <p className="font-bold text-[#111111] text-lg">Send contract draft to Elena Volkov</p>
              <p className="text-sm text-gray-500 font-medium">Dubai Marina Sky Villa</p>
            </div>
            <button className="bg-[#111111] hover:bg-black text-white px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-sm">
              Mark Completed
            </button>
          </div>

          {/* Task 3 */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
            <div>
              <p className="font-bold text-[#111111] text-lg">Confirm viewing slot for Mohammed A.</p>
              <p className="text-sm text-gray-500 font-medium">Tomorrow at 14:00 GST</p>
            </div>
            <button className="bg-[#111111] hover:bg-black text-white px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-sm">
              Mark Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
