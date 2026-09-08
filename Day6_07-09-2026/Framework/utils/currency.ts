export const parseCurrency = (value: string): number => {
  const normalized = value.replace(/[^0-9.]/g, '');
  return Number(normalized);
};

export const round2 = (value: number): number => Math.round(value * 100) / 100;
