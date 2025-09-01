export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Contactez-nous
      </h1>
      <form className="grid gap-6 bg-white p-8 rounded-2xl shadow-lg">
        <input
          type="text"
          placeholder="Votre nom"
          className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Votre email"
          className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          placeholder="Votre message"
          rows="5"
          className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
