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
];

export default function AgentPropertiesPage() {
  return (
    <div className="p-10 max-w-[1400px] mx-auto w-full">
      <div className="mb-8">
        <h1 className="font-serif text-4xl text-[#111111] mb-2">Properties</h1>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Authorized Inventory</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROPERTIES.map((property, idx) => (
          <div key={idx} className="group bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden flex flex-col transition-all hover:shadow-xl hover:-translate-y-1 relative">
            <div 
              className="h-64 bg-gray-200 relative bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: `url(${property.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 via-transparent to-black/20"></div>
              
              <div className="absolute top-4 right-4 z-10 bg-amber text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                {property.handover}
              </div>
              
              <div className="absolute inset-0 bg-deep-charcoal/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-sm z-20">
                <button className="w-56 bg-deep-charcoal border border-gray-600 text-white px-4 py-3 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-lg translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300 delay-75 cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.472-.736-2.678-1.576-3.729-3.003-.213-.29-.022-.445.126-.593.133-.133.297-.346.445-.519.148-.173.198-.297.297-.494.099-.199.05-.371-.025-.52-.075-.148-.67-1.611-.916-2.203-.238-.58-.48-.501-.667-.511-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 3.064 1.213 3.262.148.198 2.223 3.393 5.385 4.674 2.083.844 2.977.902 4.025.759 1.168-.161 2.779-1.135 3.175-2.233.396-1.098.396-2.039.277-2.235-.119-.196-.416-.296-.713-.445zM12.012 21.996C6.549 21.996 2.01 17.458 2.01 11.996 2.01 6.534 6.549 1.996 12.012 1.996c5.462 0 10.001 4.538 10.001 10.001 0 5.462-4.539 10.001-10.001 10.001z"/></svg>
                  Send via WhatsApp
                </button>
                <button className="w-56 bg-deep-charcoal border border-gray-600 text-white px-4 py-3 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-lg translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300 delay-100 cursor-pointer">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  Request Viewing Slot
                </button>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1 bg-white relative z-10">
              <div className="mb-4">
                <h3 className="font-bold text-xl text-[#111111] leading-tight mb-1">{property.title}</h3>
                <p className="text-[#4A6B5D] font-bold text-sm">Starting Price: {property.price}</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-6">
                <span>{property.type}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{property.location}</span>
              </div>
              <div className="mt-auto border-t border-gray-100 pt-4 flex justify-end">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                  By <span className="text-[#111111]">{property.developer}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
