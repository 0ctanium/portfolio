"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "motion/react";

import { X } from "lucide-react";
import dynamic from "next/dynamic";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Icon } from "./card";

const ContactForm = dynamic(() => import("./contact-form"));

export function ContactModal({
  children,
  t,
}: PropsWithChildren<{ t: IntlMessages["Contact"] }>) {
  const anchor = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const [viewPort, setViewPort] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [anchorTranslation, setAnchorTranslation] = useState<any | null>(null);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const onOpenChange = useCallback((v: boolean) => {
    if (v) {
      if (anchor.current) {
        const rect = anchor.current.getBoundingClientRect();
        setAnchorRect(rect);

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        // Translation needed
        const translateX = centerX - elementCenterX;
        const translateY = centerY - elementCenterY;
        setAnchorTranslation({ x: translateX, y: translateY });

        setOpen(v);
      }
    } else {
      setOpen(v);
    }
  }, []);

  useEffect(() => {
    setViewPort({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <Dialog.Root onOpenChange={onOpenChange} open={open}>
      <Dialog.Trigger asChild>
        <motion.button
          variants={{
            close: {},
            open: anchorTranslation,
          }}
          animate={open ? "open" : "close"}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.3,
          }}
          ref={anchor}
          className="size-full"
        >
          {children}
        </motion.button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay asChild className="fixed inset-0 bg-black">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.4 }}
          />
        </Dialog.Overlay>
        <Dialog.Content asChild className="fixed z-50">
          <motion.div
            initial={{
              opacity: 0,
              width: anchorRect?.width,
              height: anchorRect?.height,
            }}
            animate={{
              opacity: 1,
              width: (viewPort?.width ?? 0) / 2,
              height: (viewPort?.height ?? 0) / 2,
              transition: {
                opacity: {
                  delay: 0.4,
                  duration: 0.2,
                },
                width: {
                  delay: 0.6,
                  duration: 0.2,
                },
                height: {
                  delay: 0.6,
                  duration: 0.2,
                },
              },
            }}
            style={{
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            className="bg-white dark:bg-black border border-black/[0.2] dark:border-white/[0.2] p-4"
          >
            <Icon className="z-10 absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="z-10 absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="z-10 absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="z-10 absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.2 }}
              className="size-full flex flex-col "
            >
              <Dialog.Close className="absolute top-4 right-4 z-10 p-2 -m-2 transition hover:bg-accent rounded-md">
                <X className="size-6" />
              </Dialog.Close>

              <Dialog.Title className="inline dark:text-white text-center text-2xl relative text-black font-bold mb-2">
                Contact Me
              </Dialog.Title>
              <Dialog.Description className="sr-only">
                Contact Me
              </Dialog.Description>

              <ContactForm t={t} />
            </motion.div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
