"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HomeIcon from "./HomeIcon";
import FactsIcon from "./FactsIcon";
import StepsIcon from "./StepsIcon";
import MapIcon from "./MapIcon";
import ProfileIcon from "./ProfileIcon";

const exclude = ["/", "/register"];

export default function Navigation() {
  const pathname = usePathname();

  const white =
    "before:rounded-t-[1.25rem] before:backdrop-blur before:bg-primary before:absolute before:h-full before:w-full before:shadow-panel ";

  if (exclude.includes(pathname)) return null;
  return (
    <nav className={"flex fixed bottom-0 h-[4.875rem] z-10 w-full " + white}>
      <NavButton href="/dashboard" label="Home" icon={<HomeIcon />} />
      <NavButton href="/dashboard" label="Facts" icon={<FactsIcon />} />
      <NavButton href="/dashboard" label="Steps" icon={<StepsIcon />} />
      <NavButton href="/dashboard" label="Map" icon={<MapIcon />} />
      <NavButton href="/dashboard" label="Profile" icon={<ProfileIcon />} />
    </nav>
  );
}

interface NavButton {
  href: string;
  label: string;
  icon: React.ReactNode;
}

function NavButton({ href, label, icon }: NavButton) {
  return (
    <Link
      href={href}
      className="pt-1 text-[0.875rem] w-full relative flex flex-col justify-center gap-1 items-center"
    >
      {icon}
      {label}
    </Link>
  );
}
