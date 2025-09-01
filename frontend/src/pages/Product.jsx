// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import GradientButton from "../components/GradientButton";

// export default function Product() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [qty, setQty] = useState(1);
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
//     return <p className="text-center mt-20 text-lg font-medium text-gray-700">Chargement...</p>;
//   }

//   return (
//     <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
//       {/* --- IMAGE PRODUIT --- */}
//       <div className="rounded-2xl overflow-hidden shadow-lg">
//         <img src={product.images[0]} alt={product.name} className="w-full object-cover" />
//       </div>

//       {/* --- DETAILS PRODUIT --- */}
//       <div>
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
//         <p className="text-lg text-gray-600 mb-6">{product.description}</p>

//         <div className="text-2xl font-semibold text-indigo-600 mb-6">{product.price} $</div>

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
//         <GradientButton onClick={() => navigate("/checkout", { state: { product, qty } })}>
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

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import GradientButton from "../components/GradientButton";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
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

  // Prix total (unité × quantité)
  const totalPrice = (product.price * qty).toFixed(2);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
      {/* --- IMAGE PRODUIT --- */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full object-cover"
        />
      </div>

      {/* --- DETAILS PRODUIT --- */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
        <p className="text-lg text-gray-600 mb-6">{product.description}</p>

        {/* Prix total */}
        <div className="text-2xl font-semibold text-indigo-600 mb-6">
          {totalPrice} $
        </div>

        {/* Quantité */}
        <div className="flex items-center gap-4 mb-8">
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

        {/* Bouton acheter */}
        <GradientButton
          onClick={() => navigate("/checkout", { state: { product, qty } })}
        >
          🛒 Acheter maintenant
        </GradientButton>

        {/* Infos supplémentaires */}
        <div className="mt-10 space-y-3 text-gray-700">
          <p>✅ Livraison partout au Maroc en 24/48h</p>
          <p>🔒 Paiement à la livraison sécurisé</p>
          <p>⭐ Produits certifiés & qualité premium</p>
          <p>💬 Support client 24/7</p>
        </div>
      </div>
    </section>
  );
}

