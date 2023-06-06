import React, { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import { Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5022/api/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addProduct = () => {
    setProducts((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 7,
          name: prev[prev.length - 1].name + String(prev.length),
          price: prev.length,
          description: prev[prev.length - 1].description,
          pictureUrl: "/whateves/img",
          brand: "string",
        },
      ];
    });
  };

  return (
    <div>
      <Typography variant="h1">ReStore</Typography>
      <Catalog products={products} addProduct={addProduct}/>
    </div>
  );
}

export default App;
