
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Ahmed",
    text: "Livraison ultra rapide et produit conforme ! Je recommande à 100%.",
  },
  {
    name: "Fatima",
    text: "Un service client exceptionnel, toujours disponible pour m’aider.",
  },
  {
    name: "Youssef",
    text: "La qualité est au rendez-vous, je suis très satisfait de mon achat !",
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-gray-900 mb-12"
        >
          Ce que disent nos clients
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-xl rounded-3xl p-10 max-w-2xl mx-auto border border-gray-100 relative"
            >
              <FaQuoteLeft className="text-indigo-500 text-4xl mx-auto mb-4 opacity-80" />
              <p className="text-lg text-gray-700 mb-6 italic">
                "{testimonials[index].text}"
              </p>
              <h4 className="font-semibold text-gray-900 text-xl">
                – {testimonials[index].name}
              </h4>
            </motion.div>
          </AnimatePresence>

          {/* Boutons de navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 shadow-lg transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 shadow-lg transition"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Indicateurs en bas */}
        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                i === index ? "bg-indigo-600 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

