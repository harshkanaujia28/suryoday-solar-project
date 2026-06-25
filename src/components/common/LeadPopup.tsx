import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { LeadForm } from "@/components/forms/LeadForm";

export function LeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("suryoday_popup_dismissed")) return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("suryoday_popup_dismissed")) {
        setOpen(true);
        sessionStorage.setItem("suryoday_popup_dismissed", "1");
      }
    };
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("suryoday_popup_dismissed")) {
        setOpen(true);
        sessionStorage.setItem("suryoday_popup_dismissed", "1");
      }
    }, 25000);
    document.addEventListener("mouseleave", onLeave);
    return () => { document.removeEventListener("mouseleave", onLeave); clearTimeout(timer); };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <div className="gradient-sunrise p-6 text-white text-center">
          <div className="text-2xl">☀️</div>
          <DialogTitle className="font-display text-2xl font-bold">Wait! Get ₹78,000 Subsidy</DialogTitle>
          <DialogDescription className="text-white/90 text-sm">
            Quick form. Free site visit. Zero obligation.
          </DialogDescription>
        </div>
        <div className="p-5">
          <LeadForm variant="inline" fields={["name", "phone", "city", "bill"]} cta="Claim My Free Quote" source="popup" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
