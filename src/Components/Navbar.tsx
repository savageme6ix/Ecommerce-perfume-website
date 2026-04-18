import { Link } from 'react-router-dom';
import { useCartStore } from './store/useCartStore';
const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className=' sticky top-0 z-50 navbar flex justify-between items-center p-6 bg-[#F5F5F0] shadow-sm font-body'>
      <Link to="/" className="text-xl tracking-widest uppercase">
        Home
      </Link>

      <div className='flex gap-8'>
        <Link to="/perfumes" className="  hover:text-gray-600 transition tracking-widest">Perfumes</Link>
        <Link to="/wishlist" className="hover:text-gray-600 transition tracking-widest">Wishlist</Link>
        <Link to="/cart" className="hover:text-gray-600 transition tracking-widest">Cart({totalItems})</Link>
      </div>
      
    </nav>
  );
};

export default Navbar;