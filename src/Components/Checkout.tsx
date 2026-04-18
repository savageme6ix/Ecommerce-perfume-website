import Navbar from "./Navbar";
import { supabase } from "../lib/supabase";
import { useCartStore } from "../store/useCartStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false); // Toast state
  const { cart } = useCartStore();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const grandTotal = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const orderData = {
      customer: formData.get("customer") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      location: formData.get("location") as string,
      total_amount: grandTotal,
      total_items: totalItems,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
    };

    if (!orderData.customer || !orderData.email) {
      alert("Please fill in required fields");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("Orders").insert([orderData]);
    setLoading(false);

    if (error) {
      console.error("Checkout failed:", error.message);
      alert("Checkout failed. Please try again.");
      return;
    }

    setShowToast(true);
    useCartStore.getState().clearCart();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div>
      <Navbar />

      {showToast && (
        <div className="fixed top-6 md:top-10 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto min-w-max animate-bounce-in">
          <div
            className="bg-white/80 backdrop-blur-md border border-amber-200 
                    px-5 py-3 md:px-8 md:py-4 
                    rounded-2xl md:rounded-full 
                    shadow-2xl flex items-center gap-3 md:gap-4"
          >
            {/* Icon - Slightly smaller on mobile */}
            <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Text Content */}
            <div className="whitespace-nowrap">
              <h3 className="text-black italic text-base md:text-lg leading-none">
                Order Placed
              </h3>
              <p className="text-gray-500 text-[10px] md:text-xs tracking-[0.15em] md:tracking-widest uppercase mt-1">
                Your scent is being prepared
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="bg-[#F5F5F0] min-h-screen px-6 md:px-12 lg:px-20 py-12 flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg p-8 md:p-12">
          {loading && (
            <div
              className="mb-6 rounded-2xl border border-stone-200 bg-[#F5F5F0] px-4 py-3 text-center text-sm font-medium tracking-wide text-stone-700"
              role="status"
              aria-live="polite"
            >
              Placing your order…
            </div>
          )}

          {/* Heading */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">
              Checkout
            </h1>
            <p className="text-gray-500 text-sm md:text-base">
              Complete your purchase and enjoy your signature scent.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700">Full Name</label>
              <input
                name="customer"
                type="text"
                placeholder="Enter your full name"
                className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700">Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700">Phone Number</label>
              <input
                name="phone"
                type="tel"
                placeholder="e.g. +254 712 345 678"
                className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>

            {/* Pickup Location */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700">Pickup Location</label>
              <input
                name="location"
                type="text"
                placeholder="Enter pickup location"
                className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>

            {/* Divider (full width) */}
            <div className="md:col-span-2 border-t my-4"></div>

            {/* Button (full width) */}
            <button
              disabled={loading}
              type="submit"
              className="md:col-span-2 w-full py-4 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition"
            >
              {loading ? "Processing..." : "Buy Product"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
