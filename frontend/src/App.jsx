// import React from "react";
// import Product from "./components/product";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-white shadow p-4 text-center text-2xl font-bold">
//         Mon E-commerce Mono-produit
//       </header>

//       <main className="p-6">
//         <Product />
//       </main>

//       <footer className="bg-white shadow p-4 text-center mt-10">
//         &copy; {new Date().getFullYear()} Mon E-commerce
//       </footer>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;

