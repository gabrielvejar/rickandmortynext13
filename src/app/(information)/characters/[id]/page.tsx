import { getCharacterById } from "../services";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import { Routes } from "@/models";
import { Character } from "../models";

const fetchCharacter = async (id: number) => getCharacterById(id);

const CharacterDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const numberId = Number(id);
  // redirect to not-found
  if (isNaN(numberId)) {
    notFound();
  }

  const response = await fetchCharacter(numberId);

  if ("error" in response) {
    return notFound();
  }

  const data = response as Character;

  return (
    <div className=" text-slate-200 flex flex-col justify-center items-center">
      <Paper elevation={24} className="w-fit">
        <Image width={300} height={300} alt={data.name} src={data.image} />
      </Paper>
      <Typography variant={"h2"}>{data.name}</Typography>
      <Typography variant={"body1"}>Type: {data.type || "No type"}</Typography>
      <Typography variant={"body1"}>Gender: {data.gender}</Typography>

      <Typography variant={"body1"}>
        Origin:{" "}
        <Link href={`${Routes.LOCATIONS.path}/${data.origin.url}`}>
          {data.origin.name}
        </Link>
      </Typography>
      <Typography variant={"body1"}>
        Location:{" "}
        <Link href={`${Routes.LOCATIONS.path}/${data.location.url}`}>
          {data.location.name}
        </Link>
      </Typography>
    </div>
  );
};

export default CharacterDetails;
