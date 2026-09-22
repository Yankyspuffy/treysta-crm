'use client';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4A6B5D] opacity-10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C88A35] opacity-5 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>

      {/* Authentication Card */}
      <div className="bg-white rounded-sm shadow-2xl p-12 max-w-md w-full text-center relative z-10 border border-gray-100">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-5xl tracking-widest text-[#111111] uppercase mb-3">Treysta</h1>
          <p className="font-sans text-xs font-semibold tracking-[0.25em] text-gray-500 uppercase">AI Sales Operating System</p>
        </div>

        {/* Simulated Demo Badge */}
        <div className="mb-10">
          <span className="bg-[#4A6B5D]/10 text-[#4A6B5D] border border-[#4A6B5D]/20 text-xs font-bold px-4 py-2 rounded-sm uppercase tracking-widest shadow-sm">
            Demo Environment
          </span>
        </div>

        {/* Mock Credentials Form */}
        <div className="space-y-4 mb-6 text-left">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
            <input type="email" defaultValue="demo@treysta.ae" className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#111111] outline-none focus:border-[#4A6B5D] focus:ring-1 focus:ring-[#4A6B5D] transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Password</label>
            <input type="password" defaultValue="••••••••" className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#111111] outline-none focus:border-[#4A6B5D] focus:ring-1 focus:ring-[#4A6B5D] transition-all" />
          </div>
        </div>

        {/* Action Buttons (Simulated RBAC) */}
        <div className="space-y-4 mb-8">
          <button 
            onClick={() => router.push('/')}
            className="w-full bg-[#111111] hover:bg-black text-white py-4 px-6 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-md flex items-center justify-center gap-3 group"
          >
            <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Log in as CEO (Admin)
          </button>
          <button 
            onClick={() => router.push('/agent-workspace')}
            className="w-full bg-white border-2 border-[#111111] hover:bg-gray-50 text-[#111111] py-4 px-6 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-sm flex items-center justify-center gap-3 group"
          >
            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#111111] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            Log in as Agent (Sarah)
          </button>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 pt-8 mt-4 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Protected by Treysta Security</p>
        </div>
      </div>
    </div>
  );
}
