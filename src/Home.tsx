import Navbar from "./Navbar"
const Home = () => {
  return (
    <main >
        <Navbar />
        <div className="w-full h-[550px] mt-[2px] relative flex items-center justify-center overflow-hidden bg-[#F5F5F0]">
            <h1 className="font-body text-5xl text-center z-10 w-[500px]">
                <span className="text-[red]">Hand</span>crafted in small batches using the world's <span className="text-[gold]">finest</span> botanical oils. Welcome to luxury you can actually wear"
            </h1>

            <img src="/sunDrawing.jpg"
              alt="image"
              className="shadow-xl hover:scale-105 transition-transform duration-300 w-[300px] absolute top-10 left-20 rotate-[-12deg] z-0 opacity-100 rounded-2xl max-lg:rotate-[2deg] left-[15px]"
            />
            <img src="/happy.jpg"
              alt="image"
              className="shadow-xl animate-in fade-in zoom-in duration-500 hover:scale-105 transition-transform duration-300 w-[300px] absolute bottom-20 right-10 rotate-[8deg] z-20 opacity-100 rounded-2xl max-lg:z-0 rotate-[12deg]"
            />
            <img src="/blur.jpg"
              alt="image"
              className="shadow-xl animate-in fade-in zoom-in duration-500 hover:scale-105 transition-transform duration-300 w-[300px] absolute bottom-80 right-10 rotate-[0deg] z-0 opacity-100 rounded-2xl max-lg:opacity-70"
            />
            <img src="/heart.jpg"
              alt="image"
              className="shadow-xl animate-in fade-in zoom-in duration-500 hover:scale-105 transition-transform duration-300 w-[300px] absolute top-1/2 left-1/3 rotate-[-25deg] z-0 opacity-40 rounded-2xl max-lg:opacity-0"
            />
        </div>
    </main>
  )
}

export default Home