import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { recreationalBusinesses } from "./locationData";
import LocationListItem from "./LocationListItem";
import Loader from "@/components/Loader";

export default function AddStops() {
  return (
    <>
      <Heading label="Add Stops" href="/new-outing/save">
        <Button label="Saved Locations" />
      </Heading>
      <Loader margin="mt-[20rem]" render={<LocationsContainer />} />
    </>
  );
}

function LocationsContainer() {
  return (
    <div className="pt-5 pb-[10rem] w-full flex flex-col gap-[1.313rem] items-center overflow-y-scroll">
      {recreationalBusinesses.map((e, i) => {
        return <LocationListItem data={e} key={i} delay={i * 0.1} />;
      })}
    </div>
  );
}
