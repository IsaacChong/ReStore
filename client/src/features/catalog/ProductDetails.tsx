import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import { Product } from "../../app/models/product";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";

const layout = {
  display: "flex",
  flexDirection: {
    xs: "column",
    md: "row",
  },
};

const imgBox = {
  display: "flex",
  alignItems: "center",
  maxWidth: {
    xs: "100%",
  },
};

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    id &&
      agent.Catalog.details(parseInt(id))
        .then((data) => setProduct(data))
        .catch(function (error) {
          if (error.response.status === 404) {
            navigate("not-found");
          } else {
            return console.log(error.response.status);
          }
        })
        .finally(() => setLoading(false));
  }, [id, navigate]);

  if (loading) {
    return <LoadingComponent message="Loading product..."/>
  }

  if (!product) {
    return <h3>Product not found</h3>;
  }

  return (
    <Grid container sx={layout}>
      <Grid sm={6}>
        <Box sx={imgBox}>
          <img alt={product.name} src={product.pictureUrl}></img>
        </Box>
      </Grid>
      <Grid sm={6}>
        <Typography variant="h3">{product.name}</Typography>
        <hr></hr>
        <Typography variant="h4" sx={{ color: "secondary.main" }}>
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <hr></hr>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>{product.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Brand</TableCell>
                <TableCell>{product.brand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quantity in stock</TableCell>
                <TableCell>{product.quantityInStock}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
