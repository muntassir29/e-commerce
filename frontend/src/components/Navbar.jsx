import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import logo from "../assets/wallettracker.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* --- Bandeau promo avec texte qui défile --- */}
      <div className="bg-white text-black font-semibold overflow-hidden border-b border-gray-200">
        <motion.div
          className="whitespace-nowrap py-2"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          🌍 FREE SHIPPING WORLDWIDE 🚚✨ | SECURE PAYMENT 🔒 | 24/7 SUPPORT 💬
        </motion.div>
      </div>

      {/* --- Contenu principal de la navbar --- */}
      <div className="bg-black text-white flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-25 h-25" />
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-8 font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/product/68a855a3d6068d80488bfb8d", label: "Shop" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <motion.div
              key={item.to}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={item.to}
                className="text-white text-lg font-medium relative transition-colors duration-300"
              >
                {item.label}
                {/* Barre dégradée qui s'affiche au survol */}
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bouton menu mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Menu mobile avec animation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black text-white px-6 py-6 space-y-6 shadow-lg"
        >
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/product/68a855a3d6068d80488bfb8d", label: "Shop" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <motion.div
              key={item.to}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="block text-lg relative transition-colors duration-300"
              >
                {item.label}
                {/* Barre dégradée au survol version mobile */}
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;










