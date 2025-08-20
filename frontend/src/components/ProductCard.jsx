import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-lg"
        />
        <h3 className="mt-3 font-semibold">{product.name}</h3>
      </Link>
      <p className="text-blue-600 font-bold mt-1">{product.price} MAD</p>
      <button
        onClick={() => addItem(product, 1)}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Ajouter au panier
      </button>
    </div>
  );
}
