import { Button } from "@mui/material";
import ProductList from "./ProductList";
import { Product } from "../../app/models/product";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5022/api/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // const addProduct = () => {
  //   setProducts((prev) => {
  //     return [
  //       ...prev,
  //       {
  //         id: prev.length + 7,
  //         name: prev[prev.length - 1].name + String(prev.length),
  //         price: prev.length,
  //         description: prev[prev.length - 1].description,
  //         pictureUrl: "/client/public/images",
  //         brand: "string",
  //       },
  //     ];
  //   });
  // };

  return (
    <>
      <ProductList products={products} />
      {/* <Button variant="contained" onClick={addProduct}>
        Add product
      </Button> */}
    </>
  );
}
