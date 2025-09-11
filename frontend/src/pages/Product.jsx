
// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
// import GradientButton from "../components/GradientButton";
// import mapImage from "../assets/map.jpg"; // Assure-toi d'avoir une image de carte dans ton dossier assets²

// // Images locales
// import img1 from "../assets/product1.png";
// import img2 from "../assets/product2.png";
// import img3 from "../assets/product3.png";
// import img4 from "../assets/product4.png";

// // Vidéo locale
// import productVideo from "../assets/the_blackard_2.mp4";

// export default function Product() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [qty, setQty] = useState(1);
//   const [currentImage, setCurrentImage] = useState(0);
//   const [openFAQ, setOpenFAQ] = useState(null);
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

//   const prevImage = () => {
//     setCurrentImage((prev) =>
//       prev === 0 ? product.images.length - 1 : prev - 1
//     );
//   };

//   const nextImage = () => {
//     setCurrentImage((prev) =>
//       prev === product.images.length - 1 ? 0 : prev + 1
//     );
//   };

//   // Animations
//   const fadeLeft = {
//     hidden: { opacity: 0, x: -100 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
//   };
//   const fadeRight = {
//     hidden: { opacity: 0, x: 100 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
//   };

//   const slideImage = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
//   };

//   const fadeText = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.7, delay: 0.3 } },
//   };

//   // FAQ Data
//   const faqData = [
//     {
//       question: "Comment ça marche ?",
//       answer:
//         "WALLET TRACKER utilise la technologie Bluetooth et se connecte à l’application Apple 'Localiser'. Vous pouvez suivre votre portefeuille ou vos objets à tout moment depuis votre iPhone, sans installer d’application supplémentaire.",
//     },
//     {
//       question: "Est-ce compatible avec Android ?",
//       answer:
//         "Non. WALLET TRACKER est uniquement compatible avec les appareils Apple (iPhone, iPad, Mac) utilisant iOS 14.5 ou supérieur. L’intégration se fait directement avec l’app 'Localiser', sans application tierce.",
//     },
//     {
//       question: "Quelle est l’autonomie et comment la recharger ?",
//       answer:
//         "La carte fonctionne jusqu’à 3 mois sans recharge. Elle se recharge simplement via un chargeur sans fil (technologie Qi), sans câble ni connecteur.",
//     },
//     {
//       question: "Et si je perds mon portefeuille ?",
//       answer:
//         "Activez le mode perdu depuis l'app 'Localiser'. Vous serez notifié automatiquement dès que la carte est détectée à proximité d’un appareil Apple. Vous pouvez aussi laisser un message avec vos coordonnées pour que quelqu’un puisse vous le rendre.",
//     },
//     {
//       question: "Comment ajouter la carte sur son iPhone ?",
//       answer:
//         "Ajouter votre WALLET TRACKER à votre iPhone est simple et rapide. Il suffit d’ouvrir l’application 'Localiser', de cliquer sur 'Ajouter un objet', puis de rapprocher la carte de votre iPhone. Elle sera détectée automatiquement et prête à l'emploi.",
//     },
//   ];

//   return (
//     <section className="w-full px-6 py-20 max-w-7xl mx-auto flex flex-col gap-20">
//       {/* --- SLIDER PRINCIPAL + DETAILS PRODUIT --- */}
//       <div className="flex flex-col md:flex-row gap-12 items-start">
//         {/* SLIDER */}
//         <motion.div
//           className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl"
//           initial="hidden"
//           animate="visible"
//           variants={slideImage}
//         >
//           <motion.img
//             key={currentImage}
//             src={product.images[currentImage]}
//             alt={`${product.name} ${currentImage + 1}`}
//             className="w-full h-[400px] object-cover rounded-2xl"
//             initial={{ opacity: 0.5, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           />

//           {/* Flèches de navigation */}
//           {product.images.length > 1 && (
//             <>
//               <button
//                 onClick={prevImage}
//                 className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md hover:bg-white hover:scale-105 transition"
//               >
//                 <ChevronLeft className="w-6 h-6 text-gray-800" />
//               </button>
//               <button
//                 onClick={nextImage}
//                 className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md hover:bg-white hover:scale-105 transition"
//               >
//                 <ChevronRight className="w-6 h-6 text-gray-800" />
//               </button>
//             </>
//           )}
//         </motion.div>

