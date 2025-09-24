
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function Success() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Carte principale */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 text-center max-w-lg w-full border border-gray-100"
      >
        {/* Icône animée */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-green-100 rounded-full p-4">
            <FaCheckCircle className="text-green-600 text-6xl" />
          </div>
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          🎉 Merci pour votre commande !
        </motion.h1>

        {/* Texte descriptif */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-600 text-lg mb-8 leading-relaxed"
        >
          Votre commande a été enregistrée avec succès.  
          Nous vous contacterons bientôt pour la livraison.
        </motion.p>

        {/* Bouton animé */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <Link
            to="/"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300"
          >
            Retour à l’accueil
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

