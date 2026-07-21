"use client";
import { useState } from "react";
import { Copy, CheckCircle, Phone, Building2, Info } from "lucide-react";

interface DepositPaymentProps {
  tourName?: string;
  depositAmount?: string;
}

export default function DepositPayment({
  tourName = "your tour",
  depositAmount = "€85",
}: DepositPaymentProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copy = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const bankDetails = [
    { label: "Account Holder", value: "M. Abdelhamid IDRISSI JOUTEI Kaitouni", copyKey: "name" },
    { label: "Bank", value: "CIH Bank — Morocco", copyKey: "bank" },
    { label: "RIB", value: "230 640 4550072211021300 10", copyKey: "rib" },
    { label: "IBAN", value: "MA64 2306 4045 5007 2211 0213 0010", copyKey: "iban" },
    { label: "SWIFT / BIC", value: "CIHMMAMC", copyKey: "swift" },
  ];
  const waMessage = encodeURIComponent(
    `Hi Abdelhamid, I'd like to confirm my booking for ${tourName}. I will send the ${depositAmount} deposit by bank transfer. Please confirm my booking.`
  );

  return <DepositUI bankDetails={bankDetails} waMessage={waMessage} depositAmount={depositAmount} copiedField={copiedField} copy={copy} />;
}

function DepositUI({
  bankDetails,
  waMessage,
  depositAmount,
  copiedField,
  copy,
}: {
  bankDetails: { label: string; value: string; copyKey: string }[];
  waMessage: string;
  depositAmount: string;
  copiedField: string | null;
  copy: (text: string, field: string) => void;
}) {
  return (
    <div className="rounded overflow-hidden border border-border-warm shadow-sm">
      {/* Header */}
      <div className="bg-navy px-6 py-4">
        <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
          <Building2 className="w-5 h-5 text-gold" />
          Confirm Your Booking — Pay Deposit
        </h3>
        <p className="text-white/65 text-sm mt-1">
          Send a <strong className="text-gold">{depositAmount} deposit</strong> by bank transfer to secure your tour. Balance paid on the day.
        </p>
      </div>

      {/* Step 1 — Bank Transfer */}
      <div className="bg-white px-6 py-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-full bg-navy flex items-center justify-center text-gold font-bold text-sm shrink-0">1</div>
          <span className="font-semibold text-navy">Transfer {depositAmount} to this bank account</span>
        </div>

        <div className="space-y-2 mb-4">
          {bankDetails.map((item) => (
            <div key={item.copyKey} className="flex items-center justify-between gap-3 bg-ivory border border-border-warm rounded px-4 py-2.5">
              <div>
                <div className="text-xs text-muted-text font-semibold uppercase tracking-wide">{item.label}</div>
                <div className="font-mono text-sm text-navy font-semibold mt-0.5">{item.value}</div>
              </div>
              <button
                onClick={() => copy(item.value, item.copyKey)}
                className="shrink-0 p-1.5 rounded hover:bg-navy/10 transition-colors"
                aria-label={`Copy ${item.label}`}
              >
                {copiedField === item.copyKey
                  ? <CheckCircle className="w-4 h-4 text-green-500" />
                  : <Copy className="w-4 h-4 text-muted-text hover:text-navy" />
                }
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gold/10 border border-gold/30 rounded px-4 py-3 flex items-start gap-2 text-sm">
          <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" />
          <p className="text-navy">
            In the transfer reference, write: <strong>TangierTours Deposit — [your name]</strong>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 px-6 py-2 bg-ivory border-y border-border-warm">
        <div className="flex-1 h-px bg-border-warm" />
        <span className="text-xs font-bold text-muted-text uppercase tracking-widest">Then</span>
        <div className="flex-1 h-px bg-border-warm" />
      </div>

      {/* Step 2 — WhatsApp */}
      <div className="bg-white px-6 py-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-full bg-navy flex items-center justify-center text-gold font-bold text-sm shrink-0">2</div>
          <span className="font-semibold text-navy">Message Abdelhamid on WhatsApp to confirm</span>
        </div>
        <p className="text-sm text-muted-text mb-4 leading-relaxed">
          Once your transfer is sent, message Abdelhamid on WhatsApp with your name and transfer reference. He will confirm your booking within 2 hours.
        </p>
        <a
          href={`https://wa.me/212668702424?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded hover:bg-[#20BA5A] transition-colors"
        >
          <Phone className="w-4 h-4" />
          WhatsApp +212 668-702-424
        </a>
      </div>

      {/* Footer note */}
      <div className="bg-ivory px-6 py-3 border-t border-border-warm text-center">
        <p className="text-xs text-muted-text">
          No online payment required · Deposit by bank transfer · Balance paid on the day of your tour
        </p>
      </div>
    </div>
  );
}
