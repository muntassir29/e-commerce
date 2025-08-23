import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CheckoutForm from "../components/CheckoutForm";

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

  if (!product) return <p className="text-center mt-10">Chargement du produit...</p>;

  return (
    <>
      <Hero product={product} />
      <Features />
      <CheckoutForm product={product} />
    </>
  );
}