import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white mt-20">
      <div className="px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
    
        <div>
          <h2 className="text-xl font-semibold mb-4">6ix Essence</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[300px]">
            Handcrafted fragrances made from the finest botanical oils. 
            Designed to leave a lasting impression.
          </p>
        </div>

        <div>
          <h3 className="text-sm tracking-widest mb-4 text-gray-400 font-medium">EXPLORE</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
            <li><Link to="/perumes" className="hover:text-gray-300 transition-colors">Shop</Link></li>
            <li><Link to="/about" className="hover:text-gray-300 transition-colors">About</Link></li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm tracking-widest mb-4 text-gray-400 font-medium">CONNECT</h3>
          <p className="text-sm text-gray-400 mb-2">dslamp0@gmail.com</p>
          <p className="text-sm text-gray-400 mb-4">+254 750 115 210</p>

          <div className="flex gap-4 text-sm">
            {/* External Social Links */}
            <a 
              href="https://instagram.com/mr.me6ix" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-300 transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://tiktok.com/@mr.me6ix" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-300 transition-colors"
            >
              TikTok
            </a>
            <span className="hover:text-gray-300 cursor-pointer">Twitter</span>
          </div>
        </div>

      </div>
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} 6ix Essence. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;