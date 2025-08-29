import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CheckoutForm from "../components/CheckoutForm";
import TestimonialsSlider from "../components/TestimonialsSlider"; // nouveau slider

export default function Home() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProduct(res.data[0]); // récupère le premier produit pour mono-produit
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, []);

  if (!product) 
    return (
      <p className="text-center mt-20 text-lg font-medium text-gray-700">
        Chargement du produit...
      </p>
    );

  return (
    <div className="flex flex-col items-center">
      {/* Section Hero */}
      <Hero product={product} />

      {/* Section Features */}
      <Features />

      {/* Section Avis Clients (Slider) */}
      <TestimonialsSlider />

      {/* Section Checkout */}
      <CheckoutForm product={product} />
    </div>
  );
}
