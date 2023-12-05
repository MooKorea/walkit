"use client";

import Image from "next/image";
import { memo } from "react";
import { LocationType } from "@/data/locationData";

const Photos = ({ data }: { data: LocationType }) => {
  return (
    <div className="flex flex-col gap-[0.4rem]">
      <div className="flex gap-[0.4rem]">
        <Photo src={data.photo1 + `&${Math.random()}`} />
        <Photo src={data.photo2 + `&${Math.random()}`} />
        <Photo src={data.photo1 + `&${Math.random()}`} />
      </div>
      <div className="flex gap-[0.4rem]">
        <Photo src={data.photo2 + `&${Math.random()}`} />
        <Photo src={data.photo1 + `&${Math.random()}`} />
        <Photo src={data.photo2 + `&${Math.random()}`} />
      </div>
      <div className="flex gap-[0.4rem]">
        <Photo src={data.photo1 + `&${Math.random()}`} />
        <Photo src={data.photo2 + `&${Math.random()}`} />
        <Photo src={data.photo1 + `&${Math.random()}`} />
      </div>
    </div>
  );
};

function Photo({ src }: { src: string }) {
  return (
    <div className="relative w-[7.9rem] h-[7.9rem] bg-secondary overflow-hidden rounded-[0.313rem]">
      <Image src={src} fill sizes="7.9rem" alt="photo of destination" />
    </div>
  );
}

export default memo(Photos)