//         {/* DETAILS PRODUIT */}
//         <motion.div
//           className="w-full md:w-1/2 flex flex-col gap-6"
//           initial="hidden"
//           animate="visible"
//           variants={fadeText}
//         >
//           <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
//           <p className="text-lg text-gray-600">{product.description}</p>

//           <div className="text-3xl font-semibold text-green-600">
//             {totalPrice} $
//           </div>

//           {/* Sélecteur de quantité */}
//           <div className="flex items-center gap-4 mt-4">
//             <button
//               onClick={() => setQty(Math.max(1, qty - 1))}
//               className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
//             >
//               -
//             </button>
//             <span className="px-4 font-semibold text-lg">{qty}</span>
//             <button
//               onClick={() => setQty(qty + 1)}
//               className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
//             >
//               +
//             </button>
//           </div>

//           {/* Bouton Acheter */}
//           <GradientButton
//             onClick={() => navigate("/checkout", { state: { product, qty } })}
//             className="mt-6 w-full md:w-auto"
//           >
//             🛒 Acheter maintenant
//           </GradientButton>

//           {/* Infos livraison */}
//           <div className="mt-6 space-y-2 text-gray-700">
//             <p>✅ Livraison partout au Maroc en 24/48h</p>
//             <p>🔒 Paiement à la livraison sécurisé</p>
//             <p>⭐ Produits certifiés & qualité premium</p>
//             <p>💬 Support client 24/7</p>
//           </div>
//         </motion.div>
//       </div>

//       {/* --- SECTION VIDÉO + DESCRIPTION --- */}
//       <motion.div
//         className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Vidéo */}
//         <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
//           <video
//             src={productVideo}
//             controls
//             muted
//             loop
//             className="w-full h-[250px] object-cover"
//           />
//         </div>

//         {/* Texte descriptif à côté de la vidéo */}
//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold text-gray-900">
//             🎥 Découvrez WALLET TRACKER en action
//           </h2>
//           <p className="text-gray-600 leading-relaxed">
//             Découvrez en vidéo comment <strong>WALLET TRACKER</strong> peut vous aider
//             à localiser vos objets en toute simplicité grâce à la technologie
//             Apple <em>"Localiser"</em>.
//           </p>
//           <ul className="list-disc list-inside text-gray-700 space-y-2">
//             <li>Facile à configurer sur iPhone</li>
//             <li>Technologie Bluetooth intégrée</li>
//             <li>Localisation en temps réel</li>
//           </ul>
//         </div>
//       </motion.div>

//       {/* --- BANDE CARTE ENTRE VIDÉO ET ILLUSTRATIONS --- */}
  
//      {/* --- BANDE CARTE FULL WIDTH --- */}
// <div className="w-full relative">
//   <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
//     <img
//       src={mapImage}
//       alt="Carte de livraison"
//       className="w-full h-full object-cover"
//     />
//     {/* Overlay semi-transparent */}
//     <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//       <h2 className="text-2xl md:text-4xl font-bold text-white text-center px-4">
//         Livraison rapide partout au Maroc 🚚
//       </h2>
//     </div>
//   </div>
// </div>


//       {/* --- SECTIONS ILLUSTRÉES --- */}
//       <div className="flex flex-col gap-16">
//         {[
//           {
//             img: img1,
//             title: "Ultra-fine, invisible, indispensable :",
//             desc: "Seulement 3 mm d’épaisseur. Se glisse dans n’importe quel portefeuille ou bagage, sans jamais vous gêner.",
//           },
//           {
//             img: img2,
//             title: "Ne perdez plus jamais vos objets de valeur :",
//             desc: "Avec Trazcard, localisez votre portefeuille ou sac depuis l'app Apple 'Localiser'. Recevez une alerte dès que vous vous en éloignez.",
//           },
//           {
//             img: img3,
//             title: "Robuste, étanche et toujours prête :",
//             desc: "Jusqu’à 3 mois d’autonomie, recharge sans fil, et totalement étanche. Prête à vous suivre partout.",
//           },
//           {
//             img: img4,
//             title: "Rechargez votre Trazcard en toute simplicité :",
//             desc: "Compatible avec la charge sans fil. Posez simplement la carte sur le chargeur et l’énergie se transmet automatiquement.",
//           },
//         ].map((section, index) => (
//           <motion.div
//             key={index}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={index % 2 === 0 ? fadeLeft : fadeRight}
//             className="flex flex-col md:flex-row items-center gap-8 w-full"
//           >
//             <img
//               src={section.img}
//               alt={`section-${index}`}
//               className={`w-full md:w-1/2 h-auto object-cover rounded-xl ${
//                 index % 2 === 1 ? "md:order-2" : ""
//               }`}
//             />
//             <p className="text-gray-700 text-lg md:w-1/2">
//               <strong>{section.title}</strong> {section.desc}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* --- FAQ ACCORDÉON --- */}
//       <section className="w-full flex justify-center py-16 bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-sm">
//         <div className="w-full max-w-3xl px-6">
//           <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
//             ❓ Foire Aux Questions
//           </h2>

