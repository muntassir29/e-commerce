
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      name: "Sofia",
      role: "Cliente fidèle",
      text: "Service impeccable, livraison rapide et produit conforme. Je recommande vivement !",
    },
    {
      name: "Yassine",
      role: "Client satisfait",
      text: "Très bons prix et un support client réactif. Une super expérience d’achat.",
    },
    {
      name: "Imane",
      role: "Cliente",
      text: "Produits de qualité et promotions régulières. J’adore cette boutique !",
    },
  ];

  const [index, setIndex] = useState(0);

  // Changement automatique toutes les 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Avis de nos clients</h2>

        <div className="relative h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-full h-full bg-gray-50 shadow-md rounded-2xl p-6 flex flex-col justify-center"
            >
              <p className="text-gray-700 italic mb-4 text-lg">“{testimonials[index].text}”</p>
              <h3 className="text-lg font-semibold">{testimonials[index].name}</h3>
              <p className="text-blue-600 text-sm">{testimonials[index].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation manuelle */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-blue-600" : "bg-gray-300"
              } transition`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

