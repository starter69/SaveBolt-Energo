export interface Detail {
  metric: string;
  unit: string;
  time: string;
  threshold: number;
  value: number;
}

export interface Building {
  Name: string;
  Alerts: {
    high: { count: number; details?: Detail[] };
    med: { count: number; details?: Detail[] };
    low: { count: number; details?: Detail[] };
  };
  Savings: string;
  Uptime: string;
  Power: string;
}
