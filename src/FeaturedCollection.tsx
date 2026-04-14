
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
        <img src="/perfume1.jpg" className="rounded-xl mb-4" />
        <h3 className="font-medium">Midnight Oud</h3>
        <p className="text-gray-500 text-sm">$120</p>
    </div>

    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
        <img src="/perfume2.jpg" className="rounded-xl mb-4" />
        <h3 className="font-medium">Golden Bloom</h3>
        <p className="text-gray-500 text-sm">$95</p>
    </div>

    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
        <img src="/perfume3.jpg" className="rounded-xl mb-4" />
        <h3 className="font-medium">Velvet Mist</h3>
        <p className="text-gray-500 text-sm">$110</p>
    </div>

    </div>
  </section>
  )
}

export default FeaturedCollection