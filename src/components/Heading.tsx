"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Heading {
  label: string;
  href: string;
  children?: React.ReactNode;
}

export default function Heading({ label, href, children }: Heading) {
  //adds small delay on clicks for a nicer effect
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setTimeout(() => {
      router.push(href);
    }, 180);
  };

  return (
    <div className="fixed top-0 left-0 flex items-end w-full h-[6.125rem] bg-[#FCEDB3]">
      <div className="flex h-16 w-full">
        <Link
          className="pl-8 pr-5 h-full flex items-center relative before:w-12 before:h-12 before:bg-textPrimary before:opacity-0 before:scale-0 active:before:opacity-30 active:before:scale-100 before:transition-all before:rounded-full before:absolute before:top-[0.4rem] before:right-[0.07rem]"
          href={href}
          onClick={handleClick}
        >
          <BackArrow />
        </Link>
        <div className="text-textPrimary grow text-[1.125rem] flex items-center">
          {label}
        </div>
        <div className="y-full flex items-center pr-5">{children}</div>
      </div>
    </div>
  );
}

function BackArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="17"
      fill="none"
      viewBox="0 0 9 17"
    >
      <path
        stroke="#946D4A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 15.359l-7-7.18L8 1"
      ></path>
    </svg>
  );
}