//           <div className="space-y-4">
//             {faqData.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
//               >
//                 <button
//                   onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
//                   className="flex justify-between items-center w-full px-6 py-4 text-left hover:bg-gray-50 transition"
//                 >
//                   <span className="text-lg font-semibold text-gray-800">
//                     {item.question}
//                   </span>
//                   <span className="ml-4 text-indigo-500">
//                     {openFAQ === index ? (
//                       <ChevronUp className="w-6 h-6" />
//                     ) : (
//                       <ChevronDown className="w-6 h-6" />
//                     )}
//                   </span>
//                 </button>

//                 <AnimatePresence>
//                   {openFAQ === index && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="px-6 pb-4 text-gray-600 text-base leading-relaxed"
//                     >
//                       {item.answer}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }


import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import GradientButton from "../components/GradientButton";
import mapImage from "../assets/map.jpg"; // Image carte livraison

// Images locales
import img1 from "../assets/product1.png";
import img2 from "../assets/product2.png";
import img3 from "../assets/product3.png";
import img4 from "../assets/product4.png";

// Vidéo locale
import productVideo from "../assets/the_blackard_2.mp4";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
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

  // Animations
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const slideImage = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const fadeText = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, delay: 0.3 } },
  };

  // FAQ Data
  const faqData = [
    {
      question: "Comment ça marche ?",
      answer:
        "WALLET TRACKER utilise la technologie Bluetooth et se connecte à l’application Apple 'Localiser'. Vous pouvez suivre votre portefeuille ou vos objets à tout moment depuis votre iPhone, sans installer d’application supplémentaire.",
    },
    {
      question: "Est-ce compatible avec Android ?",
      answer:
        "Non. WALLET TRACKER est uniquement compatible avec les appareils Apple (iPhone, iPad, Mac) utilisant iOS 14.5 ou supérieur. L’intégration se fait directement avec l’app 'Localiser', sans application tierce.",
    },
    {
      question: "Quelle est l’autonomie et comment la recharger ?",
      answer:
        "La carte fonctionne jusqu’à 3 mois sans recharge. Elle se recharge simplement via un chargeur sans fil (technologie Qi), sans câble ni connecteur.",
    },
    {
      question: "Et si je perds mon portefeuille ?",
      answer:
        "Activez le mode perdu depuis l'app 'Localiser'. Vous serez notifié automatiquement dès que la carte est détectée à proximité d’un appareil Apple. Vous pouvez aussi laisser un message avec vos coordonnées pour que quelqu’un puisse vous le rendre.",
    },
    {
      question: "Comment ajouter la carte sur son iPhone ?",
      answer:
        "Ajouter votre WALLET TRACKER à votre iPhone est simple et rapide. Il suffit d’ouvrir l’application 'Localiser', de cliquer sur 'Ajouter un objet', puis de rapprocher la carte de votre iPhone. Elle sera détectée automatiquement et prête à l'emploi.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Container principal avec padding top pour compenser la Navbar */}
      <section className="w-full px-6 py-20 max-w-7xl mx-auto flex flex-col gap-20 pt-20">
        {/* --- SLIDER PRINCIPAL + DETAILS PRODUIT --- */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* SLIDER */}
          <motion.div
            className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl"
            initial="hidden"
            animate="visible"
            variants={slideImage}
          >
            <motion.img
              key={currentImage}
              src={product.images[currentImage]}
              alt={`${product.name} ${currentImage + 1}`}
              className="w-full h-[400px] object-cover rounded-2xl"
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Flèches de navigation */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md hover:bg-white hover:scale-105 transition"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md hover:bg-white hover:scale-105 transition"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </>
            )}
          </motion.div>

          {/* DETAILS PRODUIT */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            variants={fadeText}
          >
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-lg text-gray-600">{product.description}</p>

            <div className="text-3xl font-semibold text-green-600">
              {totalPrice} $
            </div>

            {/* Sélecteur de quantité */}
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              >
                -
              </button>
              <span className="px-4 font-semibold text-lg">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              >
                +
              </button>
            </div>

            {/* Bouton Acheter */}
            <GradientButton
              onClick={() => navigate("/checkout", { state: { product, qty } })}
              className="mt-6 w-full md:w-auto"
            >
              🛒 Acheter maintenant
            </GradientButton>

            {/* Infos livraison */}
            <div className="mt-6 space-y-2 text-gray-700">
              <p>✅ Livraison partout au Maroc en 24/48h</p>
              <p>🔒 Paiement à la livraison sécurisé</p>
              <p>⭐ Produits certifiés & qualité premium</p>
              <p>💬 Support client 24/7</p>
            </div>
          </motion.div>
        </div>

        {/* --- SECTION VIDÉO + DESCRIPTION --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Vidéo */}
          <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
            <video
              src={productVideo}
              controls
              muted
              loop
              className="w-full h-[250px] object-cover"
            />
          </div>

          {/* Texte descriptif à côté de la vidéo */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              🎥 Découvrez WALLET TRACKER en action
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Découvrez en vidéo comment <strong>WALLET TRACKER</strong> peut vous aider
              à localiser vos objets en toute simplicité grâce à la technologie
              Apple <em>"Localiser"</em>.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Facile à configurer sur iPhone</li>
              <li>Technologie Bluetooth intégrée</li>
              <li>Localisation en temps réel</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* --- BANDE CARTE FULL WIDTH --- */}
      <div className="w-full relative">
        <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
          <img
            src={mapImage}
            alt="Carte de livraison"
            className="w-full h-full object-cover"
          />
          {/* Overlay semi-transparent */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center px-4">
              
            </h2>
          </div>
        </div>
      </div>

      {/* --- CONTENU EN DESSOUS --- */}
      <section className="w-full px-6 py-20 max-w-7xl mx-auto flex flex-col gap-20">
        {/* --- SECTIONS ILLUSTRÉES --- */}
        <div className="flex flex-col gap-16">
          {[
            {
              img: img1,
              title: "Ultra-fine, invisible, indispensable :",
              desc: "Seulement 3 mm d’épaisseur. Se glisse dans n’importe quel portefeuille ou bagage, sans jamais vous gêner.",
            },
            {
              img: img2,
              title: "Ne perdez plus jamais vos objets de valeur :",
              desc: "Avec Trazcard, localisez votre portefeuille ou sac depuis l'app Apple 'Localiser'. Recevez une alerte dès que vous vous en éloignez.",
            },
            {
              img: img3,
              title: "Robuste, étanche et toujours prête :",
              desc: "Jusqu’à 3 mois d’autonomie, recharge sans fil, et totalement étanche. Prête à vous suivre partout.",
            },
            {
              img: img4,
              title: "Rechargez votre Trazcard en toute simplicité :",
              desc: "Compatible avec la charge sans fil. Posez simplement la carte sur le chargeur et l’énergie se transmet automatiquement.",
            },
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
                className={`w-full md:w-1/2 h-auto object-cover rounded-xl ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              />
              <p className="text-gray-700 text-lg md:w-1/2">
                <strong>{section.title}</strong> {section.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- FAQ ACCORDÉON --- */}
        <section className="w-full flex justify-center py-16 bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-sm">
          <div className="w-full max-w-3xl px-6">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
              ❓ Foire Aux Questions
            </h2>

            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="flex justify-between items-center w-full px-6 py-4 text-left hover:bg-gray-50 transition"
                  >
                    <span className="text-lg font-semibold text-gray-800">
                      {item.question}
                    </span>
                    <span className="ml-4 text-indigo-500">
                      {openFAQ === index ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4 text-gray-600 text-base leading-relaxed"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

            
























