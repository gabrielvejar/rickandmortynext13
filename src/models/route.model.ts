export const Routes = {
  HOME: {
    name: "Home",
    path: "/",
  },
  CHARACTERS: {
    name: "Characters",
    path: "/characters",
  },
  LOCATIONS: {
    name: "Locations",
    path: "/locations",
  },
};

export interface Route {
  name: string;
  path: string;
}
