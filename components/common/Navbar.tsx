"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { NAV_LINKS } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/common/Logo";
import type { NavLink } from "@/types";

/* ─── Desktop Dropdown ───────────────────────────────────────── */
function NavDropdown({ link, isScrolled }: { link: NavLink; isScrolled: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={cn(
          "flex items-center gap-1 text-sm font-medium py-2 transition-colors duration-200",
          isScrolled ? "text-[#2d2d2d] hover:text-[#1b3a2d]" : "text-white/90 hover:text-white"
        )}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {link.label}
        <ChevronDown
          className={cn("w-3.5 h-3.5 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full left-0 pt-2 z-50 min-w-[200px]"
          >
            <div className="bg-white rounded-xl shadow-[0_12px_40px_rgb(0_0_0/0.15)] border border-[#e4e4e4] overflow-hidden py-1.5">
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="flex items-center px-4 py-2.5 text-sm text-[#2d2d2d] hover:bg-[#e8f5f1] hover:text-[#1b3a2d] transition-colors font-medium"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Mobile Menu ────────────────────────────────────────────── */
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-[320px] bg-[#0d1f17] z-50 lg:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <Logo isScrolled={false} />
              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <nav className="p-5 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  {link.children ? (
                    <MobileAccordion link={link} onClose={onClose} pathname={pathname} />
                  ) : (
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "bg-[#c8a951]/20 text-[#c8a951]"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* CTA */}
            <div className="p-5 border-t border-white/10">
              <Button variant="primary" size="lg" className="w-full" asChild>
                <Link href="/contact">Book Your Trek</Link>
              </Button>
              <a
                href="tel:+917819940565"
                className="flex items-center justify-center gap-2 mt-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 7819940565
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function MobileAccordion({
  link,
  onClose,
  pathname,
}: {
  link: NavLink;
  onClose: () => void;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
      >
        {link.label}
        <ChevronDown
          className={cn("w-4 h-4 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden ml-4"
          >
            {link.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClose}
                className={cn(
                  "block px-4 py-2.5 text-sm transition-colors rounded-lg",
                  pathname === child.href
                    ? "text-[#c8a951]"
                    : "text-white/60 hover:text-white"
                )}
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main Navbar ────────────────────────────────────────────── */
export function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-400",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_24px_rgb(0_0_0/0.1)] py-3"
            : "bg-transparent py-5"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Logo isScrolled={isScrolled} />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <NavDropdown key={link.href} link={link} isScrolled={isScrolled} />
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 relative py-2",
                    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#c8a951] after:transition-all after:duration-300",
                    pathname === link.href ? "after:w-full" : "after:w-0 hover:after:w-full",
                    isScrolled
                      ? "text-[#2d2d2d] hover:text-[#1b3a2d]"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+917819940565"
              className={cn(
                "flex items-center gap-1.5 text-sm font-medium transition-colors duration-200",
                isScrolled ? "text-[#2d2d2d] hover:text-[#1b3a2d]" : "text-white/80 hover:text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+91 7819940565</span>
            </a>
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors",
              isScrolled
                ? "text-[#132a1f] hover:bg-[#e8f5f1]"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
