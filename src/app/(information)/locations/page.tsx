import { Card, Navigator } from "@/components";
import { Location } from "./models";
import { getLocations } from "./services";
import { Routes } from "@/models";

const fetchLocations = async () => await getLocations();

const Locations = async () => {
  const locations: Location[] = await fetchLocations();

  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.CHARACTERS]} />
      {locations.map((location) => (
        <Card key={location.id} data={location} />
      ))}
    </>
  );
};

export default Locations;
