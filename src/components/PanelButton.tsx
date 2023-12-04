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
    "relative before:rounded-[0.313rem] before:bg-primary before:absolute before:h-full before:w-full before:shadow-panel ";
  const yellow = "relative bg-secondary rounded-[0.313rem] shadow-panel ";
  return (
    <Link
      {...props}
      href={href}
      scroll={false}
      className={
        "text-[1.25rem] flex items-center justify-center " +
        (highlight ? yellow : white) +
        (top ? "before:rounded-t-[1.25rem] rounded-t-[1.25rem] " : "") +
        (bottom ? "before:rounded-b-[1.25rem] rounded-b-[1.25rem] " : "") +
        (right ? "before:rounded-br-[1.25rem] rounded-br-[1.25rem] " : "") +
        (left ? "before:rounded-bl-[1.25rem] rounded-bl-[1.25rem] " : "") +
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
