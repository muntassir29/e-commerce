import { motion } from "framer-motion";
import { FaShippingFast, FaShieldAlt, FaStar, FaUsers } from "react-icons/fa";
import { MdHighQuality, MdSupportAgent } from "react-icons/md";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            À propos de <span className="text-blue-600">Nous</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Notre mission est de révolutionner l’expérience d’achat en ligne au
            Maroc en proposant des produits premium, une livraison ultra rapide et
            un service client irréprochable.
          </motion.p>
        </div>

        {/* Section Histoire */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Histoire</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Fondée en 2024, notre entreprise est née de la volonté de rendre
            l’e-commerce plus accessible et fiable. Nous avons commencé avec une
            petite équipe passionnée et un catalogue limité, mais notre vision
            était claire : offrir le meilleur service possible à nos clients tout
            en créant une marque de confiance.
          </p>
        </motion.div>

        {/* Valeurs */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "Qualité Supérieure",
              desc: "Nos produits sont rigoureusement sélectionnés pour offrir une qualité irréprochable.",
              icon: <MdHighQuality className="text-blue-600 w-12 h-12 mx-auto" />,
            },
            {
              title: "Livraison Express",
              desc: "Une logistique optimisée pour des livraisons rapides partout au Maroc.",
              icon: <FaShippingFast className="text-blue-600 w-12 h-12 mx-auto" />,
            },
            {
              title: "Paiement Sécurisé",
              desc: "Des transactions protégées pour une expérience d’achat sans stress.",
              icon: <FaShieldAlt className="text-blue-600 w-12 h-12 mx-auto" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 text-center"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Notre Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Devenir la référence de l’e-commerce au Maroc en offrant une
            expérience fluide et sécurisée, tout en construisant une communauté
            fidèle basée sur la confiance, la transparence et la qualité.
          </p>
        </motion.div>

        {/* Notre Équipe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Notre Équipe
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sofia B.",
                role: "CEO & Fondatrice",
                icon: <FaUsers className="text-blue-600 w-16 h-16 mx-auto" />,
              },
              {
                name: "Karim M.",
                role: "Responsable Logistique",
                icon: <FaShippingFast className="text-blue-600 w-16 h-16 mx-auto" />,
              },
              {
                name: "Nadia L.",
                role: "Service Client",
                icon: <MdSupportAgent className="text-blue-600 w-16 h-16 mx-auto" />,
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition duration-300"
              >
                {member.icon}
                <h3 className="text-xl font-semibold text-gray-900 mt-4">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-24 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-lg text-gray-700 mb-6">
            Une question, une suggestion ou un partenariat ? Nous serions ravis
            d’échanger avec vous et de vous accompagner.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300"
          >
            Nous Contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}





