import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import About from "./pages/About";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar toujours en haut */}
        <Navbar />

        {/* Contenu principal (ajout pt pour compenser la navbar) */}
        <main className="flex-1 pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer en bas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;



