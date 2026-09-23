'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AttentionItem {
  id: string;
  severity: 'coral' | 'amber';
  label: string;
  title: string;
  client: string;
  agent: string;
  action: string;
  hasLeftBorder: boolean;
}

const INITIAL_ATTENTION_ITEMS: AttentionItem[] = [
  {
    id: 'sla-breach',
    severity: 'coral',
    label: 'SLA Breach Risk',
    title: 'High-value lead approaching SLA breach',
    client: 'Mohammed A.',
    agent: 'Alex',
    action: 'Reassign',
    hasLeftBorder: true,
  },
  {
    id: 'payment-pending',
    severity: 'amber',
    label: 'Payment Overdue',
    title: 'Payment pending for 48 hours',
    client: 'Downtown Residence Unit 402',
    agent: 'Sarah',
    action: 'Review',
    hasLeftBorder: true,
  },
  {
    id: 'viewing-unconfirmed',
    severity: 'amber',
    label: 'Viewing Unconfirmed',
    title: 'Unconfirmed viewing at 15:00',
    client: 'Dubai Marina 2 Bed',
    agent: 'Ahmed',
    action: 'Contact Agent',
    hasLeftBorder: false,
  },
];

const NAV_LINKS = [
  { href: '/', label: 'Command Centre' },
  { href: '/leads', label: 'Leads' },
  { href: '/properties', label: 'Properties' },
  { href: '/pipeline', label: 'Pipeline' },
  { href: '/agents', label: 'Agents' },
  { href: '/whatsapp', label: 'WhatsApp' },
  { href: '/ai-intelligence', label: 'AI Intelligence' },
];

function Toast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-deep-charcoal text-white px-6 py-3 rounded-sm shadow-2xl text-sm font-medium tracking-wide flex items-center gap-3 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <svg className="w-5 h-5 text-sage shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      {message}
    </div>
  );
}

export default function RootNavbar() {
  const pathname = usePathname();
  const [attentionOpen, setAttentionOpen] = useState(false);
  const [attentionItems, setAttentionItems] = useState<AttentionItem[]>(INITIAL_ATTENTION_ITEMS);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [dismissingId, setDismissingId] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  }, []);

  const handleAction = useCallback(
    (item: AttentionItem) => {
      setDismissingId(item.id);
      setTimeout(() => {
        setAttentionItems((prev) => prev.filter((i) => i.id !== item.id));
        setDismissingId(null);

        if (item.id === 'sla-breach') {
          showToast('Lead reassigned to Sarah — SLA risk resolved');
        } else if (item.id === 'payment-pending') {
          showToast('Payment review initiated — Finance team notified');
        } else if (item.id === 'viewing-unconfirmed') {
          showToast('Agent Ahmed contacted via WhatsApp');
        }
      }, 400);
    },
    [showToast]
  );

  const attentionCount = attentionItems.length;

  if (pathname.startsWith('/agent-workspace') || pathname.startsWith('/login')) {
    return null;
  }

  return (
    <>
      <nav className="bg-deep-charcoal text-white flex items-center justify-between px-8 py-5 relative z-30">
        <div className="flex items-center space-x-12">
          <Link href="/" className="font-serif text-2xl tracking-widest uppercase">
            TREYSTA
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border-b-2 pb-1 transition-colors ${isActive ? 'border-sage text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setAttentionOpen(true)}
            className="bg-coral text-white px-6 py-2.5 rounded-sm font-semibold text-sm uppercase tracking-wide transition-all shadow-md hover:brightness-110 cursor-pointer relative"
          >
            WHAT NEEDS MY ATTENTION?
            {attentionCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-white text-coral text-xs font-black rounded-full flex items-center justify-center shadow-lg">
                {attentionCount}
              </span>
            )}
          </button>
          
          <Link 
            href="/login"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
            title="Sign Out / Change User"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          </Link>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ${attentionOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setAttentionOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${attentionOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-gray-100">
          <div>
            <h2 className="font-serif text-2xl text-deep-charcoal">Action Required</h2>
            {attentionCount > 0 && (
              <p className="text-xs text-gray-400 mt-1">{attentionCount} item{attentionCount !== 1 ? 's' : ''} pending</p>
            )}
          </div>
          <button
            onClick={() => setAttentionOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-deep-charcoal transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-8 py-6 space-y-5 overflow-y-auto h-[calc(100%-88px)]">
          {attentionItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-serif text-xl text-deep-charcoal">All Clear</p>
              <p className="text-sm text-gray-400 mt-1">No items require your attention</p>
            </div>
          ) : (
            attentionItems.map((item) => {
              const isCoral = item.severity === 'coral';
              const bgClass = isCoral ? 'bg-coral/5 border-coral/10' : 'bg-amber/5 border-amber/10';
              const borderLeftClass = item.hasLeftBorder ? (isCoral ? 'border-l-4 border-l-coral' : 'border-l-4 border-l-amber') : '';
              const labelColor = isCoral ? 'text-coral' : 'text-amber';
              const isDismissing = dismissingId === item.id;

              return (
                <div
                  key={item.id}
                  className={`border rounded-sm p-5 transition-all duration-400 ${bgClass} ${borderLeftClass} ${isDismissing ? 'opacity-0 translate-x-8 max-h-0 overflow-hidden p-0 border-0 mb-0' : 'opacity-100 translate-x-0 max-h-96'}`}
                >
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${labelColor}`}>{item.label}</p>
                  <p className="text-sm font-semibold text-deep-charcoal">{item.title}</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                    <span className="font-medium text-deep-charcoal">{item.client}</span>
                    <span>&bull;</span>
                    <span>Agent: {item.agent}</span>
                  </div>
                  <button
                    onClick={() => handleAction(item)}
                    className="mt-4 bg-deep-charcoal text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm hover:bg-black transition-colors cursor-pointer"
                  >
                    {item.action}
                  </button>
                </div>
              );
            })
          )}
        </div>
      </aside>

      <Toast message={toastMessage} visible={toastVisible} />
    </>
  );
}
