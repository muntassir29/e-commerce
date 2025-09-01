import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import GradientButton from "../components/GradientButton";

export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { product, qty } = state || {};

  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });

  if (!product) {
    return <p className="text-center mt-20">Aucun produit sélectionné.</p>;
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/orders", {
        ...form,
        items: [{ name: product.name, price: product.price, qty }],
        total: product.price * qty,
      });
      navigate("/success");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la commande");
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Finaliser votre commande</h2>
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-lg">
        {/* Nom */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium">Nom complet *</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
        </div>

        {/* Téléphone */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium">Téléphone *</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
        </div>

        {/* Email */}
        <div className="md:col-span-2 flex flex-col">
          <label className="mb-2 font-medium">Email (optionnel)</label>
          <input type="email" name="email" value={form.email} onChange={handleChange}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
        </div>

        {/* Adresse */}
        <div className="md:col-span-2 flex flex-col">
          <label className="mb-2 font-medium">Adresse complète *</label>
          <textarea name="address" value={form.address} onChange={handleChange} required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500" rows="4" />
        </div>

        {/* Résumé */}
        <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg shadow-inner">
          <h4 className="text-xl font-semibold mb-4">Résumé de la commande</h4>
          <div className="flex justify-between mb-2">
            <span>{product.name} × {qty}</span>
            <span>{product.price * qty} $</span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{product.price * qty} $</span>
          </div>
        </div>

        <div className="md:col-span-2">
          <GradientButton type="submit">✅ Confirmer ma commande</GradientButton>
        </div>
      </form>
    </section>
  );
}
