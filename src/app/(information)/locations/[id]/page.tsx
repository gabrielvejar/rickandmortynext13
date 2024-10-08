import { getCharacterById } from "../services";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import { Routes } from "@/models";
import { getMultipleCharacterById } from "../../characters/services";
import { Card } from "@/components";
import "../../card-layout.scss";
import { Character } from "../../characters/models";

const fetchLocation = async (id: number) => getCharacterById(id);
const fetchResidents = async (ids: string[]) => getMultipleCharacterById(ids);

const LocationDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const numberId = Number(id);
  // redirect to not-found
  if (isNaN(numberId)) {
    notFound();
  }

  const data = await fetchLocation(Number(id));
  console.log({ data });
  let residents: Character[] = [];
  if (data.residents.length > 0) {
    residents = await fetchResidents(data.residents);
  }
  console.log({ residents });

  return (
    <div className=" text-slate-200">
      <Typography variant={"h2"}>{data.name}</Typography>
      <Typography variant={"body1"}>Type: {data.type || "No type"}</Typography>
      <Typography variant={"body1"}>Dimension: {data.dimension}</Typography>
      <Typography variant={"h5"}>Residents:</Typography>

      <div className="card-layout">
        {residents.map((character) => (
          <Card data={character} key={character.id} />
        ))}
      </div>
    </div>
  );
};

export default LocationDetails;
