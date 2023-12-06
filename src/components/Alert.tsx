"use client";

import { useAnimate } from "framer-motion";
import { useEffect } from "react";

interface Alert {
  label: string;
}

export default function Alert({ label }: Alert) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const animation = async () => {
      await animate(
        scope.current,
        {
          y: -10,
        },
        { duration: 0 }
      );
      await animate(scope.current, {
        opacity: 1,
        y: 0,
      });
      animate(
        scope.current,
        {
          opacity: 0,
        },
        { delay: 1 }
      );
    };
    animation();
  }, []);
  return (
    <div
      ref={scope}
      className="opacity-0 fixed w-full flex justify-center top-[6rem] pointer-events-none z-20 text-base"
    >
      <div className="bg-white backdrop-blur px-4 py-2 rounded-full">{label}</div>
    </div>
  );
}
