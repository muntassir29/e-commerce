import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Ahmed",
    text: "Livraison rapide et produit conforme. Je recommande vivement !",
  },
  {
    name: "Fatima",
    text: "Service client excellent, j’ai eu toutes mes réponses immédiatement.",
  },
  {
    name: "Youssef",
    text: "Très satisfait de la qualité, je commanderai encore 👍",
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Avis de nos clients
        </h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <p className="text-lg text-gray-700 mb-4 italic">
                "{testimonials[index].text}"
              </p>
              <h4 className="font-semibold text-gray-900">
                – {testimonials[index].name}
              </h4>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
