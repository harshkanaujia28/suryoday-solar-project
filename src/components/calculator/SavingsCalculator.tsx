import { useMemo, useState } from "react";
import { calculateSolar, fmtINR, type PropertyType } from "@/utils/solar";
import { STATES } from "@/data/content";
import { motion } from "framer-motion";
import { FaSolarPanel, FaPiggyBank, FaHandHoldingUsd, FaChartLine } from "react-icons/fa";

export function SavingsCalculator() {
  const [bill, setBill] = useState(5000);
  const [state, setState] = useState("Maharashtra");
  const [type, setType] = useState<PropertyType>("Residential");
  const result = useMemo(() => calculateSolar(bill, type), [bill, type]);

  const outputs = [
    { Icon: FaSolarPanel, label: "System Size", value: `${result.systemKw} kW`, color: "text-[var(--color-solar-blue)]" },
    { Icon: FaPiggyBank, label: "Annual Savings", value: fmtINR(result.annualSavings), color: "text-[var(--color-solar-green)]" },
    { Icon: FaHandHoldingUsd, label: "Govt Subsidy", value: fmtINR(result.subsidy), color: "text-[var(--color-solar-orange)]" },
    { Icon: FaChartLine, label: "Payback Period", value: `${result.roiYears} yrs`, color: "text-[var(--color-solar-yellow)]" },
  ];

  return (
    <div className="grid gap-6 rounded-3xl bg-white p-6 shadow-premium ring-1 ring-black/5 md:grid-cols-2 md:p-10">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-[var(--color-solar-orange)]">
          ☀️ Free Calculator
        </div>
        <h3 className="mt-3 font-display text-3xl font-bold">Calculate Your Solar Savings</h3>
        <p className="mt-2 text-sm text-muted-foreground">See your recommended system, subsidy and payback in seconds.</p>

        <div className="mt-6 space-y-5">
          <div>
            <label className="flex justify-between text-sm font-medium">
              Monthly Electricity Bill
              <span className="text-[var(--color-solar-orange)] font-bold">{fmtINR(bill)}</span>
            </label>
            <input
              type="range" min={1000} max={50000} step={500} value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="mt-2 w-full accent-[var(--color-solar-orange)]"
            />
            <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
              <span>₹1,000</span><span>₹50,000+</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">State</label>
            <select value={state} onChange={(e) => setState(e.target.value)} className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-[var(--color-solar-orange)]">
              {STATES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Property Type</label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {(["Residential", "Commercial", "Industrial"] as PropertyType[]).map((t) => (
                <button key={t} type="button" onClick={() => setType(t)}
                  className={`rounded-xl border-2 px-3 py-2.5 text-xs font-semibold transition-all ${
                    type === t
                      ? "border-[var(--color-solar-orange)] bg-orange-50 text-[var(--color-solar-orange)]"
                      : "border-border text-foreground hover:border-[var(--color-solar-orange)]/40"
                  }`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl gradient-hero p-6 md:p-7">
        <div className="grid grid-cols-2 gap-3">
          {outputs.map((o, i) => (
            <motion.div key={o.label}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-white p-4 shadow-sm">
              <o.Icon className={`h-6 w-6 ${o.color}`} />
              <div className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">{o.label}</div>
              <div className="mt-1 font-display text-xl font-bold">{o.value}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Net Investment (after subsidy)</div>
          <div className="mt-1 font-display text-2xl font-bold text-gradient-sun">{fmtINR(result.netCost)}</div>
          <div className="text-xs text-muted-foreground">Gross: {fmtINR(result.grossCost)}</div>
        </div>
        <button className="mt-4 w-full rounded-full gradient-sunrise px-6 py-3 text-sm font-bold text-white shadow-premium hover:shadow-glow">
          Get Detailed Proposal →
        </button>
      </div>
    </div>
  );
}
