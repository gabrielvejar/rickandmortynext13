import { Character } from "../../characters/models";
import { Location } from "../models";

export function getLocations(): Promise<Location[]> {
  const url = "https://rickandmortyapi.com/api/location";
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results);
}

export function getCharacterById(id: number): Promise<Location> {
  const url = "https://rickandmortyapi.com/api/location/" + id;
  return fetch(url)
    .then((res) => res.json())
    .then((location) => ({
      ...location,
      residents: location.residents.map(
        (resident: string) => resident.split("/").at(-1) || resident
      ),
    }));
}
