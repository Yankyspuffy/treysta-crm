'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    const lowerEmail = email.toLowerCase();
    
    if (lowerEmail === 'demo.ceo@treysta-demo.com' || lowerEmail.includes('ceo')) {
      router.push('/');
    } else if (
      lowerEmail === 'demo.agent@treysta-demo.com' || 
      lowerEmail === 'david@demo.treysta.com' || 
      lowerEmail.includes('agent')
    ) {
      router.push('/agent-workspace');
    } else if (lowerEmail === 'demo.manager@treysta-demo.com') {
      router.push('/agents');
    } else {
      // Default fallback
      router.push('/');
    }
  };

  const handleChipClick = (targetEmail: string) => {
    setEmail(targetEmail);
    setPassword('••••••••••••');
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] flex flex-col items-center justify-center p-4">
      
      {/* Authentication Card */}
      <div className="bg-[#FFFFFF] rounded-sm shadow-sm p-10 max-w-md w-full border border-gray-200">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl tracking-widest text-[#111111] uppercase mb-2">Treysta</h1>
          <p className="font-sans text-xs font-semibold tracking-widest text-gray-500 uppercase">Real Estate Sales Operating System</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignIn} className="space-y-5 mb-8">
          <div>
            <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2 font-sans">Email / Phone</label>
            <input 
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-sm text-[#111111] font-sans outline-none focus:border-[#4A6B5D] focus:ring-1 focus:ring-[#4A6B5D] transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2 font-sans">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-sm text-[#111111] font-sans outline-none focus:border-[#4A6B5D] focus:ring-1 focus:ring-[#4A6B5D] transition-all"
              required
            />
          </div>
          
          <div className="flex items-center justify-between font-sans">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-[#4A6B5D] border-gray-300 rounded-sm focus:ring-[#4A6B5D]" />
              <span className="text-xs text-gray-600 font-semibold tracking-wide">Remember me</span>
            </label>
            <a href="#" className="text-xs text-gray-600 font-semibold tracking-wide hover:text-[#111111] transition-colors">Forgot password?</a>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#111111] hover:bg-black text-white py-4 px-6 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors font-sans mt-2"
          >
            Sign In
          </button>
        </form>

        {/* Demo Environment Selector */}
        <div className="border-t border-gray-100 pt-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 text-center font-sans">Demo Environment - Select Account</p>
          <div className="flex flex-col gap-2 font-sans">
            <button 
              type="button"
              onClick={() => handleChipClick('demo.ceo@treysta-demo.com')}
              className="text-left w-full border border-gray-200 hover:border-[#4A6B5D] p-3 rounded-sm text-xs transition-colors flex items-center justify-between group"
            >
              <div>
                <span className="font-bold text-[#111111] block mb-0.5">CEO Account</span>
                <span className="text-gray-500">demo.ceo@treysta-demo.com</span>
              </div>
              <span className="text-[10px] font-bold text-[#4A6B5D] bg-[#4A6B5D]/10 px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">SELECT</span>
            </button>
            <button 
              type="button"
              onClick={() => handleChipClick('demo.agent@treysta-demo.com')}
              className="text-left w-full border border-gray-200 hover:border-[#4A6B5D] p-3 rounded-sm text-xs transition-colors flex items-center justify-between group"
            >
              <div>
                <span className="font-bold text-[#111111] block mb-0.5">Agent Account (Sarah)</span>
                <span className="text-gray-500">demo.agent@treysta-demo.com</span>
              </div>
              <span className="text-[10px] font-bold text-[#4A6B5D] bg-[#4A6B5D]/10 px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">SELECT</span>
            </button>
            <button 
              type="button"
              onClick={() => handleChipClick('david@demo.treysta.com')}
              className="text-left w-full border border-gray-200 hover:border-[#4A6B5D] p-3 rounded-sm text-xs transition-colors flex items-center justify-between group"
            >
              <div>
                <span className="font-bold text-[#111111] block mb-0.5">New Agent Account (David)</span>
                <span className="text-gray-500">david@demo.treysta.com</span>
              </div>
              <span className="text-[10px] font-bold text-[#4A6B5D] bg-[#4A6B5D]/10 px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">SELECT</span>
            </button>
          </div>
        </div>

      </div>
      
      {/* Footer Indicator */}
      <div className="mt-8 flex items-center justify-center gap-2 font-sans">
        <svg className="w-4 h-4 text-[#4A6B5D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Protected by Treysta Security • RLS Active</p>
      </div>

    </div>
  );
}
