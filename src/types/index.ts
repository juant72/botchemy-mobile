export interface Bot {
  id: string;
  name: string;
  strategy: string;
  status: 'active' | 'paused' | 'stopped';
  pnl: number;
  winRate: number;
  trades: number;
  createdAt: string;
}

export interface Trade {
  id: string;
  botId: string;
  pair: string;
  side: 'buy' | 'sell';
  amount: number;
  price: number;
  pnl: number;
  timestamp: string;
}

export interface Portfolio {
  totalValue: number;
  totalPnL: number;
  totalPnLPercent: number;
  assets: Asset[];
}

export interface Asset {
  symbol: string;
  amount: number;
  value: number;
  change24h: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}
