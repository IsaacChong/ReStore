import { LoadingButton } from "@mui/lab";
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
import { useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
interface Props {
  prd: Product;
}

export default function ProductCard({ prd }: Props) {

  const [loading, setLoading] = useState(false);

  const handleAddItem = (productId : number) => {
    setLoading(true);
    agent.Basket.addItem(productId, 1)
    .then(product => console.log(product))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }
  
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
        <LoadingButton loading={loading} onClick={() => handleAddItem(prd.id)}>Add to cart</LoadingButton>
        <Button component={Link} to={`/catalog/${prd.id}`}>View</Button>
      </CardActions>
    </Card>
  );
}
