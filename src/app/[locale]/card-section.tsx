"use client";

import { Card } from "@/components/card";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { motion } from "motion/react";
import {
  Children,
  ComponentProps,
  PropsWithChildren,
  cloneElement,
  isValidElement,
} from "react";

export function CardSections({ children }: PropsWithChildren) {
  // const props = Children.toArray(children).reduce<
  //   Array<
  //     ReactElement<CardSectionsItemProps, string | JSXElementConstructor<any>>
  //   >
  // >((acc, child) => {
  //   if (!isValidElement<CardSectionsItemProps>(child)) return acc;

  //   acc.push(child);
  //   return acc;
  // }, []);

  return (
    <div className="py-20 grid md:grid-cols-2 lg:grid-cols-4 items-stretch justify-center w-full gap-6 mx-auto px-8">
      {Children.map(children, (child, index) => {
        return (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.2 * index,
                ease: "easeOut",
                once: true,
              },
            }}
            key={"card" + index}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}
CardSections.Item = CardSectionsItem;

export interface CardSectionsItemProps extends ComponentProps<typeof Card> {
  effect: ComponentProps<typeof CanvasRevealEffect>;
}

export function CardSectionsItem({
  effect,
  children,
  ...props
}: CardSectionsItemProps) {
  if (props.asChild) {
    const slot = Children.only(children);

    if (!isValidElement<PropsWithChildren<unknown>>(slot)) throw new Error();

    const child = cloneElement(slot, {
      children: (
        <CanvasRevealEffect animationSpeed={5} dotSize={4} {...effect} />
      ),
    });

    return <Card {...props}>{child}</Card>;
  }

  return (
    <Card {...props}>
      <CanvasRevealEffect animationSpeed={5} dotSize={4} {...effect} />
    </Card>
  );
}
