import type { Perfume } from "./types";

interface FeaturedCollectionProps{
  perfumes:Perfume[];
}
const FeaturedCollection = ({perfumes}: FeaturedCollectionProps) => {
    
  return (
 <section className="py-16 bg-[#F5F5F0] text-center">
    <p className="text-sm tracking-widest text-gray-500 mb-2">
        OUR COLLECTION
    </p>
    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Discover Your Signature Scent
    </h2>
    <p className="max-w-[500px] mx-auto text-gray-600 mb-12">
        A curated selection of our most loved fragrances — crafted to elevate your everyday presence.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {perfumes.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
            <div className="w-full h-[250px] overflow-hidden rounded-xl mb-4">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition duration-500" />
            </div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-gray-500 text-sm">${item.price}</p>
            <button className="px-6 py-3 mt-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Add to cart
            </button>
          </div>
        ))}
    </div>
    <div className="mt-10">
    <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
        View Full Collection
    </button>
    </div>
  </section>
  )
}

export default FeaturedCollection