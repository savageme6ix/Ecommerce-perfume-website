import { supabase } from "./lib/supabase";
import { useState, useEffect } from "react";
import type { Perfume } from "./types";
import Navbar from "./Navbar";

const Perfumes = () => {
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);

  useEffect(() => {
    const fetchPerfumes = async () => {
      const { data, error } = await supabase.from("Perfumes").select("*");
      if (data) setPerfumes(data);
      if (error) console.error("Error fetching:", error);
    };

    fetchPerfumes();
  }, []);

  return (
    <div>
      <Navbar />

      <section className="bg-[#F5F5F0] min-h-screen px-6 md:px-12 lg:px-20 py-12">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-gray-500 mb-2">
            OUR COLLECTION
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Explore Our Perfumes
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {perfumes.map((perfume) => (
            <div
              key={perfume.id}
              className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition flex flex-col"
            >
              
              {/* Image */}
              <div className="w-full h-[250px] overflow-hidden rounded-xl mb-4">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Info */}
              <h3 className="font-medium text-lg">{perfume.name}</h3>
              <p className="text-gray-500 text-sm mb-1">
                {perfume.brand}
              </p>
              <p className="text-gray-800 font-semibold mb-3">
                ${perfume.price}
              </p>

              {/* Button */}
              <button className="mt-auto px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                Add to cart
              </button>
            </div>
          ))}

        </div>

      </section>
    </div>
  );
};

export default Perfumes;