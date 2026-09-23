export default function AgentAIAssistantPage() {
  return (
    <div className="p-10 max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row gap-8 min-h-[calc(100vh-80px)]">
      
      <div className="w-full lg:w-80 shrink-0 flex flex-col gap-4">
        <div>
          <h1 className="font-serif text-3xl text-[#111111] mb-2">AI Copilot</h1>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Suggested Prompts</p>
        </div>
        
        <div className="space-y-3 mt-4">
          <button className="w-full text-left bg-white border border-gray-200 p-4 rounded-sm hover:border-[#4A6B5D] transition-colors shadow-sm group">
            <span className="block text-sm font-bold text-[#111111] mb-1">Draft follow-up</span>
            <span className="text-xs text-gray-500 group-hover:text-[#4A6B5D] transition-colors">For Mohammed regarding Safa Two.</span>
          </button>
          
          <button className="w-full text-left bg-white border-2 border-[#111111] p-4 rounded-sm shadow-md">
            <span className="block text-sm font-bold text-[#111111] mb-1">Send Payment Plan</span>
            <span className="text-xs text-gray-600">Draft WhatsApp for Youssef Ahmed with Business Bay plan.</span>
          </button>
          
          <button className="w-full text-left bg-white border border-gray-200 p-4 rounded-sm hover:border-[#4A6B5D] transition-colors shadow-sm group">
            <span className="block text-sm font-bold text-[#111111] mb-1">Summarize Interactions</span>
            <span className="text-xs text-gray-500 group-hover:text-[#4A6B5D] transition-colors">Show history for Elena Volkov.</span>
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col">
        <div className="p-6 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
          <div className="w-10 h-10 rounded-full bg-[#4A6B5D]/10 border border-[#4A6B5D]/20 flex items-center justify-center">
            <span className="w-2.5 h-2.5 bg-[#4A6B5D] rounded-full animate-pulse"></span>
          </div>
          <div>
            <h2 className="font-bold text-[#111111]">Treysta AI Assistant</h2>
            <p className="text-xs text-[#4A6B5D] font-bold uppercase tracking-widest">Active Context: Youssef Ahmed</p>
          </div>
        </div>
        
        <div className="flex-1 p-8 overflow-y-auto space-y-6 bg-gray-50">
          
          <div className="flex justify-end">
            <div className="bg-[#111111] text-white rounded-lg rounded-tr-none px-5 py-4 max-w-[75%] shadow-md">
              <p className="text-sm">Draft a WhatsApp message for Youssef attaching the Business Bay payment plan. Be professional but warm.</p>
            </div>
          </div>
          
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none px-6 py-5 max-w-[85%] shadow-sm relative">
              <div className="absolute -left-3 top-4 text-[10px] text-[#4A6B5D] font-bold uppercase tracking-widest -rotate-90">AI</div>
              <p className="text-sm font-bold text-[#111111] mb-3">Draft Ready:</p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 text-sm text-gray-700 font-mono mb-4 whitespace-pre-wrap">
                {`Hi Youssef, \n\nI hope you're having a great week! \n\nAs requested, I've attached the detailed payment plan for the Business Bay Penthouse. It breaks down the 60/40 post-handover structure we discussed.\n\nLet me know if you have any questions or if you'd like to jump on a quick call to review it together. \n\nBest regards,\nSarah`}
              </div>
              
              <div className="flex items-center gap-4">
                <button className="bg-[#111111] text-white px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-sm cursor-pointer flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.472-.736-2.678-1.576-3.729-3.003-.213-.29-.022-.445.126-.593.133-.133.297-.346.445-.519.148-.173.198-.297.297-.494.099-.199.05-.371-.025-.52-.075-.148-.67-1.611-.916-2.203-.238-.58-.48-.501-.667-.511-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 3.064 1.213 3.262.148.198 2.223 3.393 5.385 4.674 2.083.844 2.977.902 4.025.759 1.168-.161 2.779-1.135 3.175-2.233.396-1.098.396-2.039.277-2.235-.119-.196-.416-.296-.713-.445zM12.012 21.996C6.549 21.996 2.01 17.458 2.01 11.996 2.01 6.534 6.549 1.996 12.012 1.996c5.462 0 10.001 4.538 10.001 10.001 0 5.462-4.539 10.001-10.001 10.001z"/></svg>
                  Send to WhatsApp
                </button>
                <button className="text-xs text-gray-500 font-bold uppercase tracking-widest hover:text-[#111111] transition-colors">
                  Regenerate
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-full px-5 py-3">
             <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent border-none outline-none text-sm text-[#111111]" disabled />
          </div>
        </div>
      </div>

    </div>
  );
}
