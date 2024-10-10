import Image from "next/image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./Card.module.css";
import Link from "next/link";
import { Entity, Routes } from "@/models";

interface CardData {
  id: number;
  name: string;
  type?: string;
  created: string;
  image?: string;
  entity: Entity;
}

interface Props {
  data: CardData;
}

const Card = ({ data }: Props) => {
  return (
    <div className={styles.Card}>
      <Link href={`${Routes[data.entity].path}/${data.id}`}>
        <div className={styles.CardContent}>
          <Typography gutterBottom sx={{ fontSize: 14 }}>
            {data.type || "No type"}
          </Typography>
          <Typography variant="h5" component="div">
            {data.name}
          </Typography>

          {data.image && (
            <Image
              className={styles.CardImage}
              width={100}
              height={100}
              alt={data.name}
              src={data.image}
              // placeholder="blur"
            />
          )}

          {/* <Button size="small" variant="contained" color="success">
            See more
          </Button> */}
        </div>
      </Link>
    </div>
  );
};

export default Card;
