import Link from "next/link";

interface Heading {
  label: string;
  href: string;
}

export default function Heading({ label, href }: Heading) {
  return (
    <div className="fixed top-0 left-0 flex items-end w-full h-[6.125rem] bg-[#FCEDB3]">
      <div className="flex h-16">
        <Link className="pl-8 pr-5 h-full flex items-center" href={href}>
          <BackArrow />
        </Link>
        <div className="text-textPrimary text-[1.125rem] flex items-center" >
          {label}
        </div>
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
