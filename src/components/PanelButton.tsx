import Link from "next/link";

type PanelButton = React.BaseHTMLAttributes<HTMLAnchorElement> & {
  top?: boolean;
  bottom?: boolean;
  right?: boolean;
  left?: boolean;
  highlight?: boolean;
  href?: string;
  height?: string;
  split?: boolean;
  children: React.ReactNode;
};

export default function PanelButton({
  top = false,
  bottom = false,
  right = false,
  left = false,
  children,
  highlight = false,
  href = "",
  height,
  split = false,
  ...props
}: PanelButton) {
  const white =
    "relative before:rounded-[5px] before:bg-primary before:absolute before:h-full before:w-full before:shadow-panel ";
  const yellow = "relative bg-secondary rounded-[5px] shadow-panel ";
  return (
    <Link
      {...props}
      href={href}
      className={
        "text-[20px] flex items-center justify-center " +
        (highlight ? yellow : white) +
        (top ? "before:rounded-t-[20px] rounded-t-[20px] " : "") +
        (bottom ? "before:rounded-b-[20px] rounded-b-[20px] " : "") +
        (right ? "before:rounded-br-[20px] rounded-br-[20px] " : "") +
        (left ? "before:rounded-bl-[20px] rounded-bl-[20px] " : "") +
        (split ? "w-full " : "w-panelWidth ") +
        (!!height ? `${height} ` : "h-buttonHeight ")
      }
    >
      <div
        className={
          "relative flex gap-4 items-center " +
          (highlight ? "font-RubikMedium text-textPrimary" : "font-RubikRegular")
        }
      >
        {children}
      </div>
    </Link>
  );
}
