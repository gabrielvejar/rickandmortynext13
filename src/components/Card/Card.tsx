import Image from "next/image";
import { Character } from "@/app/(information)/characters/models";
import { Location } from "@/app/(information)/locations/models";
import styles from "./Card.module.css";

interface CardData {
  name: string;
  type?: string;
  created: string;
  image?: string;
}

interface Props {
  data: CardData;
}

const Card = ({ data }: Props) => {
  //   let formattedType = data.type;
  //   formattedType ||= "No type";

  return (
    <div className={styles.Card}>
      <p>Name: {data.name}</p>
      <p>Type: {data.type || "No type"}</p>
      <p>Created: {data.created}</p>
      {data.image && (
        <Image width={100} height={100} alt={data.name} src={data.image} />
      )}
    </div>
  );
};

export default Card;
