export default function Hero({ product }) {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
      <p className="text-lg mb-6">{product.description}</p>
      {product.images && product.images[0] && (
        <img
          src={product.images[1]}
          alt={product.name}
          className="mx-auto rounded-lg shadow-lg mb-6 w-80"
        />
      )}
      <p className="text-2xl font-semibold mb-4">{product.price} $</p>
      <a
        href="#order"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
      >
        Commander maintenant
      </a>
    </section>
  );
}
