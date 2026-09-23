'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function AgentWorkspaceLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `pb-1 transition-colors ${isActive ? 'text-white border-b-2 border-[#4A6B5D]' : 'hover:text-white'}`;
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] flex flex-col">
      {/* Agent Navigation */}
      <nav className="bg-[#111111] text-white px-4 md:px-8 py-4 flex items-center justify-between shadow-md shrink-0 relative z-30">
        <div className="flex items-center gap-4 md:gap-12">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
          >
            <span className="w-6 h-0.5 bg-white block rounded-full"></span>
            <span className="w-6 h-0.5 bg-white block rounded-full"></span>
            <span className="w-6 h-0.5 bg-white block rounded-full"></span>
          </button>

          <Link href="/" className="font-serif text-xl md:text-2xl tracking-widest uppercase">Treysta</Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold uppercase tracking-widest text-gray-400">
            <Link href="/agent-workspace" className={getLinkClass('/agent-workspace')}>My Leads</Link>
            <Link href="/agent-workspace/tasks" className={getLinkClass('/agent-workspace/tasks')}>My Tasks</Link>
            <Link href="/agent-workspace/properties" className={getLinkClass('/agent-workspace/properties')}>Properties</Link>
            <Link href="/agent-workspace/viewings" className={getLinkClass('/agent-workspace/viewings')}>Viewings</Link>
            <Link href="/agent-workspace/pipeline" className={getLinkClass('/agent-workspace/pipeline')}>Pipeline</Link>
            <Link href="/agent-workspace/ai-assistant" className={getLinkClass('/agent-workspace/ai-assistant')}>My AI Assistant</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-[#C88A35]/20 text-[#C88A35] border border-[#C88A35]/30 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest hidden md:inline-block">
            Simulated Demo Data
          </span>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-sm cursor-pointer hover:bg-white/10 transition-colors">
             <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
               S
             </div>
             <span className="text-xs font-bold uppercase tracking-widest text-white">Agent (Sarah)</span>
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[85vw] max-w-sm bg-[#111111] text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 pt-8 pb-6 border-b border-white/10">
          <span className="font-serif text-2xl tracking-widest uppercase">TREYSTA</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col px-6 py-8 space-y-6 overflow-y-auto text-sm font-semibold uppercase tracking-widest text-gray-400">
          <Link href="/agent-workspace" onClick={() => setMobileMenuOpen(false)} className={getLinkClass('/agent-workspace')}>My Leads</Link>
          <Link href="/agent-workspace/tasks" onClick={() => setMobileMenuOpen(false)} className={getLinkClass('/agent-workspace/tasks')}>My Tasks</Link>
          <Link href="/agent-workspace/properties" onClick={() => setMobileMenuOpen(false)} className={getLinkClass('/agent-workspace/properties')}>Properties</Link>
          <Link href="/agent-workspace/viewings" onClick={() => setMobileMenuOpen(false)} className={getLinkClass('/agent-workspace/viewings')}>Viewings</Link>
          <Link href="/agent-workspace/pipeline" onClick={() => setMobileMenuOpen(false)} className={getLinkClass('/agent-workspace/pipeline')}>Pipeline</Link>
          <Link href="/agent-workspace/ai-assistant" onClick={() => setMobileMenuOpen(false)} className={getLinkClass('/agent-workspace/ai-assistant')}>My AI Assistant</Link>
        </div>
      </aside>

      {/* Page Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}
