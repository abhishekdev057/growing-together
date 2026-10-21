"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { images } from "@/content/images";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] w-full items-end overflow-hidden bg-deep-green text-paper md:min-h-[90vh]"
    >
      <Image
        src={images.heroLandscape.src}
        alt={images.heroLandscape.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-green via-deep-green/55 to-deep-green/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-green/40 via-transparent to-transparent" />

      <div className="container-page relative z-10 w-full pb-20 pt-40 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-medium uppercase tracking-[0.25em] text-sage"
        >
          India · Agriculture · Policy · Rural Development
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-3xl text-balance font-serif text-4xl font-medium leading-[1.08] sm:text-5xl md:text-6xl"
        >
          Where Trees Meet Farms, Rural India Grows Stronger.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-paper/85 md:text-lg"
        >
          Discover how India&apos;s agroforestry policies are shaping farm incomes, rural
          employment, climate resilience and the future of sustainable agriculture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/#policy"
            className="rounded-full bg-paper px-6 py-3 text-sm font-semibold text-forest transition-transform hover:scale-[1.02] hover:bg-ivory"
          >
            Explore the Policies
          </Link>
          <Link
            href="/#film"
            className="group flex items-center gap-2 rounded-full border border-paper/50 px-5 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper hover:bg-paper/10"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-paper/90 text-forest">
              <Play className="h-3 w-3 fill-current" aria-hidden="true" />
            </span>
            Watch the Film
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 max-w-md border-l border-leaf/60 pl-4 text-sm leading-relaxed text-paper/75"
        >
          Agroforestry integrates trees and woody perennials with crops and/or livestock on the
          same piece of land — a practice as old as Indian farming, now central to national
          policy.
        </motion.p>
      </div>

      <Link
        href="/#intro"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-paper/70 transition-colors hover:text-paper"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <ArrowDown className="h-5 w-5" aria-hidden="true" />
        </motion.span>
      </Link>
    </section>
  );
}
