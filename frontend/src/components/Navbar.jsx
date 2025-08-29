import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import logo from "../assets/wallettracker.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Bandeau promo (blanc avec texte noir qui défile) */}
      <div className="bg-white text-black font-semibold overflow-hidden border-b border-gray-200">
        <motion.div
          className="whitespace-nowrap py-2"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          🌍 FREE SHIPPING WORLDWIDE 🚚✨ | SECURE PAYMENT 🔒 | 24/7 SUPPORT 💬
        </motion.div>
      </div>

      {/* Contenu principal */}
      <div className="bg-black text-white flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-25 h-25" />
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition">About</Link>
          <Link to="/shop" className="hover:text-gray-300 transition">Shop</Link>
          <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </div>

        {/* Bouton menu mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black text-white px-6 py-6 space-y-6 shadow-lg"
        >
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-lg hover:text-gray-300 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block text-lg hover:text-gray-300 transition"
          >
            About
          </Link>
          <Link
            to="/shop"
            onClick={() => setIsOpen(false)}
            className="block text-lg hover:text-gray-300 transition"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-lg hover:text-gray-300 transition"
          >
            Contact
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;




