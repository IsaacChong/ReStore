import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../app/models/product";
interface Props {
  prd: Product;
}

export default function ProductCard({ prd }: Props) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "purple" }}>{prd.name[0]}</Avatar>}
        title={prd.name}
        titleTypographyProps={{ fontWeight: "bold", color: "blueviolet" }}
      />
      <CardMedia
        sx={{ height: 140, backgroundSize: "contain", backgroundColor: "primary.light" }}
        image={prd.pictureUrl}
        title={prd.name}
      />
      <CardContent>
        <Typography color="secondary" variant="h4">
          ${(prd.price / 100).toFixed(2)}
        </Typography>
        <Typography>
          {prd.brand} / {prd.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Add to cart</Button>
        <Button>View</Button>
      </CardActions>
    </Card>
  );
}
