interface Button {
  shadow?: boolean;
  highlight?: boolean;
  label: string;
  icon?: React.ReactNode;
  width: string;
  height?: string;
}

export default function Button({
  shadow = false,
  highlight = false,
  label,
  icon,
  height,
  width,
}: Button) {
  return (
    <div
      className={
        "rounded-[20px] flex gap-2 justify-center items-center text-base font-RubikMedium text-textPrimary " +
        (highlight ? "bg-secondary " : "border-2 border-textPrimary ") +
        (shadow ? "shadow-small " : "") +
        (!!height ? `${height} ` : "h-[34px] ") +
        width
      }
    >
      {icon}
      {label}
    </div>
  );
}
