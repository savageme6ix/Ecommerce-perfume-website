import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Wishlist from './Wishlist';
import Perfumes from './Perfumes';
import Cart from './Cart';
import FeaturedCollection from './FeaturedCollection';
import Testimonials from './Testimonials';
import Footer from './Footer';
import type { Perfume } from "./types";
import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';

function App() {

const [perfumes, setPerfumes] = useState<Perfume[]>([]);
    useEffect(()=>{
        const fetchPerfumes = async ()=>{
            const { data, error } = await supabase.from('Perfumes').select('*');
            if(data) setPerfumes(data);
            if (error) console.error("Error fetching:", error);
        };

        fetchPerfumes();
    },[]);

  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/perfumes" element={<Perfumes />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
     </BrowserRouter>

     <Home />
     <FeaturedCollection perfumes={perfumes} />
     <Testimonials  />
     <Footer />
    </div>
  )
}

export default App
