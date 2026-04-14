
const FeaturedCollection = () => {
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
  
    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
        <img src="/bottle1.jpeg" className="rounded-xl mb-4" />
        <h3 className="font-medium">N5 Channel</h3>
        <p className="text-gray-500 text-sm">$120</p>
    </div>

    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
        <img src="/bottle2.jpeg" className="rounded-xl mb-4 h-[300px] w-[400px] object-cover" />
        <h3 className="font-medium">Opus</h3>
        <p className="text-gray-500 text-sm">$95</p>
    </div>

    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
        <img src="/bottle3.jpeg" className="rounded-xl mb-4" />
        <h3 className="font-medium">Gabrielle</h3>
        <p className="text-gray-500 text-sm">$110</p>
    </div>

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