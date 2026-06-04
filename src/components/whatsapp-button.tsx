import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

/** Floating WhatsApp action — the primary lead channel for local buyers. */
export function WhatsappButton() {
  return (
    <a
      href={whatsappLink(
        "Hello Rehman Industry, I'd like to ask about your plastic injection moulding services.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}
