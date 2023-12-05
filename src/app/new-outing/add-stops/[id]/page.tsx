"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import PlusIcon from "@/components/icons/PlusIcon";
import StarRating from "@/components/icons/StarRating";
import { locationData } from "@/data/locationData";
import Image from "next/image";
import { useState, memo } from "react";
import { LocationType } from "@/data/locationData";
import Alert from "@/components/Alert";

export default function Page({ params }: { params: { id: string } }) {
  const data: LocationType = locationData.filter(
    (e) => e.name === params.id.replaceAll("%20", " ")
  )[0];

  const [added, setAdded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  if (data === undefined) {
    return (
      <>
        <Heading label="Stop Details" href="/new-outing/add-stops" />
        <div className="mt-6">Data not found</div>
      </>
    );
  }
  let dollarAmount = "";
  for (let i = 0; i < data.pricing; i++) {
    dollarAmount += "$";
  }

  const date = new Date();
  const time = 100 * (date.getHours() - 12) + date.getMinutes();
  const isClosed = data.closeTime * 100 < time;

  return (
    <>
      <Heading label="Stop Details" href="/new-outing/add-stops" />
      {isSaved && <Alert label="Saved to my locations" />}
      <div className="w-full h-[16.75rem] bg-secondary absolute">
        <Image
          src={data.photo3}
          fill
          className="object-cover"
          sizes="100vw"
          alt={`photo of ${data.name}`}
        />
      </div>
      <div className="relative z-10 w-full h-full overflow-y-scroll pt-[14.313rem]">
        <div className="px-6 pt-6 pb-24 w-full bg-white rounded-t-[1.25rem] flex flex-col gap-2">
          <div className="flex w-full items-center">
            <h1 className="font-RubikMedium grow text-[1.5rem]">{data.name}</h1>
            <StarIcon isSaved={isSaved} setIsSaved={setIsSaved} />
          </div>
          <p>{data.description}</p>
          <div className="w-full text-base flex items-center h-6 gap-2">
            <div>{data.starRating.toFixed(1)}</div>
            <StarRating rating={data.starRating} />
            <div>&#8226; {dollarAmount}</div>
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
          <div>{data.address}</div>
          <div
            className={"w-full my-3 " + (added ? "saturate-0 pointer-events-none" : "")}
          >
            <Button
              label={added ? "Added" : "Add to Route"}
              icon={<PlusIcon />}
              highlight
              width="w-full"
              onClick={() => setAdded(true)}
            />
          </div>
          <div className="text-[1.25rem]">Photos</div>
          <Photos data={data} />
        </div>
      </div>
    </>
  );
}

interface StarIcon {
  isSaved: boolean;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
}
function StarIcon({ isSaved, setIsSaved }: StarIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      fill="none"
      viewBox="0 0 33 33"
      onClick={() => setIsSaved((prev) => !prev)}
    >
      <path
        className={isSaved ? "fill-[#ffd170]" : "fill-[#D9D9D9]"}
        d="M15.667 3.256a1 1 0 011.666 0l3.99 6.012a1 1 0 00.564.41l6.951 1.937a1 1 0 01.515 1.585l-4.485 5.652a1 1 0 00-.216.664l.307 7.209a1 1 0 01-1.348.98l-6.762-2.52a1 1 0 00-.698 0l-6.762 2.52a1 1 0 01-1.348-.98l.307-7.21a1 1 0 00-.216-.663L3.647 13.2a1 1 0 01.515-1.585l6.95-1.936a1 1 0 00.566-.41l3.989-6.013z"
      ></path>
    </svg>
  );
}

const Photos = memo(({ data }: { data: LocationType }) => {
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
});

function Photo({ src }: { src: string }) {
  return (
    <div className="relative w-[7.9rem] h-[7.9rem] bg-secondary overflow-hidden rounded-[0.313rem]">
      <Image src={src} fill sizes="7.9rem" alt="photo of destination" />
    </div>
  );
}
