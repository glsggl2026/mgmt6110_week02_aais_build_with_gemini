import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0e14] border-t border-[#434656]/50 mt-auto">
      <div className="max-w-[1440px] mx-auto w-full py-8 px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[#c3c5d8]">
        <div className="text-[11px] font-bold tracking-wider uppercase">
          © 2024 TradingView, Inc.
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#"
            className="text-xs text-[#c3c5d8] hover:text-[#dfe2ea] hover:underline transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-xs text-[#c3c5d8] hover:text-[#dfe2ea] hover:underline transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="text-xs text-[#c3c5d8] hover:text-[#dfe2ea] hover:underline transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs text-[#c3c5d8] hover:text-[#dfe2ea] hover:underline transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
