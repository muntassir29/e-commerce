const features = [
  "Qualité premium garantie",
  "Livraison rapide et sécurisée",
  "Satisfait ou remboursé",
];

export default function Features() {
  return (
    <section className="py-16 px-6 bg-white">
      <h3 className="text-3xl font-semibold text-center mb-8">Pourquoi nous choisir ?</h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="p-6 shadow-lg rounded-lg bg-gray-50">
            <p className="text-lg font-medium text-gray-700">{f}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
