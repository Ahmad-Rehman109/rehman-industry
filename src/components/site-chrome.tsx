"use client";

import { usePathname } from "next/navigation";
import { SiteNav } from "@/components/nav-v2";
import { SiteFooter } from "@/components/footer-v2";
import { WhatsappButton } from "@/components/whatsapp-button";

/**
 * Renders the shared site chrome (nav, footer, WhatsApp button) on every page
 * EXCEPT the homepage, which ships its own immersive nav/footer in the new theme.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  // Same nav + footer on every page so navigation and theme toggle are consistent.
  void usePathname();
  return (
    <>
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
      <WhatsappButton />
    </>
  );
}
