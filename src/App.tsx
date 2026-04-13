import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Wishlist from './Wishlist';
import Perfumes from './Perfumes';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/perfumes" element={<Perfumes />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
