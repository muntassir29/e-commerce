import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, removeItem, total, clearCart } = useCart();

  if (items.length === 0)
    return (
      <div>
        <h1 className="text-2xl font-semibold mb-4">Votre panier</h1>
        <p className="text-gray-600">Panier vide.</p>
        <Link to="/shop" className="text-blue-600 underline">Voir la boutique</Link>
      </div>
    );

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Votre panier</h1>
      <div className="space-y-4">
        {items.map(it => (
          <div key={it._id} className="flex items-center gap-4 border rounded-xl p-3">
            <img src={it.image} alt={it.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <p className="font-semibold">{it.name}</p>
              <p className="text-sm text-gray-600">{it.price} MAD × {it.qty}</p>
            </div>
            <button
              className="text-red-600 hover:underline"
              onClick={() => removeItem(it._id)}
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-xl font-semibold">Total: {total} MAD</p>
        <div className="flex gap-3">
          <button onClick={clearCart} className="px-4 py-2 rounded border">Vider</button>
          <Link
            to="/checkout"
            className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Commander
          </Link>
        </div>
      </div>
    </div>
  );
}