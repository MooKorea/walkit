import Button from "@/components/Button";
import Heading from "@/components/Heading";

import { recreationalBusinesses } from "./locationData";
import LocationListItem from "./LocationListItem";

export default function AddStops() {
  return (
    <>
      <Heading label="Add Stops" href="/new-outing/save">
        <Button label="Saved Locations" width={""} />
      </Heading>
      <div className="pt-5 pb-24 w-full flex flex-col gap-[1.313rem] items-center overflow-y-scroll">
        {recreationalBusinesses.map((e, i) => {
          return <LocationListItem data={e} key={i} />;
        })}
      </div>
    </>
  );
}
