import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Roboto_Mono } from "next/font/google";

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const text_variant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};
