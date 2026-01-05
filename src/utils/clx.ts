import { twMerge } from "tailwind-merge";

export function clx(...classes: Array<string | false | null | undefined>): string {
  return twMerge(classes.filter(Boolean).join(" "));
}

