// src/components/Navbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo à gauche */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // mets ton logo ici
            alt="Logo"
            className="h-8 w-8"
          />
          <span className="font-bold text-lg">Wallet Tracker</span>
        </div>

        {/* Texte animé au centre (caché sur mobile) */}
        <motion.div
          className="hidden md:block text-sm font-medium"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🌍 Free Shipping Worldwide
        </motion.div>

        {/* Liens à droite (desktop) */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </div>

        {/* Burger menu (mobile) */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu déroulant mobile */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black text-white px-6 py-4 space-y-3 border-t border-gray-700"
        >
          <Link
            to="/about"
            className="block hover:text-gray-300 transition"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block hover:text-gray-300 transition"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <p className="pt-2 text-sm text-gray-400">🌍 Free Shipping Worldwide</p>
        </motion.div>
      )}
    </nav>
  );
}

