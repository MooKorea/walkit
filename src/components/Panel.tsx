interface Panel {
  top?: boolean;
  height: string;
  children: React.ReactNode;
  align?: boolean;
}

export default function Panel({
  top = false,
  height = "h-[1.25rem]",
  children,
  align = false,
}: Panel) {
  const className =
    `${height} relative before:backdrop-blur before:z-[-1] before:rounded-[0.313rem] before:bg-primary before:absolute before:h-full before:w-full before:shadow-panel text-base flex flex-col items-center w-panelWidth rounded-[0.313rem] ` +
    (top ? "before:rounded-t-[1.25rem] " : "") +
    (align ? "justify-center " : "");

  return <div className={className}>{children}</div>;
}
