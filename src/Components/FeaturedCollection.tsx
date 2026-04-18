import { useState, useRef } from "react";
import type { Perfume } from "../types";
import { useCartStore } from "../store/useCartStore";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { usewishStore } from "../store/useWishStore";
import { PerfumeDescriptionHint } from "./PerfumeDescriptionHint";

interface FeaturedCollectionProps {
  perfumes: Perfume[];
}
const FeaturedCollection = ({ perfumes }: FeaturedCollectionProps) => {
  const [count, setCount] = useState<Record<number, number>>({});
  const [isAdded, setisAdded] = useState<Record<number, string>>({});
  const [animating, setAnimating] = useState<Record<number, boolean>>({});
  const [notif, setNotif] = useState<string | null>(null);
  const { addToWishStore, removeFromWishStore , wish} = usewishStore();
  const timeoutRefs = useRef<{ [key: number]:  ReturnType<typeof setTimeout> }>({});

  const isLiked = (id:number) => wish.some((w) => w.id === id);

  function toggleLike(id: number): void {
    setAnimating((prev) => ({ ...prev, [id]: true }));

    setTimeout(() => {
      setAnimating((prev) => ({ ...prev, [id]: false }));
    }, 250);
  }

  const addToCart = useCartStore((state) => state.addToCart);

  function added(id: number): void {
    if (timeoutRefs.current[id]) {
    clearTimeout(timeoutRefs.current[id]);
  }
    setisAdded((prev) => ({ ...prev, [id]: "Added" }));
    timeoutRefs.current[id] = setTimeout(() => {
    setisAdded((prev) => ({ ...prev, [id]: "Add to cart" }));
    delete timeoutRefs.current[id]; // Clean up ref
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
    <section className="py-16 bg-[#F5F5F0] text-center">
      <p className="text-sm tracking-widest text-gray-500 mb-2">
        OUR COLLECTION
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Discover Your Signature Scent
      </h2>
      <p className="max-w-[500px] mx-auto text-gray-600 mb-12">
        A curated selection of our most loved fragrances — crafted to elevate
        your everyday presence.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {perfumes.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="relative bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
            <PerfumeDescriptionHint
              description={item.description}
              className="top-3 right-3"
            />
            <div className="w-full h-[250px] overflow-hidden rounded-xl mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-gray-500 text-sm">${item.price}</p>

            <div className="flex items-center justify-evenly">
              <button
                className={`px-6 py-3 mt-3 rounded-full transition w-[150px] ${
                  isAdded[item.id] === "Added"
                    ? "bg-green-500 text-white"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
                onClick={() => {
                  const currentQty = count[item.id] ?? 1;
                  // Pass both the item AND the chosen quantity to the store
                  addToCart(item, currentQty);
                  added(item.id);
                  setCount((prev) => ({ ...prev, [item.id]: 1 }));
                }}
              >
                {isAdded[item.id] ?? "Add to cart"}
              </button>
              {/* Quantity Controls */}
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => decreaseCount(item.id)}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                  -
                </button>

                <span className="font-medium">{count[item.id] ?? 1}</span>

                <button
                  onClick={() => increaseCount(item.id)}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <FaHeart
                onClick={() => {
                const currentQty = count[item.id] ?? 1;

                if (isLiked(item.id)) {
                  setNotif("Removed from wishlist");
                  removeFromWishStore(item.id)
                } else {
                  addToWishStore(item, currentQty);
                  setNotif("Added to wishlist");
                }
                toggleLike(item.id);
                setTimeout(() => setNotif(null), 1500);
              }}

                className={`w-[30px] h-[30px] cursor-pointer transition ${
                  isLiked(item.id)
                    ? "text-red-800 stroke-none"
                    : "text-gray-400 hover:text-red-650 stroke-none"
                }  ${animating[item.id] ? "animate-pop" : ""} `}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Link
          to="/perfumes"
          className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          View Full Collection
        </Link>
      </div>
      {notif && (
        <div className="fixed bottom-6 right-6 bg-black text-white px-6 py-3 rounded-full shadow-lg animate-in fade-in slide-in-from-bottom-5">
          {notif}
        </div>
      )}
    </section>
  );
};

export default FeaturedCollection;
