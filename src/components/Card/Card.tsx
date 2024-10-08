import Image from "next/image";

import MUICard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styles from "./Card.module.css";
import Link from "next/link";
import { Routes } from "@/models";

interface CardData {
  id: number;
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
    // <div className={styles.Card}>
    <MUICard className="bg-slate-50 min-w-72">
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {data.type || "No type"}
        </Typography>
        <Typography variant="h5" component="div">
          {data.name}
        </Typography>

        {data.image && (
          <Image width={100} height={100} alt={data.name} src={data.image} />
        )}
      </CardContent>
      <CardActions>
        <Link href={`${Routes.CHARACTERS.path}/${data.id}`}>
          <Button size="small">See more</Button>
        </Link>
      </CardActions>
    </MUICard>
    // </div>
  );
};

export default Card;
