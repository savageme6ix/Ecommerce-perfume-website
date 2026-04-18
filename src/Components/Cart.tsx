import Navbar from "./Navbar";
import { useState } from "react";
import { useCartStore } from "../store/useCartStore";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCartStore();
  const [showConfirm, setShowConfirm] = useState(false);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = cart.length > 0 ? 10 : 0;
  const grandTotal = subtotal + shipping;

  function handleClearCart() {
    clearCart();
    setShowConfirm(false);
  }

  return (
    <div>
      <Navbar />

      {/* Confirmation Modal */}
      {showConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setShowConfirm(false)} // click outside to close
        >
          <div
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-sm mx-auto flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Clear your cart?
            </h2>
            <p className="text-gray-500 text-sm">
              This will remove all items from your cart. This action cannot be
              undone.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                onClick={() => setShowConfirm(false)}
                className="w-full py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleClearCart}
                className="w-full py-3 rounded-full bg-red-700 text-white hover:bg-red-800 transition text-sm"
              >
                Yes, clear cart
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="bg-[#F5F5F0] min-h-screen px-6 md:px-12 lg:px-20 py-10 mt-0.5">
        <h1 className="text-3xl md:text-4xl font-semibold mb-10">Your Cart:</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row gap-6 items-center"
                >
                  <div className="w-full sm:w-[120px] h-[200px] sm:h-[120px] overflow-hidden rounded-xl shrink-0">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover"
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">Brand: {item.brand}</p>
                    <div className="flex items-center justify-evenly gap-5">
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="px-6 py-3 mt-3 rounded-full transition w-[120px] h-[50px] bg-black text-white hover:bg-gray-800"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                    <p className="font-semibold mt-2">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-2xl md:text-4xl">Your Cart is Empty!</p>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-20">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-4">
              <span>Shipping</span>
              <span>$10</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>{grandTotal.toLocaleString()}</span>
            </div>
            <p className="text-sm font-semibold">Taxes and duties included.</p>
            <button className="w-full mt-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              <Link to="/checkout">Checkout</Link>
            </button>
            <button
              className="w-full px-6 py-3 mt-3 rounded-full transition bg-red-700 text-white hover:bg-red-800"
              onClick={() => setShowConfirm(true)}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
