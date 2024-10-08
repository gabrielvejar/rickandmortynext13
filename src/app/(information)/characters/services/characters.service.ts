import { Character } from "../models";

export function getCharacters(): Promise<Character[]> {
  const url = "https://rickandmortyapi.com/api/character";
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results);
}
export function getCharacterById(id: number): Promise<Character> {
  const url = "https://rickandmortyapi.com/api/character/" + id;
  return fetch(url)
    .then((res) => res.json())
    .then((character: Character) => {
      character.origin.url =
        character.origin.url.split("/").at(-1) || character.origin.url;
      character.location.url =
        character.location.url.split("/").at(-1) || character.location.url;
      return character;
    });
}

export function getMultipleCharacterById(ids: string[]): Promise<Character[]> {
  const url = "https://rickandmortyapi.com/api/character/" + ids.join(",");
  return fetch(url)
    .then((res) => res.json())
    .then((characters: Character[]) =>
      characters.map((character) => {
        character.origin.url =
          character.origin.url.split("/").at(-1) || character.origin.url;
        character.location.url =
          character.location.url.split("/").at(-1) || character.location.url;
        return character;
      })
    );
}
