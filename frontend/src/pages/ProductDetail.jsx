import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [p, setP] = useState(null);

  useEffect(() => {
    api.get(`/api/products/${id}`).then(r => setP(r.data)).catch(() => setP(null));
  }, [id]);

  if (!p) return <p>Chargement…</p>;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <img src={p.image} alt={p.name} className="w-full rounded-xl" />
      <div>
        <h1 className="text-3xl font-bold">{p.name}</h1>
        <p className="text-blue-600 text-2xl font-semibold mt-2">{p.price} MAD</p>
        <p className="text-gray-600 mt-4">{p.description}</p>
        <button
          onClick={() => addItem(p, 1)}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}