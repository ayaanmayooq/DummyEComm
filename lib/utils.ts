import { clsx, type ClassValue } from "clsx";
import exp from "constants";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatLabel(value: string): string {
    return value
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

export function formatSlug(title: string) {
    return title.toLowerCase().replace(/\s+/g, '-');
}