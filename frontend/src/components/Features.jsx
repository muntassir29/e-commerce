import { FaShippingFast, FaLock, FaHeadset, FaStar } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaShippingFast className="text-4xl text-indigo-600 mb-4" />,
      title: "Livraison rapide",
      desc: "Recevez vos commandes en 24/48h partout au Maroc.",
    },
    {
      icon: <FaLock className="text-4xl text-indigo-600 mb-4" />,
      title: "Paiement sécurisé",
      desc: "Payez à la livraison ou via nos partenaires bancaires.",
    },
    {
      icon: <FaHeadset className="text-4xl text-indigo-600 mb-4" />,
      title: "Support 24/7",
      desc: "Notre équipe vous accompagne à chaque étape.",
    },
    {
      icon: <FaStar className="text-4xl text-indigo-600 mb-4" />,
      title: "Qualité premium",
      desc: "Produits certifiés, satisfait ou remboursé.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Pourquoi nous choisir ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
            >
              {f.icon}
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
