
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Features from "../components/Features";
import TestimonialsSlider from "../components/TestimonialsSlider";

// Images locales pour le slider
import pexels1 from "../assets/pexels1.jpg";
import pexels2 from "../assets/pexels2.jpg";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [pexels1, pexels2];

  // Récupération du produit unique
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

  // Slider automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="w-full h-full">
      {/* --- SLIDER FULL WIDTH --- */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        
        {/* Images Slider en arrière-plan */}
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

        {/* Overlay FIXE - Texte et bouton toujours visibles */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4 z-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg max-w-2xl">
            Carte de suivi intelligente pour votre portefeuille
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6 drop-shadow-md">
            Localisez vos objets de valeur grâce à la technologie Apple Find My. 
            Étanche, rechargeable sans fil et ultra-fine pour un confort optimal.
          </p>

          {products.length > 0 && (
            <Link
              to={`/product/${products[0]._id}`}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium shadow-lg hover:scale-105 transition transform"
            >
              Découvrir le produit
            </Link>
          )}
        </div>
      </section>

      {/* PRODUIT - Section en dessous */}
      <section id="products" className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Notre Produit</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white shadow-lg rounded-2xl p-6 text-center"
            >
              <img
                src={p.images[0]}
                alt={p.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-gray-600 mb-2">{p.price} $</p>
              <Link
                to={`/product/${p._id}`}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition inline-block"
              >
                Voir le produit
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SECTIONS ADDITIONNELLES */}
      <Features />
      <TestimonialsSlider />
    </div>
  );
}



