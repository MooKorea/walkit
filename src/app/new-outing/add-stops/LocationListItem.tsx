"use client";

import Button from "@/components/Button";
import Panel from "@/components/Panel";
import InfoIcon from "@/components/icons/InfoIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import StarRating from "@/components/icons/StarRating";
import Image from "next/image";
import { LocationType } from "../../../data/locationData";
import { useState } from "react";
import { motion } from "framer-motion";

interface LocationListItem {
  data: LocationType;
  delay: number;
}

export default function LocationListItem({ data, delay }: LocationListItem) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + delay }}
    >
      <Panel height="h-[18.438rem]">
        <Photos data={data} />
        <Text data={data} />
        <Buttons data={data} />
      </Panel>
    </motion.div>
  );
}

function Photos({ data }: { data: LocationType }) {
  return (
    <div className="w-full mt-3 px-3 flex gap-[0.563rem]">
      <div className="rounded-[0.438rem] overflow-hidden relative w-full h-[7.063rem]">
        <Image
          src={data.photo1}
          fill
          className="object-cover"
          sizes="12rem"
          alt="photo of bowling place"
        />
      </div>
      <div className="rounded-[0.438rem] overflow-hidden relative w-full h-[7.063rem]">
        <Image
          src={data.photo2}
          fill
          className="object-cover"
          sizes="12rem"
          alt="photo of bowling place"
        />
      </div>
    </div>
  );
}

function Text({ data }: { data: LocationType }) {
  let dollarAmount = "";
  for (let i = 0; i < data.pricing; i++) {
    dollarAmount += "$";
  }

  const date = new Date();
  const time = 100 * (date.getHours() - 12) + date.getMinutes();
  const isClosed = data.closeTime * 100 < time;
  return (
    <>
      <div className="w-full px-4 mt-3 text-[1.25rem]">{data.name}</div>
      <div className="w-full px-4 mt-2 text-base flex items-center h-6 gap-2">
        <div>{data.starRating.toFixed(1)}</div>
        <StarRating rating={data.starRating} />
        <div>&#8226; {dollarAmount}</div>
      </div>
      <div className="w-full px-4 mt-2 flex gap-7">
        <div>
          <span
            className={
              "font-RubikMedium " +
              (data.distance < 0.7 ? "text-textTertiary" : "text-[#D18E00]")
            }
          >
            {data.distance < 0.7 ? "Nearby " : "Far "}
          </span>
          {`- ${data.distance} mi`}
        </div>
        <div>
          <span
            className={
              "font-RubikMedium " + (isClosed ? "text-[#D18E00]" : "text-textTertiary")
            }
          >
            {isClosed ? "Closed " : "Open "}
          </span>
          - Closes {data.closeTime} PM
        </div>
      </div>
    </>
  );
}

function Buttons({ data }: { data: LocationType }) {
  const [added, setAdded] = useState(false);
  return (
    <div className="w-full px-4 my-3 flex gap-2">
      <Button label="Details" icon={<InfoIcon />} width="w-full" href={`/new-outing/add-stops/${data.name}`} />
      <div className={"w-full " + (added ? "saturate-0 pointer-events-none" : "")}>
        <Button
          label={added ? "Added" : "Add"}
          icon={<PlusIcon />}
          highlight
          width="w-full"
          onClick={() => setAdded(true)}
        />
      </div>
    </div>
  );
}
