"use client";
import {
  useMediaQuery,
  usePrefersReducedMotion,
} from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ReactNode, useEffect, useId, useRef, useState } from "react";

const defaultTextClass = "font-[helvetica] font-bold text-7xl";

export const TextHoverEffect = ({
  text,
  duration,
  strokeWith = 0.3,
  textClass,
}: {
  text: ReactNode;
  duration?: number;
  automatic?: boolean;
  strokeWith?: string | number;
  textClass?: string;
}) => {
  const supportHover = !useMediaQuery("(hover: none)");
  const reducedMotion = usePrefersReducedMotion();

  const generatedId = useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  const gradient = (
    <>
      <stop offset="0%" stopColor={"var(--yellow-500)"} />
      <stop offset="25%" stopColor={"var(--red-500)"} />
      <stop offset="50%" stopColor={"var(--blue-500)"} />
      <stop offset="75%" stopColor={"var(--cyan-500)"} />
      <stop offset="100%" stopColor={"var(--violet-500)"} />
    </>
  );

  const linearGradient = (
    <linearGradient
      id={`${generatedId}-textGradient`}
      gradientUnits="userSpaceOnUse"
      cx="50%"
      cy="50%"
      r="25%"
    >
      {gradient}
    </linearGradient>
  );

  const textMask = (
    <mask id={`${generatedId}-textMask`}>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth={strokeWith}
        className={cn(
          "fill-transparent stroke-white",
          defaultTextClass,
          textClass
        )}
        initial={{
          strokeDashoffset: 1000,
          strokeDasharray: 1000,
        }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
    </mask>
  );

  const gradientMask = (
    <>
      <motion.radialGradient
        id={`${generatedId}-revealMask`}
        gradientUnits="userSpaceOnUse"
        r="20%"
        initial={{ cx: "50%", cy: "50%" }}
        animate={maskPosition}
        transition={{ duration: duration ?? 0, ease: "easeOut" }}
      >
        <stop offset="0%" stopColor="white" />
        <stop offset="100%" stopColor="black" />
      </motion.radialGradient>

      <mask id={`${generatedId}-gradientMask`}>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#${generatedId}-revealMask)`}
        />
      </mask>
    </>
  );

  if (reducedMotion) {
    return (
      <svg
        id={generatedId}
        width="100%"
        height="100%"
        viewBox="0 0 400 100"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none"
      >
        <defs>{linearGradient}</defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke={`url(#${generatedId}-textGradient)`}
          strokeWidth={strokeWith}
          className={cn("fill-transparent", defaultTextClass, textClass)}
        >
          {text}
        </text>
      </svg>
    );
  } else if (supportHover) {
    return (
      <svg
        id={generatedId}
        ref={(node) => {
          // setCursor({ x: window.clientX, y: window.clientY });

          svgRef.current = node;
        }}
        width="100%"
        height="100%"
        viewBox="0 0 400 100"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => {
          setCursor({ x: e.clientX, y: e.clientY });
          setHovered(true);
        }}
        className="select-none"
      >
        <defs>
          <linearGradient
            id={`${generatedId}-textGradient`}
            gradientUnits="userSpaceOnUse"
            cx="50%"
            cy="50%"
            r="25%"
          >
            {hovered && gradient}
          </linearGradient>
          {textMask}
          {gradientMask}
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth={strokeWith}
          mask={`url(#${generatedId}-textMask)`}
          className={cn(
            "stroke-neutral-200 dark:stroke-neutral-800 fill-transparent",
            defaultTextClass,
            textClass
          )}
        >
          {text}
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke={`url(#${generatedId}-textGradient)`}
          mask={`url(#${generatedId}-gradientMask)`}
          strokeWidth={strokeWith}
          className={cn("fill-transparent", defaultTextClass, textClass)}
        >
          {text}
        </text>
      </svg>
    );
  } else {
    return (
      <svg
        id={generatedId}
        width="100%"
        height="100%"
        viewBox="0 0 400 100"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none"
      >
        <defs>
          {linearGradient}
          {textMask}
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke={`url(#${generatedId}-textGradient)`}
          mask={`url(#${generatedId}-textMask)`}
          strokeWidth={strokeWith}
          className={cn("fill-transparent", defaultTextClass, textClass)}
        >
          {text}
        </text>
      </svg>
    );
  }
};
