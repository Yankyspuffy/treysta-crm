export default function WhatsAppPage() {
  return (
    <div className="p-10 max-w-[1600px] mx-auto w-full h-[calc(100vh-80px)]">
      <div className="flex h-[800px] gap-8">
        
        {/* Left Panel: Active Lead Profile */}
        <div className="w-1/3 bg-white border border-gray-200 shadow-sm rounded-sm p-8 flex flex-col">
          <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6">
            <h2 className="font-serif text-3xl text-deep-charcoal">Active Lead</h2>
            <span className="text-xs font-semibold text-deep-charcoal bg-amber/10 px-3 py-1.5 uppercase tracking-widest border border-amber/30 rounded-sm shadow-sm">
              SIMULATED
            </span>
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gray-50 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-serif text-deep-charcoal border border-gray-200 shadow-inner">
                YA
              </div>
              <h3 className="text-2xl font-semibold text-deep-charcoal">Youssef Ahmed</h3>
              <p className="text-sm text-gray-500 mt-1">+971 50 123 4567</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Budget</span>
                <span className="font-semibold text-deep-charcoal text-lg">$2M</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Preference</span>
                <span className="font-semibold text-deep-charcoal text-right">Dubai Marina</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">AI Score</span>
                <span className="bg-coral/10 text-coral border border-coral/20 text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest shadow-sm">Hot (94)</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Status</span>
                <span className="font-semibold text-deep-charcoal">AI Qualifying</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: WhatsApp Web-style Chat */}
        <div className="flex-1 bg-white border border-gray-200 shadow-sm rounded-sm flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-[#075E54] text-white px-6 py-4 flex items-center justify-between shadow-sm relative z-10">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold border border-white/30">YA</div>
               <div>
                 <h3 className="font-semibold tracking-wide">Youssef Ahmed</h3>
                 <p className="text-xs text-white/80 font-medium">Client AI is active</p>
               </div>
            </div>
            <button className="bg-deep-charcoal hover:brightness-110 text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-md cursor-pointer">
              Agent Takeover
            </button>
          </div>

          {/* Chat Canvas */}
          <div className="flex-1 bg-[#E5DDD5] p-6 overflow-y-auto space-y-6 relative" style={{ backgroundImage: 'radial-gradient(#d1c7bd 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            
            {/* Message from Client */}
            <div className="flex justify-start">
              <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 max-w-[70%] shadow-sm relative pr-16 pb-6">
                <p className="text-sm text-gray-800 leading-relaxed">Hi, I'm looking for a 2 bedroom apartment around $2M in Dubai Marina. Ready to move in.</p>
                <span className="text-[10px] text-gray-400 absolute bottom-1.5 right-3 font-medium">10:42 AM</span>
              </div>
            </div>

            {/* Message from AI */}
            <div className="flex justify-end">
              <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-3 max-w-[70%] shadow-sm relative pr-16 pb-6">
                <p className="text-xs text-[#075E54] font-bold mb-1">Treysta AI Assistant</p>
                <p className="text-sm text-gray-800 leading-relaxed">Hello Youssef! I can certainly help with that. Dubai Marina is a fantastic choice.</p>
                <p className="text-sm text-gray-800 leading-relaxed mt-2">I have found 3 properties that perfectly match your criteria of $2M, 2-bedrooms, and ready to move in. Would you like me to send over the brochures?</p>
                <span className="text-[10px] text-gray-500 absolute bottom-1.5 right-3 font-medium flex items-center gap-1">
                  10:43 AM 
                  <span className="text-[#34B7F1] tracking-tighter">✓✓</span>
                </span>
              </div>
            </div>

            {/* Message from Client */}
            <div className="flex justify-start">
              <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 max-w-[70%] shadow-sm relative pr-16 pb-6">
                <p className="text-sm text-gray-800">Yes please.</p>
                <span className="text-[10px] text-gray-400 absolute bottom-1.5 right-3 font-medium">10:45 AM</span>
              </div>
            </div>

            {/* Message from AI with files */}
            <div className="flex justify-end">
              <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-3 max-w-[70%] shadow-sm relative pr-16 pb-6">
                 <p className="text-xs text-[#075E54] font-bold mb-3">Treysta AI Assistant</p>
                 <div className="space-y-2 mb-3">
                   {/* Brochures */}
                   <div className="bg-white/60 hover:bg-white transition-colors border border-sage/20 rounded p-2 flex items-center gap-3 shadow-sm cursor-pointer">
                      <div className="w-8 h-8 bg-coral/10 text-coral rounded flex items-center justify-center font-bold text-[10px] border border-coral/20">PDF</div>
                      <p className="text-xs font-semibold text-deep-charcoal">Marina Gate Sky Villa.pdf</p>
                   </div>
                   <div className="bg-white/60 hover:bg-white transition-colors border border-sage/20 rounded p-2 flex items-center gap-3 shadow-sm cursor-pointer">
                      <div className="w-8 h-8 bg-coral/10 text-coral rounded flex items-center justify-center font-bold text-[10px] border border-coral/20">PDF</div>
                      <p className="text-xs font-semibold text-deep-charcoal">Cayan Tower High Floor.pdf</p>
                   </div>
                   <div className="bg-white/60 hover:bg-white transition-colors border border-sage/20 rounded p-2 flex items-center gap-3 shadow-sm cursor-pointer">
                      <div className="w-8 h-8 bg-coral/10 text-coral rounded flex items-center justify-center font-bold text-[10px] border border-coral/20">PDF</div>
                      <p className="text-xs font-semibold text-deep-charcoal">Liv Residence 2BR.pdf</p>
                   </div>
                 </div>
                 <p className="text-sm text-gray-800 leading-relaxed">Here are the brochures! Let me know if you would like to schedule a viewing for any of these.</p>
                 <span className="text-[10px] text-gray-500 absolute bottom-1.5 right-3 font-medium flex items-center gap-1">
                   10:46 AM
                   <span className="text-[#34B7F1] tracking-tighter">✓✓</span>
                 </span>
              </div>
            </div>
            
          </div>
          
          {/* Chat Input */}
          <div className="bg-[#f0f2f5] px-4 py-3 flex items-center gap-4 border-t border-gray-200">
             <div className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
             </div>
             <div className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
               </svg>
             </div>
             <input type="text" placeholder="Treysta AI is managing this conversation..." disabled className="flex-1 bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-3 text-sm outline-none text-gray-500 placeholder:text-gray-400" />
             <div className="text-[#075E54] hover:brightness-110 cursor-pointer transition-colors">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                 <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
               </svg>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
