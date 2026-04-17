import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <Navbar />

      <section className="bg-[#F5F5F0] px-6 md:px-12 lg:px-20 py-16">
        
        {/* Hero */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            About 6ix Essence
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            More than fragrance — we craft identity, emotion, and presence.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="w-full h-[350px] md:h-[450px] overflow-hidden rounded-3xl shadow-lg">
            <img
              src="/bottle1.jpeg"
              alt="about"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              6ix Essence was born from a simple idea — that fragrance should do
              more than just smell good. It should speak. It should introduce you
              before you even say a word.
            </p>

            <p>
              Every bottle we create is crafted in small batches using carefully
              selected botanical oils, designed to evolve throughout the day and
              leave a lasting impression long after you've left the room.
            </p>

            <p>
              We don’t follow trends. We create timeless scents that feel
              personal, intimate, and unmistakably yours.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <div className="p-6 rounded-2xl shadow bg-[#E7E7E0]">
            <h3 className="text-xl font-semibold mb-3">Craftsmanship</h3>
            <p className="text-gray-600 text-sm">
              Each fragrance is carefully blended with precision and intention,
              ensuring quality in every drop.
            </p>
          </div>

          <div className="bg-[#E7E7E0] p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
            <p className="text-gray-600 text-sm">
              We believe scent is personal. Our collections are designed to feel
              unique to you — not mass-produced.
            </p>
          </div>

          <div className="bg-[#E7E7E0] p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Presence</h3>
            <p className="text-gray-600 text-sm">
              A great fragrance doesn’t just exist — it lingers, it speaks, it
              stays with people.
            </p>
          </div>

        </div>

        {/* Closing Section */}
        <div className="max-w-3xl mx-auto text-center mt-20">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At 6ix Essence, we don’t just sell perfumes.  
            <span className="block mt-2 font-semibold">
              We bottle confidence.
            </span>
          </p>
        </div>

      </section>
    </div>
  );
};

export default About;