import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";

type Item = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export function HoverEffect({
  items,
  className,
}: {
  items: Item[];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 rounded-3xl bg-neutral-200/70"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>

          <Card>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-medium text-white">
                  {item.name}
                </div>
                <div className="text-xs text-neutral-400">
                  {item.role}
                </div>
              </div>
            </div>

            <CardDescription>{item.text}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
}

function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative z-10 rounded-2xl h-full w-full bg-black p-6 border border-neutral-800 group-hover:border-neutral-600 transition",
        className
      )}
    >
      {children}
    </div>
  );
}

function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("text-sm text-neutral-300 leading-relaxed", className)}>
      {children}
    </p>
  );
}
