"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

type LocationMarker = React.BaseHTMLAttributes<HTMLDivElement> & {
  className?: string;
  delay?: number;
  instant?: boolean;
  radius?: boolean;
  ID?: number;
  locationIDs?: number[];
};

export default function LocationMarker({
  className,
  delay = 0,
  instant = false,
  radius = false,
  locationIDs,
  ID = -1,
  ...props
}: LocationMarker) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (locationIDs?.indexOf(ID) === -1) return;
    if (scope.current === null) return
    animate(scope.current, {
      scale: 1.5,
      opacity: 0,
    });
  }, [locationIDs]);

  return (
    <div
      className={"w-24 h-24 absolute flex items-center justify-center " + className}
      {...props}
    >
      {radius && (
        <div
          ref={scope}
          className="w-full h-full absolute bg-gradient rounded-full"
        ></div>
      )}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.625rem"
        height="2.625rem"
        fill="none"
        viewBox="0 0 42 42"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: (instant ? 0 : 0.8) + delay * 0.1 }}
      >
        <path
          fill="#FFD170"
          stroke="#4B3300"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M30.9 29.15l-7.425 7.425a3.496 3.496 0 01-4.948 0L11.1 29.15a14 14 0 1119.8 0z"
        ></path>
        <path
          fill="#fff"
          stroke="#4B3300"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M24.712 22.962a5.25 5.25 0 10-7.424-7.424 5.25 5.25 0 007.424 7.424z"
        ></path>
      </motion.svg>
    </div>
  );
}
