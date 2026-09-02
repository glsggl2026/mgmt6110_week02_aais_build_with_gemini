export interface MarketItem {
  id: string;
  name: string;
  symbol: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  value: string;
  rawValue: number;
  change: string;
  changePercent: string;
  isPositive: boolean;
  sparkline: number[];
  high?: string;
  low?: string;
  volume?: string;
}

export type MarketCategory =
  | 'US stocks'
  | 'World stocks'
  | 'Crypto'
  | 'Futures'
  | 'Forex'
  | 'Government bonds'
  | 'Corporate bonds'
  | 'ETFs'
  | 'Economy';
