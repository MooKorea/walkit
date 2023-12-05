"use client";

import Panel from "@/components/Panel";
import LocationMarker from "@/components/icons/LocationMarker";
import NavigatorIcon from "@/components/icons/NavigatorIcon";
import Map from "@/components/Map";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";

export default function GeneratedMap() {
  return (
    <Panel height="h-[34.938rem] mt-[0.875rem] " top>
      <Loader time={3000} label="Generating Route..." render={<MapContainer />} />
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
