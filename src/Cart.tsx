import Navbar from "./Navbar";
import { useState } from "react";
import { useCartStore } from "./store/useCartStore";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCartStore();

  return (
    <div>
      <Navbar />
      <section className="bg-[#F5F5F0] min-h-screen px-6 md:px-12 lg:px-20 py-10 mt-0.5">
        <h1 className="text-3xl md:text-4xl font-semibold mb-10">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Repeat this card */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-6 flex gap-6 items-center"
              >
                {/* Image */}
                <div className="w-[120px] h-[120px] overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">Brand: {item.brand}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id,-1)}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                    >
                      -
                    </button>

                    <span className="font-medium">{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id,1)}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  {/* Total */}
                  <p className="font-semibold mt-2">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-20">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>$250</span>
            </div>

            <div className="flex justify-between text-gray-600 mb-4">
              <span>Shipping</span>
              <span>$10</span>
            </div>

            <div className="border-t pt-4 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>$260</span>
            </div>

            <button className="w-full mt-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
