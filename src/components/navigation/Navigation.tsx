"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HomeIcon from "./HomeIcon";
import FactsIcon from "./FactsIcon";
import StepsIcon from "./StepsIcon";
import MapIcon from "./MapIcon";
import ProfileIcon from "./ProfileIcon";
import useButtonDelay from "@/hooks/useButtonDelay";

const exclude = ["/", "/register"];

export default function Navigation() {
  const pathname = usePathname();

  const white =
    "before:backdrop-blur before:bg-primary before:absolute before:h-full before:w-full before:shadow-panel ";

  if (exclude.includes(pathname)) return null;
  return (
    <nav className={"flex overflow-hidden rounded-t-[1.25rem] fixed bottom-0 h-[4.875rem] z-10 w-full " + white}>
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

  const handleClick = useButtonDelay(href)

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="pt-1 text-[0.875rem] w-full relative flex flex-col justify-center gap-1 items-center before:absolute before:h-16 before:w-16 before:bg-black active:before:opacity-[0.13] active:before:scale-[2] before:scale-50 before:rounded-full before:opacity-0 before:transition-all before:duration-200"
    >
      {icon}
      {label}
    </Link>
  );
}
