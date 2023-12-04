import Button from "@/components/Button";
import Heading from "@/components/Heading";

export default function AddStops() {
    return (
        <>
            <Heading label="Add Stops" href="/new-outing/save">
                <Button label="Saved Locations" width={""} />
            </Heading>
        </>
    )
}