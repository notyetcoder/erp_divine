import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl("Hello Divine ERP Solutions, I would like to talk about my business process.")}
      target="_blank"
      rel="noopener noreferrer"
      data-track="floating_whatsapp"
      aria-label="Chat on WhatsApp"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
      className="fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#0F7B6C] text-white shadow-lift transition duration-300 hover:scale-105 active:scale-95 motion-reduce:transition-none md:hidden"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
