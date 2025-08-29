import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/wallettracker.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="font-bold text-lg">Wallet Tracker</span>
          </div>
          <p className="text-gray-400 text-sm">
            Votre boutique en ligne de confiance 🌍 — profitez de nos produits
            de qualité avec livraison rapide et paiement sécurisé.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Liens rapides</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/shop" className="hover:text-white transition">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Email : support@wallettracker.com</li>
            <li>Téléphone : +212 6 12 34 56 78</li>
            <li>Horaires : 9h - 18h (Lun - Sam)</li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Suivez-nous</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bandeau bas */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Wallet Tracker. Tous droits réservés.
      </div>
    </footer>
  );
}

