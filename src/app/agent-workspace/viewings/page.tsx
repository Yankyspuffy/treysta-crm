export default function AgentViewingsPage() {
  return (
    <div className="p-10 max-w-[1400px] mx-auto w-full">
      <div className="mb-8">
        <h1 className="font-serif text-4xl text-[#111111] mb-2">Viewings</h1>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Today's Schedule</p>
      </div>

      <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-8 max-w-3xl">
        <div className="relative border-l-2 border-gray-100 ml-4 space-y-12">
          
          <div className="relative pl-8">
            <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#4A6B5D] ring-4 ring-white flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </span>
            <p className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-1">14:00 GST</p>
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 mt-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-[#111111] text-lg">Central Park at City Walk</p>
                  <p className="text-sm text-gray-500 font-medium mt-1">Client: Ahmed R. &bull; 2BR Apartment</p>
                </div>
                <span className="bg-[#4A6B5D]/10 text-[#4A6B5D] border border-[#4A6B5D]/20 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest">Completed</span>
              </div>
            </div>
          </div>

          <div className="relative pl-8">
            <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#111111] ring-4 ring-white flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            </span>
            <p className="text-xs text-[#111111] font-bold tracking-widest uppercase mb-1">16:00 GST</p>
            <div className="bg-white border-2 border-gray-200 rounded-sm p-4 mt-2 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#111111]"></div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-[#111111] text-lg">Damac Lagoons Views</p>
                  <p className="text-sm text-gray-500 font-medium mt-1">Client: Elena Volkov &bull; 4BR Villa</p>
                </div>
                <button className="bg-[#111111] hover:bg-black text-white px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest shadow-sm transition-colors cursor-pointer flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.472-.736-2.678-1.576-3.729-3.003-.213-.29-.022-.445.126-.593.133-.133.297-.346.445-.519.148-.173.198-.297.297-.494.099-.199.05-.371-.025-.52-.075-.148-.67-1.611-.916-2.203-.238-.58-.48-.501-.667-.511-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 3.064 1.213 3.262.148.198 2.223 3.393 5.385 4.674 2.083.844 2.977.902 4.025.759 1.168-.161 2.779-1.135 3.175-2.233.396-1.098.396-2.039.277-2.235-.119-.196-.416-.296-.713-.445zM12.012 21.996C6.549 21.996 2.01 17.458 2.01 11.996 2.01 6.534 6.549 1.996 12.012 1.996c5.462 0 10.001 4.538 10.001 10.001 0 5.462-4.539 10.001-10.001 10.001z"/></svg>
                  Send WhatsApp Reminder
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
