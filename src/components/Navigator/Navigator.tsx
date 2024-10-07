import { Route } from "@/models";
import Link from "next/link";

interface Props {
  pathNames: Route[];
}

const Navigator = ({ pathNames }: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      {pathNames.map((pathName) => (
        <Link
          className="bg-fuchsia-500 hover:bg-sky-700"
          href={pathName.path}
          key={pathName.path}
        >
          {pathName.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigator;
