import { getLocationById } from "../services";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import { Entity, Routes } from "@/models";
import { getMultipleCharacterById } from "../../characters/services";
import { Card } from "@/components";
import "../../card-layout.scss";
import { Character } from "../../characters/models";

const fetchLocation = async (id: number) => getLocationById(id);
const fetchResidents = async (ids: string[]) => getMultipleCharacterById(ids);

const LocationDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const numberId = Number(id);
  // redirect to not-found
  if (isNaN(numberId)) {
    notFound();
  }

  const data = await fetchLocation(Number(id));
  let residents: Character[] = [];
  if (data.residents.length > 0) {
    residents = await fetchResidents(data.residents);
  }

  return (
    <div className=" text-slate-200 text-center">
      <Typography variant={"h2"} gutterBottom>
        {data.name}
      </Typography>
      <Typography variant={"body1"} gutterBottom>
        Type: {data.type || "No type"}
      </Typography>
      <Typography variant={"body1"} gutterBottom>
        Dimension: {data.dimension}
      </Typography>
      <Typography variant={"h5"} gutterBottom>
        Residents:
      </Typography>

      <div className="card-layout">
        {residents.map((character) => (
          <Card
            data={{ ...character, entity: Entity.CHARACTERS }}
            key={character.id}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationDetails;
