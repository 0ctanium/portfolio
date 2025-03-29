"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function CursorImpl() {
  const { resolvedTheme: theme } = useTheme();
  const [outOfView, setOutOfView] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const [type, setType] = useState<"default" | "pointer">("default");
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      let type: "default" | "pointer" = "default";
      let light = false;

      if (e.target instanceof Element) {
        const closedClickableElement = e.target.closest(
          "a, button, [role=button]"
        );

        // Pointer
        if (closedClickableElement) {
          type = "pointer";
        }

        const heroTitle = e.target.closest("#light");
        if (heroTitle) {
          light = true;
        }
      }

      setOutOfView(false);
      setLight(light);
      setType(type);
      setCursor({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const onMouseOut = (e: MouseEvent) => {
      // @ts-expect-error Old types
      const from = e.relatedTarget ?? e.toElement;
      if (!from) {
        setOutOfView(true);
      }
    };

    const onMouseDown = () => {
      setPressed(true);
    };

    const onMouseUp = () => {
      setPressed(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseOut);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [theme]);

  if (!cursor) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[5000]"
      animate={{
        ...cursor,
        scale: outOfView ? 0 : pressed ? 0.75 : 1,
      }}
      transition={{
        default: { duration: 0 },
        scale: { type: "linear", duration: 0.1 },
      }}
    >
      <motion.div
        variants={{
          default: {
            scale: 1,
          },
          pointer: {
            scale: 1.25,
          },
        }}
        animate={type}
        style={{
          borderTopRightRadius: type === "pointer" ? "0.25rem" : undefined,
        }}
        transition={{
          type: "linear",
          duration: 0.1,
        }}
        className="size-[16px] block rounded-full transition-all bg-black dark:bg-white"
      >
        <AnimatePresence>
          {light && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="size-full rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse at top, var(--yellow-500), transparent), radial-gradient(ellipse at bottom, var(--red-500), transparent), radial-gradient(ellipse at left, var(--cyan-500), transparent), radial-gradient(ellipse at right, var(--violet-500), transparent)",
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export function Cursor() {
  const mouse = useMediaQuery("(pointer:fine)");

  if (!mouse) return;

  return <CursorImpl />;
}
