import type { FC } from "react";
import { clx } from "@/utils/clx";

export type $TitleProps = {
  parentKey?: string;
  parentKeys?: string[];
  title?: string;
  className?: string;
};

const $Title: FC<$TitleProps> = ({ className, title }) => {
  return (
    <div
      className={clx("title text-[rgba(0,0,0,0.45)] text-[14px]", className)}
    >
      {title}
    </div>
  );
};

export default $Title;
