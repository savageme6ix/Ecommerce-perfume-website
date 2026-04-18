import Navbar from "./Navbar";
import { usewishStore } from "../store/useWishStore";
import { useCartStore } from "../store/useCartStore";

const Wishlist = () => {
  const { wish, updateQuantity, removeFromWishStore } = usewishStore();
  const {addToCart} = useCartStore();
  return (
    <div>
      <Navbar />

      <section className="bg-[#F5F5F0] min-h-screen px-6 md:px-12 lg:px-20 py-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-10">
          Your Wishlist
        </h1>

        {/* Empty state */}
        {wish.length === 0 && (
          <p className="text-gray-500 text-center mt-20">
            Your wishlist is empty.
          </p>
        )}

        {/* Items */}
        <div className="flex flex-col gap-6">
          {wish.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center md:items-start"
            >
              {/* Image */}
              <div className="w-[150px] h-[150px] overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-2 text-center md:text-left flex-1">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.brand}</p>

                {/* Quantity Controls */}
                <div className="flex items-center justify-center md:justify-start gap-3 mt-3 flex-wrap">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                  >
                    -
                  </button>

                  <span className="font-medium">{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, +1)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                  >
                    +
                  </button>

                  <button
                    onClick={() => {
                      addToCart(item, item.quantity);
                      removeFromWishStore(item.id);
                    }}
                    className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                  >
                    Move to Cart
                  </button>
                </div>

                {/* Price */}
                <p className="font-semibold mt-2">
                  ${item.price * item.quantity}
                </p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromWishStore(item.id)}
                className="px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
