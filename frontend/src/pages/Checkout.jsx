// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import GradientButton from "../components/GradientButton";

// export default function Checkout() {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const { product, qty } = state || {};

//   const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });

//   if (!product) {
//     return <p className="text-center mt-20">Aucun produit sélectionné.</p>;
//   }

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/orders", {
//         ...form,
//         items: [{ name: product.name, price: product.price, qty }],
//         total: product.price * qty,
//       });
//       navigate("/success");
//     } catch (err) {
//       console.error(err);
//       alert("Erreur lors de la commande");
//     }
//   };

//   return (
//     <section className="max-w-4xl mx-auto px-6 py-20">
//       <h2 className="text-3xl font-bold text-center mb-8">Finaliser votre commande</h2>
//       <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-lg">
//         {/* Nom */}
//         <div className="flex flex-col">
//           <label className="mb-2 font-medium">Nom complet *</label>
//           <input type="text" name="name" value={form.name} onChange={handleChange} required
//             className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
//         </div>

//         {/* Téléphone */}
//         <div className="flex flex-col">
//           <label className="mb-2 font-medium">Téléphone *</label>
//           <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
//             className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
//         </div>

//         {/* Email */}
//         <div className="md:col-span-2 flex flex-col">
//           <label className="mb-2 font-medium">Email (optionnel)</label>
//           <input type="email" name="email" value={form.email} onChange={handleChange}
//             className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
//         </div>

//         {/* Adresse */}
//         <div className="md:col-span-2 flex flex-col">
//           <label className="mb-2 font-medium">Adresse complète *</label>
//           <textarea name="address" value={form.address} onChange={handleChange} required
//             className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500" rows="4" />
//         </div>

//         {/* Résumé */}
//         <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg shadow-inner">
//           <h4 className="text-xl font-semibold mb-4">Résumé de la commande</h4>
//           <div className="flex justify-between mb-2">
//             <span>{product.name} × {qty}</span>
//             <span>{product.price * qty} $</span>
//           </div>
//           <hr className="my-3" />
//           <div className="flex justify-between font-bold text-lg">
//             <span>Total</span>
//             <span>{product.price * qty} $</span>
//           </div>
//         </div>

//         <div className="md:col-span-2">
//           <GradientButton type="submit">✅ Confirmer ma commande</GradientButton>
//         </div>
//       </form>
//     </section>
//   );
// }

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaLock, FaShippingFast, FaShoppingCart } from "react-icons/fa";

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
          <div className="mt-6 text-sm text-gray-600 text-center">
            <FaLock className="inline-block mr-1 text-blue-600" />
            Paiement sécurisé et 100% fiable
          </div>
        </motion.div>
      </div>
    </section>
  );
}

