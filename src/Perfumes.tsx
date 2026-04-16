import { supabase } from "./lib/supabase";
import { useState, useEffect } from "react";
import type { Perfume } from "./types";
import Navbar from "./Navbar";
import { useCartStore } from "./store/useCartStore";

const Perfumes = () => {
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  // Local state for UI feedback
  const [count, setCount] = useState<Record<number, number>>({});
  const [isAdded, setIsAdded] = useState<Record<number, string>>({});

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const fetchPerfumes = async () => {
      const { data, error } = await supabase.from("Perfumes").select("*");
      if (data) setPerfumes(data);
      if (error) console.error("Error fetching:", error);
    };
    fetchPerfumes();
  }, []);

  // UI Helper functions
  function handleAddedFeedback(id: number) {
    setIsAdded((prev) => ({ ...prev, [id]: "Added" }));
    setTimeout(() => {
      setIsAdded((prev) => ({ ...prev, [id]: "Add to cart" }));
    }, 1000);
  }

  function increaseCount(id: number) {
    setCount((prev) => ({ ...prev, [id]: (prev[id] ?? 1) + 1 }));
  }

  function decreaseCount(id: number) {
    setCount((prev) => {
      if ((prev[id] ?? 1) <= 1) return prev;
      return { ...prev, [id]: prev[id] - 1 };
    });
  }

  return (
    <div>
      <Navbar />

      <section className="bg-[#F5F5F0] min-h-screen px-6 md:px-12 lg:px-20 py-12 mt-[0.5px]">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-gray-500 mb-2">OUR COLLECTION</p>
          <h1 className="text-3xl md:text-4xl font-semibold">Explore Our Perfumes</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {perfumes.map((perfume) => (
            <div key={perfume.id} className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition flex flex-col">
              
              <div className="w-full h-[250px] overflow-hidden rounded-xl mb-4">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <h3 className="font-medium text-lg">{perfume.name}</h3>
              <p className="text-gray-500 text-sm mb-1">{perfume.brand}</p>
              <p className="text-gray-800 font-semibold mb-3">${perfume.price}</p>

              <div className="mt-auto flex flex-col gap-3">
                {/* Quantity Controls */}
                <div className="flex items-center justify-center gap-4 bg-gray-50 py-2 rounded-full">
                  <button 
                    onClick={() => decreaseCount(perfume.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition"
                  >
                    -
                  </button>
                  <span className="font-medium w-4 text-center">{count[perfume.id] ?? 1}</span>
                  <button 
                    onClick={() => increaseCount(perfume.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                    isAdded[perfume.id] === "Added"
                      ? "bg-green-600 text-white"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                  onClick={() => {
                    const currentQty = count[perfume.id] ?? 1;
                    addToCart(perfume, currentQty);
                    handleAddedFeedback(perfume.id);
                    setCount((prev) => ({ ...prev, [perfume.id]: 1 })); // Reset local counter after adding
                  }}
                >
                  {isAdded[perfume.id] ?? "Add to cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Perfumes;