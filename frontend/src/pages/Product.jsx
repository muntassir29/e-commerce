
// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { motion } from "framer-motion";
// import GradientButton from "../components/GradientButton";

// export default function Product() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [qty, setQty] = useState(1);
//   const [currentImage, setCurrentImage] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/products/${id}`);
//         setProduct(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   if (!product) {
//     return (
//       <p className="text-center mt-20 text-lg font-medium text-gray-700">
//         Chargement...
//       </p>
//     );
//   }

//   const totalPrice = (product.price * qty).toFixed(2);

//   // Changer d'image précédente
//   const prevImage = () => {
//     setCurrentImage((prev) =>
//       prev === 0 ? product.images.length - 1 : prev - 1
//     );
//   };

//   // Changer d'image suivante
//   const nextImage = () => {
//     setCurrentImage((prev) =>
//       prev === product.images.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
//       {/* --- SLIDER D’IMAGES --- */}
//       <div className="relative rounded-2xl overflow-hidden shadow-lg">
//         <motion.img
//           key={currentImage}
//           src={product.images[currentImage]}
//           alt={`${product.name} ${currentImage + 1}`}
//           className="w-full h-[500px] object-cover rounded-2xl"
//           initial={{ opacity: 0.5, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         />
//         {/* Boutons de navigation */}
//         {product.images.length > 1 && (
//           <>
//             <button
//               onClick={prevImage}
//               className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
//             >
//               ◀
//             </button>
//             <button
//               onClick={nextImage}
//               className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
//             >
//               ▶
//             </button>
//           </>
//         )}
//       </div>

//       {/* --- DETAILS PRODUIT --- */}
//       <div>
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
//         <p className="text-lg text-gray-600 mb-6">{product.description}</p>

//         {/* Prix total */}
//         <div className="text-2xl font-semibold text-indigo-600 mb-6">
//           {totalPrice} $
//         </div>

//         {/* Quantité */}
//         <div className="flex items-center gap-4 mb-8">
//           <button
//             onClick={() => setQty(Math.max(1, qty - 1))}
//             className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
//           >
//             -
//           </button>
//           <span className="px-4 font-semibold text-lg">{qty}</span>
//           <button
//             onClick={() => setQty(qty + 1)}
//             className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
//           >
//             +
//           </button>
//         </div>

//         {/* Bouton acheter */}
//         <GradientButton
//           onClick={() => navigate("/checkout", { state: { product, qty } })}
//         >
//           🛒 Acheter maintenant
//         </GradientButton>

//         {/* Infos supplémentaires */}
//         <div className="mt-10 space-y-3 text-gray-700">
//           <p>✅ Livraison partout au Maroc en 24/48h</p>
//           <p>🔒 Paiement à la livraison sécurisé</p>
//           <p>⭐ Produits certifiés & qualité premium</p>
//           <p>💬 Support client 24/7</p>
//         </div>
//       </div>
//     </section>
//   );
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import GradientButton from "../components/GradientButton";

