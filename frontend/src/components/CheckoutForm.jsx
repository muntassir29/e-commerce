// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { motion } from "framer-motion";

// export default function CheckoutForm({ product }) {
//   const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:5000/api/orders", {
//         ...form,
//         items: [{ name: product.name, price: product.price, qty: 1 }],
//         total: product.price,
//       });

//       navigate("/success");
//     } catch (err) {
//       console.error(err);
//       alert("Erreur lors de la commande");
//     }
//   };

//   return (
//     <section id="order" className="py-20 px-6 bg-gray-100">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8"
//       >
//         <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
//           Passez votre commande
//         </h3>

//         <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
//           {/* Nom complet */}
//           <div className="flex flex-col">
//             <label className="mb-2 text-gray-700 font-medium">Nom complet *</label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Votre nom complet"
//             />
//           </div>

//           {/* Téléphone */}
//           <div className="flex flex-col">
//             <label className="mb-2 text-gray-700 font-medium">Téléphone *</label>
//             <input
//               type="tel"
//               name="phone"
//               value={form.phone}
//               onChange={handleChange}
//               required
//               className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="+212 6 12 34 56 78"
//             />
//           </div>

//           {/* Email */}
//           <div className="flex flex-col md:col-span-2">
//             <label className="mb-2 text-gray-700 font-medium">Email (optionnel)</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="exemple@email.com"
//             />
//           </div>

//           {/* Adresse */}
//           <div className="flex flex-col md:col-span-2">
//             <label className="mb-2 text-gray-700 font-medium">Adresse complète *</label>
//             <textarea
//               name="address"
//               value={form.address}
//               onChange={handleChange}
//               required
//               className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Rue, Ville, Code postal..."
//               rows="4"
//             ></textarea>
//           </div>

//           {/* Résumé commande */}
//           <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg shadow-inner">
//             <h4 className="text-xl font-semibold text-gray-800 mb-4">Résumé de la commande</h4>
//             <div className="flex justify-between text-gray-700 mb-2">
//               <span>{product.name}</span>
//               <span>{product.price} $</span>
//             </div>
//             <hr className="my-3" />
//             <div className="flex justify-between font-bold text-gray-900 text-lg">
//               <span>Total</span>
//               <span>{product.price} $</span>
//             </div>
//           </div>

//           {/* Bouton */}
//           <div className="md:col-span-2">
//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
//             >
//               ✅ Confirmer ma commande
//             </motion.button>
//           </div>
//         </form>
//       </motion.div>
//     </section>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

export default function CheckoutForm({ product, qty }) {
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
    <section id="order" className="py-20 px-6 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8"
      >
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Passez votre commande
        </h3>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {/* Nom */}
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">Nom complet *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Votre nom complet"
            />
          </div>

          {/* Téléphone */}
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">Téléphone *</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="+212 6 12 34 56 78"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-gray-700 font-medium">Email (optionnel)</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="exemple@email.com"
            />
          </div>

          {/* Adresse */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-gray-700 font-medium">Adresse complète *</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Rue, Ville, Code postal..."
              rows="4"
            />
          </div>

          {/* Résumé commande */}
          <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg shadow-inner">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Résumé de la commande</h4>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>{product.name} × {qty}</span>
              <span>{product.price * qty} $</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between font-bold text-gray-900 text-lg">
              <span>Total</span>
              <span>{product.price * qty} $</span>
            </div>
          </div>

          {/* Bouton */}
          <div className="md:col-span-2">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              ✅ Confirmer ma commande
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

