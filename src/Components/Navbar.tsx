import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-[#F5F5F0] shadow-sm font-body px-4 py-4 sm:px-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        {/* Logo / Home */}
        <Link
          to="/"
          className="text-lg sm:text-xl tracking-widest uppercase text-center sm:text-left"
        >
          Home
        </Link>

        {/* Links */}
        <div className="flex justify-center sm:justify-end gap-4 sm:gap-8 sm:text-base flex-wrap">
          <Link
            to="/perfumes"
            className="hover:text-gray-600 transition tracking-widest"
          >
            Perfumes
          </Link>

          <Link
            to="/wishlist"
            className="hover:text-gray-600 transition tracking-widest"
          >
            Wishlist
          </Link>

          <Link
            to="/cart"
            className="hover:text-gray-600 transition tracking-widest"
          >
            Cart({totalItems})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
