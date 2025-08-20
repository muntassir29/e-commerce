export default function Footer() {
  return (
    <footer className="mt-10 border-t">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-600 flex justify-between">
        <p>© {new Date().getFullYear()} E-Shop</p>
        <p>Paiement à la livraison • Service client 7j/7</p>
      </div>
    </footer>
  );
}
