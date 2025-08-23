import { Link } from "react-router-dom";

export default function Success() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold text-green-600 mb-4">
        Merci pour votre commande !
      </h2>
      <p className="text-lg mb-6">Nous vous contacterons bientôt pour la livraison.</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Retour à l’accueil
      </Link>
    </section>
  );
}