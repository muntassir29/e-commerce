import { useState } from "react";
import api from "../services/api";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address || items.length === 0) return;

    setLoading(true);
    try {
      await api.post("/api/orders", {
        ...form,
        items: items.map(i => ({ name: i.name, price: i.price, qty: i.qty })),
        total
      });
      clearCart();
      setOk(true);
    } catch {
      alert("Erreur lors de l'envoi de la commande");
    } finally {
      setLoading(false);
    }
  };

  if (ok) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Merci 🙌</h1>
        <p className="mt-2 text-gray-600">Votre commande a été envoyée. Nous vous contacterons par téléphone.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Informations de livraison</h1>
      <form onSubmit={submit} className="grid gap-4 max-w-xl">
        <input name="name" value={form.name} onChange={onChange} placeholder="Nom complet *"
          className="border rounded-lg px-4 py-3" />
        <input name="phone" value={form.phone} onChange={onChange} placeholder="Téléphone *"
          className="border rounded-lg px-4 py-3" />
        <input name="email" value={form.email} onChange={onChange} placeholder="Email (optionnel)"
          className="border rounded-lg px-4 py-3" />
        <textarea name="address" value={form.address} onChange={onChange} placeholder="Adresse complète *"
          className="border rounded-lg px-4 py-3" rows={3} />
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-700">Total: <b>{total} MAD</b> (paiement à la livraison)</p>
          <button
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Envoi..." : "Confirmer la commande"}
          </button>
        </div>
      </form>
    </div>
  );
}