export interface Stop {
  id: string;
  name: string;
  code: string;
  fare: number;
  isFavorite?: boolean;
  lastUsed?: Date;
}

export interface Ticket {
  id: string;
  destination: Stop;
  passengers: number;
  totalFare: number;
  timestamp: Date;
  ticketNumber: string;
}

export type Screen = 'home' | 'destination' | 'passengers' | 'confirm' | 'rationale';
