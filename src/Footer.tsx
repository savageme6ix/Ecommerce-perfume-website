const Footer = () => {
  return (
    <footer className="bg-[#111] text-white mt-20">
      
      <div className="px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
    
        <div>
          <h2 className="text-xl font-semibold mb-4">Essence</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[300px]">
            Handcrafted fragrances made from the finest botanical oils. 
            Designed to leave a lasting impression.
          </p>
        </div>

        <div>
          <h3 className="text-sm tracking-widest mb-4 text-gray-400">EXPLORE</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">Shop</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm tracking-widest mb-4 text-gray-400">CONNECT</h3>
          <p className="text-sm text-gray-400 mb-2">hello@essence.com</p>
          <p className="text-sm text-gray-400 mb-4">+254 712 345 678</p>

          <div className="flex gap-4 text-sm">
            <span className="hover:text-gray-300 cursor-pointer">Instagram</span>
            <span className="hover:text-gray-300 cursor-pointer">Twitter</span>
            <span className="hover:text-gray-300 cursor-pointer">TikTok</span>
          </div>
        </div>

      </div>
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Essence. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;