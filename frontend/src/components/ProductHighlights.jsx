import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaBolt, FaWater, FaWallet, FaShieldAlt } from "react-icons/fa";

export default function ProductHighlights({ products }) {
  const highlights = [
    {
      icon: <FaMapMarkerAlt className="text-5xl text-white" />,
      title: "Localisation précise",
      desc: "Trouvez instantanément votre portefeuille grâce à Apple Find My et Bluetooth.",
      gradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    },
    {
      icon: <FaBolt className="text-5xl text-white" />,
      title: "Recharge sans fil",
      desc: "Recharge rapide et pratique, sans câble.",
      gradient: "bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500"
    },
    {
      icon: <FaWater className="text-5xl text-white" />,
      title: "Étanche & résistant",
      desc: "Protégé contre l’eau et les chocs pour durer dans le temps.",
      gradient: "bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500"
    },
    {
      icon: <FaWallet className="text-5xl text-white" />,
      title: "Design ultra-fin",
      desc: "S’intègre parfaitement dans votre portefeuille, élégant et discret.",
      gradient: "bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400"
    },
    {
      icon: <FaShieldAlt className="text-5xl text-white" />,
      title: "Sécurité & tranquillité",
      desc: "Ne perdez plus vos objets de valeur et recevez des alertes instantanées.",
      gradient: "bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500"
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`p-6 rounded-3xl flex flex-col items-center text-center cursor-pointer transform transition-all hover:-translate-y-3 hover:shadow-2xl shadow-lg ${h.gradient}`}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="mb-4">
                {h.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white">{h.title}</h3>
              <p className="text-white text-sm md:text-base">{h.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {products.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex justify-center"
          >
            <Link
              to={`/product/${products[0]._id}`}
              className="inline-flex items-center gap-3 px-14 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform transition-all hover:scale-105 animate-bounce"
            >
              Voir les fonctionnalités
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-xl"
              >
                ➔
              </motion.span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}


