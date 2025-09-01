import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Features from "../components/Features";
import TestimonialsSlider from "../components/TestimonialsSlider";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-32 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Bienvenue dans notre boutique
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Découvrez nos produits exclusifs, livraison rapide et paiement
          sécurisé.
        </p>
        <Link
          to="#products"
          className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition inline-block"
        >
          Voir nos produits
        </Link>
      </section>

      {/* PRODUITS */}
      <section id="products" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Produits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white shadow-lg rounded-2xl p-6 text-center"
            >
              <img
                src={p.images[0]}
                alt={p.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-gray-600 mb-2">{p.price} $</p>
              <Link
                to={`/product/${p._id}`}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition inline-block"
              >
                Voir le produit
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Features />
      <TestimonialsSlider />
    </div>
  );
}
