"use client";

import React from "react";
import { motion } from "framer-motion";

export type Testimonia = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export function TestimonialsColumn({
  testimonials,
  duration = 15,
  className,
}: {
  testimonials: Testimonia[];
  duration?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-col gap-6"
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border bg-background shadow-md max-w-xs"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-xs opacity-60">{t.role}</div>
              </div>
            </div>
            <p className="text-sm opacity-80">{t.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
