"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { Button } from "@/components/ui/Button";
import { DESTINATIONS } from "@/data/destinations";

export function DestinationsSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#f0ebe0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-14">
          <SectionTitle
            eyebrow="Where to Go"
            title={"Discover Our\nDestinations"}
            subtitle="From the sacred Kumaon border valleys to Garhwal's alpine meadows and the source of the Ganga — every destination holds a story worth experiencing."
            align="left"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Button variant="outline" size="md" asChild>
              <Link href="/destinations">
                All Destinations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DESTINATIONS.map((dest, i) => (
            <DestinationCard key={dest.id} destination={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
