"use client";

import BubbleMenu from "@/components/BubbleMenu";

/**
 * Site-wide navigation using the BubbleMenu component.
 * Drop-in replacement for <Navbar /> across all pages.
 */
export function SiteNav() {
  return (
    <BubbleMenu
      logo={
        <span
          style={{
            fontWeight: 900,
            fontSize: "14px",
            letterSpacing: "-0.05em",
            color: "#F8F9FA",
          }}
        >
          TECH<span style={{ color: "#00E5FF" }}>FORGE</span>
        </span>
      }
      menuBg="#111111"
      menuContentColor="#F8F9FA"
      useFixedPosition={true}
      animationEase="back.out(1.5)"
      animationDuration={0.5}
      staggerDelay={0.12}
    />
  );
}
