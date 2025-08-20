import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/api/products")
      .then(res => setProducts(res.data || []))
      .catch(() => setProducts([]));
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Bienvenue sur <span className="text-blue-600">E-Shop</span>
          </h1>
          <p className="text-gray-600 mt-3">
            Qualité, prix et livraison partout au Maroc. Paiement à la livraison.
          </p>
          <a
            href="#products"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Découvrir
          </a>
        </div>
        <img
          src={products[0]?.image || "https://via.placeholder.com/480x320"}
          alt="Hero"
          className="w-full md:w-1/2 rounded-xl"
        />
      </section>

      {/* Produits */}
      <section id="products" className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Nos produits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(p => <ProductCard key={p._id} product={p} />)}
          {products.length === 0 && (
            <p className="text-gray-500">Aucun produit pour le moment.</p>
          )}
        </div>
      </section>
    </div>
  );
}
