
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaLock, FaShippingFast, FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";

export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { product, qty } = state || {};

  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });

  if (!product) {
    return (
      <div className="text-center mt-20 text-gray-700 text-xl">
        Aucun produit sélectionné.
      </div>
    );
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
      alert("Erreur lors de la commande, veuillez réessayer.");
    }
  };

  const total = product.price * qty;
  const livraison = 0; // Livraison gratuite

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        
        {/* Colonne gauche - Formulaire */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <FaShoppingCart className="text-blue-600" /> Finaliser votre commande
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom complet */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Nom complet *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                placeholder="Ex : Ahmed Benali"
              />
            </div>

            {/* Téléphone */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Téléphone *
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                placeholder="Ex : +212 6 12 34 56 78"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                placeholder="Ex : exemple@gmail.com"
              />
            </div>

            {/* Adresse */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Adresse complète *
              </label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                placeholder="Numéro, rue, ville, code postal"
              />
            </div>

            {/* Bouton de confirmation */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center gap-2"
            >
              <FaLock /> Confirmer ma commande
            </motion.button>
          </form>
        </motion.div>

        {/* Colonne droite - Résumé commande */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-xl rounded-2xl p-8 h-fit"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Résumé de la commande</h3>

          {/* Détails du produit */}
          <div className="flex gap-4 mb-6">
            <div className="w-24 h-24 rounded-lg overflow-hidden">
              <img
                src={product.image || "/placeholder.jpg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900">{product.name}</h4>
              <p className="text-gray-600 text-sm">Quantité : {qty}</p>
              <p className="text-gray-800 font-semibold mt-1">{product.price} $</p>
            </div>
          </div>

          {/* Détails des prix */}
          <div className="space-y-3">
            <div className="flex justify-between text-gray-700">
              <span>Sous-total</span>
              <span>{total} $</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span className="flex items-center gap-2">
                <FaShippingFast className="text-green-600" /> Livraison
              </span>
              <span className="text-green-600 font-semibold">Gratuite</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{total + livraison} $</span>
            </div>
          </div>

          {/* Message de sécurité */}
            <div className="mt-6 text-sm text-gray-700 text-center flex items-center justify-center gap-2">
               <FaMoneyBillWave className="inline-block mr-1 text-green-600" />
                 Paiement à la livraison — vous payez en espèces lors de la réception.
            </div>
        </motion.div>
      </div>
    </section>
  );
}



