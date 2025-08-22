// import React, { useEffect, useState } from "react";

// function Product() {
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/products") // ton backend local
//       .then((res) => res.json())
//       .then((data) => setProduct(data[0])) // Mono-produit, on prend le premier
//       .catch((err) => console.error(err));
//   }, []);

//   if (!product) return <p>Chargement du produit...</p>;

//   return (
//     <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
//       <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
//       <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded" />
//       <p className="text-lg font-semibold mb-2">{product.price} €</p>
//       <p className="text-gray-700">{product.description}</p>
//       <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//         Commander
//       </button>
//     </div>
//   );
// }

// export default Product;

// src/components/Product.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Erreur fetch product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Chargement...</div>;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-1/2">
          {product.images.length > 0 && (
            <>
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 bg-gray-700 text-white px-2 py-1 rounded"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 bg-gray-700 text-white px-2 py-1 rounded"
              >
                ▶
              </button>
            </>
          )}
        </div>
        <div className="md:w-1/2">
          <p className="text-xl font-semibold text-green-600 mb-2">{product.price} $</p>
          <p className="mb-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

