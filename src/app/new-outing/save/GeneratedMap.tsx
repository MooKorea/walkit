"use client";

import Panel from "@/components/Panel";
import LocationMarker from "@/components/icons/LocationMarker";
import NavigatorIcon from "@/components/icons/NavigatorIcon";
import Map from "@/components/Map";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function GeneratedMap() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <Panel height="h-[34.938rem] mt-[0.875rem] " top>
      <AnimatePresence>
        {isLoaded ? (
          <MapContainer />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            key={"loader"}
            className="text-textPrimary mt-[12.5rem] flex flex-col justify-center items-center gap-4"
          >
            <div className="load-container">
              <div className="loader">Loading...</div>
            </div>
            <div>Generating Route</div>
          </motion.div>
        )}
      </AnimatePresence>
    </Panel>
  );
}

function MapContainer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="w-full overflow-hidden"
    >
      <Map fullPath />
      <NavigatorIcon className="absolute top-[7.5rem] left-[6.25rem]" />
      <LocationMarker className="top-[16.875rem] left-[3.438rem]" />
      <LocationMarker delay={1} className="top-[25.313rem] left-[7.188rem]" />
      <LocationMarker delay={2} className="top-[18.125rem] left-[15.625rem]" />
      <LocationMarker delay={3} className="top-[6.563rem] left-[16.875rem]" />
    </motion.div>
  );
}
