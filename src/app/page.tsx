import Link from "next/link";
import { Entity, Routes } from "@/models";
import styles from "./page.module.css";
import { Card, Navigator } from "@/components";
import { Typography } from "@mui/material";
import { getCharacterById } from "./(information)/characters/services";
import { Character } from "./(information)/characters/models";

const fetchRandomCharacter = async () => {
  const randomId = Math.floor(Math.random() * 826);
  const character = await getCharacterById(randomId);
  return character as Character;
};

export default async function App() {
  const character = await fetchRandomCharacter();
  return (
    <div className="text-white">
      <Typography variant="h1">Welcome to Rick and Morty app</Typography>
      <Typography variant="h2">Random Character</Typography>
      <Card data={{ ...character, entity: Entity.CHARACTERS }} />
      {/* <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} /> */}
    </div>
  );
}
