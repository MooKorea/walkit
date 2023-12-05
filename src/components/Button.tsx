"use client";

import useButtonDelay from "@/hooks/useButtonDelay";
import Link from "next/link";

type Button = React.BaseHTMLAttributes<HTMLAnchorElement> & {
  shadow?: boolean;
  highlight?: boolean;
  label: string;
  icon?: React.ReactNode;
  width?: string;
  height?: string;
  href?: string;
};

export default function Button({
  shadow = false,
  highlight = false,
  label,
  icon,
  height,
  width,
  href = "",
  ...props
}: Button) {
  const handleClick = useButtonDelay(href);

  return (
    <Link
      href={href}
      onClick={props.onClick ? props.onClick : handleClick}
      scroll={false}
      className={
        "rounded-[1.25rem] flex gap-2 transition-all duration-75 justify-center items-center text-base font-RubikMedium text-textPrimary " +
        (highlight
          ? "bg-secondary active:bg-[#FFC446] "
          : "border-2 border-textPrimary active:bg-[#946D4A]/[0.4] ") +
        (shadow ? "shadow-small " : "") +
        (!!height ? `${height} ` : "h-[2.125rem] ") +
        (!!width ? `${width} ` : "px-5 ")
      }
      {...props}
    >
      {icon}
      {label}
    </Link>
  );
}
