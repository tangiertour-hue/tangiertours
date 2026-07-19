import { Phone } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  className?: string;
  variant?: "primary" | "floating";
}

export default function WhatsAppButton({
  message = "Hi Idrissi, I'd like to book a private tour in Morocco.",
  label = "WhatsApp Us",
  className = "",
  variant = "primary",
}: WhatsAppButtonProps) {
  const href = `https://wa.me/212668702424?text=${encodeURIComponent(message)}`;

  if (variant === "floating") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-105 ${className}`}
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline">{label}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded hover:bg-[#20BA5A] transition-colors ${className}`}
    >
      <Phone className="w-4 h-4" />
      {label}
    </a>
  );
}
