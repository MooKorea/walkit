import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Panel from "@/components/Panel";
import StarRating from "@/components/icons/StarRating";
import Image from "next/image";

export default function AddStops() {
  return (
    <>
      <Heading label="Add Stops" href="/new-outing/save">
        <Button label="Saved Locations" width={""} />
      </Heading>
      <div className="mt-5 flex flex-col gap-[1.313rem]">
        <Panel height="h-[18.438rem]">
          <div className="w-full mt-3 px-3 flex gap-[0.563rem]">
            <div className="rounded-[0.438rem] overflow-hidden relative w-full h-[7.063rem]">
              <Image
                src="/BowlingPhoto.jpg"
                fill
                sizes="12rem"
                alt="photo of bowling place"
              />
            </div>
            <div className="rounded-[0.438rem] overflow-hidden relative w-full h-[7.063rem]">
              <Image
                src="/BowlingPhoto.jpg"
                fill
                sizes="12rem"
                alt="photo of bowling place"
              />
            </div>
          </div>
          <div className="w-full px-3 mt-3 text-[1.25rem]">Super Bowl</div>
          <div className="w-full px-3 mt-2 text-base flex items-center h-6 gap-2">
            <div>4.4</div>
            <StarRating rating={4.4} />
          </div>
        </Panel>
      </div>
    </>
  );
}
