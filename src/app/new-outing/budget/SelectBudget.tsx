"use client";

import { useState } from "react";
import EditIcon from "@/components/icons/EditIcon";
import Panel from "@/components/Panel";
import Toggle from "@/components/Toggle";
import Slider from "@/components/Slider";
import PiggyBank from "./PiggyBank";

export default function SelectBudget() {
  const [values, setValues] = useState<number[]>([5, 20]);
  const [toggle, setToggle] = useState(false);

  return (
    <Panel height="h-[31.875rem] mt-4" top>
      <div className="relative h-[19.25rem] w-full flex flex-col pt-10 gap-8 items-center">
        <PiggyBank />
        <div className="flex items-center gap-2 mb-[-0.5rem] text-textPrimary">
          <EditIcon />
          Enter Custom
        </div>
      </div>
      <div
        className={
          "flex w-panelWidth px-12 mt-8 mb-5 justify-between text-textPrimary " +
          (toggle ? "saturate-0 pointer-events-none " : "")
        }
      >
        <div className="text-[1.5rem]">
          <span className="font-RubikBold text-[2.25rem]">${toggle ? "0" : values[0]}</span>
          min
        </div>
        <div className="text-[1.5rem]">
          <span className="font-RubikBold text-[2.25rem]">${toggle ? "0" : values[1]}</span>
          max
        </div>
      </div>
      <div className={toggle ? "saturate-0 pointer-events-none " : ""}>
        <Slider values={values} setValues={setValues} min={0} max={50} step={1} />
      </div>
      <div className="flex mt-8 gap-4 text-textPrimary ">
        <Toggle toggle={toggle} setToggle={setToggle} />
        I&apos;m not spending
      </div>
    </Panel>
  );
}
