import Navbar from "./Navbar";

const Checkout = () => {
  return (
    <div>
      <Navbar />

      <section className="bg-[#F5F5F0] min-h-screen px-6 md:px-12 lg:px-20 py-12 flex justify-center">
        
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg p-8 md:p-12">
          
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
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
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
              type="submit"
              className="md:col-span-2 w-full py-4 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition"
            >
              Buy Product
            </button>

          </form>
        </div>

      </section>
    </div>
  );
};

export default Checkout;