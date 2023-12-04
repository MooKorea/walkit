"use client";
import { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";

interface Toggle {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Toggle({ toggle, setToggle }: Toggle) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, {
      x: toggle ? 20 : 0,
    });
  }, [toggle]);

  return (
    <div
      onClick={() => setToggle((prev) => !prev)}
      className="cursor-pointer relative w-[43px] h-6 shadow-inset bg-inputBackground rounded-[20px]"
    >
      <div
        className={
          "duration-200 h-full absolute left-0 bg-inputForeground shadow-inset rounded-[20px] " +
          (toggle ? "w-[43px] " : "w-[20px]")
        }
      ></div>
      <div
        ref={scope}
        className="flex items-center justify-center relative bottom-[2px] w-6 h-6 border-2 border-[#563400] shadow-[0_2px_0_#563400] rounded-full bg-secondary focus:outline-none"
      >
        <div className="rounded-full w-3 h-3 bg-[#B08D4C]"></div>
      </div>
    </div>
  );
}
