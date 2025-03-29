"use client";

import { Slot } from "@radix-ui/react-slot";
import { useTheme } from "next-themes";
import { HTMLAttributes, PropsWithChildren } from "react";

export function ThemeButton({
  asChild,
  theme,
  ...props
}: PropsWithChildren<
  { asChild?: boolean; theme: string } & HTMLAttributes<HTMLButtonElement>
>) {
  const Comp = asChild ? Slot : "button";
  const { setTheme } = useTheme();

  return <Comp {...props} onClick={() => setTheme(theme)} />;
}
