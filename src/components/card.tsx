"use client";
import * as Slot from "@radix-ui/react-slot";
import { AnimatePresence, motion } from "motion/react";
import { SVGProps, useState } from "react";

export const Card = ({
  title,
  icon,
  children,
  asChild,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  asChild?: boolean;
}) => {
  const Comp = asChild ? Slot.Root : "div";

  const [hovered, setHovered] = useState(false);

  return (
    <Comp
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full mx-auto px-4 py-12 relative relative"
    >
      <div>
        <Icon className="z-10 absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="z-10 absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="z-10 absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="z-10 absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              <Slot.Slottable>{children}</Slot.Slottable>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-20">
          <div className="absolute top-1/2 -translate-y-1/2  text-center group-hover/canvas-card:translate-y-[calc(-50%-1rem)] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
            {icon}
          </div>
          <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black  font-bold group-hover/canvas-card:text-white translate-y-2 group-hover/canvas-card:translate-y-0 transition duration-200">
            {title}
          </h2>
        </div>
      </div>
    </Comp>
  );
};

export const Icon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
