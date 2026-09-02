import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Header } from './components/Header';
import { CategoryBar } from './components/CategoryBar';
import { MarketCard } from './components/MarketCard';
import { DetailModal } from './components/DetailModal';
import { Footer } from './components/Footer';
import { MarketCategory, MarketItem } from './types';
import { CATEGORY_MARKETS, QUICK_LINKS } from './data';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<MarketCategory>('US stocks');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNav, setActiveNav] = useState('Markets');
  const [selectedItem, setSelectedItem] = useState<MarketItem | null>(null);

  // Filter items based on active category and optional search query
  const categoryItems = CATEGORY_MARKETS[selectedCategory] || [];
  const displayedItems = searchQuery.trim()
    ? categoryItems.filter(
        (it) =>
          it.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          it.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categoryItems;

  return (
    <div className="bg-[#101419] text-[#dfe2ea] min-h-screen flex flex-col selection:bg-[#2962ff] selection:text-white">
      {/* Top App Bar */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeNav={activeNav}
        onNavClick={setActiveNav}
      />

      {/* Main Content Area */}
      <main className="grow max-w-[1440px] mx-auto w-full px-6 py-8">
        {/* Hero Title Section */}
        <section className="mb-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <h1 className="text-[48px] leading-[56px] font-bold font-display flex items-center gap-2 tracking-tight">
            <span>Markets, everywhere</span>
            <button
              onClick={() => {
                // Cycle through categories on dropdown icon click
                const cats: MarketCategory[] = [
                  'US stocks',
                  'World stocks',
                  'Crypto',
                  'Futures',
                  'Forex',
                  'Government bonds',
                  'Corporate bonds',
                  'ETFs',
                  'Economy',
                ];
                const currentIndex = cats.indexOf(selectedCategory);
                const nextCat = cats[(currentIndex + 1) % cats.length];
                setSelectedCategory(nextCat);
              }}
              className="hover:text-[#2962ff] transition-colors p-1 rounded hover:bg-[#1E222D]"
              title="Switch market"
            >
              <ChevronDown className="w-9 h-9" />
            </button>
          </h1>
        </section>

        {/* Market Categories Navigation */}
        <CategoryBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Section: Indices */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[32px] leading-[40px] font-bold font-display flex items-center gap-1 group cursor-pointer hover:text-[#2962ff] transition-colors tracking-tight">
              <span>Indices</span>
              <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {displayedItems.length > 0 ? (
              displayedItems.map((item) => (
                <MarketCard
                  key={item.id}
                  item={item}
                  isSelected={selectedItem?.id === item.id}
                  onClick={() => setSelectedItem(item)}
                />
              ))
            ) : (
              <div className="col-span-3 py-12 text-center text-[#c3c5d8]">
                No indices or assets matched "{searchQuery}" in {selectedCategory}.
              </div>
            )}
          </div>

          {/* Quick Sub-Indices Links */}
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            {QUICK_LINKS.map((link) => (
              <button
                key={link.symbol}
                onClick={() => {
                  setSelectedItem({
                    id: link.symbol.toLowerCase(),
                    name: link.name,
                    symbol: link.symbol,
                    badge: link.symbol.slice(0, 3),
                    badgeBg: 'rgba(41, 98, 255, 0.12)',
                    badgeColor: '#2962FF',
                    value: link.value,
                    rawValue: parseFloat(link.value.replace(/,/g, '')),
                    change: link.change,
                    changePercent: link.change,
                    isPositive: !link.change.startsWith('-'),
                    sparkline: [20, 22, 18, 21, 15, 12, 8, 4],
                    high: link.value,
                    low: link.value,
                    volume: '1.2B',
                  });
                }}
                className="text-[#2962ff] hover:underline font-semibold text-base transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Item Detail Interactive Modal */}
      <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
