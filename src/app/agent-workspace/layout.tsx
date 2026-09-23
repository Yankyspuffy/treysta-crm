'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AgentWorkspaceLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `pb-1 transition-colors ${isActive ? 'text-white border-b-2 border-[#4A6B5D]' : 'hover:text-white'}`;
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] flex flex-col">
      {/* Agent Navigation */}
      <nav className="bg-[#111111] text-white px-8 py-4 flex items-center justify-between shadow-md shrink-0">
        <div className="flex items-center gap-12">
          <Link href="/" className="font-serif text-2xl tracking-widest uppercase">Treysta</Link>
          <div className="flex items-center gap-6 text-sm font-semibold uppercase tracking-widest text-gray-400">
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

      {/* Page Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}
