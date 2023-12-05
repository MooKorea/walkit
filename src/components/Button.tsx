import Link from "next/link";

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
  return (
    <Link
      href={href}
      scroll={false}
      className={
        "rounded-[1.25rem] flex gap-2 justify-center items-center text-base font-RubikMedium text-textPrimary " +
        (highlight ? "bg-secondary " : "border-2 border-textPrimary ") +
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
