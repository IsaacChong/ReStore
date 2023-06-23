import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";
interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <Grid container sx={{mt:2}} spacing={2}>
      {products.map((prd) => (
        <Grid key={prd.id} item xs={12} sm={6} md={3} sx={{mb:2}}>
          <ProductCard key={prd.id} prd={prd} />
        </Grid>
      ))}
    </Grid>
  );
}
