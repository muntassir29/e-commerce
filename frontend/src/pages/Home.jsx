import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
import Features from "../components/Features";
import TestimonialsSlider from "../components/TestimonialsSlider";
import ProductHighlights from "../components/ProductHighlights";

// Images locales
import pexels1 from "../assets/pexels1.jpg";
import pexels2 from "../assets/pexels2.jpg";
import map2 from "../assets/map2.jpg";

// Vidéo locale
import blackCardVideo from "../assets/the_blackard_1.mp4";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [pexels1, pexels2];

  // --- Fetch produit depuis l'API ---
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  // --- Slider automatique ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="w-full h-full bg-gray-50 relative">
      {/* --- HERO / SLIDER --- */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {sliderImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>
        ))}

        {/* Texte Hero + CTA */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 z-20">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg max-w-3xl"
          >
            Carte de suivi intelligente pour votre portefeuille
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl max-w-2xl mb-8 drop-shadow-md"
          >
            Localisez vos objets de valeur grâce à Apple Find My, étanche,
            rechargeable sans fil, ultra-fine.
          </motion.p>

          {products.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex justify-center"
            >
              <Link
                to={`/product/${products[0]._id}`}
                className="relative px-10 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                Découvrir le produit
              </Link>
            </motion.div>
          )}

          {/* Slider indicators */}
          <div className="flex gap-3 mt-8">
            {sliderImages.map((_, idx) => (
              <motion.div
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-4 h-4 rounded-full cursor-pointer ${
                  currentSlide === idx ? "bg-white" : "bg-gray-400/50"
                }`}
                whileHover={{ scale: 1.5 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Product Highlights --- */}
      <ProductHighlights products={products} />

      {/* --- Section Produit + Vidéo --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Découvrez le produit
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Vidéo côté gauche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl relative group"
          >
            <video
              src={blackCardVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[450px] md:h-[500px] lg:h-[620px] object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>

          {/* Carte produit côté droit */}
          {products.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500"
            >
              <img
                src={products[0].images[0]}
                alt={products[0].name}
                className="w-44 h-44 md:w-52 md:h-52 object-cover rounded-xl mb-6 shadow-lg"
              />
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                {products[0].name}
              </h3>
              <p className="text-green-600 mb-6 text-xl font-medium">
                {products[0].price} MAD
              </p>

              <Link
                to={`/product/${products[0]._id}`}
                className="px-10 py-3 rounded-full text-lg font-semibold shadow-lg bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 text-white hover:scale-105 hover:shadow-2xl transition-transform"
              >
                Voir le produit
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* --- Nouvelle Section Map --- */}
      {products.length > 0 && (
        <section className="relative w-full h-[45vh] md:h-[50vh] overflow-hidden">
          {/* Image de fond */}
          <motion.img
            src={map2}
            alt="Carte mondiale"
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay dégradé */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Contenu centré */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4 max-w-2xl"
            >
              Suivez vos biens partout dans le monde
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-white/90 max-w-xl mb-8 drop-shadow-md"
            >
              Notre technologie vous permet de localiser vos objets avec une
              précision incroyable grâce à l'intégration Apple Find My.
            </motion.p>

            {/* Bouton modernisé */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/product/${products[0]._id}`}
                className="relative px-10 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                Acheter maintenant
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* --- Features généraux --- */}
      <Features />

      {/* --- Testimonials --- */}
      <TestimonialsSlider />

      {/* --- Newsletter Section Premium --- */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            className="absolute w-72 h-72 bg-white/10 rounded-full -top-16 -left-16"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-20 -right-20"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg"
          >
            Restez informé
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12 text-lg md:text-xl text-white/90 max-w-xl mx-auto"
          >
            Recevez nos offres exclusives, nouveautés et conseils directement
            dans votre boîte mail.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <input
              type="email"
              placeholder="Votre email"
              className="px-5 py-3 rounded-lg w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-white/80 text-gray-900 placeholder-gray-500 transition shadow-md"
            />
            <button className="px-8 py-3 rounded-lg bg-white text-indigo-700 font-bold shadow-lg hover:shadow-2xl hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:scale-105">
              S'inscrire
            </button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-6 text-white/70 text-sm md:text-base"
          >
            Nous respectons votre vie privée. Aucune divulgation de vos données.
          </motion.p>
        </div>
      </section>

      {/* --- CTA flottant fixe --- */}
      {products.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link
            to={`/product/${products[0]._id}`}
            className="relative px-6 py-3 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            Acheter maintenant
          </Link>
        </motion.div>
      )}
    </div>
  );
}















