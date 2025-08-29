import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero({ product }) {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* -------- SLIDER IMAGES -------- */}
        <div className="relative flex justify-center">
          <div className="overflow-hidden w-80 h-80 rounded-xl shadow-lg relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={product.images[index]}
                alt={product.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          {/* Boutons navigation slider */}
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
          >
            ›
          </button>
        </div>

        {/* -------- DETAILS PRODUIT -------- */}
        <div className="text-center md:text-left">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {product.name}
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {product.description}
          </motion.p>

          {/* Prix + bouton */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-2xl font-semibold text-blue-600 mb-4">
              {product.price} $
            </p>
            <a
              href="#order"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
            >
              Commander maintenant
            </a>
          </motion.div>

          {/* Avantages rapides */}
          <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-700">
            <div className="bg-white p-3 rounded-lg shadow">
              🚚 Livraison rapide
            </div>
            <div className="bg-white p-3 rounded-lg shadow">
              🔒 Paiement sécurisé
            </div>
            <div className="bg-white p-3 rounded-lg shadow">
              ✅ Qualité premium
            </div>
            <div className="bg-white p-3 rounded-lg shadow">
              💬 Support 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Hero({ product }) {
//   const [currentImage, setCurrentImage] = useState(0);

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % product.images.length);
//   };

//   const prevImage = () => {
//     setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
//   };

//   return (
//     <section className="bg-gray-100 py-20 px-6 w-full">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
//         {/* Texte et bouton */}
//         <div className="flex-1 text-center lg:text-left">
//           <motion.h1
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
//           >
//             {product.name}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="text-lg lg:text-xl text-gray-700 mb-6"
//           >
//             {product.description}
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="text-2xl lg:text-3xl font-semibold mb-6 text-gray-900"
//           >
//             {product.price} $
//           </motion.p>

//           <motion.a
//             href="#order"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
//           >
//             Commander maintenant
//           </motion.a>
//         </div>

//         {/* Slider images */}
//         <div className="flex-1 relative w-full max-w-md lg:max-w-lg">
//           {product.images && product.images.length > 0 && (
//             <motion.img
//               key={currentImage}
//               src={product.images[currentImage]}
//               alt={product.name}
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -50 }}
//               transition={{ duration: 0.5 }}
//               className="rounded-2xl shadow-2xl w-full object-cover"
//             />
//           )}

//           {/* Boutons navigation */}
//           {product.images.length > 1 && (
//             <>
//               <button
//                 onClick={prevImage}
//                 className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
//               >
//                 ◀
//               </button>
//               <button
//                 onClick={nextImage}
//                 className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
//               >
//                 ▶
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }


