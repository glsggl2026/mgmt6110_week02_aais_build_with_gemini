import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { MarketItem } from '../types';

interface MarketCardProps {
  item: MarketItem;
  isSelected?: boolean;
  onClick?: () => void;
}

export const MarketCard: React.FC<MarketCardProps> = ({ item, isSelected, onClick }) => {
  // Convert sparkline points (0..30 height) into SVG path coords
  const points = item.sparkline;
  const maxIdx = Math.max(points.length - 1, 1);
  const pathD = points
    .map((val, idx) => {
      const x = Math.round((idx / maxIdx) * 100);
      const y = Math.round(val);
      return `${idx === 0 ? 'M' : 'L'}${x},${y}`;
    })
    .join(' ');

  return (
    <div
      onClick={onClick}
      className={`bg-[#1E222D] border rounded-xl p-4 transition-all duration-200 group cursor-pointer ${
        isSelected
          ? 'border-[#2962ff] shadow-lg shadow-[#2962ff]/10 ring-1 ring-[#2962ff]'
          : 'border-[#2A2E39] hover:border-[#434656]'
      }`}
    >
      {/* Top Header: Badge, Title, Symbol */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded flex items-center justify-center font-bold text-sm tracking-tight"
            style={{
              backgroundColor: item.badgeBg,
              color: item.badgeColor,
            }}
          >
            {item.badge}
          </div>
          <div>
            <h3 className="text-base font-semibold text-[#dfe2ea] group-hover:text-[#2962ff] transition-colors">
              {item.name}
            </h3>
            <p className="text-[11px] font-bold tracking-wider text-[#c3c5d8]/70 mt-0.5 uppercase">
              {item.symbol}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Value & Sparkline */}
      <div className="flex items-end justify-between">
        <div>
          <div className="text-2xl font-semibold font-display text-[#dfe2ea] tracking-tight">
            {item.value}
          </div>
          <div
            className={`font-mono-num text-[13px] font-medium flex items-center gap-1 mt-1 ${
              item.isPositive ? 'text-[#089981]' : 'text-[#F23645]'
            }`}
          >
            {item.isPositive ? (
              <ArrowUp className="w-3.5 h-3.5" />
            ) : (
              <ArrowDown className="w-3.5 h-3.5" />
            )}
            <span>
              {item.change} ({item.changePercent})
            </span>
          </div>
        </div>

        {/* Sparkline chart SVG */}
        <div className="w-24 h-12 opacity-70 group-hover:opacity-100 transition-opacity">
          <svg
            className="w-full h-full fill-none"
            style={{ stroke: item.isPositive ? '#089981' : '#F23645' }}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 100 30"
          >
            <path d={pathD} />
          </svg>
        </div>
      </div>
    </div>
  );
};
