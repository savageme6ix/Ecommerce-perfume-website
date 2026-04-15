import { useState } from "react";
import type { Perfume } from "./types";

interface FeaturedCollectionProps {
  perfumes: Perfume[];
}
const FeaturedCollection = ({ perfumes }: FeaturedCollectionProps) => {
  const [count, setCount] = useState<Record<number, number>>({});
  const [isAdded, setisAdded] = useState<Record<number, string>>({});

  function added(id: number): void {
    setisAdded((prev) => ({ ...prev, [id]: "Added" }));
    setTimeout(() => {
      setisAdded((prev) => ({ ...prev, [id]: "Add to cart" }));
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
        {perfumes.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
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
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
                onClick={() => {
                  added(item.id);
                  if (count[item.id] > 1) {
                    setCount((prev) => ({ ...prev, [item.id]: 1 }));
                  }
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
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          View Full Collection
        </button>
      </div>
    </section>
  );
};

export default FeaturedCollection;
