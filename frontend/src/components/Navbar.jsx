import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import logo from "../assets/wallettracker.png"; // ton logo ici

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Bandeau promo visible uniquement sur desktop */}
      <div className="hidden md:flex justify-center items-center bg-gray-900 text-white text-sm py-2 font-semibold">
        🌍 FREE SHIPPING WORLDWIDE 🚚✨ | SECURE PAYMENT 🔒 | 24/7 SUPPORT 💬
      </div>

      {/* Contenu principal de la navbar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="font-bold text-lg text-gray-800">MyShop</span>
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-6 font-medium text-gray-700">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <Link to="/about" className="hover:text-gray-900">About</Link>
          <Link to="/shop" className="hover:text-gray-900">Shop</Link>
          <Link to="/contact" className="hover:text-gray-900">Contact</Link>
        </div>

        {/* Bouton menu mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 px-6 py-4 space-y-4 shadow-md">
          {/* Texte défilant en mobile */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="text-sm font-bold whitespace-nowrap"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            >
              🌍 FREE SHIPPING WORLDWIDE 🚚✨ | SECURE PAYMENT 🔒 | 24/7 SUPPORT 💬
            </motion.div>
          </div>

          {/* Liens */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-gray-900"
          >
            About
          </Link>
          <Link
            to="/shop"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-gray-900"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-gray-900"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;



