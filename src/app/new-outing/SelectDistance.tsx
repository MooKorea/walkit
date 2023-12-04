"use client";

import { useState } from "react";
import EditIcon from "@/components/icons/EditIcon";
import Map from "@/components/Map";
import Panel from "@/components/Panel";
import Toggle from "@/components/Toggle";
import NavigatorIcon from "@/components/icons/NavigatorIcon";
import Slider from "@/components/Slider";
import { easeInOut, motion } from "framer-motion";

export default function SelectDistance() {
  const [values, setValues] = useState<number[]>([1.5]);
  const [toggle, setToggle] = useState(false);

  const multiplier = (values[0] + 2) * 80;
  return (
    <Panel height="h-[510px] mt-4" top>
      <div className="relative h-[308px] w-full overflow-hidden rounded-[20px]">
        <Map />
        <div className="absolute top-[140px] right-[155px] flex items-center justify-center">
          <NavigatorIcon noBg />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, scale: { duration: 0.7, ease: [0.37, 1.56, 0.5, 1] } }}
            style={{ width: multiplier, height: multiplier }}
            className="absolute rounded-full bg-gradient"
          ></motion.div>
        </div>
      </div>
      <div className="flex w-panelWidth px-12 mt-8 mb-5 justify-between text-textPrimary">
        <div className="text-[24px]">
          <span className="font-RubikBold text-[36px]">{values}</span> mi
        </div>
        <div className="flex items-center gap-2 mb-[-8px]">
          <EditIcon />
          Enter Custom
        </div>
      </div>
      <Slider values={values} setValues={setValues} min={0.1} max={5} />
      <div className="flex mt-8 gap-4 text-textPrimary">
        <Toggle toggle={toggle} setToggle={setToggle} />
        Round Trip
      </div>
    </Panel>
  );
}
