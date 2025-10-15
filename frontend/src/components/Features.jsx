
import { motion } from "framer-motion";
import { FaShippingFast, FaLock, FaHeadset, FaStar } from "react-icons/fa";

export default function Features() {

  const features = [

    {
      icon: <FaShippingFast className="text-5xl text-indigo-500 group-hover:text-indigo-600 transition duration-300" />,
      title: "Livraison Rapide",
      desc: "Recevez vos commandes en 24/48h partout au Maroc avec un suivi en temps réel.",
      color: "from-indigo-100 to-indigo-50",
    },
    {
      icon: <FaLock className="text-5xl text-indigo-500 group-hover:text-indigo-600 transition duration-300" />,
      title: "Paiement Sécurisé",
      desc: "Payez en toute confiance à la livraison ou via nos partenaires bancaires.",
      color: "from-purple-100 to-purple-50",
    },
    {
      icon: <FaHeadset className="text-5xl text-indigo-500 group-hover:text-indigo-600 transition duration-300" />,
      title: "Support 24/7",
      desc: "Notre équipe est disponible 24h/24 pour vous accompagner et répondre à vos questions.",
      color: "from-pink-100 to-pink-50",
    },
    {
      icon: <FaStar className="text-5xl text-indigo-500 group-hover:text-indigo-600 transition duration-300" />,
      title: "Qualité Premium",
      desc: "Des produits certifiés, avec une garantie satisfait ou remboursé.",
      color: "from-yellow-100 to-yellow-50",
    },
  ];

  return (

    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Titre animé */}

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Pourquoi nous choisir ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg"
        >
          Nous nous engageons à offrir une expérience exceptionnelle à nos clients,
          avec des services rapides, sécurisés et fiables.
        </motion.p>

        {/* Grille des features */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Glow en arrière-plan */}

              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${f.color}`} />

              {/* Contenu de la carte */}
              
              <div className="relative p-8 z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-5 rounded-full bg-white shadow-lg">
                    {f.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


