import { supabase } from "../lib/supabase";
import { useState, useEffect } from "react";
import type { Perfume } from "../types";
import Navbar from "./Navbar";
import { useCartStore } from "../store/useCartStore";
import { useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { usewishStore } from "../store/useWishStore";
import { PerfumeDescriptionHint } from "./PerfumeDescriptionHint";
import SearchBar from "./SearchBar";
import { PageLoading } from "./PageLoading"; 
import {motion} from "framer-motion";

const Perfumes = () => {
  const [allPerfumes, setAllPerfumes] = useState<Perfume[]>([]);
  const [displayPerfumes, setDisplayPerfumes] = useState<Perfume[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState<Record<number, number>>({});
  const [isAdded, setIsAdded] = useState<Record<number, string>>({});
  const [animating, setAnimating] = useState<Record<number, boolean>>({});
  const [notif, setNotif] = useState<string | null>(null);
  const timeoutRefs = useRef<{ [key: number]: ReturnType<typeof setTimeout> }>({});

  const addToCart = useCartStore((state) => state.addToCart);
  const { addToWishStore, removeFromWishStore, wish } = usewishStore();

  const isLiked = (id: number) => wish.some((w) => w.id === id);

  function toggleLike(id: number): void {
    setAnimating((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAnimating((prev) => ({ ...prev, [id]: false }));
    }, 250);
  }

  useEffect(() => {
    const fetchPerfumes = async () => {
      setIsLoading(true);
      const { data, error } = await supabase.from("Perfumes").select("*");
      setIsLoading(false);
      if (data) {
        setAllPerfumes(data);
        setDisplayPerfumes(data);
      }
      if (error) console.error("Error fetching:", error);
    };
    fetchPerfumes();
  }, []);

  function handleSearch(query: string) {
    if (!query) {
      setDisplayPerfumes(allPerfumes);
      return;
    }
    setDisplayPerfumes(
      allPerfumes.filter((p) => p.name.toLowerCase().includes(query)),
    );
  }

  function handleAddedFeedback(id: number) {
    if (timeoutRefs.current[id]) {
      clearTimeout(timeoutRefs.current[id]);
    }
    setIsAdded((prev) => ({ ...prev, [id]: "Added" }));

    timeoutRefs.current[id] = setTimeout(() => {
      setIsAdded((prev) => ({ ...prev, [id]: "Add to cart" }));
      delete timeoutRefs.current[id];
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

        <SearchBar
          onSearch={handleSearch}
          placeholder="Search by name"
          disabled={isLoading}
        />

        {isLoading ? (
          <PageLoading message="Loading perfumes…" />
        ) : displayPerfumes.length === 0 ? (
          <p className="text-center text-gray-600 py-12">
            {allPerfumes.length === 0
              ? "No perfumes available right now. Please check back soon."
              : "No perfumes match your search. Try another name or clear the search."}
          </p>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayPerfumes.map((perfume,index) => (
            <motion.div
              key={perfume.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
              duration: 0.5, 
              delay: index * 0.1, 
              ease: "easeOut" 
            }}
            className="relative bg-white p-4 rounded-2xl shadow hover:shadow-lg transition flex flex-col"
            >

            <div
              key={perfume.id}
              className="relative bg-white p-4 rounded-2xl shadow hover:shadow-lg transition flex flex-col"
            >
              <PerfumeDescriptionHint
                description={perfume.description}
                className="top-3 right-3"
              />

              <div className="w-full h-[220px] sm:h-[240px] md:h-[250px] overflow-hidden rounded-xl mb-4">
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

                <div className="flex items-center gap-3">
                  <button
                    className={`flex-1 py-3 rounded-full font-medium transition-all duration-300 ${
                      isAdded[perfume.id] === "Added"
                        ? "bg-green-600 text-white"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                    onClick={() => {
                      const currentQty = count[perfume.id] ?? 1;
                      addToCart(perfume, currentQty);
                      handleAddedFeedback(perfume.id);
                      setCount((prev) => ({ ...prev, [perfume.id]: 1 }));
                    }}
                  >
                    {isAdded[perfume.id] ?? "Add to cart"}
                  </button>

                  <FaHeart
                    onClick={() => {
                      const currentQty = count[perfume.id] ?? 1;
                      if (isLiked(perfume.id)) {
                        setNotif("Removed from wishlist");
                        removeFromWishStore(perfume.id);
                      } else {
                        addToWishStore(perfume, currentQty);
                        setNotif("Added to wishlist");
                      }
                      toggleLike(perfume.id);
                      setTimeout(() => setNotif(null), 1500);
                    }}
                    className={`w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] cursor-pointer transition ${
                      isLiked(perfume.id)
                        ? "text-red-800 stroke-none"
                        : "text-gray-400 hover:text-red-650 stroke-none"
                    } ${animating[perfume.id] ? "animate-pop" : ""}`}
                  />
                </div>
              </div>
            </div>
            </motion.div>
          ))}
        </div>
        )}
      </section>

      {notif && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-black text-white px-6 py-3 rounded-full shadow-lg animate-in fade-in slide-in-from-bottom-5">
          {notif}
        </div>
      )}
    </div>
  );
};

export default Perfumes;