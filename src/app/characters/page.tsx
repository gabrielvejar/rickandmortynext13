import { Card, Navigator } from "@/components";
import { Character } from "./models";
import { getCharacters } from "./services";
import { Routes } from "@/models";

const fetchCharacters = async () => await getCharacters();

const Characters = async () => {
  const characters: Character[] = await fetchCharacters();

  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.LOCATIONS]} />
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  );
};

export default Characters;
