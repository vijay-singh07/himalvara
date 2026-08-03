"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "917819940565";
const GREETING = "Hi Himalvara, I'd like to know more about your trips.";
const HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(GREETING)}`;

export function WhatsAppFloat() {
  return (
    <motion.a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Himalvara on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] ring-4 ring-[#25D366]/25 hover:bg-[#20bd5a] transition-colors"
    >
      <span className="pointer-events-none absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="relative w-7 h-7 fill-current"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.464-1.29.187-.472.187-.9.13-1.02-.043-.13-.244-.202-.53-.33ZM16.076 27.51c-6.298 0-11.42-5.122-11.42-11.42 0-6.297 5.122-11.42 11.42-11.42 6.298 0 11.42 5.123 11.42 11.42 0 6.298-5.122 11.42-11.42 11.42Zm0-25.147c-7.567 0-13.725 6.158-13.725 13.727 0 2.42.63 4.79 1.834 6.882L2.235 29.795a.63.63 0 0 0 .616.783c.06 0 .114-.014.172-.03l7.146-1.87a13.7 13.7 0 0 0 5.907 1.35c7.567 0 13.725-6.158 13.725-13.725 0-7.57-6.158-13.727-13.725-13.727Z" />
      </svg>
    </motion.a>
  );
}
