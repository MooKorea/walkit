"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HomeIcon from "./HomeIcon";
import FactsIcon from "./FactsIcon";
import StepsIcon from "./StepsIcon";
import MapIcon from "./MapIcon";
import ProfileIcon from "./ProfileIcon";
import useButtonDelay from "@/hooks/useButtonDelay";
import TextInput from "../TextInput";
import { AnimatePresence, motion } from "framer-motion";

const exclude = ["/", "/register"];
const search = ["/new-outing/add-stops"];

export default function Navigation() {
  const pathname = usePathname();

  const white =
    "before:backdrop-blur before:bg-primary before:absolute before:h-full before:w-full before:shadow-panel ";

  if (exclude.includes(pathname)) return null;
  return (
    <nav
      className={
        "transition-all flex items-end overflow-hidden rounded-t-[1.25rem] fixed bottom-0 z-10 w-full " +
        (search.includes(pathname) ? "h-[8.313rem] " : "h-[4.875rem] ") +
        white
      }
    >
      <AnimatePresence>
        {search.includes(pathname) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity: 0}}
            transition={{ delay: 0.1 }}
            className="absolute w-full pt-3 px-3 bottom-20"
          >
            <TextInput width="w-full" search />
          </motion.div>
        )}
      </AnimatePresence>
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
  const handleClick = useButtonDelay(href);

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="pt-1 mb-3 text-[0.875rem] w-full relative flex flex-col justify-center gap-1 items-center before:absolute before:h-16 before:w-16 before:bg-black active:before:opacity-[0.13] active:before:scale-[2] before:scale-100 before:rounded-full before:opacity-0 before:transition-all before:duration-75"
    >
      {icon}
      {label}
    </Link>
  );
}
