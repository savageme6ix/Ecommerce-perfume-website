import Navbar from "./Navbar";
import { usewishStore } from "../store/useWishStore";
import { useCartStore } from "../store/useCartStore";
import { PerfumeDescriptionHint } from "./PerfumeDescriptionHint";

const Wishlist = () => {
  const { wish, updateQuantity, removeFromWishStore } = usewishStore();
  const { addToCart } = useCartStore();

  return (
    <div>
      <Navbar />

      <section className="bg-[#F5F5F0] min-h-screen px-6 md:px-12 lg:px-20 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold mb-10">
          Your Wishlist
        </h1>

        {wish.length === 0 && (
          <p className="text-gray-500 text-center mt-20">
            Your wishlist is empty.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wish.map((item) => (
            <div
              key={item.id}
              className="relative bg-white p-4 rounded-2xl shadow hover:shadow-lg transition flex flex-col"
            >
              <PerfumeDescriptionHint
                description={item.description}
                className="top-3 right-3"
              />

              <div className="w-full h-[220px] sm:h-[240px] md:h-[250px] overflow-hidden rounded-xl mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <h3 className="font-medium text-lg">{item.name}</h3>
              <p className="text-gray-500 text-sm mb-1">{item.brand}</p>
              <p className="text-gray-800 font-semibold mb-3">
                ${item.price * item.quantity}
              </p>

              <div className="mt-auto flex flex-col gap-3">
                {/* Quantity Controls */}
                <div className="flex items-center justify-center gap-4 bg-gray-50 py-2 rounded-full w-full">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition"
                  >
                    -
                  </button>
                  <span className="font-medium w-4 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, +1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition"
                  >
                    +
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      addToCart(item, item.quantity);
                      removeFromWishStore(item.id);
                    }}
                    className="flex-1 py-3 rounded-full font-medium bg-black text-white hover:bg-gray-800 transition-all duration-300"
                  >
                    Move to Cart
                  </button>

                  <button
                    onClick={() => removeFromWishStore(item.id)}
                    className="px-4 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Wishlist;