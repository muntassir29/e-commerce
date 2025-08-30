

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CheckoutForm from "./CheckoutForm";

export default function Hero({ product }) {
  const [index, setIndex] = useState(0);
  const [qty, setQty] = useState(1); // quantité sélectionnée
  const [showCheckout, setShowCheckout] = useState(false);

  const nextImage = () => setIndex((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* -------- SLIDER IMAGES -------- */}
        <div className="relative flex justify-center">
          <div className="overflow-hidden w-80 h-80 rounded-xl shadow-lg relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={product.images[index]}
                alt={product.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          {/* Boutons navigation slider */}
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
          >
            ›
          </button>
        </div>

        {/* -------- DETAILS PRODUIT -------- */}
        <div className="text-center md:text-left">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {product.name}
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {product.description}
          </motion.p>

          {/* Sélecteur de quantité + bouton */}
          <motion.div
            className="mb-6 flex items-center gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-4">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <button
              onClick={() => setShowCheckout(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
            >
              Commander maintenant
            </button>
          </motion.div>

          {/* Avantages rapides */}
          <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-700">
            <div className="bg-white p-3 rounded-lg shadow">🚚 Livraison rapide</div>
            <div className="bg-white p-3 rounded-lg shadow">🔒 Paiement sécurisé</div>
            <div className="bg-white p-3 rounded-lg shadow">✅ Qualité premium</div>
            <div className="bg-white p-3 rounded-lg shadow">💬 Support 24/7</div>
          </div>
        </div>
      </div>

      {/* -------- CHECKOUT FORM -------- */}
      {showCheckout && <CheckoutForm product={product} qty={qty} />}
    </section>
  );
}




