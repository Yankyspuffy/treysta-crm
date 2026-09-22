export default function PaymentPipelinePage() {
  return (
    <div className="p-10 max-w-[1400px] mx-auto w-full">
      {/* AI Alert Banner */}
      <div className="bg-amber/10 border border-amber/30 border-l-4 border-l-amber rounded-sm p-4 mb-8 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-amber/20 flex items-center justify-center border border-amber/30">
            <span className="w-2.5 h-2.5 bg-amber rounded-full animate-pulse"></span>
          </div>
          <div>
            <p className="text-sm font-bold text-deep-charcoal uppercase tracking-widest mb-0.5">AI Alert</p>
            <p className="text-sm text-gray-700">1 deal is approaching its 48-hour payment deadline. Automated follow-up sent.</p>
          </div>
        </div>
        <button className="text-xs font-bold text-deep-charcoal bg-white border border-amber/30 px-4 py-2 rounded-sm hover:bg-gray-50 transition-colors uppercase tracking-widest shadow-sm cursor-pointer">
          View Details
        </button>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-serif text-4xl text-deep-charcoal">Payment Dashboard</h1>
        <span className="text-xs font-semibold text-deep-charcoal bg-amber/10 px-3 py-1.5 uppercase tracking-widest border border-amber/30 rounded-sm">
          SIMULATED DEMO DATA
        </span>
      </div>

      {/* 3-Column Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Column 1: Contract Signed */}
        <div className="bg-gray-50 border border-gray-200 shadow-sm rounded-sm flex flex-col h-[700px]">
          <div className="px-6 py-4 border-b border-gray-200 bg-white shadow-sm">
            <h2 className="font-bold text-deep-charcoal uppercase tracking-widest text-sm flex items-center justify-between">
              Contract Signed
              <span className="bg-gray-100 border border-gray-200 text-deep-charcoal px-2.5 py-1 rounded text-xs shadow-sm">2</span>
            </h2>
          </div>
          <div className="p-4 space-y-4 overflow-y-auto">
            {/* Card */}
            <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
               <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1.5">Creek Harbour Tower</p>
               <p className="font-semibold text-deep-charcoal text-lg">Sarah Thompson</p>
               <div className="flex items-center justify-between mt-5 border-t border-gray-100 pt-4">
                 <p className="font-bold text-deep-charcoal text-lg">$1.9M</p>
                 <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100">Just now</span>
               </div>
            </div>
            {/* Card */}
            <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
               <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1.5">DIFC Residence</p>
               <p className="font-semibold text-deep-charcoal text-lg">James Chen</p>
               <div className="flex items-center justify-between mt-5 border-t border-gray-100 pt-4">
                 <p className="font-bold text-deep-charcoal text-lg">$6.2M</p>
                 <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100">2h ago</span>
               </div>
            </div>
          </div>
        </div>

        {/* Column 2: Payment Pending */}
        <div className="bg-amber/5 border border-amber/20 shadow-sm rounded-sm flex flex-col h-[700px]">
          <div className="px-6 py-4 border-b border-amber/20 bg-amber/10 shadow-sm">
            <h2 className="font-bold text-amber uppercase tracking-widest text-sm flex items-center justify-between">
              Payment Pending
              <span className="bg-white text-amber border border-amber/20 px-2.5 py-1 rounded text-xs shadow-sm">2</span>
            </h2>
          </div>
          <div className="p-4 space-y-4 overflow-y-auto">
            {/* Card High Value 1 */}
            <div className="bg-white border border-amber/40 shadow-md rounded-sm p-5 hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-1.5 h-full bg-amber group-hover:w-2 transition-all"></div>
               <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1.5">Dubai Marina Sky Villa</p>
               <p className="font-semibold text-deep-charcoal text-lg">Elena Volkov</p>
               
               <div className="mt-4 bg-amber/10 border border-amber/20 rounded-sm p-3 text-xs text-amber font-semibold flex items-center justify-between shadow-inner">
                 <span className="flex items-center gap-1.5">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   Deadline
                 </span>
                 <span className="bg-white px-2 py-0.5 rounded shadow-sm">46 hrs remaining</span>
               </div>
               
               <div className="flex items-center justify-between mt-5 border-t border-gray-100 pt-4">
                 <p className="font-bold text-deep-charcoal text-lg">$4.5M</p>
                 <span className="text-xs font-bold text-amber bg-amber/10 border border-amber/20 px-2.5 py-1 rounded-sm shadow-sm uppercase tracking-wider">20% Down</span>
               </div>
            </div>
            
            {/* Card High Value 2 */}
            <div className="bg-white border border-amber/40 shadow-md rounded-sm p-5 hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-1.5 h-full bg-coral group-hover:w-2 transition-all"></div>
               <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1.5">Palm Jumeirah Estate</p>
               <p className="font-semibold text-deep-charcoal text-lg">Khalid Al Saud</p>
               
               <div className="mt-4 bg-coral/10 border border-coral/20 rounded-sm p-3 text-xs text-coral font-semibold flex items-center justify-between shadow-inner">
                 <span className="flex items-center gap-1.5">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   Critical Deadline
                 </span>
                 <span className="bg-white px-2 py-0.5 rounded shadow-sm animate-pulse">12 hrs remaining</span>
               </div>
               
               <div className="flex items-center justify-between mt-5 border-t border-gray-100 pt-4">
                 <p className="font-bold text-deep-charcoal text-lg">$12.0M</p>
                 <span className="text-xs font-bold text-amber bg-amber/10 border border-amber/20 px-2.5 py-1 rounded-sm shadow-sm uppercase tracking-wider">10% Deposit</span>
               </div>
            </div>
          </div>
        </div>

        {/* Column 3: Commission Reconciled */}
        <div className="bg-sage/5 border border-sage/20 shadow-sm rounded-sm flex flex-col h-[700px]">
          <div className="px-6 py-4 border-b border-sage/20 bg-sage/10 shadow-sm">
            <h2 className="font-bold text-sage uppercase tracking-widest text-sm flex items-center justify-between">
              Commission Reconciled
              <span className="bg-white text-sage border border-sage/20 px-2.5 py-1 rounded text-xs shadow-sm">1</span>
            </h2>
          </div>
          <div className="p-4 space-y-4 overflow-y-auto">
            {/* Card */}
            <div className="bg-white border border-sage/30 rounded-sm p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-1.5 h-full bg-sage group-hover:w-2 transition-all"></div>
               <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1.5">DIFC Loft</p>
               <p className="font-semibold text-deep-charcoal text-lg">Omar Hassan</p>
               <div className="flex items-center justify-between mt-5 border-t border-gray-100 pt-4">
                 <p className="font-bold text-deep-charcoal text-lg">$3.2M</p>
                 <span className="text-xs text-sage font-bold flex items-center gap-1.5 bg-sage/10 border border-sage/20 px-2.5 py-1 rounded-sm shadow-sm uppercase tracking-wider">
                   <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> 
                   Paid
                 </span>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
