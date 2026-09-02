import React from 'react';
import { X, TrendingUp, TrendingDown, Clock, Activity, BarChart2 } from 'lucide-react';
import { MarketItem } from '../types';

interface DetailModalProps {
  item: MarketItem | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="bg-[#1E222D] border border-[#2A2E39] rounded-xl w-full max-w-lg p-6 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#c3c5d8] hover:text-white p-1 rounded-md hover:bg-[#2A2E39] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-base tracking-tight"
            style={{
              backgroundColor: item.badgeBg,
              color: item.badgeColor,
            }}
          >
            {item.badge}
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#dfe2ea] font-display">{item.name}</h2>
            <div className="flex items-center gap-2 text-xs font-mono-num text-[#c3c5d8]">
              <span className="font-semibold uppercase tracking-wider">{item.symbol}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#089981]">
                <Activity className="w-3.5 h-3.5" /> Real-time
              </span>
            </div>
          </div>
        </div>

        {/* Price & Change Banner */}
        <div className="bg-[#101419] p-4 rounded-lg border border-[#2A2E39] mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs text-[#c3c5d8]/70 block mb-0.5">Last Price</span>
            <div className="text-3xl font-bold font-display text-[#dfe2ea]">{item.value}</div>
          </div>
          <div className="text-right">
            <span className="text-xs text-[#c3c5d8]/70 block mb-0.5">24h Movement</span>
            <div
              className={`font-mono-num text-sm font-semibold flex items-center justify-end gap-1 ${
                item.isPositive ? 'text-[#089981]' : 'text-[#F23645]'
              }`}
            >
              {item.isPositive ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              {item.change} ({item.changePercent})
            </div>
          </div>
        </div>

        {/* Key Statistics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
          <div className="bg-[#181c22] p-3 rounded border border-[#2A2E39]/60">
            <span className="text-xs text-[#c3c5d8]/60 block mb-1">Day Range High</span>
            <span className="font-mono-num font-semibold text-[#dfe2ea]">
              {item.high || 'N/A'}
            </span>
          </div>
          <div className="bg-[#181c22] p-3 rounded border border-[#2A2E39]/60">
            <span className="text-xs text-[#c3c5d8]/60 block mb-1">Day Range Low</span>
            <span className="font-mono-num font-semibold text-[#dfe2ea]">
              {item.low || 'N/A'}
            </span>
          </div>
          <div className="bg-[#181c22] p-3 rounded border border-[#2A2E39]/60">
            <span className="text-xs text-[#c3c5d8]/60 block mb-1">Trading Volume</span>
            <span className="font-mono-num font-semibold text-[#dfe2ea]">
              {item.volume || 'N/A'}
            </span>
          </div>
          <div className="bg-[#181c22] p-3 rounded border border-[#2A2E39]/60">
            <span className="text-xs text-[#c3c5d8]/60 block mb-1">Exchange Status</span>
            <span className="flex items-center gap-1 font-semibold text-emerald-400 text-xs">
              <Clock className="w-3 h-3" /> Market Open
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 bg-[#2962ff] hover:bg-[#004ee8] text-[#f7f5ff] text-sm font-semibold rounded transition-colors flex items-center justify-center gap-2"
          >
            <BarChart2 className="w-4 h-4" /> Full Interactive Chart
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2.5 bg-[#262a30] hover:bg-[#31353b] text-[#dfe2ea] text-sm font-medium rounded transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
