import React from 'react';
import { MarketCategory } from '../types';
import { CATEGORIES } from '../data';

interface CategoryBarProps {
  selectedCategory: MarketCategory;
  onSelectCategory: (cat: MarketCategory) => void;
}

export const CategoryBar: React.FC<CategoryBarProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="overflow-x-auto no-scrollbar mb-10 pb-2 border-b border-[#434656]/50">
      <div className="flex gap-3 min-w-max">
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`text-[11px] font-bold tracking-wider px-4 py-2 rounded-full transition-all duration-150 uppercase ${
                isSelected
                  ? 'bg-[#31353b] text-[#dfe2ea] shadow-sm'
                  : 'text-[#c3c5d8]/80 hover:text-[#dfe2ea] hover:bg-[#31353b]/40'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};
