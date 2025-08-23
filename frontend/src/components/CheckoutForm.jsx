import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CheckoutForm({ product }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/orders", {
        ...form,
        items: [{ name: product.name, price: product.price, qty: 1 }],
        total: product.price
      });

      navigate("/success");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la commande");
    }
  };

  return (
    <section id="order" className="py-16 px-6 bg-gray-100">
      <h3 className="text-3xl font-semibold text-center mb-6">Passez votre commande</h3>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white shadow-lg p-6 rounded-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Nom complet"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded mb-4"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Téléphone"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded mb-4"
        />
        <input
          type="email"
          name="email"
          placeholder="Email (optionnel)"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded mb-4"
        />
        <textarea
          name="address"
          placeholder="Adresse complète"
          value={form.address}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded mb-4"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Confirmer ma commande
        </button>
      </form>
    </section>
  );
}