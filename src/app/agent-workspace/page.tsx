import Link from 'next/link';

export default function AgentWorkspacePage() {
  return (

      <div className="p-4 sm:p-10 max-w-[1400px] mx-auto w-full">
        
        {/* Next Best Action Engine */}
        <div className="bg-white rounded-sm p-8 shadow-sm border border-gray-200 mb-8 relative overflow-hidden group hover:shadow-md transition-shadow cursor-default">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#4A6B5D]"></div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
             <div className="flex-1">
               <div className="flex items-center gap-2 mb-3">
                 <span className="w-2.5 h-2.5 bg-[#4A6B5D] rounded-full animate-pulse"></span>
                 <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Next Best Action</h2>
               </div>
               <h3 className="font-serif text-3xl text-[#111111] font-bold leading-tight">Follow up with Mohammed before 4:30 PM.</h3>
               <p className="text-[#4A6B5D] font-semibold mt-2">Reason: Client requested the Business Bay payment plan yesterday and has not received a follow-up.</p>
             </div>
             <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
               <button className="w-full sm:w-auto justify-center bg-[#111111] hover:bg-black text-white px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest shadow-sm transition-colors cursor-pointer flex items-center gap-2">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.472-.736-2.678-1.576-3.729-3.003-.213-.29-.022-.445.126-.593.133-.133.297-.346.445-.519.148-.173.198-.297.297-.494.099-.199.05-.371-.025-.52-.075-.148-.67-1.611-.916-2.203-.238-.58-.48-.501-.667-.511-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 3.064 1.213 3.262.148.198 2.223 3.393 5.385 4.674 2.083.844 2.977.902 4.025.759 1.168-.161 2.779-1.135 3.175-2.233.396-1.098.396-2.039.277-2.235-.119-.196-.416-.296-.713-.445zM12.012 21.996C6.549 21.996 2.01 17.458 2.01 11.996 2.01 6.534 6.549 1.996 12.012 1.996c5.462 0 10.001 4.538 10.001 10.001 0 5.462-4.539 10.001-10.001 10.001z"/></svg>
                 Open WhatsApp
               </button>
               <button className="w-full sm:w-auto justify-center bg-[#111111] hover:bg-black text-white px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest shadow-sm transition-colors cursor-pointer flex items-center gap-2">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                 Send Payment Plan
               </button>
             </div>
          </div>
        </div>

        {/* My Active Leads (Split View) */}
        <div className="flex flex-col lg:flex-row gap-8 h-[auto] lg:h-[650px]">
           
           {/* Left Column: Lead Roster */}
           <div className="w-full lg:w-1/3 bg-white border border-gray-200 shadow-sm rounded-sm flex flex-col">
             <div className="p-6 border-b border-gray-100 bg-gray-50/80">
               <h2 className="font-serif text-2xl text-[#111111] mb-1">My Active Leads</h2>
               <p className="text-xs text-gray-500 font-medium">Prioritized by AI</p>
             </div>
             <div className="flex-1 overflow-y-auto p-5 space-y-4">
               {/* Lead 1 */}
               <div className="border border-gray-200 rounded-sm p-4 hover:border-gray-300 transition-all shadow-sm cursor-pointer relative group">
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#4A6B5D] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex justify-between items-start mb-3">
                    <p className="font-bold text-[#111111] text-lg">Mohammed A.</p>
                    <div className="flex items-center gap-1.5 bg-[#4A6B5D]/10 border border-[#4A6B5D]/20 px-2 py-0.5 rounded-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B5D]"></span>
                      <span className="text-[10px] text-[#4A6B5D] font-bold uppercase tracking-widest">Healthy</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Stage: Negotiation</p>
               </div>
               
               {/* Lead 2 */}
               <div className="border border-[#C8524B]/30 bg-[#C8524B]/5 rounded-sm p-4 transition-all shadow-sm cursor-pointer relative">
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#C8524B]"></div>
                  <div className="flex justify-between items-start mb-3">
                    <p className="font-bold text-[#111111] text-lg">Youssef Ahmed</p>
                    <div className="flex items-center gap-1.5 bg-[#C8524B]/10 border border-[#C8524B]/20 px-2 py-0.5 rounded-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8524B] animate-pulse"></span>
                      <span className="text-[10px] text-[#C8524B] font-bold uppercase tracking-widest">At Risk</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Stage: Viewing Scheduled</p>
               </div>
               
               {/* Lead 3 */}
               <div className="border border-gray-200 rounded-sm p-4 hover:border-gray-300 transition-all shadow-sm cursor-pointer relative group">
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#4A6B5D] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex justify-between items-start mb-3">
                    <p className="font-bold text-[#111111] text-lg">Elena Volkov</p>
                    <div className="flex items-center gap-1.5 bg-[#4A6B5D]/10 border border-[#4A6B5D]/20 px-2 py-0.5 rounded-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B5D]"></span>
                      <span className="text-[10px] text-[#4A6B5D] font-bold uppercase tracking-widest">Healthy</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Stage: Contract Drafting</p>
               </div>
             </div>
           </div>

           {/* Right Column: Agent AI Assistant */}
           <div className="flex-1 bg-white border border-gray-200 shadow-sm rounded-sm flex flex-col relative">
             <div className="p-6 border-b border-gray-100 bg-gray-50/80 flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-[#4A6B5D]/10 border border-[#4A6B5D]/20 flex items-center justify-center">
                   <span className="w-2.5 h-2.5 bg-[#4A6B5D] rounded-full animate-pulse"></span>
                 </div>
                 <div>
                   <h2 className="font-serif text-2xl text-[#111111] leading-tight">My AI Assistant</h2>
                   <p className="text-xs text-[#4A6B5D] font-bold uppercase tracking-widest">Online</p>
                 </div>
               </div>
               <button className="text-xs text-gray-500 font-bold uppercase tracking-widest hover:text-[#111111] transition-colors">
                 Clear Chat
               </button>
             </div>
             
             {/* Chat Area */}
             <div className="flex-1 p-8 space-y-8 overflow-y-auto bg-gray-50">
               {/* Agent Query */}
               <div className="flex justify-end">
                 <div className="bg-[#111111] text-white rounded-lg rounded-tr-none px-5 py-4 max-w-[90%] md:max-w-[75%] shadow-md">
                   <p className="text-sm leading-relaxed">Summarize my hot leads</p>
                 </div>
               </div>
               
               {/* AI Response */}
               <div className="flex justify-start">
                 <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none px-6 py-5 max-w-[95%] md:max-w-[85%] shadow-sm relative">
                   <div className="absolute -left-3 top-4 text-[10px] text-[#4A6B5D] font-bold uppercase tracking-widest -rotate-90">AI</div>
                   <p className="text-sm text-gray-800 leading-relaxed mb-4">
                     You have <strong className="text-[#111111]">2 hot leads</strong> today. Prioritize <strong className="text-[#111111]">Youssef</strong> (Viewing Scheduled) and <strong className="text-[#111111]">Elena</strong> (Requested Negotiation).
                   </p>
                   <p className="text-sm text-gray-800 leading-relaxed mb-5">
                     Would you like me to draft follow-up WhatsApp messages for them?
                   </p>
                   <button className="bg-[#4A6B5D] text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#4A6B5D]/90 transition-colors shadow-sm cursor-pointer flex items-center gap-2">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                     Draft Messages
                   </button>
                 </div>
               </div>
             </div>
             
             {/* Chat Input */}
             <div className="p-4 bg-white border-t border-gray-100">
               <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-full px-5 py-3 focus-within:border-gray-400 focus-within:shadow-sm transition-all">
                  <input type="text" placeholder="Ask your assistant to draft emails, analyze leads, or schedule viewings..." className="flex-1 bg-transparent border-none outline-none text-sm text-[#111111]" disabled />
                  <button className="text-gray-400 hover:text-[#111111] transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  </button>
               </div>
             </div>
           </div>
        </div>
      </div>
  );
}
