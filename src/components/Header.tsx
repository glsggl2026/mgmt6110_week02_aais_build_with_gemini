import React from 'react';
import { Search, Globe, User } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  activeNav: string;
  onNavClick: (nav: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  activeNav,
  onNavClick,
}) => {
  const navItems = ['Products', 'Community', 'Markets', 'Brokers', 'More'];

  return (
    <header className="bg-[#101419] border-b border-[#434656]/50 sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 h-16 max-w-[1440px] mx-auto">
        {/* Left Section: Logo, Search, Nav */}
        <div className="flex items-center gap-6">
          {/* Logo icon matching TradingView stacked cards / layers */}
          <a
            href="#"
            className="flex items-center text-[#2962ff] hover:opacity-90 transition-opacity"
            title="Markets Everywhere"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              height="32"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5Z" />
              <path d="m2 17 10 5 10-5" />
              <path d="m2 12 10 5 10-5" />
            </svg>
          </a>

          {/* Search bar */}
          <div className="relative hidden lg:block">
            <Search className="w-4 h-4 text-[#c3c5d8]/70 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search (Ctrl+K)"
              className="bg-[#31353b] border-none rounded-full py-2 pl-10 pr-4 text-sm text-[#dfe2ea] focus:outline-none focus:ring-1 focus:ring-[#2962ff] w-64 placeholder-[#c3c5d8]/50"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#c3c5d8] hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeNav === item;
              return (
                <button
                  key={item}
                  onClick={() => onNavClick(item)}
                  className={`text-sm font-medium transition-colors relative py-5 ${
                    isActive
                      ? 'text-[#2962ff]'
                      : 'text-[#c3c5d8] hover:text-[#dfe2ea]'
                  }`}
                >
                  {item}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2962ff]" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Section: Language, Profile, Get Started */}
        <div className="flex items-center gap-4">
          <button
            className="hidden sm:flex items-center gap-1 text-[#c3c5d8] hover:text-[#dfe2ea] transition-colors px-2 py-1 rounded"
            title="Language: English"
          >
            <Globe className="w-5 h-5 text-[#c3c5d8]" />
            <span className="text-[11px] font-bold tracking-wider">EN</span>
          </button>

          <button
            className="p-1.5 rounded-full text-[#c3c5d8] hover:text-[#dfe2ea] transition-colors"
            title="User account"
          >
            <User className="w-5 h-5" />
          </button>

          <button className="bg-[#2962ff] hover:bg-[#004ee8] text-[#f7f5ff] text-sm font-semibold px-4 py-2 rounded transition-colors hidden sm:block shadow-sm">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
};
