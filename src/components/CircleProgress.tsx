"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface CircleProgress {
  dashboard?: boolean;
  progress?: number;
}

export default function CircleProgress({
  dashboard = false,
  progress = 0,
}: CircleProgress) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: { delay: number; length: number }) => {
      const delay = i.delay * 0.5;
      return {
        pathLength: i.length,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const dimensions = dashboard ? 70 : 45;
  return (
    <div
      className={
        "relative " +
        (dashboard ? "w-[4.375rem] h-[4.375rem]" : "w-[2.813rem] h-[2.813rem]")
      }
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        fill="none"
        viewBox="0 0 71 71"
        initial="hidden"
        animate="visible"
      >
        <path
          className="stroke-inputBackground"
          strokeLinecap="round"
          strokeWidth="21"
          d="M35.5 11C49.031 11 60 21.969 60 35.5S49.031 60 35.5 60 11 49.031 11 35.5C11 22.642 20.5 12 34.5 11"
        ></path>
        <motion.path
          variants={draw}
          custom={{ delay: 0, length: progress }}
          className={`${dashboard ? "stroke-[#73ECC5]" : "stroke-inputForeground"}`}
          strokeLinecap="round"
          strokeWidth="21"
          d="M35.5 11C49.031 11 60 21.969 60 35.5S49.031 60 35.5 60 11 49.031 11 35.5C11 22.642 20.5 12 34.5 11"
        ></motion.path>
      </motion.svg>
      <Image
        src={"/OutingProgressShadow.png"}
        fill
        sizes="4.375rem"
        alt="progress bar shadow"
        className="absolute top-0 mix-blend-multiply"
      />
    </div>
  );
}
