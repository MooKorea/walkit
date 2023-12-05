"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

type Button = React.BaseHTMLAttributes<HTMLAnchorElement> & {
  shadow?: boolean;
  highlight?: boolean;
  label: string;
  icon?: React.ReactNode;
  width?: string;
  height?: string;
  href?: string;
}

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

  //adds small delay on clicks for a nicer effect
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setTimeout(() => {
      router.push(href, {scroll: false});
    }, 180);
  };

  return (
    <Link
      href={href}
      onClick={props.onClick ? props.onClick : handleClick}
      scroll={false}
      className={
        "rounded-[1.25rem] flex gap-2 transition-all justify-center items-center text-base font-RubikMedium text-textPrimary " +
        (highlight ? "bg-secondary active:bg-[#FFC446] " : "border-2 border-textPrimary active:bg-[#946D4A]/[0.4] ") +
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
