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
    <Panel height="h-[559px] mt-[14px] " top>
      <AnimatePresence>
        {isLoaded ? (
          <MapContainer />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            key={"loader"}
            className="text-textPrimary mt-[200px] flex flex-col justify-center items-center gap-4"
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
      <NavigatorIcon className="absolute top-[120px] left-[100px]" />
      <LocationMarker className="top-[270px] left-[55px]" />
      <LocationMarker delay={1} className="top-[405px] left-[115px]" />
      <LocationMarker delay={2} className="top-[290px] left-[250px]" />
      <LocationMarker delay={3} className="top-[105px] left-[270px]" />
    </motion.div>
  );
}
