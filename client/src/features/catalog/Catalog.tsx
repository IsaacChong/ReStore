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

  return <ProductList products={products} />;
}
