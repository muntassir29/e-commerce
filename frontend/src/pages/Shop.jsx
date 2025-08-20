import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/api/products").then(r => setProducts(r.data || [])).catch(() => {});
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Boutique</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  );
}