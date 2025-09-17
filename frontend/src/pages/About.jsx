import { motion } from "framer-motion";
import { FaShippingFast, FaShieldAlt } from "react-icons/fa";
import { MdHighQuality } from "react-icons/md";
import heroImage from "../assets/about-hero.png"; // Image ou illustration pour Hero

export default function About() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-purple-50 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">

        {/* --- HERO / INTRO --- */}
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Texte */}
          <div className="md:w-1/2 space-y-6">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold text-gray-900"
            >
              Découvrez{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Notre Univers
              </span>
            </motion.h1>

            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-700"
            >
              Nous révolutionnons l'expérience d'achat en ligne au Maroc avec
              des produits premium, une livraison ultra rapide et un service
              client irréprochable.
            </motion.p>
          </div>

          {/* Image Hero */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={heroImage}
              alt="Hero Illustration"
              className="w-full max-w-lg rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>

        {/* --- NOTRE MISSION & VISION --- */}
        <motion.div
          className="text-center max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Notre Mission & Vision
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Offrir une expérience d'achat fluide et sécurisée, avec des produits
            de qualité, un service client réactif et une livraison rapide partout
            au Maroc. Nous construisons une communauté fidèle basée sur la
            confiance et la transparence.
          </p>
        </motion.div>

        {/* --- VALEURS / AVANTAGES --- */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              title: "Qualité Supérieure",
              desc: "Des produits rigoureusement sélectionnés pour garantir une qualité irréprochable.",
              icon: <MdHighQuality className="w-12 h-12 mx-auto text-blue-600" />,
            },
            {
              title: "Livraison Express",
              desc: "Une logistique optimisée pour des livraisons rapides partout au Maroc.",
              icon: <FaShippingFast className="w-12 h-12 mx-auto text-purple-600" />,
            },
            {
              title: "Paiement Sécurisé",
              desc: "Des transactions protégées pour une expérience d'achat sans stress.",
              icon: <FaShieldAlt className="w-12 h-12 mx-auto text-pink-500" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- CALL TO ACTION / CONTACT --- */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 rounded-3xl py-20 px-6 text-center text-white shadow-xl hover:shadow-2xl transition-shadow duration-500"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Vous voulez en savoir plus ?
          </h2>
          <p className="text-lg mb-8">
            Contactez-nous dès maintenant et découvrez comment nous pouvons vous
            accompagner dans votre expérience d'achat.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-xl shadow-lg text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            Nous Contacter
          </a>
        </motion.div>

      </div>
    </section>
  );
}







