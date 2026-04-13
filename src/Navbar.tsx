import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>

      <div>
      <Link to="/perfumes">Perfumes</Link>
      <Link to="/wishlist">Wishlist</Link>
      </div>
    </nav>
  )
}

export default Navbar
