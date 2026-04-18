import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Wishlist from './Components/Wishlist';
import Perfumes from './Components/Perfumes';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import About from './Components/About';

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
