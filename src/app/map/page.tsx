"use client";

import Map from "@/components/Map";
import Modal from "@/components/Modal";
import TextInput from "@/components/TextInput";
import LocationMarker from "@/components/icons/LocationMarker";
import NavigatorIcon from "@/components/icons/NavigatorIcon";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const locationMarkers: string[] = [
  "top-[16.875rem] left-[6.438rem]",
  "top-[25.313rem] left-[10.188rem]",
  "top-[18.125rem] left-[19.625rem]",
  "top-[5.563rem] left-[20.875rem]",
];

export default function Page() {
  const [locationIDs, setLocationIDs] = useState<number[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (locationIDs.length !== locationMarkers.length) return;
    setModalOpen(true);
  }, [locationIDs]);

  return (
    <>
      <div className="fixed h-[3.625rem] z-10 w-full flex items-end pb-2 px-4 backdrop-blur bg-primary">
        <TextInput width="w-full" search />
      </div>
      <div className="h-full w-full bg-white z-[-1]">
        <TransformWrapper initialScale={2.2}>
          <TransformComponent>
            <InteractiveMap locationIDs={locationIDs} setLocationIDs={setLocationIDs} />
          </TransformComponent>
        </TransformWrapper>
      </div>
      {modalOpen && (
        <div className="w-screen h-screen fixed top-0">
          <Modal
            noClose
            setModalOpen={setModalOpen}
            buttonLabel="Results"
            highlight
            height="h-[11.938rem] mt-20"
            href="/results"
          >
            <div className="absolute top-[-2rem] left-[9.1rem] w-[9.063rem] h-[9.063rem]">
                <Image src="/partyIcon.png" fill sizes="9.063rem" alt="party icon"/>
            </div>
            <div className="absolute bottom-[2rem] text-textPrimary font-RubikMedium text-2xl">Outing Complete!</div>
          </Modal>
        </div>
      )}
    </>
  );
}

interface InteractiveMap {
  locationIDs: number[];
  setLocationIDs: React.Dispatch<React.SetStateAction<number[]>>;
}

function InteractiveMap({ locationIDs, setLocationIDs }: InteractiveMap) {
  return (
    <div className="w-screen h-screen relative">
      <Map fullPath className="w-[90rem] absolute right-[-35rem] top-[-13.5rem]" />
      <NavigatorIcon className="absolute top-[7.5rem] left-[8.25rem]" />
      {locationMarkers.map((e, i) => {
        return (
          <LocationMarker
            key={i}
            className={e}
            radius
            instant
            ID={i}
            onClick={() =>
              setLocationIDs((prev) => {
                return [...prev, i];
              })
            }
            locationIDs={locationIDs}
          />
        );
      })}
    </div>
  );
}
