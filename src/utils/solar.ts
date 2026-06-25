export type PropertyType = "Residential" | "Commercial" | "Industrial";

export function calculateSolar(monthlyBill: number, propertyType: PropertyType) {
  const tariff =
    propertyType === "Residential" ? 8.5 : propertyType === "Commercial" ? 10 : 9;
  const monthlyUnits = monthlyBill / tariff;
  const dailyUnits = monthlyUnits / 30;
  // 1 kW ~ 4.2 units/day in India
  const systemKw = Math.max(1, Math.round((dailyUnits / 4.2) * 10) / 10);
  const costPerKw =
    propertyType === "Residential" ? 60000 : propertyType === "Commercial" ? 55000 : 48000;
  const grossCost = Math.round(systemKw * costPerKw);
  const subsidy =
    propertyType === "Residential"
      ? Math.min(78000, systemKw <= 2 ? systemKw * 30000 : 60000 + (systemKw - 2) * 18000)
      : 0;
  const netCost = Math.max(0, grossCost - subsidy);
  const annualSavings = Math.round(monthlyBill * 12 * 0.9);
  const roiYears = Math.round((netCost / annualSavings) * 10) / 10;
  return { systemKw, grossCost, subsidy, netCost, annualSavings, roiYears };
}

export const fmtINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
