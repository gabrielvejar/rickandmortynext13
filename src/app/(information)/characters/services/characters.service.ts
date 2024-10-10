import { Character } from "../models";

export function getCharacters(): Promise<Character[]> {
  const url = "https://rickandmortyapi.com/api/character";
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .then((data) => data.results);
}
export function getCharacterById(
  id: number
): Promise<Character | { error: string }> {
  const url = "https://rickandmortyapi.com/api/character/" + id;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      if (!res.error) {
        res.origin.url = res.origin.url.split("/").at(-1) || res.origin.url;
        res.location.url =
          res.location.url.split("/").at(-1) || res.location.url;
      }
      return res;
    });
}

export function getMultipleCharacterById(ids: string[]): Promise<Character[]> {
  const url = "https://rickandmortyapi.com/api/character/" + ids.join(",");
  return fetch(url)
    .then((res) => res.json())
    .then((data) => (ids.length == 1 ? [data] : data))
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
