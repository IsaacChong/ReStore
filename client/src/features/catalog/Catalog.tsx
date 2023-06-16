import ProductList from "./ProductList";
import { Product } from "../../app/models/product";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list().then(data => setProducts(data))
  }, []);

  return <ProductList products={products} />;
}
