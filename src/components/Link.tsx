import type { FC, ReactNode } from "react";
import { clx } from "@/utils/clx";

export type LinkProps = {
  title?: string;
  href?: string;
};

const Link: FC<LinkProps> = ({ title, href }) => {
  return (
    <a type="link" href={href} className="text-blue-600 hover:underline">
      {title}
    </a>
  );
};

export default Link;
