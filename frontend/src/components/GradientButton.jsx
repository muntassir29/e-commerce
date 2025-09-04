// export default function GradientButton({ children, type = "button", onClick }) {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 shadow-md transition"
//     >
//       {children}
//     </button>
//   );
// }

import { motion } from "framer-motion";

export default function GradientButton({ children, type = "button", onClick }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,255,255,0.3)" }}
      whileTap={{ scale: 0.97 }}
      className="px-6 py-3 rounded-xl font-semibold text-white 
        bg-gradient-to-r from-gray-800 to-black
        hover:from-gray-900 hover:to-gray-800
        transition duration-300 ease-in-out
        shadow-md tracking-wide"
    >
      {children}
    </motion.button>
  );
}