// Images locales pour les sections illustrées
import img1 from "../assets/product1.png";
import img2 from "../assets/product2.png";
import img3 from "../assets/product3.png";
import img4 from "../assets/product4.png";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null); // Pour le FAQ interactif
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <p className="text-center mt-20 text-lg font-medium text-gray-700">
        Chargement...
      </p>
    );
  }

  const totalPrice = (product.price * qty).toFixed(2);

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const fadeLeft = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } };
  const fadeRight = { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } };
  const slideImage = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
  const fadeText = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, delay: 0.3 } } };

  // FAQ Data
  const faqData = [
    {
      question: "Comment ça marche ?",
      answer: "Trazcard utilise la technologie Bluetooth et se connecte à l’application Apple 'Localiser'. Vous pouvez suivre votre portefeuille ou vos objets à tout moment depuis votre iPhone, sans installer d’application supplémentaire."
    },
    {
      question: "Est-ce compatible avec Android ?",
      answer: "Non. Trazcard est uniquement compatible avec les appareils Apple (iPhone, iPad, Mac) utilisant iOS 14.5 ou supérieur. L’intégration se fait directement avec l’app 'Localiser', sans application tierce."
    },
    {
      question: "Quelle est l’autonomie et comment la recharger ?",
      answer: "La carte fonctionne jusqu’à 3 mois sans recharge. Elle se recharge simplement via un chargeur sans fil (technologie Qi), sans câble ni connecteur."
    },
    {
      question: "Et si je perds mon portefeuille ?",
      answer: "Activez le mode perdu depuis l'app 'Localiser'. Vous serez notifié automatiquement dès que la carte est détectée à proximité d’un appareil Apple. Vous pouvez aussi laisser un message avec vos coordonnées pour que quelqu’un puisse vous le rendre."
    },
    {
      question: "Comment ajouter la carte sur son iPhone ?",
      answer: "Ajouter votre TrazCard à votre iPhone est simple et rapide. Il suffit d’ouvrir l’application 'Localiser', de cliquer sur 'Ajouter un objet', puis de rapprocher la carte de votre iPhone. Elle sera détectée automatiquement. Nommez-la, et le tour est joué. Aucun téléchargement nécessaire, tout se fait via l’app Apple intégrée."
    }
  ];

  return (
    <section className="w-full px-6 py-20 max-w-7xl mx-auto flex flex-col gap-16">
      
      {/* --- SLIDER PRINCIPAL + DETAILS PRODUIT --- */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <motion.div
          className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg"
          initial="hidden"
          animate="visible"
          variants={slideImage}
        >
          <motion.img
            key={currentImage}
            src={product.images[currentImage]}
            alt={`${product.name} ${currentImage + 1}`}
            className="w-full h-[500px] object-cover rounded-2xl"
            initial={{ opacity: 0.5, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              >
                ▶
              </button>
            </>
          )}
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={fadeText}
        >
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>

          <div className="text-2xl font-semibold text-indigo-600">{totalPrice} $</div>

          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              -
            </button>
            <span className="px-4 font-semibold text-lg">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              +
            </button>
          </div>
          <GradientButton
            onClick={() => navigate("/checkout", { state: { product, qty } })}
            className="mt-4 w-full md:w-auto"
          >
            🛒 Acheter maintenant
          </GradientButton>

          <div className="mt-6 space-y-2 text-gray-700">
            <p>✅ Livraison partout au Maroc en 24/48h</p>
            <p>🔒 Paiement à la livraison sécurisé</p>
            <p>⭐ Produits certifiés & qualité premium</p>
            <p>💬 Support client 24/7</p>
          </div>
        </motion.div>
      </div>

      {/* --- SECTIONS ILLUSTRÉES GRANDES AVEC TITRE EN GRAS --- */}
      <div className="flex flex-col gap-16">
        {[
          {img: img1, title: "Ultra-fine, invisible, indispensable :", desc: "Seulement 3 mm d’épaisseur. Se glisse dans n’importe quel portefeuille ou bagage, sans jamais vous gêner."},
          {img: img2, title: "Ne perdez plus jamais vos objets de valeur :", desc: "Avec Trazcard, localisez votre portefeuille ou sac depuis l'app Apple 'Localiser'. Recevez une alerte dès que vous vous en éloignez."},
          {img: img3, title: "Robuste, étanche et toujours prête :", desc: "Jusqu’à 3 mois d’autonomie, recharge sans fil, et totalement étanche. Prête à vous suivre partout."},
          {img: img4, title: "Rechargez votre Trazcard en toute simplicité :", desc: "Compatible avec la charge sans fil. Posez simplement la carte sur le chargeur et l’énergie se transmet automatiquement."}
        ].map((section, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={index % 2 === 0 ? fadeLeft : fadeRight}
            className="flex flex-col md:flex-row items-center gap-8 w-full"
          >
            <img
              src={section.img}
              alt={`section-${index}`}
              className={`w-full md:w-1/2 h-auto object-cover rounded-xl ${index % 2 === 1 ? "md:order-2" : ""}`}
            />
            <p className="text-gray-700 text-lg md:w-1/2">
              <strong>{section.title}</strong> {section.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* --- FAQ ACCORDÉON --- */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        <div className="flex flex-col gap-4 text-gray-700 text-lg">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 cursor-pointer"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <p className="font-semibold">{item.question}</p>
              {openFAQ === index && <p className="mt-2">{item.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}














































