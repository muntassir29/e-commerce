export default function GradientButton({ children, type = "button", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 shadow-md transition"
    >
      {children}
    </button>
  );
}
