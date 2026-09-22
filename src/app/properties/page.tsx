const PROPERTIES = [
  { 
    title: 'Binghatti Skyblade', 
    location: 'Downtown Dubai', 
    developer: 'Binghatti', 
    type: '1-3BR | Apartment', 
    price: 'AED 1.7M', 
    handover: 'Q4 2027', 
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    title: 'Damac Lagoons Views', 
    location: 'Damac Lagoons', 
    developer: 'Damac Properties', 
    type: '4-6BR | Villa', 
    price: 'AED 3.2M', 
    handover: 'Q2 2028', 
    image: 'https://images.unsplash.com/photo-1613490908575-1033ce542617?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    title: 'Central Park at City Walk', 
    location: 'City Walk', 
    developer: 'Meraas', 
    type: '1-4BR | Apartment', 
    price: 'AED 2.4M', 
    handover: 'Q1 2027', 
    image: 'https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    title: 'The Oasis', 
    location: 'Dubailand', 
    developer: 'Emaar', 
    type: '5-6BR | Mansion', 
    price: 'AED 14.5M', 
    handover: 'Q3 2028', 
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    title: 'Safa Two by de GRISOGONO', 
    location: 'Safa Park', 
    developer: 'Damac Properties', 
    type: '1-3BR | Apartment', 
    price: 'AED 2.8M', 
    handover: 'Q2 2027', 
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    title: 'Mercedes-Benz Places', 
    location: 'Downtown Dubai', 
    developer: 'Binghatti', 
    type: '2-4BR | Penthouse', 
    price: 'AED 9.5M', 
    handover: 'Q4 2028', 
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800' 
  },
];

