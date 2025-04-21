import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/styles/main.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Gallery from './components/pages/Gallery';
import Portfolio from './components/pages/Portfolio';
import ProductDetail from './components/pages/ProductDetail';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 