"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Cursor() {
  const { resolvedTheme: theme } = useTheme();
  const [pressed, setPressed] = useState(false);
  const [cursor, setCursor] = useState<any>({
    x: undefined,
    y: undefined,

    transition: {
      default: { duration: 0 },
      scale: { type: "linear", duration: 0.1 },
      borderRadius: { type: "linear", duration: 0.1 },
      background: { type: "linear", duration: 0.2 },
    },
  });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setCursor((prev: any) => {
        const cursor: any = { ...prev };

        cursor.x = e.clientX;
        cursor.y = e.clientY;

        let type: "default" | "pointer" | "light" = "default";

        if (e.target instanceof Element) {
          const closedClickableElement = e.target.closest("a, [role=button]");

          // Pointer
          if (closedClickableElement) {
            type = "pointer";
          }

          const heroTitle = e.target.closest("#light");
          if (heroTitle) {
            type = "light";
          }
        }

        switch (type) {
          default:
          case "default":
            cursor.scale = 1;
            cursor.borderTopRightRadius = 99999999999999;
            cursor.background = theme === "dark" ? "#fff" : "#000";
            break;
          case "light":
            cursor.scale = 1;
            cursor.borderTopRightRadius = 99999999999999;
            cursor.background =
              "radial-gradient(ellipse at top, var(--yellow-500), transparent), radial-gradient(ellipse at bottom, var(--red-500), transparent), radial-gradient(ellipse at left, var(--cyan-500), transparent), radial-gradient(ellipse at right, var(--violet-500), transparent)";

            //         <stop offset="0%" stopColor={"var(--yellow-500)"} />
            //   <stop offset="25%" stopColor={"var(--red-500)"} />
            //   <stop offset="50%" stopColor={"var(--blue-500)"} />
            //   <stop offset="75%" stopColor={"var(--cyan-500)"} />
            //   <stop offset="100%" stopColor={"var(--violet-500)"} />
            break;
          case "pointer":
            cursor.scale = 1.25;
            cursor.borderTopRightRadius = 4;
            break;
        }

        return cursor;
      });
    };

    const onMouseOut = (e: MouseEvent) => {
      // @ts-expect-error
      const from = e.relatedTarget ?? e.toElement;
      if (!from) {
        setCursor((prev: any) => ({
          ...prev,
          scale: 0,
        }));
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

  if (cursor.x === undefined || cursor.y === undefined) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-50 size-[16px] block rounded-full transition-colors"
      animate={{
        ...cursor,
        scale: pressed ? cursor.scale * 0.75 : cursor.scale,
      }}
    />
  );
}
