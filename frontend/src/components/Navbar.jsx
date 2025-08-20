import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { count } = useCart();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">E-Shop</Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/shop" className="hover:text-blue-600">Shop</Link>
          <Link to="/cart" className="hover:text-blue-600">Panier ({count})</Link>
        </div>
      </div>
    </nav>
  );
}