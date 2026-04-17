import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Wishlist from './Wishlist';
import Perfumes from './Perfumes';
import Cart from './Cart';
import Checkout from './Checkout';
import About from './About';

function App() {

  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/perfumes" element={<Perfumes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
