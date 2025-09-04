
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Features from "../components/Features";
// import TestimonialsSlider from "../components/TestimonialsSlider";


// // Images locales pour le slider
// import pexels1 from "../assets/pexels1.jpg";
// import pexels2 from "../assets/pexels2.jpg";

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const sliderImages = [pexels1, pexels2];

//   // Récupération du produit unique
//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/products");
//         setProducts(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetch();
//   }, []);

//   // Slider automatique toutes les 5 secondes
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) =>
//         prev === sliderImages.length - 1 ? 0 : prev + 1
//       );
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [sliderImages.length]);

//   return (
//     <div className="w-full h-full">
//       {/* --- SLIDER FULL WIDTH --- */}
//       <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        
//         {/* Images Slider en arrière-plan */}
//         {sliderImages.map((img, index) => (
//           <div
//             key={index}
//             className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//               currentSlide === index ? "opacity-100 z-0" : "opacity-0 z-0"
//             }`}
//           >
//             <img
//               src={img}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}

//         {/* Overlay FIXE - Texte et bouton toujours visibles */}
//         <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4 z-20">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg max-w-2xl">
//             Carte de suivi intelligente pour votre portefeuille
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6 drop-shadow-md">
//             Localisez vos objets de valeur grâce à la technologie Apple Find My. 
//             Étanche, rechargeable sans fil et ultra-fine pour un confort optimal.
//           </p>

//           {products.length > 0 && (
//             <Link
//                to={`/product/${products[0]._id}`}
//                className="bg-gradient-to-r from-gray-800 to-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium shadow-lg hover:scale-105 transition transform hover:from-gray-900 hover:to-gray-800"
//             >
//                 Découvrir le produit
//             </Link>

//           )}
//         </div>
//       </section>

//       {/* PRODUIT - Section en dessous */}
//       <section id="products" className="py-16 max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12">Notre Produit</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {products.map((p) => (
//             <div
//               key={p._id}
//               className="bg-white shadow-lg rounded-2xl p-6 text-center"
//             >
//               <img
//                 src={p.images[0]}
//                 alt={p.name}
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
//               <p className="text-gray-600 mb-2">{p.price} $</p>
//               <Link
//                 to={`/product/${p._id}`}
//                 className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition inline-block"
//               >
//                 Voir le produit
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SECTIONS ADDITIONNELLES */}
//       <Features />
//       <TestimonialsSlider />
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
import Features from "../components/Features";
import TestimonialsSlider from "../components/TestimonialsSlider";

// Images locales
import pexels1 from "../assets/pexels1.jpg";
import pexels2 from "../assets/pexels2.jpg";

// Vidéo locale
import blackCardVideo from "../assets/the_blackard_1.mp4";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [pexels1, pexels2];

  // --- Fetch des produits depuis l'API ---
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
    <div className="w-full h-full bg-gray-50">
      {/* --- HERO / SLIDER --- */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Images Slider */}
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Overlay Texte */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4 z-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg max-w-2xl"
          >
            Carte de suivi intelligente pour votre portefeuille
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl max-w-xl mb-6 drop-shadow-md"
          >
            Localisez vos objets de valeur grâce à la technologie Apple Find My.
            Étanche, rechargeable sans fil et ultra-fine pour un confort optimal.
          </motion.p>

          {products.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                to={`/product/${products[0]._id}`}
                className="px-8 py-3 rounded-xl text-lg font-semibold shadow-lg bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 text-white transition-all transform hover:scale-105 hover:shadow-2xl hover:from-green-600 hover:to-teal-700"
              >
                Découvrir le produit
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* --- SECTION PRODUIT + VIDEO --- */}
      <section id="products" className="py-20 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Notre Produit
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Vidéo côté gauche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <video
              src={blackCardVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[320px] md:h-[420px] lg:h-[520px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>

          {/* Produit côté droit */}
          {products.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center"
            >
              <img
                src={products[0].images[0]}
                alt={products[0].name}
                className="w-40 h-40 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                {products[0].name}
              </h3>
              <p className="text-gray-600 mb-4 text-lg font-medium">
                {products[0].price} $
              </p>

              <Link
                to={`/product/${products[0]._id}`}
                className="px-8 py-3 rounded-xl text-lg font-semibold shadow-lg bg-gradient-to-r from-purple-600 via-violet-700 to-indigo-700 text-white transition-all transform hover:scale-105 hover:shadow-2xl hover:from-purple-700 hover:to-indigo-800"
              >
                Voir le produit
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* --- SECTIONS ADDITIONNELLES --- */}
      <Features />
      <TestimonialsSlider />
    </div>
  );
}