export default function PropertiesPage() {
  return (
    <div className="p-10 max-w-7xl mx-auto w-full relative min-h-screen">
      
      {/* Floating WhatsApp Icon */}
      <button className="fixed bottom-10 right-10 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 cursor-pointer">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 0C5.385 0 .004 5.382.004 12.029c0 2.12.553 4.191 1.604 6.012L0 24l6.115-1.604a11.968 11.968 0 005.916 1.564h.005c6.647 0 12.028-5.381 12.028-12.028C24.062 5.383 18.678 0 12.031 0zm0 21.993a9.96 9.96 0 01-5.077-1.385l-.364-.216-3.771.99.996-3.676-.237-.377a9.96 9.96 0 01-1.523-5.302C2.054 5.485 7.433.106 14.081.106c6.645 0 12.026 5.38 12.026 12.026 0 6.646-5.381 12.026-12.026 12.026zM17.525 15.01c-.302-.15-1.791-.884-2.067-.986-.275-.102-.477-.15-.678.151-.202.302-.782.986-.958 1.188-.176.202-.352.226-.654.076-1.503-.75-2.73-1.605-3.8-3.056-.217-.295-.023-.454.127-.604.135-.135.302-.352.453-.528.15-.176.202-.302.302-.503.101-.202.05-.377-.025-.528-.076-.15-.678-1.636-.928-2.24-.242-.59-.488-.51-.678-.52-.176-.01-.377-.01-.579-.01a1.104 1.104 0 00-.796.377C7.458 8.01 6.63 8.788 6.63 10.37c0 1.583.98 3.115 1.116 3.296.136.182 2.248 3.433 5.446 4.814 2.115.912 3.033.984 4.093.829 1.188-.174 2.827-1.155 3.23-2.271.402-1.115.402-2.072.281-2.272-.121-.201-.423-.301-.725-.452z"/>
        </svg>
      </button>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-4xl text-deep-charcoal">Enterprise Inventory</h1>
        <span className="text-xs font-semibold text-deep-charcoal bg-amber/10 px-3 py-1.5 uppercase tracking-widest border border-amber/30 rounded-sm">
          SIMULATED DEMO DATA
        </span>
      </div>

      {/* Standard CRM Controls */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <div className="bg-white border border-gray-200 rounded-sm flex items-center p-0.5 shadow-sm">
            <button className="px-3 py-1.5 bg-gray-100 text-deep-charcoal rounded-sm text-sm flex items-center gap-2 font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              Grid
            </button>
            <button className="px-3 py-1.5 text-gray-500 hover:text-deep-charcoal rounded-sm text-sm flex items-center gap-2 font-medium transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
              List
            </button>
          </div>
          <button className="flex items-center gap-2 text-sm font-semibold text-deep-charcoal bg-white border border-gray-200 px-4 py-1.5 rounded-sm shadow-sm hover:bg-gray-50 transition-colors">
            Bulk Actions
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>
        <button className="flex items-center gap-2 text-sm font-bold text-white bg-deep-charcoal px-4 py-2 rounded-sm shadow-sm hover:bg-black transition-colors uppercase tracking-widest">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
          Save AI Search
        </button>
      </div>
      
      {/* AI Copilot Integration */}
      <div className="mb-8">
        <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-full px-6 py-4 flex items-center gap-4 transition-all focus-within:ring-2 focus-within:ring-sage/20 focus-within:border-sage">
          <svg className="w-6 h-6 text-sage shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <input 
            type="text" 
            placeholder="Ask Treysta AI... (e.g., 'Show me all off-plan Emaar properties handing over in Q2 2028 under AED 2M')" 
            className="flex-1 outline-none text-deep-charcoal font-medium placeholder:text-gray-400 bg-transparent w-full"
          />
          <button className="shrink-0 bg-sage text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full hover:bg-sage/90 transition-colors">Search</button>
        </div>
        
        {/* Quick Action Chips */}
        <div className="flex items-center gap-3 mt-4 px-2">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Suggestions:</span>
          <button className="bg-white border border-gray-200 text-xs font-semibold text-deep-charcoal px-3 py-1.5 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm">✨ Highest ROI Off-Plan</button>
          <button className="bg-white border border-gray-200 text-xs font-semibold text-deep-charcoal px-3 py-1.5 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm">🔑 Ready to Move</button>
          <button className="bg-white border border-gray-200 text-xs font-semibold text-deep-charcoal px-3 py-1.5 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm">📈 Trending in Downtown</button>
        </div>
      </div>

      {/* Advanced CRM Filtering */}
      <div className="flex flex-wrap items-center gap-4 mb-8 bg-white p-4 rounded-sm border border-gray-200 shadow-sm">
        <select className="flex-1 min-w-[150px] bg-gray-50 border border-gray-200 rounded-sm px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-deep-charcoal outline-none cursor-pointer hover:border-gray-300 transition-colors">
          <option>Market</option>
          <option>Off-Plan</option>
          <option>Secondary</option>
        </select>
        <select className="flex-1 min-w-[150px] bg-gray-50 border border-gray-200 rounded-sm px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-deep-charcoal outline-none cursor-pointer hover:border-gray-300 transition-colors">
          <option>Type</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Mansion</option>
          <option>Penthouse</option>
        </select>
        <select className="flex-1 min-w-[150px] bg-gray-50 border border-gray-200 rounded-sm px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-deep-charcoal outline-none cursor-pointer hover:border-gray-300 transition-colors">
          <option>Developer</option>
          <option>Emaar</option>
          <option>Binghatti</option>
          <option>Damac</option>
          <option>Meraas</option>
        </select>
        <select className="flex-1 min-w-[150px] bg-gray-50 border border-gray-200 rounded-sm px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-deep-charcoal outline-none cursor-pointer hover:border-gray-300 transition-colors">
          <option>Handover</option>
          <option>Ready</option>
          <option>2026</option>
          <option>2027</option>
          <option>2028</option>
        </select>
        <button className="bg-deep-charcoal text-white px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-sm">
          Filter
        </button>
      </div>

      {/* High-Fidelity Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROPERTIES.map((property, idx) => (
          <div key={idx} className="group bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden flex flex-col transition-all hover:shadow-xl hover:-translate-y-1 relative">
            
            {/* Image Header */}
            <div 
              className="h-64 bg-gray-200 relative bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: `url(${property.image})` }}
            >
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 via-transparent to-black/20"></div>
              
              {/* Top Left CRM Checkbox */}
              <div className="absolute top-4 left-4 z-10">
                <input type="checkbox" className="w-5 h-5 rounded-sm border-gray-300 text-sage focus:ring-sage shadow-sm cursor-pointer accent-sage bg-white" />
              </div>

              {/* Top Right Amber Handover Pill */}
              <div className="absolute top-4 right-4 z-10 bg-amber text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                {property.handover}
              </div>
              
              {/* CRM Quick Actions Hover State */}
              <div className="absolute inset-0 bg-deep-charcoal/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-sm z-20">
                <button className="w-56 bg-deep-charcoal border border-gray-600 text-white px-4 py-3 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-lg translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300 delay-75 cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.472-.736-2.678-1.576-3.729-3.003-.213-.29-.022-.445.126-.593.133-.133.297-.346.445-.519.148-.173.198-.297.297-.494.099-.199.05-.371-.025-.52-.075-.148-.67-1.611-.916-2.203-.238-.58-.48-.501-.667-.511-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 3.064 1.213 3.262.148.198 2.223 3.393 5.385 4.674 2.083.844 2.977.902 4.025.759 1.168-.161 2.779-1.135 3.175-2.233.396-1.098.396-2.039.277-2.235-.119-.196-.416-.296-.713-.445zM12.012 21.996C6.549 21.996 2.01 17.458 2.01 11.996 2.01 6.534 6.549 1.996 12.012 1.996c5.462 0 10.001 4.538 10.001 10.001 0 5.462-4.539 10.001-10.001 10.001z"/></svg>
                  Send via WhatsApp
                </button>
                <button className="w-56 bg-deep-charcoal border border-gray-600 text-white px-4 py-3 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-lg translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300 delay-100 cursor-pointer">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  Generate AI Factsheet
                </button>
              </div>
            </div>
            
            {/* Card Body */}
            <div className="p-6 flex flex-col flex-1 bg-white relative z-10">
              <div className="mb-4">
                <h3 className="font-bold text-xl text-deep-charcoal leading-tight mb-1">{property.title}</h3>
                <p className="text-sage font-bold text-sm">Starting Price: {property.price}</p>
              </div>
              
              {/* Specs */}
              <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-6">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  {property.type}
                </span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {property.location}
                </span>
              </div>
              
              {/* Footer */}
              <div className="mt-auto border-t border-gray-100 pt-4 flex justify-end">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                  By <span className="text-deep-charcoal">{property.developer}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
