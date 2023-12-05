"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Loader {
  time?: number; //milleseconds
  label?: string;
  render: React.ReactNode;
  margin?: string;
}

export default function Loader({
  time = 1000,
  label = "Loading...",
  render,
  margin = "mt-[12.5rem]",
}: Loader) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, time);
  }, []);

  return (
    <AnimatePresence>
      {isLoaded ? (
        render
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          key={"loader"}
          className={`${margin} text-textPrimary flex flex-col justify-center items-center gap-4`}
        >
          <div className="load-container">
            <div className="loader">Loading...</div>
          </div>
          <div>{label}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
