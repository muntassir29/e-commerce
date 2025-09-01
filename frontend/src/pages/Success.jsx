import { Link } from "react-router-dom";

export default function Success() {
  return (
    <section className="flex flex-col items-center justify-center h-[70vh] text-center px-6">
      <h1 className="text-4xl font-bold text-green-600 mb-6">
        🎉 Merci pour votre commande !
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Votre commande a bien été enregistrée. Nous vous contacterons bientôt
        pour la livraison.
      </p>
      <Link
        to="/"
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
      >
        Retour à l’accueil
      </Link>
    </section>
  );
}
