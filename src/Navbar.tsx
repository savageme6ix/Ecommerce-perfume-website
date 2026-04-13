import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=' navbar flex justify-between items-center p-6 bg-[#F5F5F0] shadow-sm font-body'>
      <Link to="/" className="text-xl tracking-widest uppercase">
        Home
      </Link>

      <div className='flex gap-8'>
        <Link to="/perfumes" className="  hover:text-gray-600 transition tracking-widest">Perfumes</Link>
        <Link to="/wishlist" className="hover:text-gray-600 transition tracking-widest">Wishlist</Link>
      </div>
      
    </nav>
  );
};

export default Navbar;